interface JoinSectionProps {
  lang: string
}

export function JoinSection({ lang }: JoinSectionProps) {
  const isEn = lang === 'en'

  return (
    <section className="deferred-section py-24 md:py-32 section-obsidian border-b border-gold/10" data-motion-scope>
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Our Shared Responsibility' : 'Közös felelősségünk'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Get Involved in Our Work' : 'Kapcsolódj be a munkánkba'}
          </h2>
          <p className="text-cream/60 text-sm md:text-base mt-4 font-light font-sans">
            {isEn 
              ? 'Human rights and civil rights work is not the task of one person. It takes affected people, legal professionals, experts, civil society members, volunteers and supporters.'
              : 'Az emberi jogi és polgárjogi jogvédelem nem egyetlen ember feladata. Érintettekre, jogászokra, szakértőkre, civilekre, önkéntesekre és támogatókra van szükség.'
            }
          </p>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="fade-up premium-card p-7 rounded-sm flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-serif-display font-bold text-ivory text-base md:text-lg">
                {isEn ? 'As a professional partner' : 'Szakmai partnerként'}
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed font-sans font-light">
                {isEn 
                  ? "If you are a legal professional, doctor, teacher, social care professional, researcher or work in another field and would like to contribute your expertise to the Society's work."
                  : "Ha jogászként, orvosként, pedagógusként, szociális szakemberként, kutatóként vagy egyéb terület képviselőjeként hozzájárulnál a Társaság munkájához."
                }
              </p>
            </div>
            <a
              href="#kapcsolat"
              className="mt-7 inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-[0.18em] hover-lift font-mono-data"
            >
              {isEn ? 'Get Involved →' : 'Jelentkezem →'}
            </a>
          </div>

          <div
            className="fade-up premium-card p-7 rounded-sm flex flex-col justify-between"
            style={{ transitionDelay: '0.08s' }}
          >
            <div className="space-y-3">
              <h3 className="font-serif-display font-bold text-ivory text-base md:text-lg font-sans">
                {isEn ? 'As a volunteer' : 'Önkéntesként'}
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed font-sans font-light">
                {isEn
                  ? "If you would like to help with organisation, communications, administration, research, community building or other voluntary work."
                  : "Ha szívesen segítenél a szervezésben, kommunikációban, adminisztrációban, kutatásban, közösségépítésben vagy egyéb önkéntes munkákban."
                }
              </p>
            </div>
            <a
              href="#kapcsolat"
              className="mt-7 inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-[0.18em] hover-lift font-mono-data"
            >
              {isEn ? 'Get Involved →' : 'Jelentkezem →'}
            </a>
          </div>

          <div
            className="fade-up premium-card p-7 rounded-sm flex flex-col justify-between"
            style={{ transitionDelay: '0.16s' }}
          >
            <div className="space-y-3">
              <h3 className="font-serif-display font-bold text-ivory text-base md:text-lg">
                {isEn ? 'As a supporter' : 'Támogatóként'}
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed font-sans font-light">
                {isEn
                  ? "If you cannot take part in person but would like to support our rights protection work financially."
                  : "Ha személyesen nem tudsz bekapcsolódni, de anyagilag szívesen támogatnád a jogvédelmi munkát."
                }
              </p>
            </div>
            <a
              href="#tamogatas"
              className="mt-7 inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-[0.18em] hover-lift font-mono-data"
            >
              {isEn ? 'Support Us →' : 'Támogatom →'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
