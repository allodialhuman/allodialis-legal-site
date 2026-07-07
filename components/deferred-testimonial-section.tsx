'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import type { Locale } from '@/lib/i18n'

const HungarianTestimonialCarousel = dynamic(() => import('@/components/testimonial-carousel.hu'), {
  ssr: false,
})

const EnglishTestimonialCarousel = dynamic(() => import('@/components/testimonial-carousel.en'), {
  ssr: false,
})

interface DeferredTestimonialSectionProps {
  lang: Locale
}

export function DeferredTestimonialSection({ lang }: DeferredTestimonialSectionProps) {
  const shellRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setActive(true)
        observer.disconnect()
      },
      { rootMargin: '1200px 0px', threshold: 0 },
    )

    observer.observe(shell)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={shellRef}
      className={`testimonial-loader-sentinel${active ? ' testimonial-loader-sentinel--active' : ''}`}
      aria-busy={!active}
    >
      {active ? (lang === 'en' ? <EnglishTestimonialCarousel /> : <HungarianTestimonialCarousel />) : null}
    </div>
  )
}
