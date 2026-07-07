'use client'

import TestimonialCarousel from '@/components/testimonial-carousel'
import { testimonialsEn } from '@/components/testimonial-data.en'

export default function EnglishTestimonialCarousel() {
  return <TestimonialCarousel lang="en" testimonials={testimonialsEn} />
}
