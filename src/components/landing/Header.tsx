"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { NAV_IDS } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

const CTA_CLASS =
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-vibe-purple to-vibe-deep px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_8px_30px_-10px_rgba(108,92,231,0.9)] transition-all hover:-translate-y-0.5 hover:brightness-110";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["header"];
};

export default function Header({ locale, dict }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Scroll state + current section (scroll spy)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
      const line = window.innerHeight * 0.35;
      let current = "";
      let bestTop = -Infinity;
      for (const id of NAV_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Mobile menu: close on ESC, lock body scroll, auto-close once the viewport reaches md
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="sticky top-0 z-50 h-16 md:h-[72px]">
      {/* backdrop-filter changes the containing block of fixed descendants, so the background is its own layer */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b transition-colors duration-300 ${
          solid
            ? "border-white/[0.07] bg-vibe-bg/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      />

      <div className="relative mx-auto flex h-full max-w-page items-center justify-between gap-3 px-5 sm:px-6">
        <a href="#top" aria-label={dict.homeAria} className="flex shrink-0 items-center">
          <Image
            src="/assets/vibetrip-logo-white-480.png"
            alt="Vibe Trip"
            width={480}
            height={167}
            priority
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav aria-label={dict.mainNavAria} className="hidden items-center gap-5 md:flex lg:gap-8">
          {NAV_IDS.map((id) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative whitespace-nowrap py-1 text-[14px] transition-colors hover:text-white ${
                  isActive ? "text-white" : "text-white/60"
                }`}
              >
                {dict.nav[id]}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-vibe-purple to-vibe-cyan transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LanguageSwitcher locale={locale} label={dict.languageAria} />

          <a href="#download" className={`${CTA_CLASS} hidden md:inline-flex`}>
            <Download className="h-3.5 w-3.5" aria-hidden />
            {dict.downloadApp}
          </a>

          <button
            type="button"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90 transition-colors hover:bg-white/[0.09] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label={dict.closeMenu}
              tabIndex={-1}
              onClick={() => setOpen(false)}
              className="fixed inset-x-0 bottom-0 top-16 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              id="mobile-menu"
              className="absolute inset-x-0 top-full border-b border-white/10 bg-[#0B0B12]/95 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <nav aria-label={dict.mobileNavAria} className="mx-auto max-w-page px-5 pb-6 pt-3 sm:px-6">
                <ul className="flex flex-col">
                  {NAV_IDS.map((id) => (
                    <li key={id} className="border-b border-white/[0.06] last:border-none">
                      <a
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between py-4 text-[16px] font-medium ${
                          active === id ? "text-white" : "text-white/70"
                        }`}
                      >
                        {dict.nav[id]}
                        {active === id && (
                          <span className="h-1.5 w-1.5 rounded-full bg-vibe-cyan" aria-hidden />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className={`${CTA_CLASS} mt-4 w-full py-3.5 text-[15px]`}
                >
                  <Download className="h-4 w-4" aria-hidden />
                  {dict.downloadApp}
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
