export const locales = ['en', 'mk'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function t(lang: Locale, en: string, mk: string): string {
  if (lang === 'mk') return mk;
  return en;
}

export function switchLang(currentPath: string, targetLang: Locale): string {
  const isEn = currentPath.startsWith('/en/') || (!currentPath.startsWith('/mk/') && currentPath !== '/en');
  const isMk = currentPath.startsWith('/mk/');

  let stem: string;
  if (isMk) {
    stem = currentPath.replace(/^\/mk/, '') || '/';
  } else if (isEn && currentPath.startsWith('/en/')) {
    stem = currentPath.replace(/^\/en/, '') || '/';
  } else {
    stem = currentPath;
  }

  if (stem === '') stem = '/';

  if (targetLang === 'mk') {
    return `/mk${stem === '/' ? '' : stem}`;
  }
  return stem;
}

export function currentLocale(pathname: string): Locale {
  if (pathname.startsWith('/mk/') || pathname === '/mk') return 'mk';
  return 'en';
}
