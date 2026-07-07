'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinksHu = [
  { href: '/#miert', label: 'Miért?' },
  { href: '/#ugyek', label: 'Ügyek' },
  { href: '/#miben', label: 'Segítség' },
  { href: '/#hogyan', label: 'Működés' },
  { href: '/#kik-vagyunk', label: 'Kik vagyunk?' },
]

const navLinksEn = [
  { href: '/#miert', label: 'Why?' },
  { href: '/#ugyek', label: 'Cases' },
  { href: '/#miben', label: 'How We Help' },
  { href: '/#hogyan', label: 'Process' },
  { href: '/#kik-vagyunk', label: 'Who We Are' },
]

export function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState('hu')
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )lang=([^;]*)/)
    if (match) {
      setLang(match[1])
    }
  }, [])

  const changeLanguage = (newLang: string) => {
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`
    window.location.reload()
  }

  const navLinks = lang === 'en' ? navLinksEn : navLinksHu

  useEffect(() => {
    if (!isHome) {
      setSolid(true)
      return
    }

    const heroSection = document.getElementById('hero')
    if (!heroSection) return

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setSolid(!entry.isIntersecting)
        })
      },
      { threshold: 0.05 },
    )

    navObserver.observe(heroSection)
    return () => navObserver.disconnect()
  }, [isHome])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMobileMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${solid ? 'nav-solid' : 'nav-transparent'}`}
      >
        <div className="site-container py-4 flex items-center justify-between gap-4">
          <a
            href="/"
            aria-label={lang === 'en' ? 'Home' : 'Főoldal'}
            className="font-serif-display text-lg md:text-xl font-bold tracking-wide text-ivory hover:text-gold transition-colors duration-300 flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-full flex items-center justify-center border border-gold/40 bg-gold/5 text-gold text-lg shadow-[0_0_18px_-4px_rgba(201,167,94,0.5)]">
              ⚖
            </span>
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Allodial Civil Rights Association' : 'Allódiális Polgárjogi Társaság'}
            </span>
            <span className="sm:hidden">APT</span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/65"
            aria-label={lang === 'en' ? 'Main navigation' : 'Fő navigáció'}
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link hover:text-ivory transition-colors">
                {link.label}
              </a>
            ))}
            <a
              href="/#tamogatas"
              className="px-5 py-2.5 rounded-sm text-gold border border-gold/40 bg-gold/5 hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-[0_0_20px_-8px_rgba(201,167,94,0.4)]"
            >
              {lang === 'en' ? 'Donate' : 'Támogatás'}
            </a>

            {/* Language switcher flags */}
            <div className="flex items-center gap-2.5 border-l border-gold/25 pl-4 ml-2">
              <button
                onClick={() => changeLanguage('hu')}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-base leading-none cursor-pointer ${lang === 'hu' ? 'scale-110 opacity-100 filter drop-shadow-[0_0_8px_rgba(201,167,94,0.6)]' : 'opacity-50 hover:opacity-85'}`}
                title="Magyar"
              >
                🇭🇺
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-base leading-none cursor-pointer ${lang === 'en' ? 'scale-110 opacity-100 filter drop-shadow-[0_0_8px_rgba(201,167,94,0.6)]' : 'opacity-50 hover:opacity-85'}`}
                title="English"
              >
                🇬🇧
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden text-ivory p-2"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div id="mobile-menu" className={`mobile-menu-overlay fixed inset-0 z-[60] ${menuOpen ? 'active' : ''}`}>
        <div
          className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
          id="mobile-menu-backdrop"
          onClick={closeMobileMenu}
        />
        <div className="mobile-menu-panel absolute top-0 right-0 h-full w-[min(18rem,calc(100vw-2rem))] max-w-full bg-deep-navy border-l border-gold/25 flex flex-col p-8 shadow-[-20px_0_60px_rgba(0,0,0,0.6)]">
          <button
            id="mobile-menu-close"
            className="self-end text-ivory/60 hover:text-gold mb-10 transition-colors"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col gap-6 text-sm font-semibold uppercase tracking-[0.15em] text-ivory/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link hover:text-gold transition-colors"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <div className="w-10 h-px bg-gold/40 my-2" />
            <a
              href="/#tamogatas"
              className="mobile-nav-link text-gold hover:text-gold-light transition-colors"
              onClick={closeMobileMenu}
            >
              {lang === 'en' ? 'Donate' : 'Támogatás'}
            </a>

            <div className="w-10 h-px bg-gold/40 my-2" />
            <div className="flex items-center gap-4 py-1">
              <button
                onClick={() => changeLanguage('hu')}
                className={`flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer ${lang === 'hu' ? 'text-gold font-bold' : 'text-ivory/60'}`}
              >
                <span className="text-base">🇭🇺</span> HU
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer ${lang === 'en' ? 'text-gold font-bold' : 'text-ivory/60'}`}
              >
                <span className="text-base">🇬🇧</span> EN
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
