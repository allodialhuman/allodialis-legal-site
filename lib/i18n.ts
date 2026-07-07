export type Locale = 'hu' | 'en'

export type LocalizedRoute = 'home' | 'about' | 'privacy'

export const localizedRoutes: Record<LocalizedRoute, Record<Locale, string>> = {
  home: {
    hu: '/',
    en: '/en',
  },
  about: {
    hu: '/a-tarsasagrol',
    en: '/en/about',
  },
  privacy: {
    hu: '/adatvedelmi-tajekoztato',
    en: '/en/privacy-policy',
  },
}

const routeByPath = new Map<string, LocalizedRoute>(
  Object.entries(localizedRoutes).flatMap(([route, paths]) =>
    Object.values(paths).map((path) => [path, route as LocalizedRoute]),
  ),
)

export function getLocalizedPath(route: LocalizedRoute, locale: Locale): string {
  return localizedRoutes[route][locale]
}

export function getEquivalentPath(pathname: string, locale: Locale): string {
  const route = routeByPath.get(pathname) ?? 'home'
  return localizedRoutes[route][locale]
}

export function getHomeSectionHref(locale: Locale, section: string): string {
  return `${localizedRoutes.home[locale]}#${section}`
}
