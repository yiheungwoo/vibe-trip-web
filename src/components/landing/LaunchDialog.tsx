"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CalendarClock } from "lucide-react";
import type { Dictionary } from "@/i18n";

const EVENT_NAME = "vibetrip:launch-dialog";

/** Opens the pre-launch notice. Safe to call from any client component. */
export function showLaunchDialog() {
  window.dispatchEvent(new Event(EVENT_NAME));
}

type LaunchDialogProps = { dict: Dictionary["store"]["launchDialog"] };

/**
 * Pre-launch notice shown when an app-download button is clicked (mounted once per page).
 * Built on the native <dialog> like LegalDialog: showModal() gives the focus trap, inert background,
 * ESC handling and focus restore to the clicked button.
 */
export default function LaunchDialog({ dict }: LaunchDialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(EVENT_NAME, show);
    return () => window.removeEventListener(EVENT_NAME, show);
  }, []);

  return open ? <Panel dict={dict} onClose={() => setOpen(false)} /> : null;
}

function Panel({ dict, onClose }: LaunchDialogProps & { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pressStartedOnBackdrop = useRef(false);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descId}
      onClose={onClose}
      onPointerDown={(e) => {
        pressStartedOnBackdrop.current = e.target === e.currentTarget;
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && pressStartedOnBackdrop.current) e.currentTarget.close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-vibe-card p-0 text-white shadow-[0_30px_120px_-20px_rgba(0,0,0,0.9)] backdrop:animate-fade-in backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-modal-in motion-reduce:animate-none motion-reduce:backdrop:animate-none"
    >
      <div className="flex flex-col items-center px-6 pb-6 pt-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-vibe-purple/30 bg-vibe-purple/15">
          <CalendarClock className="h-6 w-6 text-vibe-cyan" aria-hidden />
        </span>
        <h2 id={titleId} className="mt-4 text-[19px] font-bold leading-snug text-white">
          {dict.title}
        </h2>
        <p id={descId} className="mt-2 text-[14px] leading-[1.7] text-white/60">
          {dict.body}
        </p>
        <button
          type="button"
          autoFocus
          onClick={() => dialogRef.current?.close()}
          className="mt-6 w-full rounded-xl bg-gradient-to-r from-vibe-purple to-vibe-deep py-3 text-[15px] font-semibold text-white transition-all hover:brightness-110"
        >
          {dict.confirm}
        </button>
      </div>
    </dialog>
  );
}
