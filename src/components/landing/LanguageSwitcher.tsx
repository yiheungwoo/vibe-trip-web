"use client";

import { useRouter } from "next/navigation";
import { LOCALES, LOCALE_COOKIE, LOCALE_NAMES, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  /** Accessible name of the whole control (localized). */
  label: string;
};

/** KO | EN segmented toggle. Remembers the choice in a cookie and keeps the scroll position. */
export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const router = useRouter();

  const change = (next: Locale) => {
    if (next === locale) return;
    // `secure` only over HTTPS, so the toggle still works on a plain-http local dev server.
    const secure = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax${secure}`;
    router.push(`/${next}${window.location.hash}`, { scroll: false });
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5"
    >
      {LOCALES.map((code) => {
        const selected = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={selected}
            aria-label={LOCALE_NAMES[code]}
            title={LOCALE_NAMES[code]}
            onClick={() => change(code)}
            className={`rounded-full px-2.5 py-1 text-[12px] font-semibold uppercase tracking-wide transition-colors ${
              selected ? "bg-white/[0.16] text-white" : "text-white/50 hover:text-white"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
