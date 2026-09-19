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
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Point = { icon: LucideIcon; title: string; body: string };
type Step = {
  id: string;
  phase: string;
  label: string;
  summary: string;
  title: string;
  points: Point[];
  visual: ReactNode;
};

const STEPS: Step[] = [
  {
    id: "pre",
    phase: "Pre-Trip",
    label: "플래닝 · 바우처 OCR",
    summary: "대화로 일정을 만들고 바우처를 자동 정리",
    title: "대화로 일정을 짜고, 바우처는 올리기만 하세요",
    points: [
      {
        icon: Sparkles,
        title: "대화형 AI 플래닝",
        body: "도시와 취향을 말하면 하루 단위 타임라인이 완성돼요.",
      },
      {
        icon: ScanLine,
        title: "바우처 OCR 자동 정리",
        body: "항공·호텔·교통 바우처를 읽어 알맞은 시간과 장소에 배치해요.",
      },
    ],
    visual: <PreVisual />,
  },
  {
    id: "on",
    phase: "On-Trip",
    label: "실시간 GPS 케어 · 모빌리티 호출",
    summary: "현지에서 앱이 먼저 챙기고 이동까지 연결",
    title: "현지에서는 앱이 먼저 챙겨요",
    points: [
      {
        icon: Navigation,
        title: "실시간 위치·시간 케어",
        body: "지금 있는 곳과 시간에 맞춰 다음 동선, 주변 추천, 도슨트를 먼저 알려줘요.",
      },
      {
        icon: Car,
        title: "모빌리티 호출",
        body: "국가에 맞는 서비스로 바로 연결돼요. 한국·글로벌은 Uber, 동남아 6개국은 Grab.",
      },
    ],
    visual: <OnVisual />,
  },
  {
    id: "post",
    phase: "Post-Trip",
    label: "일정 마켓 공유 · 수익",
    summary: "다녀온 일정을 공유하고 리베이트 적립",
    title: "다녀온 일정이 다음 여행자의 상품이 돼요",
    points: [
      {
        icon: Store,
        title: "바이브 픽에 일정 공유",
        body: "내가 다녀온 여행 일정을 C2C 마켓 ‘바이브 픽’에 올릴 수 있어요.",
      },
      {
        icon: Wallet,
        title: "크리에이터 리베이트 지갑",
        body: "내 일정이 이용되면 리베이트가 지갑에 적립돼요.",
      },
    ],
    visual: <PostVisual />,
  },
];

export default function HowItWorksSection() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = STEPS[index];

  const focusTab = (i: number) => {
    setIndex(i);
    tabRefs.current[i]?.focus();
  };

  // WAI-ARIA tabs: 방향키 / Home / End
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = STEPS.length - 1;
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
          eyebrow="How It Works"
          title={
            <>
              여행 전, 여행 중, 여행 후
              <br className="hidden sm:block" /> 모든 순간을 이어줍니다
            </>
          }
          description="단계를 눌러 바이브트립이 각 순간에 어떻게 함께하는지 확인해 보세요."
        />

        <Reveal className="mt-12 sm:mt-16">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
            {/* Step selector */}
            <div
              role="tablist"
              aria-label="바이브트립 이용 단계"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-3"
            >
              {STEPS.map((s, i) => {
                const selected = i === index;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`step-tab-${s.id}`}
                    aria-selected={selected}
                    aria-controls={`step-panel-${s.id}`}
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
                  key={step.id}
                  role="tabpanel"
                  id={`step-panel-${step.id}`}
                  aria-labelledby={`step-tab-${step.id}`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="relative"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-vibe-cyan/30 bg-vibe-cyan/10 px-3 py-1 text-[12px] font-semibold text-vibe-cyan">
                    STEP {index + 1} · {step.phase}
                  </span>
                  <h3 className="mt-4 text-balance text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:text-[26px]">
                    {step.title}
                  </h3>

                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {step.points.map(({ icon: Icon, title, body }) => (
                      <li key={title} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-vibe-purple/25 ring-1 ring-white/10">
                          <Icon className="h-[18px] w-[18px] text-vibe-tint" aria-hidden />
                        </span>
                        <div>
                          <div className="text-[14.5px] font-semibold text-white">{title}</div>
                          <p className="mt-1 text-[13.5px] leading-[1.65] text-white/55">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7" aria-hidden>
                    {step.visual}
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

function PreVisual() {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="flex flex-col gap-2.5">
        <div className="max-w-[90%] self-end rounded-[16px] rounded-br-[5px] bg-vibe-purple px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white">
          10월 오사카 3박 4일, 맛집 위주로 짜줘!
        </div>
        <div className="max-w-[92%] self-start rounded-[16px] rounded-bl-[5px] border border-white/[0.07] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/80">
          DAY 1 동선을 난바 중심으로 묶었어요.
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {[
          { icon: Plane, label: "항공 바우처" },
          { icon: BedDouble, label: "호텔 바우처" },
          { icon: TrainFront, label: "교통 바우처" },
        ].map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-vibe-card2 px-3 py-2"
          >
            <Icon className="h-4 w-4 text-vibe-tint" />
            <span className="text-[12.5px] font-medium text-white/80">{label}</span>
            <span className="ml-auto inline-flex items-center gap-1 text-[10.5px] font-medium text-vibe-cyan">
              <Check className="h-3 w-3" />
              일정 반영
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OnVisual() {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3 rounded-xl border border-vibe-cyan/25 bg-vibe-cyan/[0.07] px-3.5 py-3">
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vibe-cyan/20">
            <MapPin className="h-4 w-4 text-vibe-cyan" />
            <span className="absolute inset-0 rounded-full border border-vibe-cyan/50 motion-safe:animate-ping" />
          </span>
          <div className="min-w-0">
            <div className="text-[12.5px] font-semibold text-white">현재 위치 기반 추천</div>
            <div className="text-[11px] text-white/50">도보 4분 · 지금 영업 중</div>
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.07] bg-vibe-card2 px-3.5 py-3 text-[12px] leading-[1.6] text-white/65">
          다음 일정까지 시간이 남았어요. 근처 명소의 도슨트를 들어볼까요?
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-white/[0.07] bg-vibe-card2 p-3.5">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
          <Car className="h-4 w-4 text-vibe-tint" />
          국가별 모빌리티 연결
        </div>
        <div className="flex flex-col gap-2 text-[11.5px]">
          <div className="flex items-start gap-2">
            <span className="mt-px shrink-0 rounded bg-white px-1.5 py-px text-[10.5px] font-bold text-black">
              Uber
            </span>
            <span className="text-white/60">한국 · 글로벌</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-px shrink-0 rounded bg-[#00B14F] px-1.5 py-px text-[10.5px] font-bold text-white">
              Grab
            </span>
            <span className="text-white/60">VN · TH · SG · MY · PH · ID</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostVisual() {
  return (
    <div className={`${VISUAL_BOX} grid gap-4 sm:grid-cols-2`}>
      <div className="rounded-xl border border-white/[0.07] bg-vibe-card2 p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[12.5px] font-semibold text-white">오사카 3박 4일 맛집 코스</span>
          <span className="rounded-full bg-vibe-purple/25 px-2 py-0.5 text-[10px] font-medium text-vibe-badge">
            바이브 픽
          </span>
        </div>
        <p className="mt-2 text-[11.5px] leading-[1.6] text-white/50">
          내가 다녀온 일정을 마켓에 공유하면 다른 여행자가 그대로 이용해요.
        </p>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-vibe-cyan/25 bg-vibe-cyan/[0.07] p-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-vibe-cyan/20">
          <Wallet className="h-5 w-5 text-vibe-cyan" />
        </span>
        <div>
          <div className="text-[12.5px] font-semibold text-white">리베이트 지갑</div>
          <div className="text-[11px] text-white/50">일정이 이용되면 적립돼요</div>
        </div>
      </div>
    </div>
  );
}
