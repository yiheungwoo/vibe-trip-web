export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ko";

/** Cookie that remembers the visitor's explicit language choice (read by the Cloudflare Worker at the site root). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Native names, shown as-is regardless of the current locale. */
export const LOCALE_NAMES: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Picks the best supported locale from an Accept-Language header value. */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.trim().toLowerCase().split("-")[0], q: q ? Number(q.trim().slice(2)) : 1 };
    })
    .filter((c) => !Number.isNaN(c.q))
    .sort((a, b) => b.q - a.q);

  for (const { lang } of candidates) {
    if (isLocale(lang)) return lang;
  }
  return DEFAULT_LOCALE;
}
