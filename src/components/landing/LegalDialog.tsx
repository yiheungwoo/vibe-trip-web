"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { LegalBlock, LegalDocument, LegalListItem } from "@/i18n/legal-types";

/** Renders `**bold**` spans; every other character is plain text. */
function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-white/90">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function ListItems({ items }: { items: LegalListItem[] }) {
  return (
    <>
      {items.map((item) => {
        const text = typeof item === "string" ? item : item.text;
        return (
          <li key={text} className="pl-1">
            <Inline text={text} />
            {typeof item !== "string" && (
              <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-white/30">
                {item.sub.map((s) => (
                  <li key={s} className="pl-1">
                    <Inline text={s} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
    case "note":
      return (
        <p className="text-[12.5px] leading-[1.7] text-white/45">
          <Inline text={block.text} />
        </p>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2.5 pl-5 marker:text-white/40">
          <ListItems items={block.items} />
        </ol>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2.5 pl-5 marker:text-white/40">
          <ListItems items={block.items} />
        </ul>
      );
    case "table":
      return (
        // Scrollable on narrow screens; focusable so keyboard users can scroll it.
        <div tabIndex={0} className="overflow-x-auto rounded-xl border border-white/[0.08]">
          <table
            className={`w-full border-collapse text-left text-[12.5px] leading-[1.7] ${
              block.head.length > 2 ? "min-w-[680px]" : "min-w-[420px]"
            }`}
          >
            <thead className="bg-white/[0.04] text-white/75">
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col" className="px-3 py-2.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-white/[0.06]">
                  {row.map((cell, i) => (
                    <td key={i} className="whitespace-pre-line px-3 py-2.5 align-top text-white/60">
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

type LegalDialogProps = {
  doc: LegalDocument;
  /** Shown above the document (e.g. "translation — the Korean version prevails"). */
  notice?: string;
  closeLabel: string;
  onClose: () => void;
};

/**
 * Modal for a legal document, built on the native <dialog>: showModal() gives us the focus trap,
 * inert background and ESC handling. Mount it only while it should be open; `onClose` fires for every
 * way of closing (X button, ESC, backdrop click).
 */
export default function LegalDialog({ doc, notice, closeLabel, onClose }: LegalDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const pressStartedOnBackdrop = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    // Start with focus on the text so arrow keys / Space scroll it; Tab then reaches the close button.
    bodyRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      // A click on the backdrop targets the <dialog> itself (it has no padding). Require the press to start
      // there too, so selecting text and releasing the mouse outside the panel doesn't dismiss it.
      onPointerDown={(e) => {
        pressStartedOnBackdrop.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && pressStartedOnBackdrop.current) e.currentTarget.close();
      }}
      className="m-auto max-h-[85dvh] w-[calc(100%-2rem)] max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-vibe-card p-0 text-white shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)] backdrop:animate-fade-in backdrop:bg-black/70 backdrop:backdrop-blur-sm open:flex open:animate-modal-in motion-reduce:animate-none motion-reduce:backdrop:animate-none"
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-4 sm:px-7 sm:py-5">
        <h2 id={titleId} className="text-[17px] font-bold leading-snug text-white sm:text-lg">
          {doc.title}
        </h2>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={closeLabel}
          className="-mr-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div
        ref={bodyRef}
        tabIndex={-1}
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 outline-none sm:px-7 sm:py-6"
      >
        {notice && (
          <p className="mb-6 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[12.5px] leading-[1.7] text-white/50">
            {notice}
          </p>
        )}
        {doc.intro && <p className="mb-6 text-[13.5px] leading-[1.8] text-white/65">{doc.intro}</p>}

        {doc.sections.map((section, index) => (
          <section key={section.heading} className="mt-7 first:mt-0">
            {section.chapter && (
              <p
                className={`mb-4 text-[12.5px] font-semibold tracking-wide text-vibe-tint ${
                  index > 0 ? "mt-10 border-t border-white/[0.08] pt-5" : ""
                }`}
              >
                {section.chapter}
              </p>
            )}
            <h3 className="text-[15px] font-semibold leading-snug text-white">{section.heading}</h3>
            <div className="mt-3 space-y-3 text-[13.5px] leading-[1.8] text-white/65">
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-10 space-y-1 border-t border-white/[0.08] pt-5 text-[12.5px] text-white/45">
          {doc.dates.map(({ label, value }) => (
            <p key={label}>
              <span className="font-semibold text-white/60">{label}</span>: {value}
            </p>
          ))}
        </div>
      </div>
    </dialog>
  );
}
