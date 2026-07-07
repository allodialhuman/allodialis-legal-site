const servicesHu = [
  {
    title: 'Ügyek előzetes áttekintése',
    description:
      'Megnézzük, hogy az adott helyzet milyen emberi jogi, polgárjogi vagy alapjogi kérdéseket vethet fel.',
  },
  {
    title: 'Dokumentumok és események',
    description:
      'Segítünk átgondolni, milyen tények, döntések, iratok, határidők és előzmények lehetnek fontosak az ügy megértéséhez.',
  },
  {
    title: 'Jogvédelmi utak feltárása',
    description:
      'Megmutatjuk, milyen irányok merülhetnek fel: tájékoztatás, panasz, jogi konzultáció, ügyvédhez fordulás, civil támogatás vagy szélesebb közösségi ügyépítés.',
  },
  {
    title: 'Kapcsolódás szakemberekhez',
    description:
      'A társaság nem vállal minden ügyben jogi képviseletet. Amennyiben indokolt, segítünk abban, hogy az ügy megfelelő jogi vagy szakmai irányba kerüljön.',
  },
  {
    title: 'Jogtudatosító munka',
    description:
      'Célunk, hogy közérthető anyagokkal, tájékoztatással és szakmai háttérrel segítsük az embereket jogaik megértésében.',
  },
  {
    title: 'Humanitárius segítség',
    description:
      'Nemcsak ügyeket látunk, hanem embereket, családokat és kiszolgáltatott élethelyzeteket. Lehetőségeink szerint támogatjuk azokat, akik segítségre szorulnak.',
  },
]

const servicesEn = [
  {
    title: 'Preliminary case review',
    description:
      'We consider what human rights, civil rights or fundamental rights issues the situation may raise.',
  },
  {
    title: 'Documents and events',
    description:
      'We help identify the facts, decisions, documents, deadlines and background that may be important to understanding the case.',
  },
  {
    title: 'Exploring avenues for protecting your rights',
    description:
      'We outline possible avenues: information, a complaint, legal consultation, contacting a lawyer, civil support or building a broader community case.',
  },
  {
    title: 'Connecting with professionals',
    description:
      'The Society does not provide legal representation in every case. Where appropriate, we help direct the matter towards suitable legal or professional assistance.',
  },
  {
    title: 'Legal awareness work',
    description:
      'Our aim is to help people understand their rights through accessible materials, information and professional expertise.',
  },
  {
    title: 'Humanitarian assistance',
    description:
      'We see not only cases, but people, families and vulnerable circumstances. Within our means, we support those who need help.',
  },
]

interface ServicesSectionProps {
  lang: string
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const isEn = lang === 'en'
  const services = isEn ? servicesEn : servicesHu

  return (
    <section id="miben" className="py-24 md:py-32 section-obsidian border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Our Role' : 'A mi feladatunk'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'How can we help?' : 'Miben tudunk segíteni?'}
          </h2>
          <p className="text-cream/60 text-sm md:text-base leading-relaxed mt-4 font-light font-sans">
            {isEn 
              ? 'The Society primarily provides information, preliminary case assessments and guidance on protecting your rights.'
              : 'A társaság elsődlegesen tájékoztatást, előzetes ügyértékelést és jogvédelmi iránymutatást nyújt.'
            }
          </p>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="fade-up premium-card p-7 rounded-sm space-y-3"
              style={i > 0 ? { transitionDelay: `${(i * 0.06).toFixed(2)}s` } : undefined}
            >
              <h3 className="font-serif-display font-bold text-ivory text-lg flex items-center gap-3">
                <span className="text-gold text-sm">✦</span> {service.title}
              </h3>
              <p className="text-cream/70 text-sm md:text-base leading-relaxed font-sans font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
