'use client'

import { useState } from 'react'

interface ContactSectionProps {
  lang: string
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [showToast, setShowToast] = useState(false)
  const isEn = lang === 'en'

  const copyEmailToClipboard = () => {
    const emailText = 'allodialhumanrights@protonmail.com'

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailText).then(() => {
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
      })
    } else {
      const tempInput = document.createElement('input')
      tempInput.value = emailText
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  return (
    <section id="kapcsolat" className="py-24 md:py-32 section-navy border-b border-gold/10">
      <div className="site-container site-container--4xl">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Contact Us with Confidence' : 'Keress minket bizalommal'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Contact' : 'Kapcsolat'}
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <div className="fade-up premium-card ornate-frame p-8 md:p-14 rounded-sm max-w-2xl mx-auto space-y-8">
          <span className="corner-tr" />
          <span className="corner-bl" />
          <p className="text-ivory text-base leading-relaxed text-center font-medium">
            {isEn
              ? 'Whether you are seeking help, would like to join us as a professional partner or volunteer, or have a question about supporting us, please email us.'
              : 'Ha segítséget kérsz, szakmai partnerként kapcsolódnál, önkéntesként segítenél vagy támogatói kérdésed van, írj nekünk emailt.'
            }
          </p>

          <div
            className="relative p-6 rounded-r-sm space-y-3 border-l-2 border-gold"
            style={{ background: 'linear-gradient(160deg, rgba(201,167,94,0.05), rgba(201,167,94,0.01))' }}
          >
            <p className="font-bold text-ivory text-sm font-serif-display">
              {isEn ? 'Briefly and factually describe the key points of your case:' : 'Röviden és tényszerűen írd le az ügyed lényegét:'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-cream/70 font-sans font-light">
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'what happened,' : 'mi történt,'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'who is affected,' : 'kit érint az ügy,'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'which authority or institution is involved,' : 'melyik hivatal/intézmény szerepel az ügyben,'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'what document you received,' : 'milyen dokumentumot kaptál,'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'whether there is a deadline,' : 'van-e határidő,'}
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gold">•</span> {isEn ? 'what help you are seeking.' : 'miben kérsz segítséget.'}
              </li>
            </ul>
          </div>

          {/* Email cím doboz */}
          <div className="text-center space-y-4 pt-4 border-t border-gold/15">
            <p className="text-[11px] text-cream/50 uppercase tracking-[0.18em] font-semibold font-mono-data">
              {isEn ? 'Our contact email address:' : 'Kapcsolattartási email címünk:'}
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3">
              <a
                id="email-address"
                href="mailto:allodialhumanrights@protonmail.com"
                className="font-serif-display text-xl md:text-2xl font-bold text-ivory hover:text-gold transition-colors break-all"
              >
                allodialhumanrights@protonmail.com
              </a>
              <button
                onClick={copyEmailToClipboard}
                aria-label={isEn ? "Copy email address" : "Email cím másolása"}
                className="btn-sovereign btn-outline px-4 py-2 text-[10px] font-bold text-gold uppercase tracking-wider rounded-sm font-mono-data"
              >
                {isEn ? 'Copy' : 'Másolás'}
              </button>
            </div>
            {/* Toast */}
            <div
              id="copy-toast"
              className={`text-xs text-emerald-300 bg-emerald-900/30 border border-emerald-500/30 py-2 px-4 rounded-sm inline-block max-w-sm mx-auto transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {isEn ? '✓ Email address copied to the clipboard.' : '✓ Email cím sikeresen a vágólapra másolva!'}
            </div>
          </div>

          {/* Sürgősségi figyelmeztetés */}
          <div className="bg-red-950/30 border border-red-500/20 p-5 rounded-sm text-center font-sans font-light">
            <p className="text-xs text-red-200/80 leading-relaxed">
              {isEn ? (
                <>
                  ⚠️ <strong>Important notice:</strong> If you are in immediate danger or need urgent medical, police or other emergency assistance, contact the appropriate emergency service or authority immediately.
                </>
              ) : (
                <>
                  ⚠️ <strong>Fontos figyelmeztetés:</strong> Ha közvetlen veszélyben vagy, sürgős egészségügyi, rendőrségi vagy hatósági segítségre van szükséged, azonnal fordulj az illetékes sürgősségi szolgálathoz vagy hatósághoz.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
