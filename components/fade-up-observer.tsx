'use client'

import { useEffect } from 'react'

export function FadeUpObserver() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      },
    )

    document.querySelectorAll('.fade-up').forEach((el) => {
      fadeObserver.observe(el)
    })

    return () => fadeObserver.disconnect()
  }, [])

  return null
}
