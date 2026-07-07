import { AboutPageContent } from '@/components/pages/about-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('about', 'en')

export default function EnglishAboutPage() {
  return <AboutPageContent lang="en" />
}
