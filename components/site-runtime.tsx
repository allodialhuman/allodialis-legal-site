'use client'

import { useEffect } from 'react'

interface SiteRuntimeProps {
  isHome: boolean
}

export function SiteRuntime({ isHome }: SiteRuntimeProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const progressBar = document.getElementById('scroll-progress')
    const mainNav = document.getElementById('main-nav')
    const mobileMenu = document.getElementById('mobile-menu')
    const mobileMenuButton = document.getElementById('mobile-menu-btn')
    let frameId = 0
    let toastTimer = 0
    let hashTimers: number[] = []

    const updateProgress = () => {
      frameId = 0
      if (!progressBar) return

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0
      progressBar.style.transform = `scaleX(${progress})`
    }

    const requestProgressUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateProgress)
    }

    window.addEventListener('scroll', requestProgressUpdate, { passive: true })
    window.addEventListener('resize', requestProgressUpdate, { passive: true })
    requestProgressUpdate()

    const alignHashTarget = () => {
      hashTimers.forEach((timer) => window.clearTimeout(timer))
      hashTimers = []

      const id = decodeURIComponent(window.location.hash.slice(1))
      const target = id ? document.getElementById(id) : null
      if (!target) return

      const snapToTarget = () => {
        const root = document.documentElement
        const previousBehavior = root.style.scrollBehavior
        root.style.scrollBehavior = 'auto'
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
        window.requestAnimationFrame(() => {
          root.style.scrollBehavior = previousBehavior
        })
      }

      ;[80, 400, 1000, 1800].forEach((delay) => {
        hashTimers.push(
          window.setTimeout(snapToTarget, delay),
        )
      })
    }

    window.addEventListener('hashchange', alignHashTarget)
    if (window.location.hash) alignHashTarget()

    const fadeElements = Array.from(document.querySelectorAll<HTMLElement>('.fade-up')).filter(
      (element) => !element.closest('#hero, .page-hero'),
    )
    let fadeObserver: IntersectionObserver | undefined
    let fadeMutationObserver: MutationObserver | undefined

    if (reducedMotion) {
      fadeElements.forEach((element) => element.classList.add('visible'))
    } else {
      fadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            const element = entry.target as HTMLElement
            element.classList.add('is-animating')
            window.requestAnimationFrame(() => element.classList.add('visible'))
            element.addEventListener('transitionend', () => element.classList.remove('is-animating'), { once: true })
            fadeObserver?.unobserve(element)
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
      )

      fadeElements.forEach((element) => fadeObserver?.observe(element))

      fadeMutationObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          record.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return

            const candidates = [
              ...(node.matches('.fade-up') ? [node] : []),
              ...Array.from(node.querySelectorAll<HTMLElement>('.fade-up')),
            ].filter((element) => !element.closest('#hero, .page-hero'))

            candidates.forEach((element) => fadeObserver?.observe(element))
          })
        })
      })
      fadeMutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    const motionScopes = Array.from(document.querySelectorAll<HTMLElement>('[data-motion-scope]'))
    const motionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle('motion-active', entry.isIntersecting))
      },
      { rootMargin: '320px 0px', threshold: 0 },
    )
    motionScopes.forEach((scope) => motionObserver.observe(scope))

    let navObserver: IntersectionObserver | undefined
    if (mainNav) {
      if (isHome) {
        const hero = document.getElementById('hero')
        if (hero) {
          navObserver = new IntersectionObserver(
            ([entry]) => {
              mainNav.classList.toggle('nav-solid', !entry.isIntersecting)
              mainNav.classList.toggle('nav-transparent', entry.isIntersecting)
            },
            { threshold: 0.05 },
          )
          navObserver.observe(hero)
        }
      } else {
        mainNav.classList.add('nav-solid')
        mainNav.classList.remove('nav-transparent')
      }
    }

    const setMenuOpen = (open: boolean) => {
      mobileMenu?.classList.toggle('active', open)
      mobileMenu?.setAttribute('aria-hidden', String(!open))
      mobileMenuButton?.setAttribute('aria-expanded', String(open))
      document.body.classList.toggle('menu-open', open)

      if (!open) mobileMenuButton?.focus()
    }

    const copyEmail = async (button: HTMLElement) => {
      const email = button.dataset.copyEmail
      if (!email) return

      try {
        await navigator.clipboard.writeText(email)
      } catch {
        const input = document.createElement('input')
        input.value = email
        input.setAttribute('readonly', '')
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        input.remove()
      }

      const toast = document.getElementById('copy-toast')
      toast?.classList.add('copy-toast-visible')
      window.clearTimeout(toastTimer)
      toastTimer = window.setTimeout(() => toast?.classList.remove('copy-toast-visible'), 3000)
    }

    const toggleFaq = (button: HTMLElement) => {
      const item = button.closest<HTMLElement>('[data-faq-item]')
      const faq = button.closest<HTMLElement>('[data-faq]')
      if (!item || !faq) return

      const shouldOpen = button.getAttribute('aria-expanded') !== 'true'
      faq.querySelectorAll<HTMLElement>('[data-faq-item]').forEach((candidate) => {
        const candidateButton = candidate.querySelector<HTMLElement>('[data-faq-toggle]')
        const candidateAnswer = candidate.querySelector<HTMLElement>('[data-faq-answer]')
        const candidateArrow = candidate.querySelector<HTMLElement>('.faq-arrow')
        const open = candidate === item && shouldOpen

        candidateButton?.setAttribute('aria-expanded', String(open))
        candidateAnswer?.classList.toggle('open', open)
        candidateAnswer?.setAttribute('aria-hidden', String(!open))
        candidateArrow?.classList.toggle('rotated', open)
      })
    }

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const languageLink = target.closest<HTMLAnchorElement>('[data-language-link]')
      if (languageLink && window.location.hash) {
        event.preventDefault()
        window.location.assign(`${languageLink.href}${window.location.hash}`)
        return
      }

      const actionTarget = target.closest<HTMLElement>('[data-site-action]')
      const action = actionTarget?.dataset.siteAction
      if (action === 'menu-open') setMenuOpen(true)
      if (action === 'menu-close') setMenuOpen(false)

      const faqButton = target.closest<HTMLElement>('[data-faq-toggle]')
      if (faqButton) toggleFaq(faqButton)

      const copyButton = target.closest<HTMLElement>('[data-copy-email]')
      if (copyButton) void copyEmail(copyButton)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenu?.classList.contains('active')) setMenuOpen(false)
    }

    document.addEventListener('click', onDocumentClick)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', requestProgressUpdate)
      window.removeEventListener('resize', requestProgressUpdate)
      window.removeEventListener('hashchange', alignHashTarget)
      document.removeEventListener('click', onDocumentClick)
      document.removeEventListener('keydown', onKeyDown)
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(toastTimer)
      hashTimers.forEach((timer) => window.clearTimeout(timer))
      fadeObserver?.disconnect()
      fadeMutationObserver?.disconnect()
      motionObserver.disconnect()
      navObserver?.disconnect()
      document.body.classList.remove('menu-open')
    }
  }, [isHome])

  return null
}
