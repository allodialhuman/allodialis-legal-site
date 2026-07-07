import { SiteRuntime } from '@/components/site-runtime'
import type { Locale, LocalizedRoute } from '@/lib/i18n'
import { getHomeSectionHref, getLocalizedPath } from '@/lib/i18n'

const navLinksHu = [
  { section: 'miert', label: 'Miért?' },
  { section: 'ugyek', label: 'Ügyek' },
  { section: 'miben', label: 'Segítség' },
  { section: 'hogyan', label: 'Működés' },
  { section: 'kik-vagyunk', label: 'Kik vagyunk?' },
]

const navLinksEn = [
  { section: 'miert', label: 'Why?' },
  { section: 'ugyek', label: 'Cases' },
  { section: 'miben', label: 'How We Help' },
  { section: 'hogyan', label: 'Process' },
  { section: 'kik-vagyunk', label: 'Who We Are' },
]

interface SiteHeaderProps {
  lang: Locale
  route: LocalizedRoute
}

export function SiteHeader({ lang, route }: SiteHeaderProps) {
  const isHome = route === 'home'
  const navLinks = (lang === 'en' ? navLinksEn : navLinksHu).map((link) => ({
    ...link,
    href: getHomeSectionHref(lang, link.section),
  }))

  return (
    <>
      <div id="scroll-progress" aria-hidden="true" />

      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${isHome ? 'nav-transparent' : 'nav-solid'}`}
      >
        <div className="site-container py-4 flex items-center justify-between gap-4">
          <a
            href={getLocalizedPath('home', lang)}
            aria-label={lang === 'en' ? 'Home' : 'Főoldal'}
            className="font-serif-display text-lg md:text-xl font-bold tracking-wide text-ivory hover:text-gold transition-colors duration-300 flex items-center gap-3"
          >
            <span className="w-9 h-9 rounded-full flex items-center justify-center border border-gold/40 bg-gold/5 text-gold text-lg shadow-[0_0_18px_-4px_rgba(201,167,94,0.5)]">
              ⚖
            </span>
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Allodial Civil Rights Society' : 'Allodiális Polgárjogi Társaság'}
            </span>
            <span className="sm:hidden">APT</span>
          </a>

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
              href={getHomeSectionHref(lang, 'tamogatas')}
              className="px-5 py-2.5 rounded-sm text-gold border border-gold/40 bg-gold/5 hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-[0_0_20px_-8px_rgba(201,167,94,0.4)]"
            >
              {lang === 'en' ? 'Donate' : 'Támogatás'}
            </a>

            <div className="flex items-center gap-2.5 border-l border-gold/25 pl-4 ml-2">
              <a
                href={getLocalizedPath(route, 'hu')}
                hrefLang="hu-HU"
                aria-label="Magyar"
                aria-current={lang === 'hu' ? 'page' : undefined}
                data-language-link
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-base leading-none cursor-pointer ${lang === 'hu' ? 'scale-110 opacity-100 filter drop-shadow-[0_0_8px_rgba(201,167,94,0.6)]' : 'opacity-50 hover:opacity-85'}`}
                title="Magyar"
              >
                🇭🇺
              </a>
              <a
                href={getLocalizedPath(route, 'en')}
                hrefLang="en"
                aria-label="English"
                aria-current={lang === 'en' ? 'page' : undefined}
                data-language-link
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-base leading-none cursor-pointer ${lang === 'en' ? 'scale-110 opacity-100 filter drop-shadow-[0_0_8px_rgba(201,167,94,0.6)]' : 'opacity-50 hover:opacity-85'}`}
                title="English"
              >
                🇬🇧
              </a>
            </div>
          </nav>

          <button
            id="mobile-menu-btn"
            type="button"
            className="lg:hidden text-ivory p-2"
            aria-label={lang === 'en' ? 'Open menu' : 'Menü megnyitása'}
            aria-controls="mobile-menu"
            aria-expanded="false"
            data-site-action="menu-open"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </header>

      <div id="mobile-menu" className="mobile-menu-overlay fixed inset-0 z-[60]" aria-hidden="true">
        <button
          type="button"
          className="absolute inset-0 w-full bg-obsidian/85 backdrop-blur-md"
          aria-label={lang === 'en' ? 'Close menu' : 'Menü bezárása'}
          data-site-action="menu-close"
        />
        <div className="mobile-menu-panel absolute top-0 right-0 h-full w-[min(18rem,calc(100vw-2rem))] max-w-full bg-deep-navy border-l border-gold/25 flex flex-col p-8 shadow-[-20px_0_60px_rgba(0,0,0,0.6)]">
          <button
            id="mobile-menu-close"
            type="button"
            className="self-end text-ivory/60 hover:text-gold mb-10 transition-colors"
            aria-label={lang === 'en' ? 'Close menu' : 'Menü bezárása'}
            data-site-action="menu-close"
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
                data-site-action="menu-close"
              >
                {link.label}
              </a>
            ))}
            <div className="w-10 h-px bg-gold/40 my-2" />
            <a
              href={getHomeSectionHref(lang, 'tamogatas')}
              className="mobile-nav-link text-gold hover:text-gold-light transition-colors"
              data-site-action="menu-close"
            >
              {lang === 'en' ? 'Donate' : 'Támogatás'}
            </a>

            <div className="w-10 h-px bg-gold/40 my-2" />
            <div className="flex items-center gap-4 py-1">
              <a
                href={getLocalizedPath(route, 'hu')}
                hrefLang="hu-HU"
                aria-current={lang === 'hu' ? 'page' : undefined}
                data-language-link
                className={`flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer ${lang === 'hu' ? 'text-gold font-bold' : 'text-ivory/60'}`}
              >
                <span className="text-base">🇭🇺</span> HU
              </a>
              <a
                href={getLocalizedPath(route, 'en')}
                hrefLang="en"
                aria-current={lang === 'en' ? 'page' : undefined}
                data-language-link
                className={`flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer ${lang === 'en' ? 'text-gold font-bold' : 'text-ivory/60'}`}
              >
                <span className="text-base">🇬🇧</span> EN
              </a>
            </div>
          </nav>
        </div>
      </div>

      <SiteRuntime isHome={isHome} />
    </>
  )
}
