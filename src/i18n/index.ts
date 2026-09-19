import type { Locale } from "./config";
import en from "./dictionaries/en";
import ko, { type Dictionary } from "./dictionaries/ko";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { ko, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
