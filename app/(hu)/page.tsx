import { HomePageContent } from '@/components/pages/home-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('home', 'hu')

export default function HomePage() {
  return <HomePageContent lang="hu" />
}
