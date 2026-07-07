const stepsHu = [
  {
    label: '1. Lépés',
    title: 'Írd le röviden az ügyed',
    description:
      'Küldd el nekünk emailben, hogy mi történt, kit érint az ügy, milyen döntés, eljárás vagy jogsérelem miatt keresel segítséget.',
  },
  {
    label: '2. Lépés',
    title: 'Előzetesen áttekintjük a megkeresést',
    description: 'Megnézzük, hogy az ügy milyen emberi jogi, polgárjogi vagy családvédelmi kérdéseket vethet fel.',
  },
  {
    label: '3. Lépés',
    title: 'Tisztázzuk a legfontosabb körülményeket',
    description:
      'Szükség esetén visszakérdezünk, hogy jobban értsük a tényeket, az előzményeket, a határidőket és a rendelkező dokumentumokat.',
  },
  {
    label: '4. Lépés',
    title: 'Javaslatot adunk a következő lépésre',
    description:
      'Ez lehet további tájékozódás, dokumentumok rendszerezése, ügyvédhez fordulás, szakmai konzultáció, civil segítség vagy más jogvédelmi irány.',
  },
  {
    label: '5. Lépés',
    title: 'Szükség esetén szakemberhez irányítunk',
    description:
      'Ha az ügy jogi képviseletet igényel, segíthetünk abban, hogy az érintett megfelelő ügyvédi vagy szakmai segítséget keressen.',
  },
]

const stepsEn = [
  {
    label: 'Step 1',
    title: 'Briefly describe your case',
    description:
      'Email us to explain what happened, who is affected and which decision, procedure or rights violation has led you to seek help.',
  },
  {
    label: 'Step 2',
    title: 'We conduct a preliminary review',
    description: 'We consider what human rights, civil rights or family protection issues the case may raise.',
  },
  {
    label: 'Step 3',
    title: 'We clarify the key circumstances',
    description:
      'Where necessary, we ask follow-up questions to better understand the facts, background, deadlines and relevant documents.',
  },
  {
    label: 'Step 4',
    title: 'We recommend the next step',
    description:
      'This may involve gathering further information, organising documents, contacting a lawyer, professional consultation, civil support or another avenue for protecting your rights.',
  },
  {
    label: 'Step 5',
    title: 'We refer you to a professional if needed',
    description:
      'If the case requires legal representation, we can help the person concerned seek suitable legal or professional assistance.',
  },
]

interface Step {
  label: string
  title: string
  description: string
}

function StepCard({ step }: { step: Step }) {
  return (
    <div className="premium-card p-6 rounded-sm max-w-md w-full">
      <span className="font-mono-data text-[10px] font-bold text-gold uppercase tracking-[0.25em] block mb-2">
        {step.label}
      </span>
      <h4 className="font-serif-display font-bold text-ivory text-base md:text-lg mb-2">{step.title}</h4>
      <p className="text-xs md:text-sm text-cream/75 leading-relaxed font-sans font-light">{step.description}</p>
    </div>
  )
}

interface ProcessSectionProps {
  lang: string
}

export function ProcessSection({ lang }: ProcessSectionProps) {
  const isEn = lang === 'en'
  const steps = isEn ? stepsEn : stepsHu

  return (
    <section id="hogyan" className="py-24 md:py-32 section-obsidian border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'The Process' : 'A folyamat'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'How does requesting help work?' : 'Hogyan működik a segítségkérés?'}
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 md:space-y-16">
          <div className="timeline-line hidden md:block" />

          {/* Mobile line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={step.label}
                className="fade-up flex flex-col md:flex-row items-start md:items-center relative z-10"
                style={i > 0 ? { transitionDelay: `${(i * 0.08).toFixed(2)}s` } : undefined}
              >
                {isLeft ? (
                  <>
                    <div className="flex md:w-1/2 justify-start md:justify-end pr-0 md:pr-10 pl-10 md:pl-0 mb-4 md:mb-0">
                      <StepCard step={step} />
                    </div>
                    <div className="timeline-node absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-[11px] text-gold font-mono-data font-bold">
                      {i + 1}
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2" />
                    <div className="timeline-node absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-[11px] text-gold font-mono-data font-bold">
                      {i + 1}
                    </div>
                    <div className="flex md:w-1/2 justify-start pl-10 md:pl-10 mb-4 md:mb-0">
                      <StepCard step={step} />
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
