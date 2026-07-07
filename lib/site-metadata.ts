import 'server-only'

import type { Metadata } from 'next'
import type { Locale, LocalizedRoute } from '@/lib/i18n'
import { localizedRoutes } from '@/lib/i18n'

const metadataContent: Record<LocalizedRoute, Record<Locale, { title: string; description: string }>> = {
  home: {
    hu: {
      title: 'Allodiális Polgárjogi Társaság — Emberi jogi és polgárjogi védelem',
      description:
        'Az Allodiális Polgárjogi Társaság bejegyzett jogvédő egyesület, amely családok, szülők, gyermekek és jogsérelmet elszenvedett emberek támogatásán dolgozik.',
    },
    en: {
      title: 'Allodial Civil Rights Society — Human Rights and Civil Rights Protection',
      description:
        'Allodial Civil Rights Society is a registered rights protection association supporting families, parents, children and people whose rights have been violated.',
    },
  },
  about: {
    hu: {
      title: 'A Társaságról — Allodiális Polgárjogi Társaság',
      description:
        'Az Allodiális Polgárjogi Társaság emberi jogi jogvédő tevékenységet ellátó szervezet. Ismerje meg az irányadó emberi jogi és humanitárius egyezményeket.',
    },
    en: {
      title: 'About the Association — Allodial Civil Rights Society',
      description:
        'The Allodial Civil Rights Society is a human rights defense organization. Learn about the guiding human rights and humanitarian conventions.',
    },
  },
  privacy: {
    hu: {
      title: 'Adatvédelmi Tájékoztató — Allodiális Polgárjogi Társaság',
      description:
        'Az Allodiális Polgárjogi Társaság adatvédelmi és adatkezelési tájékoztatója. Ismerje meg az adatkezelési irányelveinket, céljait és az Önt megillető jogokat.',
    },
    en: {
      title: 'Privacy Notice — Allodial Civil Rights Society',
      description:
        'Privacy and data processing policy of the Allodial Civil Rights Society. Learn about our data processing rules, purposes, and your rights.',
    },
  },
}

const localeMetadata: Record<Locale, { siteName: string; openGraphLocale: string; alternateLocale: string }> = {
  hu: {
    siteName: 'Allodiális Polgárjogi Társaság',
    openGraphLocale: 'hu_HU',
    alternateLocale: 'en_GB',
  },
  en: {
    siteName: 'Allodial Civil Rights Society',
    openGraphLocale: 'en_GB',
    alternateLocale: 'hu_HU',
  },
}

export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL?.trim()

  if (!configuredUrl) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('SITE_URL must be set to the production site origin.')
    }

    return new URL('http://localhost:3000')
  }

  const siteUrl = new URL(configuredUrl)

  if (process.env.NODE_ENV === 'production' && siteUrl.protocol !== 'https:') {
    throw new Error('SITE_URL must use HTTPS in production.')
  }

  return new URL(siteUrl.origin)
}

function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString()
}

export function createPageMetadata(route: LocalizedRoute, locale: Locale): Metadata {
  const content = metadataContent[route][locale]
  const localeContent = localeMetadata[locale]
  const paths = localizedRoutes[route]
  const canonicalUrl = absoluteUrl(paths[locale])

  return {
    metadataBase: getSiteUrl(),
    applicationName: localeContent.siteName,
    title: content.title,
    description: content.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'hu-HU': absoluteUrl(paths.hu),
        en: absoluteUrl(paths.en),
        'x-default': absoluteUrl(paths.hu),
      },
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: content.title,
      description: content.description,
      siteName: localeContent.siteName,
      locale: localeContent.openGraphLocale,
      alternateLocale: localeContent.alternateLocale,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
