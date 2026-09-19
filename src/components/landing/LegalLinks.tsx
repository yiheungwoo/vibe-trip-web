"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/i18n";
import LegalDialog from "./LegalDialog";

type LegalKey = "terms" | "privacy";

/** Footer "Terms of Service" / "Privacy Policy" links; each opens its document in a modal. */
export default function LegalLinks({ dict }: { dict: Dictionary["footer"] }) {
  const [openKey, setOpenKey] = useState<LegalKey | null>(null);
  const triggers = useRef<Record<LegalKey, HTMLButtonElement | null>>({ terms: null, privacy: null });

  const close = () => {
    if (openKey) triggers.current[openKey]?.focus();
    setOpenKey(null);
  };

  return (
    <>
      <nav aria-label={dict.legalNavAria} className="flex items-center gap-5 text-[12.5px]">
        <button
          type="button"
          ref={(el) => {
            triggers.current.terms = el;
          }}
          aria-haspopup="dialog"
          onClick={() => setOpenKey("terms")}
          className="text-white/60 transition-colors hover:text-white"
        >
          {dict.terms}
        </button>
        <button
          type="button"
          ref={(el) => {
            triggers.current.privacy = el;
          }}
          aria-haspopup="dialog"
          onClick={() => setOpenKey("privacy")}
          className="font-semibold text-white/75 transition-colors hover:text-white"
        >
          {dict.privacy}
        </button>
      </nav>

      {openKey && (
        <LegalDialog
          key={openKey}
          doc={dict.legal[openKey]}
          notice={dict.legal.translationNotice}
          closeLabel={dict.legal.closeAria}
          onClose={close}
        />
      )}
    </>
  );
}
