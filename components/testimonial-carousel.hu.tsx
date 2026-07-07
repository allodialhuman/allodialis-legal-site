'use client'

import TestimonialCarousel from '@/components/testimonial-carousel'
import { testimonialsHu } from '@/components/testimonial-data.hu'

export default function HungarianTestimonialCarousel() {
  return <TestimonialCarousel lang="hu" testimonials={testimonialsHu} />
}
