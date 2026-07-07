import { HomePageContent } from '@/components/pages/home-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('home', 'en')

export default function EnglishHomePage() {
  return <HomePageContent lang="en" />
}
