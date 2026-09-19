import { ArrowDown, ArrowRight, Check, Clock, X } from "lucide-react";
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import Lines from "./Lines";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TAB_TILT = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function PainSolutionSection({ dict }: { dict: Dictionary["painSolution"] }) {
  const { before, after } = dict;

  return (
    <section id="pain-solution" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={<Lines lines={dict.titleLines} />}
          description={dict.description}
        />

        <div className="mt-12 grid items-stretch gap-4 sm:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Before */}
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/[0.06] px-3 py-1 text-[12px] font-semibold tracking-wide text-white/55">
                  {before.badge}
                </span>
                <span className="text-[13px] text-white/35">{before.caption}</span>
              </div>

              {/* Scattered-tabs visual */}
              <div aria-hidden className="mt-6 flex flex-wrap gap-2.5">
                {before.tabs.map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-lg border border-dashed border-white/15 bg-white/[0.03] px-3 py-1.5 text-[12.5px] text-white/40 ${TAB_TILT[i % TAB_TILT.length]}`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 text-[20px] font-bold tracking-[-0.02em] text-white/85 sm:text-[22px]">
                {before.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3.5">
                {before.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] leading-[1.65] text-white/50">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-400/10">
                      <X className="h-3 w-3 text-rose-300/80" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Connector */}
          <div aria-hidden className="flex items-center justify-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-vibe-purple/40 bg-vibe-purple/15 text-vibe-badge shadow-[0_0_40px_-8px_rgba(108,92,231,0.8)]">
              <ArrowDown className="h-5 w-5 lg:hidden" />
              <ArrowRight className="hidden h-5 w-5 lg:block" />
            </span>
          </div>

          {/* After */}
          <Reveal className="h-full" delay={0.12}>
            <div className="h-full rounded-3xl bg-gradient-to-br from-vibe-purple via-vibe-purple/40 to-vibe-cyan p-px shadow-[0_30px_100px_-40px_rgba(108,92,231,0.7)]">
              <article className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#0D0D17] p-6 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-vibe-purple/30 blur-[90px]"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="rounded-full bg-gradient-to-r from-vibe-purple to-vibe-deep px-3 py-1 text-[12px] font-semibold tracking-wide text-white">
                    {after.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-vibe-cyan/30 bg-vibe-cyan/10 px-3 py-1 text-[12.5px] font-semibold text-vibe-cyan">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {after.time}
                  </span>
                </div>

                <div aria-hidden className="relative mt-6">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-vibe-purple/40 bg-vibe-purple/15 px-4 py-2 text-[14px] font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-vibe-cyan" />
                    {after.chip}
                  </span>
                </div>

                <h3 className="relative mt-6 text-[20px] font-bold tracking-[-0.02em] text-white sm:text-[22px]">
                  {after.title}
                </h3>
                <ul className="relative mt-5 flex flex-col gap-3.5">
                  {after.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14.5px] leading-[1.65] text-white/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vibe-cyan/15">
                        <Check className="h-3 w-3 text-vibe-cyan" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
