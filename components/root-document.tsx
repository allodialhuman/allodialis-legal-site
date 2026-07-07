import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import type { Locale } from '@/lib/i18n'

const inter = localFont({
  src: '../app/fonts/inter-subset.woff2',
  weight: '300 700',
  style: 'normal',
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
})

const jetbrainsMono = localFont({
  src: '../app/fonts/jetbrains-mono-subset.woff2',
  weight: '400 700',
  style: 'normal',
  variable: '--font-jetbrains',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: false,
})

const playfairDisplay = localFont({
  src: [
    {
      path: '../app/fonts/playfair-display-normal-subset.woff2',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../app/fonts/playfair-display-italic-subset.woff2',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  fallback: ['Times New Roman', 'serif'],
  adjustFontFallback: 'Times New Roman',
})

export function RootDocument({
  children,
  lang,
}: Readonly<{
  children: React.ReactNode
  lang: Locale
}>) {
  const enableVercelTelemetry = process.env.VERCEL_ENV === 'production'

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`scroll-smooth bg-obsidian ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body suppressHydrationWarning className="noise-overlay min-h-screen flex flex-col">
        {children}
        {enableVercelTelemetry && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
