import { DeferredTestimonialSection } from '@/components/deferred-testimonial-section'
import { testimonialsEn } from '@/components/testimonial-data.en'
import { testimonialsHu } from '@/components/testimonial-data.hu'
import type { Locale } from '@/lib/i18n'

function StaticTestimonialSection({ lang }: { lang: Locale }) {
  const isEn = lang === 'en'
  const review = (isEn ? testimonialsEn : testimonialsHu)[0]
  const paragraphs = review.paragraphs

  return (
    <section className="py-24 md:py-32 section-obsidian relative overflow-hidden border-b border-gold/10" data-testimonial-static>
      <div className="absolute inset-0 gold-dots opacity-[0.02] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,167,94,0.05) 0%, transparent 65%)' }}
      />

      <div className="site-container site-container--4xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <span className="eyebrow text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-4 font-mono-data">
            {isEn ? 'Feedback' : 'Visszajelzések'}
          </span>
          <h2 className="font-serif-display text-2xl md:text-4xl font-bold text-ivory mt-4">
            {isEn ? 'Testimonials' : 'Vélemények'}
          </h2>
          <div className="ornament-divider mt-7">
            <span className="text-gold text-xs">✦</span>
          </div>
        </div>

        <article className="fade-up relative px-1 md:px-3" aria-label={isEn ? 'Featured testimonial' : 'Kiemelt vélemény'}>
          <div
            className="testimonial-card relative premium-card ornate-frame min-h-[430px] md:min-h-[410px] p-7 sm:p-9 md:p-14 rounded-sm text-center shadow-2xl flex flex-col"
            style={{ background: '#0d1726' }}
          >
            <span className="corner-tr" />
            <span className="corner-bl" />
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <p className="font-sans text-xl md:text-3xl font-medium text-cream/95 leading-relaxed">
                „{paragraphs[0]}”
              </p>
              {paragraphs.slice(1).map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0 ? 'text-cream/90 text-sm md:text-lg leading-relaxed font-normal font-sans' : 'text-cream/75 text-sm md:text-base leading-relaxed font-normal font-sans'}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="ornament-divider my-7">
              <span className="text-gold text-xs">✦</span>
            </div>
            <div>
              <p className="font-mono-data text-xs md:text-sm uppercase tracking-[0.25em] text-gold font-bold">{review.author}</p>
              <p className="text-[9px] md:text-[10px] text-cream/40 uppercase tracking-widest mt-1 font-mono-data">
                {isEn ? 'testimonial' : 'vélemény'}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export function TestimonialSection({ lang }: { lang: Locale }) {
  return (
    <div id="velemenyek" className="testimonial-shell" data-motion-scope>
      <DeferredTestimonialSection lang={lang} />
      <StaticTestimonialSection lang={lang} />
    </div>
  )
}
