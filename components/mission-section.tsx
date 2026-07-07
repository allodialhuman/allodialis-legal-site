interface MissionSectionProps {
  lang: string
}

export function MissionSection({ lang }: MissionSectionProps) {
  const isEn = lang === 'en'

  return (
    <section className="py-20 md:py-28 section-navy border-b border-gold/10" data-motion-scope>
      <div className="site-container site-container--5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="fade-up space-y-6">
            <p className="text-cream/80 text-base md:text-lg leading-relaxed font-light font-sans">
              {isEn ? (
                "We help you find your way if your fundamental rights have been violated, if you have experienced abuse by an authority or institution, or if you are unsure what legal, human rights or civil options are open to you."
              ) : (
                "Segítünk eligazodni, ha alapvető jogaid sérültek, ha hatósági vagy intézményi visszaélést tapasztaltál, vagy ha bizonytalan vagy abban, milyen jogi, emberi jogi vagy polgárjogi lehetőségeid vannak."
              )}
            </p>
          </div>
          <div className="fade-up relative pl-8 md:pl-10 py-3 space-y-4" style={{ transitionDelay: '0.12s' }}>
            <span
              className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
              style={{ background: 'linear-gradient(to bottom, transparent, #C9A75E, transparent)' }}
            />
            <p className="text-ivory text-base leading-relaxed font-medium">
              {isEn 
                ? "As a first step, we provide information, a preliminary case assessment and appropriate professional guidance."
                : "Első lépésként tájékoztatást, előzetes ügyértékelést és megfelelő szakmai iránymutatást nyújtunk."
              }
            </p>
            <p className="text-cream/60 text-sm leading-relaxed font-light font-sans">
              {isEn
                ? "Where necessary, we refer you to a lawyer or another professional who can help clarify your situation and safeguard your rights under the rule of law."
                : "Szükség esetén olyan ügyvédhez vagy szakemberhez irányítunk, aki segíthet a helyzet tisztázásában és a jogállami érdekérvényesítésben."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
