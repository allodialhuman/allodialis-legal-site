interface TeamSectionProps {
  lang: string
}

export function TeamSection({ lang }: TeamSectionProps) {
  const isEn = lang === 'en'

  return (
    <section id="kik-vagyunk" className="py-24 md:py-32 section-navy border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Members of the Association' : 'A társaság tagjai'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Who is behind the Association?' : 'Kik állnak a társaság mögött?'}
          </h2>
          <p className="text-cream/60 text-sm md:text-base mt-4 font-light font-sans">
            {isEn 
              ? 'Dedicated founders, members of the leadership team and professional contributors take part in the work of Allódiális Polgárjogi Társaság.'
              : 'Az Allódiális Polgárjogi Társaság munkájában elkötelezett alapítók, vezetőségi tagok és szakmai közreműködők vesznek részt.'
            }
          </p>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        {/* Alapítók */}
        <div className="mb-14 fade-up">
          <h3 className="font-serif-display text-xl font-bold text-ivory mb-8 text-center">
            {isEn ? 'Founders' : 'Alapítók'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="premium-card p-8 rounded-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center border border-gold/30 bg-gold/5 text-gold font-serif-display text-lg font-bold shadow-[0_0_18px_-6px_rgba(201,167,94,0.5)]">
                FB
              </div>
              <h4 className="font-serif-display text-lg font-bold text-ivory">Fodor Bálint</h4>
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-semibold mt-2 font-mono-data">
                {isEn ? 'Founder' : 'Alapító'}
              </p>
            </div>
            <div className="premium-card p-8 rounded-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center border border-gold/30 bg-gold/5 text-gold font-serif-display text-lg font-bold shadow-[0_0_18px_-6px_rgba(201,167,94,0.5)]">
                TR
              </div>
              <h4 className="font-serif-display text-lg font-bold text-ivory">Dr. Tiborc Richárd</h4>
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-semibold mt-2 font-mono-data">
                {isEn ? 'Founder' : 'Alapító'}
              </p>
            </div>
          </div>
        </div>

        {/* Vezetőség */}
        <div className="fade-up" style={{ transitionDelay: '0.1s' }}>
          <h3 className="font-serif-display text-xl font-bold text-ivory mb-8 text-center">
            {isEn ? 'Leadership and Professional Contributors' : 'Vezetőség és szakmai közreműködők'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="premium-card p-6 rounded-sm text-center">
              <p className="font-semibold text-ivory text-sm md:text-base">Fodor Bálint</p>
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-semibold mt-2 font-mono-data">
                {isEn ? 'human rights defender' : 'emberi jogi jogvédő'}
              </p>
            </div>
            <div className="premium-card p-6 rounded-sm text-center">
              <p className="font-semibold text-ivory text-sm md:text-base">Dr. Tiborc Richárd</p>
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-semibold mt-2 font-mono-data font-sans">
                {isEn ? 'legal professional' : 'jogász'}
              </p>
            </div>
            <div className="premium-card p-6 rounded-sm text-center">
              <p className="font-semibold text-ivory text-sm md:text-base">Baranyi Gábor</p>
              <p className="text-[11px] text-gold uppercase tracking-[0.2em] font-semibold mt-2 font-mono-data">
                {isEn ? 'human rights defender' : 'emberi jogi jogvédő'}
              </p>
            </div>
          </div>
        </div>

        {/* Közösségi vízió */}
        <div
          className="fade-up mt-14 text-center max-w-2xl mx-auto border-t border-gold/15 pt-10"
          style={{ transitionDelay: '0.2s' }}
        >
          <p className="font-serif-display text-cream/85 text-base md:text-lg font-light italic leading-relaxed">
            {isEn
              ? '"Our aim is to build a rights protection community in which affected people, experts, legal professionals, civil society members and supporters can work together to protect families, children and fundamental human rights."'
              : '„A célunk egy olyan jogvédelmi közösség építése, amelyben az érintettek, szakértők, jogászok, civilek és támogatók közösen tudnak dolgozni a családok, gyermekek és alapvető emberi jogok védelméért.”'
            }
          </p>
        </div>
      </div>
    </section>
  )
}
