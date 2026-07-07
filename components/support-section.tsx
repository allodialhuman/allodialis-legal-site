interface SupportSectionProps {
  lang: string
}

export function SupportSection({ lang }: SupportSectionProps) {
  const isEn = lang === 'en'

  return (
    <section id="tamogatas" className="deferred-section py-24 md:py-32 section-navy border-b border-gold/10 relative overflow-hidden" data-motion-scope>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,167,94,0.06) 0%, transparent 65%)' }}
      />
      <div className="site-container site-container--5xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Support' : 'Támogatás'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Support Our Rights Protection Work' : 'Támogasd a jogvédelmi munkát'}
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="fade-up premium-card ornate-frame p-8 md:p-12 rounded-sm max-w-3xl mx-auto space-y-8">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <p className="text-cream/80 text-sm md:text-base leading-relaxed font-light text-center font-sans">
            {isEn ? (
              "Rights protection work requires time, expertise, organisation and sustained work behind the scenes. Donations enable Allodiális Polgárjogi Társaság to provide information, case assessments, guidance on protecting rights and professional support to more affected families."
            ) : (
              "A jogvédelmi munka időt, szakértelmet, szervezést és folyamatos háttérmunkát igényel. A támogatások segítenek abban, hogy az Allodiális Polgárjogi Társaság több érintett családnak tudjon tájékoztatást, ügyértékelést, jogvédelmi irányt és szakmai hátteret biztosítani."
            )}
          </p>

          {/* Kampány célok */}
          <div
            className="p-6 rounded-sm border border-gold/25 max-w-xl mx-auto space-y-4 font-sans font-light"
            style={{ background: 'linear-gradient(160deg, rgba(201,167,94,0.06), rgba(201,167,94,0.015))' }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-ivory text-center mb-2 font-mono-data">
              {isEn ? "The current fundraiser's priority aims:" : 'A mostani gyűjtés kiemelt céljai:'}
            </p>
            <ul className="space-y-3.5 text-cream/90 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base mt-0.5">✓</span>
                <span>
                  <strong className="text-ivory">
                    {isEn ? 'Legal protection for children and parents' : 'Gyermekek és szülők jogi védelme'}
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base mt-0.5">✓</span>
                <span>
                  <strong className="text-ivory">
                    {isEn ? 'Effective action regarding mandatory vaccination systems' : 'Hatékony fellépés a kötelező oltási rendszerekkel szemben'}
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold text-base mt-0.5">✓</span>
                <span>
                  <strong className="text-ivory">
                    {isEn ? 'Building a professional legal framework with international reach' : 'Nemzetközileg felépített, szakmai jogi háttér megteremtése'}
                  </strong>
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center space-y-5 pt-4">
            <p className="text-[11px] text-cream/50 uppercase tracking-[0.18em] font-semibold font-mono-data">
              {isEn ? 'You can make your donation through the following official platform:' : 'Támogatásodat az alábbi hivatalos felületen indíthatod el:'}
            </p>

            <a
              href="https://4fund.com/hu/aufwhv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sovereign btn-gold inline-block px-12 py-5 text-obsidian font-bold uppercase tracking-[0.18em] text-xs rounded-sm relative z-10 font-mono-data"
            >
              <span className="relative z-10">{isEn ? 'Make a One-Off Donation (4Fund)' : 'Egyszeri adományozás (4Fund)'}</span>
            </a>

            <p className="text-[11px] text-cream/40 italic max-w-md mx-auto font-sans font-light">
              {isEn
                ? 'Every contribution matters. Protecting rights begins with ensuring that no one faces a violation alone.'
                : 'Minden támogatás számít. A jogvédelem ott kezdődik, hogy az érintettek nincsenek egyedül.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
