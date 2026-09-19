/**
 * Locale-independent landing page constants.
 * Only values grounded in the CLAUDE.md Fact Sheet are final; anything unconfirmed
 * (store URLs, business info, legal URLs) stays as a TODO placeholder below.
 */

/** Section anchors, in nav order. Labels live in the i18n dictionaries (header.nav). */
export const NAV_IDS = ["features", "how-it-works", "vibe-pick", "pass", "faq"] as const;
export type NavId = (typeof NAV_IDS)[number];

/** TODO: replace with the real store URLs once confirmed */
export const STORE_LINKS = {
  appStore: "#download",
  googlePlay: "#download",
} as const;

/**
 * Patent application number (pending — NOT granted; CLAUDE.md forbids "Patent Granted").
 * Stored without locale formatting; the Korean dictionary wraps it as "제…호".
 */
export const PATENT_APPLICATION_NO = "10-2026-0139069";

/** TODO: replace with the Terms of Service / Privacy Policy URLs once confirmed */
export const LEGAL_LINKS = {
  terms: "#",
  privacy: "#",
} as const;

/**
 * Locale-neutral company info.
 * TODO: replace the placeholder with the real business registration number.
 * Locale-specific values (legal name, CEO, address, mail-order no.) live in the dictionaries
 * under footer.company.
 */
export const COMPANY = {
  businessNo: "000-00-00000",
  contactEmail: "support@vibetrip.co.kr",
} as const;
