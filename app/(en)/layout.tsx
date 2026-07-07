import type { Viewport } from 'next'
import { RootDocument } from '@/components/root-document'
import '../globals.css'

export const viewport: Viewport = {
  themeColor: '#0A0A10',
}

export default function EnglishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>
}
