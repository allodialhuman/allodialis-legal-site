import type { ReactNode } from 'react'

type FaqItem = {
  question: string
  answer: ReactNode
  delay?: string
}

const getFaqItems = (isEn: boolean): FaqItem[] => [
  {
    question: isEn ? 'What matters can I contact you about?' : 'Milyen ügyekkel fordulhatok hozzátok?',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "Primarily rights violations affecting families and children, questions of medical autonomy, rights violations in education, abuse by authorities or institutions, and fundamental or civil rights matters."
        ) : (
          "Elsősorban családokat és gyermekeket érintő jogsérelmekkel, egészségügyi önrendelkezési kérdésekkel, oktatási jogsérelmekkel, hatósági vagy intézményi visszaélésekkel, valamint alapjogi és polgárjogi ügyekkel."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'Do you provide legal representation?' : 'Vállaltok ügyvédi képviseletet?',
    delay: '0.04s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "The Society does not automatically provide legal representation. As a first step, we offer information, a case assessment and guidance on protecting your rights. Where necessary, we refer you to a lawyer or another professional."
        ) : (
          "A társaság nem vállal automatikusan ügyvédi képviseletet. Első lépésként tájékoztatást, ügyértékelést és jogvédelmi iránymutatást adunk. Szükség esetén ügyvédhez vagy más szakmai segítőhöz irányítunk."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'Is it free to request help?' : 'Ingyenes a segítségkérés?',
    delay: '0.08s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "The preliminary review of enquiries and basic information are provided within the Society's available resources. If the case requires further legal representation or expert work, the terms must be agreed separately with the relevant professional."
        ) : (
          "A megkeresések előzetes áttekintése és az alapvető tájékoztatás a társaság lehetőségei szerint történik. Amennyiben az ügy további jogi képviseletet vagy szakértői munkát igényel, annak feltételeiről külön kell egyeztetni az érintett szakemberrel."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'What should I include in my first email?' : 'Mit írjak az első emailbe?',
    delay: '0.12s',
    answer: (
      <div className="py-5 space-y-3 font-sans font-light">
        <p className="font-medium text-ivory font-serif-display">{isEn ? 'Briefly describe:' : 'Írd le röviden:'}</p>
        <ul className="list-disc pl-5 space-y-1.5">
          {isEn ? (
            <>
              <li>what happened,</li>
              <li>who is affected,</li>
              <li>which institution or authority is involved,</li>
              <li>whether there is a deadline,</li>
              <li>what decision, notice or document was issued,</li>
              <li>what help you are seeking.</li>
            </>
          ) : (
            <>
              <li>mi történt,</li>
              <li>kit érint az ügy,</li>
              <li>melyik intézmény vagy hatóság érintett,</li>
              <li>van-e határidő,</li>
              <li>milyen döntés, felszólítás vagy dokumentum született,</li>
              <li>miben kérsz segítséget.</li>
            </>
          )}
        </ul>
        <p className="text-gold font-semibold text-[11px] uppercase tracking-wider pt-2 font-mono-data">
          {isEn 
            ? "Do not include more sensitive information than necessary in your first email. A brief, clear summary of the case is sufficient at this stage."
            : "Első emailben ne küldj feleslegesen túl sok érzékeny adatot. Először elég az ügy rövid, érthető összefoglalása."
          }
        </p>
      </div>
    ),
  },
  {
    question: isEn ? 'Will you treat my case confidentially?' : 'Bizalmasan kezelitek az ügyemet?',
    delay: '0.16s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "Yes. We treat enquiries confidentially and process personal data in accordance with the applicable data protection rules."
        ) : (
          "Igen. A megkereséseket bizalmasan kezeljük, és az adatkezelés során a vonatkozó adatvédelmi szabályok szerint járunk el."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'Can I ask for help anonymously?' : 'Névtelenül is kérhetek segítséget?',
    delay: '0.20s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "You may ask a general information question without giving your name, but assessing a specific case will usually require more precise information."
        ) : (
          "Általános tájékozódó kérdést név nélkül is fel lehet tenni, de konkrét ügy értékeléséhez általában szükség lehet pontosabb információkra."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'How are you different from a law firm?' : 'Miben különböztök egy ügyvédi irodától?',
    delay: '0.24s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "The Society provides rights protection, information and case assessment. It is not a law firm, a court or a public authority. Our aim is to identify the human rights and civil rights aspects of a case and, where necessary, direct the person concerned towards appropriate professional assistance."
        ) : (
          "A társaság jogvédelmi, tájékoztató és ügyértékelő szerepet lát el. Nem ügyvédi iroda, nem bíróság és nem hatóság. Célunk, hogy segítsünk felismerni az ügy emberi jogi és polgárjogi szempontjait, majd szükség esetén megfelelő szakmai irányba tereljük az érintettet."
        )}
      </div>
    ),
  },
  {
    question: isEn ? 'How can I support your work?' : 'Hogyan tudom támogatni a munkátokat?',
    delay: '0.28s',
    answer: (
      <div className="py-5 space-y-3 font-sans font-light">
        <p>
          {isEn
            ? "You can currently support our work protecting the legal rights of children and parents with a one-off donation."
            : "Jelenleg egyszeri adománnyal tudod támogatni a gyermekek és szülők jogi védelméért végzett munkánkat."
          }
        </p>
        <p className="font-bold text-ivory font-serif-display">{isEn ? 'Donate:' : 'Adományozás:'}</p>
        <p>
          <a
            href="https://4fund.com/hu/aufwhv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light font-semibold text-sm hover-lift inline-block font-mono-data"
          >
            https://4fund.com/hu/aufwhv
          </a>
        </p>
      </div>
    ),
  },
  {
    question: isEn ? 'How are donations used?' : 'Mire fordítjátok az adományokat?',
    delay: '0.32s',
    answer: (
      <div className="py-5 font-sans font-light">
        {isEn ? (
          "Donations fund humanitarian initiatives, rights protection work behind the scenes, information materials, the development of professional legal resources and the Society's ongoing operations."
        ) : (
          "A támogatásokat humanitárius akciókra, jogvédelmi háttérmunkára, tájékoztató anyagokra, szakmai jogi háttér építésére és a társaság működésének fenntartására fordítjuk."
        )}
      </div>
    ),
  },
]

interface FaqSectionProps {
  lang: string
}

export function FaqSection({ lang }: FaqSectionProps) {
  const isEn = lang === 'en'
  const faqItems = getFaqItems(isEn)

  return (
    <section id="gyik" className="deferred-section py-24 md:py-32 section-obsidian border-b border-gold/10" data-motion-scope>
      <div className="site-container site-container--3xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Information and Answers' : 'Információk és válaszok'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Frequently Asked Questions' : 'Gyakran Ismételt Kérdések'}
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="space-y-3" data-faq>
          {faqItems.map((item, i) => {
            const answerId = `faq-answer-${lang}-${i}`
            return (
              <div
                key={i}
                className="fade-up premium-card rounded-sm overflow-hidden"
                style={item.delay ? { transitionDelay: item.delay } : undefined}
                data-faq-item
              >
                <button
                  type="button"
                  className="faq-toggle w-full px-6 py-5 hover:bg-gold/[0.04] transition-colors text-left flex justify-between items-center text-ivory font-semibold text-sm md:text-base font-serif-display"
                  aria-expanded="false"
                  aria-controls={answerId}
                  data-faq-toggle
                >
                  <span>{item.question}</span>
                  <span className="faq-arrow text-gold font-bold text-sm select-none ml-4 shrink-0">
                    ▼
                  </span>
                </button>
                <div
                  id={answerId}
                  className="faq-answer px-6 text-xs md:text-sm text-cream/80 border-t border-gold/10 leading-relaxed"
                  aria-hidden="true"
                  data-faq-answer
                >
                  {item.answer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
