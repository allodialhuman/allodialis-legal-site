'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { testimonials } from '@/components/testimonial-data'

const AUTOPLAY_DELAY = 7000
const EXPAND_THRESHOLD = 360
const SWIPE_THRESHOLD = 50

const previousIcon = (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
)

const nextIcon = (
  <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
)

interface TestimonialSectionProps {
  lang: string
}

export function TestimonialSection({ lang }: TestimonialSectionProps) {
  const isEn = lang === 'en'
  const reviewCount = testimonials.length
  const slides = useMemo(() => [testimonials[reviewCount - 1], ...testimonials, testimonials[0]], [reviewCount])
  const [position, setPosition] = useState(1)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isDocumentHidden, setIsDocumentHidden] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const [restartToken, setRestartToken] = useState(0)
  const pointerStartX = useRef<number | null>(null)

  const activeIndex = position === 0 ? reviewCount - 1 : position === reviewCount + 1 ? 0 : position - 1
  const autoplayPaused = userPaused || isHovered || hasFocus || isExpanded || isDocumentHidden || prefersReducedMotion

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsDocumentHidden(document.hidden)

    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)
    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  useEffect(() => {
    if (transitionEnabled) return

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setTransitionEnabled(true)
        setIsAnimating(false)
      })
    })

    return () => window.cancelAnimationFrame(firstFrame)
  }, [transitionEnabled])

  const move = useCallback(
    (direction: -1 | 1, manual = true) => {
      if (isAnimating) return

      setIsExpanded(false)
      if (manual) setRestartToken((value) => value + 1)

      if (prefersReducedMotion) {
        setPosition((current) => {
          const currentIndex = current === 0 ? reviewCount - 1 : current === reviewCount + 1 ? 0 : current - 1
          return ((currentIndex + direction + reviewCount) % reviewCount) + 1
        })
        return
      }

      setIsAnimating(true)
      setPosition((current) => current + direction)
    },
    [isAnimating, prefersReducedMotion, reviewCount],
  )

  useEffect(() => {
    if (autoplayPaused) return

    const interval = window.setInterval(() => move(1, false), AUTOPLAY_DELAY)
    return () => window.clearInterval(interval)
  }, [autoplayPaused, move, restartToken])

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target || event.propertyName !== 'transform') return

    if (position === 0) {
      setTransitionEnabled(false)
      setPosition(reviewCount)
      return
    }

    if (position === reviewCount + 1) {
      setTransitionEnabled(false)
      setPosition(1)
      return
    }

    setIsAnimating(false)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    pointerStartX.current = event.clientX
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null) return

    const distance = event.clientX - pointerStartX.current
    pointerStartX.current = null
    if (Math.abs(distance) < SWIPE_THRESHOLD) return
    move(distance < 0 ? 1 : -1)
  }

  const toggleExpanded = () => {
    setIsExpanded((expanded) => {
      if (expanded) {
        window.requestAnimationFrame(() => {
          document.getElementById('velemenyek')?.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start',
          })
        })
      }
      return !expanded
    })
    setRestartToken((value) => value + 1)
  }

  return (
    <section id="velemenyek" className="py-24 md:py-32 section-obsidian relative overflow-hidden border-b border-gold/10">
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

        <div
          className="fade-up relative"
          style={{ transitionDelay: '0.1s' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setHasFocus(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocus(false)
          }}
        >
          <div
            className="testimonial-viewport overflow-hidden touch-pan-y"
            role="region"
            aria-roledescription="carousel"
            aria-label={isEn ? "Client testimonials" : "Ügyfeleink visszajelzései"}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'ArrowLeft') {
                event.preventDefault()
                move(-1)
              } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                move(1)
              }
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStartX.current = null
            }}
          >
            <div
              className="flex items-stretch will-change-transform"
              style={{
                transform: `translate3d(-${position * 100}%, 0, 0)`,
                transition: transitionEnabled && !prefersReducedMotion ? 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((review, slidePosition) => {
                const logicalIndex = slidePosition === 0 ? reviewCount - 1 : slidePosition === reviewCount + 1 ? 0 : slidePosition - 1
                const isActive = slidePosition === position
                const paragraphs = isEn ? review.paragraphsEn : review.paragraphsHu
                const fullText = paragraphs.join(' ')
                const canExpand = fullText.length > EXPAND_THRESHOLD
                const showFullText = isActive && isExpanded

                return (
                  <article
                    key={`${review.author}-${slidePosition}`}
                    className="relative min-w-full px-1 md:px-3"
                    aria-hidden={!isActive}
                    aria-roledescription="slide"
                    aria-label={`Testimonial ${logicalIndex + 1} of ${reviewCount}`}
                  >
                    <div className="absolute -top-10 left-0 md:-left-5 text-gold/10 font-serif-display text-[120px] md:text-[180px] select-none pointer-events-none leading-none">
                      „
                    </div>

                    <div className="relative premium-card ornate-frame min-h-[430px] md:min-h-[410px] p-7 sm:p-9 md:p-14 rounded-sm text-center shadow-2xl flex flex-col">
                      <span className="corner-tr" />
                      <span className="corner-bl" />

                      <div id={`testimonial-content-${slidePosition}`} className="flex-1 flex flex-col justify-center">
                        {logicalIndex === 0 ? (
                          <div className="space-y-6">
                            <p className="font-serif-display text-xl md:text-3xl gold-gradient-text italic leading-relaxed">
                              „{paragraphs[0]}”
                            </p>
                            <p className="text-cream/90 text-sm md:text-lg leading-relaxed font-light font-sans">{paragraphs[1]}</p>
                            <p className="text-cream/70 text-sm md:text-base leading-relaxed italic font-light font-sans">{paragraphs[2]}</p>
                          </div>
                        ) : showFullText ? (
                          <div className="space-y-4 text-left sm:text-center">
                            {paragraphs.map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex} className="text-cream/85 text-sm md:text-base leading-relaxed font-sans font-light">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="testimonial-excerpt font-serif-display text-lg md:text-2xl text-cream/90 italic leading-relaxed">
                            „{fullText}”
                          </p>
                        )}
                      </div>

                      {canExpand && (
                        <button
                          type="button"
                          className="mt-7 self-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gold hover:text-gold-light underline decoration-gold/30 underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-obsidian rounded-sm font-mono-data"
                          aria-expanded={showFullText}
                          aria-controls={`testimonial-content-${slidePosition}`}
                          tabIndex={isActive ? 0 : -1}
                          onClick={toggleExpanded}
                        >
                          {showFullText ? (isEn ? 'Show Less' : 'Kevesebb') : (isEn ? 'Read More' : 'Bővebben')}
                        </button>
                      )}

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

                    <div className="absolute -bottom-16 right-0 md:-right-5 text-gold/10 font-serif-display text-[120px] md:text-[180px] select-none pointer-events-none leading-none">
                      ”
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              className="testimonial-control"
              aria-label={isEn ? "Previous testimonial" : "Előző vélemény"}
              disabled={isAnimating}
              onClick={() => move(-1)}
            >
              {previousIcon}
            </button>

            <button
              type="button"
              className="testimonial-control"
              aria-label={userPaused 
                ? (isEn ? 'Start automatic rotation' : 'Automatikus forgatás indítása') 
                : (isEn ? 'Pause automatic rotation' : 'Automatikus forgatás leállítása')
              }
              aria-pressed={userPaused}
              onClick={() => setUserPaused((paused) => !paused)}
            >
              {userPaused ? (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                </svg>
              ) : (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.75 5h3.5v14h-3.5V5Zm7 0h3.5v14h-3.5V5Z" />
                </svg>
              )}
            </button>

            <div className="hidden sm:block sm:w-40" aria-hidden="true">
              <div className="h-px w-full bg-gold/20 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-[width] duration-500"
                  style={{ width: `${((activeIndex + 1) / reviewCount) * 100}%` }}
                />
              </div>
            </div>

            <span
              className="min-w-[4.5rem] text-center font-mono-data text-[10px] sm:text-xs tracking-[0.2em] text-gold/80"
              aria-live={userPaused ? 'polite' : 'off'}
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(reviewCount).padStart(2, '0')}
            </span>

            <button
              type="button"
              className="testimonial-control"
              aria-label={isEn ? "Next testimonial" : "Következő vélemény"}
              disabled={isAnimating}
              onClick={() => move(1)}
            >
              {nextIcon}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
