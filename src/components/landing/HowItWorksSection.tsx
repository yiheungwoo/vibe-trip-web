"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BedDouble,
  Car,
  Check,
  MapPin,
  Navigation,
  Plane,
  ScanLine,
  Sparkles,
  Store,
  TrainFront,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import Lines from "./Lines";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Dict = Dictionary["howItWorks"];

/** Icons for each step's two feature points, in the same order as dict.steps[i].points. */
const POINT_ICONS: LucideIcon[][] = [
  [Sparkles, ScanLine],
  [Navigation, Car],
  [Store, Wallet],
];

export default function HowItWorksSection({ dict }: { dict: Dict }) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = dict.steps[index];
  const stepId = ["pre", "on", "post"][index];

  const visuals: ReactNode[] = [
    <PreVisual key="pre" v={dict.visuals.pre} />,
    <OnVisual key="on" v={dict.visuals.on} />,
    <PostVisual key="post" v={dict.visuals.post} />,
  ];

  const focusTab = (i: number) => {
    setIndex(i);
    tabRefs.current[i]?.focus();
  };

  // WAI-ARIA tabs: arrow keys / Home / End
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = dict.steps.length - 1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      focusTab(index === last ? 0 : index + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      focusTab(index === 0 ? last : index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(last);
    }
  };

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={<Lines lines={dict.titleLines} />}
          description={dict.description}
        />

        <Reveal className="mt-12 sm:mt-16">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
            {/* Step selector */}
            <div
              role="tablist"
              aria-label={dict.tablistAria}
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3"
            >
              {dict.steps.map((s, i) => {
                const selected = i === index;
                const id = ["pre", "on", "post"][i];
                return (
                  <button
                    key={id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`step-tab-${id}`}
                    aria-selected={selected}
                    aria-controls={`step-panel-${id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setIndex(i)}
                    className={`relative overflow-hidden rounded-2xl border px-3 py-3.5 text-left transition-colors sm:px-4 lg:px-5 lg:py-5 ${
                      selected
                        ? "border-vibe-purple/50"
                        : "border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="step-active"
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-br from-vibe-purple/25 via-vibe-purple/10 to-vibe-cyan/10"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold lg:h-9 lg:w-9 lg:text-[14px] ${
                          selected ? "bg-vibe-purple text-white" : "bg-white/[0.07] text-white/50"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="min-w-0">
                        <span
                          className={`block text-[13px] font-semibold sm:text-[14.5px] lg:text-[16px] ${
                            selected ? "text-white" : "text-white/70"
                          }`}
                        >
                          {s.phase}
                        </span>
                        <span className="mt-0.5 hidden text-[12.5px] leading-[1.5] text-white/45 sm:block lg:text-[13.5px]">
                          <span className="lg:hidden">{s.label}</span>
                          <span className="hidden lg:inline">{s.summary}</span>
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step panel */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 sm:p-8 lg:min-h-[520px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-vibe-purple/25 blur-[100px]"
              />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={stepId}
                  role="tabpanel"
                  id={`step-panel-${stepId}`}
                  aria-labelledby={`step-tab-${stepId}`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-vibe-cyan/30 bg-vibe-cyan/10 px-3 py-1 text-[12px] font-semibold text-vibe-cyan">
                    {dict.stepWord} {index + 1} · {step.phase}
                  </span>
                  <h3 className="mt-4 text-balance text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:text-[26px]">
                    {step.title}
                  </h3>

                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {step.points.map(({ title, body }, p) => {
                      const Icon = POINT_ICONS[index][p];
                      return (
                        <li key={title} className="flex items-start gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-vibe-purple/25 ring-1 ring-white/10">
                            <Icon className="h-[18px] w-[18px] text-vibe-tint" aria-hidden />
                          </span>
                          <div>
                            <div className="text-[14.5px] font-semibold text-white">{title}</div>
                            <p className="mt-1 text-[13.5px] leading-[1.65] text-white/55">{body}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-7" aria-hidden>
                    {visuals[index]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Step visuals (presentational) ---------- */

const VISUAL_BOX = "rounded-2xl border border-white/[0.08] bg-[#0B0B12]/80 p-4 sm:p-5";
const VOUCHER_ICONS: LucideIcon[] = [Plane, BedDouble, TrainFront];

function PreVisual({ v }: { v: Dict["visuals"]["pre"] }) {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="flex flex-col gap-2.5">
        <div className="max-w-[90%] self-end rounded-[16px] rounded-br-[5px] bg-vibe-purple px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white">
          {v.userMsg}
        </div>
        <div className="max-w-[92%] self-start rounded-[16px] rounded-bl-[5px] border border-white/[0.07] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/80">
          {v.botMsg}
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {v.vouchers.map((label, i) => {
          const Icon = VOUCHER_ICONS[i];
          return (
            <li
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-vibe-card2 px-3 py-2"
            >
              <Icon className="h-4 w-4 shrink-0 text-vibe-tint" />
              <span className="text-[12.5px] font-medium text-white/80">{label}</span>
              <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[10.5px] font-medium text-vibe-cyan">
                <Check className="h-3 w-3" />
                {v.reflected}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function OnVisual({ v }: { v: Dict["visuals"]["on"] }) {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3 rounded-xl border border-vibe-cyan/25 bg-vibe-cyan/[0.07] px-3.5 py-3">
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vibe-cyan/20">
            <MapPin className="h-4 w-4 text-vibe-cyan" />
            <span className="absolute inset-0 rounded-full border border-vibe-cyan/50 motion-safe:animate-ping" />
          </span>
          <div className="min-w-0">
            <div className="text-[12.5px] font-semibold text-white">{v.locationTitle}</div>
            <div className="text-[11px] text-white/50">{v.locationSub}</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.07] bg-vibe-card2 px-3.5 py-3 text-[12px] leading-[1.6] text-white/65">
          {v.nudge}
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-white/[0.07] bg-vibe-card2 p-3.5">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
          <Car className="h-4 w-4 text-vibe-tint" />
          {v.mobilityTitle}
        </div>
        <div className="flex flex-col gap-2 text-[11.5px]">
          <div className="flex items-start gap-2">
            <span className="mt-px shrink-0 rounded bg-white px-1.5 py-px text-[10.5px] font-bold text-black">
              Uber
            </span>
            <span className="text-white/60">{v.uberRegion}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-px shrink-0 rounded bg-[#00B14F] px-1.5 py-px text-[10.5px] font-bold text-white">
              Grab
            </span>
            <span className="text-white/60">{v.grabRegion}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostVisual({ v }: { v: Dict["visuals"]["post"] }) {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="rounded-xl border border-white/[0.07] bg-vibe-card2 p-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[12.5px] font-semibold text-white">{v.itineraryTitle}</span>
          <span className="shrink-0 rounded-full bg-vibe-purple/25 px-2 py-0.5 text-[10px] font-medium text-vibe-badge">
            {v.pickTag}
          </span>
        </div>
        <p className="mt-2 text-[11.5px] leading-[1.6] text-white/50">{v.description}</p>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-vibe-cyan/25 bg-vibe-cyan/[0.07] p-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vibe-cyan/20">
          <Wallet className="h-5 w-5 text-vibe-cyan" />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-white">{v.walletTitle}</div>
          <div className="text-[11px] text-white/50">{v.walletSub}</div>
        </div>
      </div>
    </div>
  );
}
