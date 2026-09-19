import {
  ArrowRight,
  BedDouble,
  BellRing,
  Check,
  Landmark,
  MapPin,
  Plane,
  RefreshCw,
  Route,
  ScanLine,
  Store,
  TrainFront,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARD =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 transition-colors duration-300 hover:border-vibe-cyan/30 sm:p-8";

export default function UspBentoSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-vibe-purple/[0.12] blur-[140px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why Vibe Trip"
          title={
            <>
              여행의 처음부터 끝까지,
              <br className="hidden sm:block" /> 4가지 핵심 강점
            </>
          }
          description="일정 설계, 바우처 정리, 현지 케어, 그리고 나만의 일정 상품화까지 하나의 앱에서 이어집니다."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* 1. AI 동선 — wide */}
          <Reveal className="md:col-span-2 lg:col-span-2">
            <article className={CARD}>
              <CardHead icon={Route} tag="AI 동선" title="대화로 짜고, 바뀌면 다시 계산하는 동선">
                가고 싶은 곳을 말하면 AI가 세로형 타임라인으로 하루 일정을 구성해요. 일정을 옮기면
                이동 수단과 경로도 자동으로 다시 계산됩니다.
              </CardHead>

              <div aria-hidden className="mt-auto pt-7 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <MiniTimeline
                  rows={[
                    { time: "10:20", label: "공항 도착" },
                    { time: "11:30", label: "이동 · 45분" },
                    { time: "13:00", label: "호텔 체크인" },
                  ]}
                />
                <span className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-vibe-cyan/30 bg-vibe-cyan/10 px-3 py-1.5 text-[11.5px] font-medium text-vibe-cyan">
                  <RefreshCw className="h-3.5 w-3.5 motion-safe:group-hover:rotate-180 motion-safe:transition-transform motion-safe:duration-700" />
                  경로 자동 재계산
                </span>
                <MiniTimeline
                  highlight
                  rows={[
                    { time: "10:20", label: "공항 도착" },
                    { time: "12:10", label: "이동 · 재계산" },
                    { time: "13:40", label: "호텔 체크인" },
                  ]}
                />
              </div>
            </article>
          </Reveal>

          {/* 2. 바우처 OCR */}
          <Reveal delay={0.08}>
            <article className={CARD}>
              <CardHead icon={ScanLine} tag="바우처 OCR" title="올리기만 하면 정리 끝">
                Gemini Vision 기반 하이브리드 파싱으로 항공·호텔·교통 바우처를 읽어 일정에 반영해요.
              </CardHead>

              <ul aria-hidden className="mt-auto pt-7 flex flex-col gap-2.5">
                {[
                  { icon: Plane, label: "항공" },
                  { icon: BedDouble, label: "호텔" },
                  { icon: TrainFront, label: "교통" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-vibe-card2 px-3.5 py-2.5"
                  >
                    <Icon className="h-4 w-4 text-vibe-tint" />
                    <span className="text-[13px] font-medium text-white/80">{label} 바우처</span>
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-vibe-cyan/12 px-2 py-0.5 text-[10.5px] font-medium text-vibe-cyan">
                      <Check className="h-3 w-3" />
                      인식
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* 3. 현지 실시간 케어 */}
          <Reveal delay={0.08}>
            <article className={CARD}>
              <CardHead icon={MapPin} tag="현지 실시간 케어" title="위치와 시간을 읽고 먼저 알려줘요">
                지금 있는 곳과 시간에 맞춰 다음 행동과 주변 추천, 도슨트를 앱이 먼저 푸시합니다.
              </CardHead>

              <div aria-hidden className="mt-auto pt-7 flex flex-col gap-2.5">
                <PushRow icon={BellRing} title="지금 위치 기반 추천" sub="도보 4분 · 지금 영업 중" />
                <PushRow icon={Landmark} title="도슨트 알림" sub="근처 명소의 이야기를 들려드려요" />
              </div>
            </article>
          </Reveal>

          {/* 4. 바이브 픽 — wide. #vibe-pick 앵커 지점 */}
          <Reveal id="vibe-pick" className="md:col-span-2 lg:col-span-2" delay={0.12}>
            <article className={`${CARD} border-vibe-purple/30 bg-gradient-to-br from-vibe-purple/[0.16] via-white/[0.03] to-vibe-cyan/[0.06]`}>
              <CardHead icon={Store} tag="바이브 픽" title="내 여행 일정이 상품이 되는 C2C 마켓">
                다녀온 여행을 바이브 픽에 공유하면, 다른 여행자가 내 일정을 이용해요. 이용될 때마다
                크리에이터 리베이트가 지갑에 쌓입니다.
              </CardHead>

              <div aria-hidden className="mt-auto pt-7 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
                <FlowNode icon={Route} label="내 일정" sub="여행 후 공유" />
                <ArrowRight className="mx-auto hidden h-4 w-4 text-white/30 sm:block" />
                <FlowNode icon={Store} label="바이브 픽" sub="다른 여행자가 이용" />
                <ArrowRight className="mx-auto hidden h-4 w-4 text-white/30 sm:block" />
                <FlowNode icon={Wallet} label="리베이트 지갑" sub="수익 적립" accent />
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CardHead({
  icon: Icon,
  tag,
  title,
  children,
}: {
  icon: LucideIcon;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-vibe-purple/30 to-vibe-cyan/20 ring-1 ring-white/10">
          <Icon className="h-5 w-5 text-white" aria-hidden />
        </span>
        <span className="text-[13px] font-semibold tracking-wide text-vibe-cyan">{tag}</span>
      </div>
      <h3 className="mt-5 text-balance text-[20px] font-bold leading-[1.35] tracking-[-0.02em] text-white sm:text-[22px]">
        {title}
      </h3>
      <p className="mt-3 text-pretty text-[14.5px] leading-[1.7] text-white/55">{children}</p>
    </div>
  );
}

function MiniTimeline({
  rows,
  highlight,
}: {
  rows: { time: string; label: string }[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlight ? "border-vibe-cyan/25 bg-vibe-cyan/[0.06]" : "border-white/[0.07] bg-vibe-card2"
      }`}
    >
      <div className="relative flex flex-col gap-3 pl-5">
        <span className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-gradient-to-b from-vibe-purple to-vibe-cyan" />
        {rows.map((row) => (
          <div key={row.label} className="relative flex items-center justify-between gap-3 text-[12.5px]">
            <span
              className={`absolute -left-5 top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full border-2 border-vibe-card2 ${
                highlight ? "bg-vibe-cyan" : "bg-vibe-purple"
              }`}
            />
            <span className="font-medium text-white/85">{row.label}</span>
            <span className="text-[11px] text-white/40">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PushRow({ icon: Icon, title, sub }: { icon: LucideIcon; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-vibe-card2 px-3.5 py-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-vibe-purple/20">
        <Icon className="h-4 w-4 text-vibe-tint" />
      </span>
      <div className="min-w-0">
        <div className="text-[12.5px] font-semibold text-white">{title}</div>
        <div className="truncate text-[11px] text-white/45">{sub}</div>
      </div>
    </div>
  );
}

function FlowNode({
  icon: Icon,
  label,
  sub,
  accent,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 ${
        accent ? "border-vibe-cyan/30 bg-vibe-cyan/[0.08]" : "border-white/[0.08] bg-white/[0.04]"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          accent ? "bg-vibe-cyan/20" : "bg-vibe-purple/25"
        }`}
      >
        <Icon className={`h-[18px] w-[18px] ${accent ? "text-vibe-cyan" : "text-vibe-tint"}`} />
      </span>
      <div className="min-w-0">
        <div className="text-[13.5px] font-semibold text-white">{label}</div>
        <div className="text-[11.5px] text-white/45">{sub}</div>
      </div>
    </div>
  );
}
