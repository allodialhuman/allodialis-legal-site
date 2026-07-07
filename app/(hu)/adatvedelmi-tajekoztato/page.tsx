import { PrivacyPageContent } from '@/components/pages/privacy-page'
import { createPageMetadata } from '@/lib/site-metadata'

export const metadata = createPageMetadata('privacy', 'hu')

export default function PrivacyPolicyPage() {
  return <PrivacyPageContent lang="hu" />
}
