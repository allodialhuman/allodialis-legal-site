const rightsItemsHu = [
  'a családok védelmében,',
  'a gyermekek érdekeinek képviseletében,',
  'az egészségügyi önrendelkezésben,',
  'az oktatási helyzetekben,',
  'a hatósági eljárásokban,',
  'a szülői döntések tiszteletben tartásában,',
  'a szólásszabadságban,',
  'az alapvető emberi méltóság védelmében.',
]

const rightsItemsEn = [
  'in protecting families,',
  'in representing the interests of children,',
  'in medical autonomy,',
  'in educational settings,',
  'in proceedings before public authorities,',
  'in respecting parental decisions,',
  'in freedom of expression,',
  'in protecting fundamental human dignity.',
]

interface WhySectionProps {
  lang: string
}

export function WhySection({ lang }: WhySectionProps) {
  const isEn = lang === 'en'
  const rightsItems = isEn ? rightsItemsEn : rightsItemsHu

  return (
    <section id="miert" className="py-24 md:py-32 section-obsidian border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Why was the Association established?' : 'Miért jött létre a társaság?'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory leading-snug mt-4">
            {isEn
              ? 'Too many people are left alone when their fundamental rights are violated.'
              : 'Túl sok ember marad egyedül akkor, amikor alapvető jogai sérülnek.'
            }
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <p className="fade-up text-cream/75 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16 font-light font-sans">
          {isEn
            ? "Many families, parents and children face official procedures, decisions by public authorities or institutional practices that are difficult to understand, distressing and leave them vulnerable."
            : "Sok család, szülő és gyermek olyan helyzetbe kerül, ahol a hivatalos eljárások, hatósági döntések vagy intézményi gyakorlatok nehezen érthetők, nyomasztók és kiszolgáltatottá teszik az érintetteket."
          }
        </p>

        <div className="fade-up premium-card ornate-frame rounded-sm p-8 md:p-12">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <h3 className="font-serif-display text-lg md:text-xl font-semibold text-ivory mb-10 text-center">
            {isEn
              ? "Human rights are not abstract legal concepts. They are present in everyday life:"
              : "Az emberi jogok nem elvont jogi fogalmak. A mindennapi életben jelennek meg:"
            }
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {rightsItems.map((item, i) => (
              <div
                key={item}
                className="fade-up flex items-start gap-4"
                style={i > 0 ? { transitionDelay: `${(i * 0.04).toFixed(2)}s` } : undefined}
              >
                <span className="num-badge w-9 h-9 rounded-full text-gold flex items-center justify-center text-[11px] font-mono-data font-bold shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-cream/85 text-sm md:text-base leading-relaxed pt-1.5 font-sans font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="fade-up text-cream/80 text-base leading-relaxed text-center max-w-3xl mx-auto mt-12 font-light font-sans">
          {isEn
            ? "Allódiális Polgárjogi Társaság aims to ensure that people are not left alone when they need information, a case assessment, possible avenues for protecting their rights or a point of contact for professional help."
            : "Az Allódiális Polgárjogi Társaság célja, hogy az érintettek ne maradjanak magukra, amikor tájékozódásra, ügyértékelésre, jogvédelmi irányokra vagy szakmai segítséghez vezető kapcsolódási pontra van szükségük."
          }
        </p>
      </div>
    </section>
  )
}
