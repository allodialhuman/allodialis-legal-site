import { PrivacyPageContent } from '@/components/pages/privacy-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('privacy', 'en')

export default function EnglishPrivacyPolicyPage() {
  return <PrivacyPageContent lang="en" />
}
