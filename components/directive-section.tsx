interface DirectiveSectionProps {
  lang: string
}

export function DirectiveSection({ lang }: DirectiveSectionProps) {
  const isEn = lang === 'en'

  return (
    <section className="py-24 md:py-32 section-obsidian relative overflow-hidden border-b border-gold/10">
      <div className="absolute inset-0 gold-dots opacity-[0.02] pointer-events-none" />
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,167,94,0.06) 0%, transparent 65%)' }}
      />
      <div className="site-container site-container--5xl relative z-10">
        <div className="fade-up ornate-frame premium-card p-8 md:p-14 rounded-sm space-y-8">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <div className="space-y-3 text-center md:text-left">
            <span className="text-[11px] font-bold text-gold uppercase tracking-[0.25em] block font-mono-data">
              {isEn ? 'Priority Area' : 'Kiemelt jogvédelmi irány'}
            </span>
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-ivory">
              {isEn ? 'A Key Focus of Our Rights Protection Work' : 'A jogvédelmi munka kiemelt fókuszterülete'}
            </h2>
            <div
              className="w-16 h-[2px] mt-4 mx-auto md:mx-0"
              style={{ background: 'linear-gradient(90deg, #E8CD8F, #A3803B)' }}
            />
          </div>

          <div className="space-y-6 text-cream/85 text-sm md:text-base leading-relaxed font-light font-sans">
            <p>
              {isEn ? (
                <>
                  One of the principal aims of Allódiális Polgárjogi Társaság is the{' '}
                  <strong className="gold-gradient-text font-semibold">legal protection of children and parents</strong>.
                </>
              ) : (
                <>
                  Az Allódiális Polgárjogi Társaság egyik kiemelt feladata és célkitűzése a{' '}
                  <strong className="gold-gradient-text font-semibold">gyermekek és a szülők jogi védelme</strong>.
                </>
              )}
            </p>
            <p>
              {isEn
                ? "We pay particular attention to cases in which families are left vulnerable in their dealings with healthcare, educational or public authority systems."
                : "Különös figyelmet fordítunk azokra a helyzetekre, amelyekben a családok kiszolgáltatottá válnak az egészségügyi, oktatási vagy hatósági rendszerekkel szemben."
              }
            </p>
            <p className="relative bg-ivory/[0.03] p-6 italic text-gold/90 font-normal rounded-r-sm border-l-2 border-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              {isEn
                ? '"We consider it important to examine professionally the rule-of-law, fundamental rights and parental decision-making issues associated with mandatory vaccination systems, and to build a legal framework that is meaningful at international level."'
                : '„Kiemelten fontosnak tartjuk a kötelező oltási rendszerekkel kapcsolatos jogállami, alapjogi és szülői döntési kérdések szakmai vizsgálatát, és egy nemzetközi szinten is értelmezhető jogi háttér felépítését.”'
              }
            </p>
            <p>
              {isEn
                ? "Our aim is not to create fear, but to promote legal awareness, protect parental rights, respect human dignity and carry out professionally grounded rights protection work."
                : "Célunk nem a félelemkeltés, hanem a jogtudatosság növelése, a szülői jogok védelme, az emberi méltóság tiszteletben tartása és a szakmailag megalapozott jogvédelmi tevékenység ellátása."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
