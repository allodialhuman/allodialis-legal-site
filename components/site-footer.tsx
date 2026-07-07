import type { Locale } from '@/lib/i18n'
import { getLocalizedPath } from '@/lib/i18n'

export function SiteFooter({ lang }: { lang: Locale }) {
  return (
    <footer
      className="section-navy text-ivory py-16 mt-auto relative"
      style={{
        borderTop: '1px solid transparent',
        borderImage: 'linear-gradient(90deg, transparent, #C9A75E, transparent) 1',
      }}
    >
      <div className="site-container site-container--5xl text-center space-y-8">
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center border border-gold/40 bg-gold/5 text-gold text-xl shadow-[0_0_24px_-6px_rgba(201,167,94,0.5)]">
          ⚖
        </div>

        <h2 className="font-serif-display text-xl md:text-2xl font-bold tracking-wide text-ivory">
          {lang === 'en' ? 'Allodial Civil Rights Society' : 'Allodiális Polgárjogi Társaság'}
        </h2>

        <p className="text-xs text-cream/60 max-w-3xl mx-auto leading-relaxed font-light">
          {lang === 'en' ? (
            "Allodiális Polgárjogi Társaság is a civil rights protection initiative focusing on child protection, family protection and fundamental rights. The information on this website does not constitute individual legal advice and is not a substitute for legal representation."
          ) : (
            "Az Allodiális Polgárjogi Társaság gyermekvédelmi, családvédelmi és alapjogi fókuszú civil jogvédelmi kezdeményezés. Az oldalon található információk nem minősülnek egyedi jogi tanácsadásnak, és nem helyettesítik az ügyvédi képviseletet."
          )}
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/80">
          <a href={getLocalizedPath('home', lang)} className="hover:text-gold-light transition-colors duration-300">
            {lang === 'en' ? 'Home' : 'Főoldal'}
          </a>
          <a href={getLocalizedPath('about', lang)} className="hover:text-gold-light transition-colors duration-300">
            {lang === 'en' ? 'About the Association' : 'A Társaságról'}
          </a>
          <a href={getLocalizedPath('privacy', lang)} className="hover:text-gold-light transition-colors duration-300">
            {lang === 'en' ? 'Privacy Policy' : 'Adatvédelmi Tájékoztató'}
          </a>
        </div>

        <div className="ornament-divider">
          <span className="text-gold/60 text-xs">✦</span>
        </div>

        {/* Jogvédelem Aktív státuszjelző */}
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          <span className="font-mono-data text-[10px] uppercase tracking-[0.25em] text-cream/50">
            {lang === 'en' ? 'Rights Protection Active' : 'Jogvédelem Aktív'}
          </span>
        </div>

        <p className="text-[10px] uppercase tracking-[0.18em] text-gold/60">
          &copy; 2026 Allodiális Polgárjogi Társaság. {lang === 'en' ? 'All rights reserved.' : 'Minden jog fenntartva.'}
        </p>
      </div>
    </footer>
  )
}
