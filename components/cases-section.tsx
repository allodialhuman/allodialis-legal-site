const casesHu = [
  {
    title: 'Családokat és gyermekeket érintő jogsérelmek',
    description:
      'Ha szülőként vagy családként úgy érzed, hogy egy hatósági, egészségügyi, oktatási vagy intézményi helyzetben sérültek a jogaid, vagy nem kaptál megfelelő tájékoztatást.',
    iconPath:
      'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    title: 'Egészségügyi önrendelkezés',
    description:
      'Ha egészségügyi döntésekkel, kötelező eljárásokkal, szülői döntési joggal, tájékoztatással vagy beleegyezéssel kapcsolatban merül fel jogi vagy emberi jogi kérdés.',
    iconPath: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
  },
  {
    title: 'Oktatási jogsérelmek',
    description:
      'Ha gyermekedet, családodat vagy téged oktatási intézményben ért méltánytalan bánásmód, nyomásgyakorlás, kizárás, hátrányos megkülönböztetés vagy jogsértő eljárás.',
    iconPath: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33l-7.5-5-7.5 5V21',
  },
  {
    title: 'Hatósági és intézményi visszaélések',
    description:
      'Ha úgy érzed, hogy egy hivatal, hatóság, intézmény vagy eljáró személy aránytalanul, jogszerűtlenül vagy méltánytalanul járt el veled szemben.',
    iconPath: 'M12 3v18M3 12h18',
  },
  {
    title: 'Alapjogi és polgárjogi jogsérelmek',
    description:
      'Ha a szólásszabadság, lelkiismereti szabadság, emberi méltóság, családi élet védelme, adatvédelem vagy más alapvető jog sérülését tapasztalod.',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

const casesEn = [
  {
    title: 'Rights violations affecting families and children',
    description:
      'If, as a parent or family, you believe your rights have been violated in dealings with a public authority, healthcare provider, educational body or other institution, or you were not properly informed.',
    iconPath:
      'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    title: 'Medical autonomy',
    description:
      'If a legal or human rights question arises concerning medical decisions, mandatory procedures, parental decision-making rights, information or consent.',
    iconPath: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
  },
  {
    title: 'Rights violations in education',
    description:
      'If you, your child or your family have experienced unfair treatment, undue pressure, exclusion, discrimination or an unlawful procedure in an educational institution.',
    iconPath: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33l-7.5-5-7.5 5V21',
  },
  {
    title: 'Abuse by authorities and institutions',
    description:
      'If you believe that a public office, authority, institution or official has treated you disproportionately, unlawfully or unfairly.',
    iconPath: 'M12 3v18M3 12h18',
  },
  {
    title: 'Fundamental and civil rights violations',
    description:
      'If you experience a violation of freedom of expression, freedom of conscience, human dignity, the protection of family life, data protection or another fundamental right.',
    iconPath:
      'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

interface CasesSectionProps {
  lang: string
}

export function CasesSection({ lang }: CasesSectionProps) {
  const isEn = lang === 'en'
  const cases = isEn ? casesEn : casesHu

  return (
    <section id="ugyek" className="py-24 md:py-32 section-navy border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Areas of Assistance' : 'Segítségnyújtási területek'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'What matters can you contact us about?' : 'Milyen ügyekben kereshetsz minket?'}
          </h2>
          <p className="text-cream/50 text-xs md:text-sm tracking-wide mt-3 font-sans font-light">
            {isEn 
              ? 'We initially accept enquiries in the following areas'
              : 'Első körben az alábbi területeken fogadunk megkereséseket'
            }
          </p>
          <div className="ornament-divider mt-6">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="space-y-5">
          {cases.map((item, i) => (
            <div
              key={item.title}
              className="fade-up premium-card group p-6 md:p-8 rounded-sm"
              style={i > 0 ? { transitionDelay: `${(i * 0.06).toFixed(2)}s` } : undefined}
            >
              <div className="flex items-start gap-5">
                <span className="icon-medallion text-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                  </svg>
                </span>
                <div>
                  <h3 className="font-serif-display text-lg md:text-xl font-bold text-ivory mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-sm md:text-base leading-relaxed font-sans font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
