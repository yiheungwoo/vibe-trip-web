/**
 * Shape of the legal documents (Terms of Service / Privacy Policy) shown in the footer modals.
 * Inline `**bold**` is supported in every string; table cells may contain "\n" line breaks.
 */

/** A list entry: plain text, or text with nested bullet points. */
export type LegalListItem = string | { text: string; sub: string[] };

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "note"; text: string }
  | { type: "ol"; items: LegalListItem[] }
  | { type: "ul"; items: LegalListItem[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type LegalSection = {
  /** Chapter title, set on the first section of each chapter (Terms of Service only). */
  chapter?: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  intro?: string;
  sections: LegalSection[];
  /** Announcement / effective dates shown at the end of the document. */
  dates: { label: string; value: string }[];
};

export type LegalContent = {
  closeAria: string;
  /** Shown above the document when the text is a translation (e.g. "the Korean version prevails"). */
  translationNotice?: string;
  terms: LegalDocument;
  privacy: LegalDocument;
};
