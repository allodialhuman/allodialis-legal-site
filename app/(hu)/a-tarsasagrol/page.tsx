import { AboutPageContent } from '@/components/pages/about-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('about', 'hu')

export default function AboutPage() {
  return <AboutPageContent lang="hu" />
}
