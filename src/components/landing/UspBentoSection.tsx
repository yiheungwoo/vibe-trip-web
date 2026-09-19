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
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import Lines from "./Lines";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARD =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 transition-colors duration-300 hover:border-vibe-cyan/30 sm:p-8";

const VOUCHER_ICONS: LucideIcon[] = [Plane, BedDouble, TrainFront];
const PICK_ICONS: LucideIcon[] = [Route, Store, Wallet];

export default function UspBentoSection({ dict }: { dict: Dictionary["bento"] }) {
  const { ai, ocr, care, pick } = dict;

  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[32rem] w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-vibe-purple/[0.12] blur-[140px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={<Lines lines={dict.titleLines} />}
          description={dict.description}
        />

        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* 1. AI itinerary — wide */}
          <Reveal className="md:col-span-2 lg:col-span-2">
            <article className={CARD}>
              <CardHead icon={Route} tag={ai.tag} title={ai.title}>
                {ai.body}
              </CardHead>

              <div aria-hidden className="mt-auto grid gap-3 pt-7 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <MiniTimeline rows={ai.before} />
                <span className="mx-auto inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-vibe-cyan/30 bg-vibe-cyan/10 px-3 py-1.5 text-[11.5px] font-medium text-vibe-cyan">
                  <RefreshCw className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:rotate-180" />
                  {ai.recalc}
                </span>
                <MiniTimeline highlight rows={ai.after} />
              </div>
            </article>
          </Reveal>

          {/* 2. Voucher OCR */}
          <Reveal delay={0.08}>
            <article className={CARD}>
              <CardHead icon={ScanLine} tag={ocr.tag} title={ocr.title}>
                {ocr.body}
              </CardHead>

              <ul aria-hidden className="mt-auto flex flex-col gap-2.5 pt-7">
                {ocr.vouchers.map((label, i) => {
                  const Icon = VOUCHER_ICONS[i];
                  return (
                    <li
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-vibe-card2 px-3.5 py-2.5"
                    >
                      <Icon className="h-4 w-4 text-vibe-tint" />
                      <span className="text-[13px] font-medium text-white/80">{label}</span>
                      <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-vibe-cyan/12 px-2 py-0.5 text-[10.5px] font-medium text-vibe-cyan">
                        <Check className="h-3 w-3" />
                        {ocr.recognized}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          </Reveal>

          {/* 3. Real-time local care */}
          <Reveal delay={0.08}>
            <article className={CARD}>
              <CardHead icon={MapPin} tag={care.tag} title={care.title}>
                {care.body}
              </CardHead>

              <div aria-hidden className="mt-auto flex flex-col gap-2.5 pt-7">
                <PushRow icon={BellRing} title={care.push1.title} sub={care.push1.sub} />
                <PushRow icon={Landmark} title={care.push2.title} sub={care.push2.sub} />
              </div>
            </article>
          </Reveal>

          {/* 4. Vibe Pick — wide. Anchor target of #vibe-pick */}
          <Reveal id="vibe-pick" className="md:col-span-2 lg:col-span-2" delay={0.12}>
            <article
              className={`${CARD} border-vibe-purple/30 bg-gradient-to-br from-vibe-purple/[0.16] via-white/[0.03] to-vibe-cyan/[0.06]`}
            >
              <CardHead icon={Store} tag={pick.tag} title={pick.title}>
                {pick.body}
              </CardHead>

              <div
                aria-hidden
                className="mt-auto grid items-center gap-3 pt-7 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"
              >
                {pick.nodes.map((node, i) => (
                  <FlowStep
                    key={node.label}
                    icon={PICK_ICONS[i]}
                    label={node.label}
                    sub={node.sub}
                    accent={i === pick.nodes.length - 1}
                    showArrow={i > 0}
                  />
                ))}
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
            <span className="shrink-0 text-[11px] text-white/40">{row.time}</span>
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

/** One node of the share -> marketplace -> wallet flow, preceded by an arrow (except the first). */
function FlowStep({
  icon: Icon,
  label,
  sub,
  accent,
  showArrow,
}: {
  icon: LucideIcon;
  label: string;
  sub: string;
  accent?: boolean;
  showArrow?: boolean;
}) {
  return (
    <>
      {showArrow && <ArrowRight className="mx-auto hidden h-4 w-4 text-white/30 sm:block" />}
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
    </>
  );
}
