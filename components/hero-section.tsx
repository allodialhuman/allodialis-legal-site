interface HeroSectionProps {
  lang: string
}

export function HeroSection({ lang }: HeroSectionProps) {
  const isEn = lang === 'en'

  return (
    <section
      id="hero"
      className="motion-active relative min-h-screen flex flex-col justify-center items-center section-obsidian overflow-hidden"
      data-motion-scope
    >
      {/* Gold dot texture */}
      <div className="absolute inset-0 gold-dots opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 gold-grid pointer-events-none" />

      {/* Layered animated glows */}
      <div
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none glow-drift"
        style={{ background: 'radial-gradient(circle, rgba(201,167,94,0.08) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none glow-drift-2"
        style={{ background: 'radial-gradient(circle, rgba(60,90,160,0.09) 0%, transparent 65%)' }}
      />

      {/* Central radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(201,167,94,0.09) 0%, transparent 70%)' }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Watermark scale */}
      <div className="hero-watermark">⚖</div>

      <div className="site-container site-container--4xl text-center relative z-10 space-y-9 pt-24">
        {/* Status badge */}
        <div className="fade-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-gold/25 bg-deep-navy/50 backdrop-blur-md shadow-[0_0_30px_-8px_rgba(201,167,94,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          <span className="font-mono-data text-[10px] uppercase tracking-[0.25em] text-gold/90">
            {isEn ? 'Rights Protection Active' : 'Jogvédelem Aktív'}
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="fade-up font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-ivory leading-[1.18] tracking-tight"
          style={{ animationDelay: '0.08s', textShadow: '0 2px 40px rgba(0,0,0,0.5)' }}
        >
          {isEn ? (
            <>
              Human rights and civil rights protection for those whose voices{' '}
              <em className="gold-gradient-text italic">the system fails to hear.</em>
            </>
          ) : (
            <>
              Emberi jogi és polgárjogi védelem azoknak, akiknek a hangját{' '}
              <em className="gold-gradient-text italic">nem hallja meg a rendszer.</em>
            </>
          )}
        </h1>

        {/* Ornamental divider */}
        <div className="fade-up ornament-divider" style={{ animationDelay: '0.16s' }}>
          <span className="text-gold text-sm">✦</span>
        </div>

        {/* Subtitle */}
        <p
          className="fade-up max-w-2xl mx-auto text-cream/75 text-base md:text-lg font-light leading-relaxed"
          style={{ animationDelay: '0.24s' }}
        >
          {isEn 
            ? "Allodiális Polgárjogi Társaság is a registered rights protection association supporting families, parents, children and people whose rights have been violated."
            : "Az Allodiális Polgárjogi Társaság bejegyzett jogvédő egyesület, amely családok, szülők, gyermekek és jogsérelmet elszenvedett emberek támogatásán dolgozik."
          }
        </p>

        {/* CTA buttons */}
        <div
          className="fade-up flex flex-col sm:flex-row justify-center items-center gap-5 pt-4"
          style={{ animationDelay: '0.32s' }}
        >
          <a
            href="#kapcsolat"
            className="btn-sovereign btn-gold w-full sm:w-auto px-10 py-4 text-obsidian font-bold uppercase tracking-[0.18em] text-xs rounded-sm text-center relative z-10"
          >
            <span className="relative z-10">{isEn ? 'Request Help' : 'Segítséget kérek'}</span>
          </a>
          <a
            href="#tamogatas"
            className="btn-sovereign btn-outline w-full sm:w-auto px-10 py-4 text-gold hover:text-gold-light font-semibold uppercase tracking-[0.18em] text-xs rounded-sm text-center"
          >
            {isEn ? 'Support Our Work' : 'Támogatom a munkát'}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow text-gold/50 text-xl">↓</div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0B1322)' }}
      />
    </section>
  )
}
