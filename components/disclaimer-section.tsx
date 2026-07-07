interface DisclaimerSectionProps {
  lang: string
}

export function DisclaimerSection({ lang }: DisclaimerSectionProps) {
  const isEn = lang === 'en'

  return (
    <section className="py-20 md:py-28 section-navy border-b border-gold/10">
      <div className="site-container site-container--5xl">
        <div className="fade-up premium-card ornate-frame p-8 md:p-14 rounded-sm">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-ivory text-center mb-6">
            {isEn ? 'What You Should Know in Advance' : 'Amit fontos előre tudni'}
          </h2>
          <div className="ornament-divider mb-8">
            <span className="text-gold text-xs">✦</span>
          </div>

          <p className="text-center text-cream/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 italic font-light font-sans">
            {isEn ? (
              "Allódiális Polgárjogi Társaság is not a public authority, a court or a law firm. We cannot promise a guaranteed outcome, nor do we automatically provide legal representation in every case submitted to us."
            ) : (
              "Az Allódiális Polgárjogi Társaság nem hatóság, nem bíróság és nem ügyvédi iroda. Nem ígérhetünk garantált kimenetelt, és nem biztosítunk automatikusan jogi képviseletet minden hozzánk beérkező ügyben."
            )}
          </p>

          <div className="border-t border-gold/15 pt-8">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold text-center mb-8 font-mono-data">
              {isEn ? 'What we undertake with full responsibility:' : 'Amit felelősséggel vállalunk:'}
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto text-cream/85 text-sm md:text-base font-sans font-light">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'preliminary case assessment,' : 'az ügy előzetes áttekintését és értékelését,'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'information and guidance,' : 'tájékoztatást és iránymutatást,'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'review from a human rights and civil rights perspective,' : 'az eset emberi jogi, polgárjogi és alapjogi vizsgálatát,'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'help organising documents and facts,' : 'az iratok és tények rendszerezésének segítését,'}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'identifying possible avenues for protecting your rights,' : 'a lehetséges jogvédelmi utak felvázolását,'}</span>
              </li>
              <li className="flex items-start gap-3 md:col-span-2">
                <span className="text-gold mt-0.5">✦</span>
                <span>{isEn ? 'referral to a lawyer or other professional where appropriate.' : 'szükség esetén a megfelelő ügyvédhez vagy szakemberhez irányítást.'}</span>
              </li>
            </ul>
          </div>

          <p className="text-center font-medium text-ivory text-sm md:text-base mt-10 pt-6 border-t border-gold/15">
            {isEn
              ? "This is the first step towards ensuring that people do not face a complex situation alone, uninformed and vulnerable."
              : "Ez az első lépés ahhoz, hogy senki ne álljon magára, információ és támogatás nélkül egy összetett helyzetben."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
