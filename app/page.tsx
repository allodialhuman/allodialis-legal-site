import { cookies } from 'next/headers'
import { ScrollProgress } from '@/components/scroll-progress'
import { FadeUpObserver } from '@/components/fade-up-observer'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { MissionSection } from '@/components/mission-section'
import { WhySection } from '@/components/why-section'
import { CasesSection } from '@/components/cases-section'
import { DirectiveSection } from '@/components/directive-section'
import { ServicesSection } from '@/components/services-section'
import { DisclaimerSection } from '@/components/disclaimer-section'
import { ProcessSection } from '@/components/process-section'
import { TeamSection } from '@/components/team-section'
import { TestimonialSection } from '@/components/testimonial-section'
import { JoinSection } from '@/components/join-section'
import { SupportSection } from '@/components/support-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { ClosingSection } from '@/components/closing-section'
import { SiteFooter } from '@/components/site-footer'

export default async function Page() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'hu'

  return (
    <>
      {/* Scroll progress */}
      <ScrollProgress />

      {/* A. NAVBAR */}
      <SiteHeader />

      {/* Fade-up IntersectionObserver */}
      <FadeUpObserver />

      <main className="w-full min-w-0 overflow-x-clip">
        {/* B. HERO */}
        <HeroSection lang={lang} />

        {/* C. KÜLDETÉS */}
        <MissionSection lang={lang} />

        {/* D. MIÉRT JÖTT LÉTRE */}
        <WhySection lang={lang} />

        {/* E. MILYEN ÜGYEKBEN */}
        <CasesSection lang={lang} />

        {/* F. KIEMELT JOGVÉDELMI IRÁNY */}
        <DirectiveSection lang={lang} />

        {/* G. MIBEN TUDUNK SEGÍTENI */}
        <ServicesSection lang={lang} />

        {/* H. AMIT FONTOS ELŐRE TUDNI */}
        <DisclaimerSection lang={lang} />

        {/* I. HOGYAN MŰKÖDIK */}
        <ProcessSection lang={lang} />

        {/* J. KIK VAGYUNK */}
        <TeamSection lang={lang} />

        {/* J2. VÉLEMÉNYEK */}
        <TestimonialSection lang={lang} />

        {/* K. KAPCSOLÓDJ BE */}
        <JoinSection lang={lang} />

        {/* L. TÁMOGATÁS */}
        <SupportSection lang={lang} />

        {/* M. FAQ */}
        <FaqSection lang={lang} />

        {/* N. KAPCSOLAT */}
        <ContactSection lang={lang} />

        {/* O. ZÁRÓ ÜZENET */}
        <ClosingSection lang={lang} />
      </main>

      {/* P. FOOTER */}
      <SiteFooter />
    </>
  )
}
