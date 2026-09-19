import { BadgeCheck, Check, Share2, Ticket, UserPlus, type LucideIcon } from "lucide-react";
// PROMO (paused): re-add CalendarCheck, CreditCard and Undo2 to the import above when re-enabling the offset card.
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import Lines from "./Lines";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StoreButtons from "./StoreButtons";

const REWARD_ICONS: LucideIcon[] = [Share2, UserPlus, Ticket];

/* PROMO (paused): B2B offset — 100% pass refund on partner bookings.
   To re-enable: restore the offset card below and the matching FAQ item, and move all
   copy into the dictionaries (the English copy is drafted as comments in en.ts under
   pass / faq; the original Korean copy is kept in the comments here and in ko.ts).
const OFFSET_STEPS = [
  { icon: CreditCard, title: "1회 여정 패스로 시작", body: "떠나는 여정마다 패스 한 번으로 이용해요." },
  { icon: CalendarCheck, title: "앱에서 제휴 예약", body: "일정 속 제휴 상품을 바이브트립에서 예약해요." },
  { icon: Undo2, title: "패스 금액 100% 환급", body: "제휴 예약이 이루어지면 패스 결제 금액이 환급돼요." },
];
*/

export default function PassOffsetSection({
  dict,
  store,
}: {
  dict: Dictionary["pass"];
  store: Dictionary["store"];
}) {
  const { passCard, rewardCard } = dict;

  return (
    <section id="pass" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[30rem] w-[30rem] max-w-full rounded-full bg-vibe-cyan/[0.08] blur-[150px]"
      />
      <Container className="relative">
        {/* PROMO (paused) original copy:
            title:       여행 한 번에 패스 한 번, 제휴 예약하면 0원
            description: 정기 결제 없이 떠나는 여정마다 필요한 만큼만. 제휴 예약을 하면 패스 비용은 100% 환급됩니다.
            eyebrow:     Pass & Offset */}
        <SectionHeading
          eyebrow={dict.eyebrow}
          title={<Lines lines={dict.titleLines} />}
          description={dict.description}
        />

        <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6">
          {/* Pass card */}
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-vibe-purple/40 bg-gradient-to-b from-vibe-purple/[0.18] to-white/[0.02] p-6 shadow-[0_30px_100px_-40px_rgba(108,92,231,0.8)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-vibe-purple/30 px-3 py-1 text-[12px] font-semibold text-vibe-badge">
                  {passCard.badge}
                </span>
                <BadgeCheck className="h-5 w-5 text-vibe-cyan" aria-hidden />
              </div>

              <h3 className="mt-6 text-[26px] font-bold tracking-[-0.025em] text-white sm:text-[30px]">
                {passCard.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-white/60">{passCard.description}</p>

              <ul className="mt-6 flex flex-col gap-3">
                {passCard.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[14.5px] text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vibe-cyan/15">
                      <Check className="h-3 w-3 text-vibe-cyan" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <StoreButtons dict={store} stacked />
              </div>
            </article>
          </Reveal>

          {/* Reward card: a shared itinerary recipient signs up -> the sharer gets a free journey pass */}
          <Reveal className="h-full" delay={0.12}>
            <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-[13px] font-semibold tracking-wide text-vibe-cyan">
                    {rewardCard.eyebrow}
                  </span>
                  <h3 className="mt-2 text-balance text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:text-[26px]">
                    {rewardCard.title}
                  </h3>
                </div>
                <div
                  aria-label={rewardCard.badgeAria}
                  className="flex shrink-0 flex-col items-center justify-center gap-1.5 self-start rounded-2xl border border-vibe-cyan/30 bg-vibe-cyan/[0.08] px-6 py-3.5 sm:self-auto"
                >
                  <Ticket className="h-7 w-7 text-vibe-cyan" aria-hidden />
                  <span className="whitespace-nowrap bg-gradient-to-r from-vibe-light to-vibe-cyan bg-clip-text text-[15px] font-extrabold leading-none tracking-[-0.01em] text-transparent">
                    {rewardCard.badge}
                  </span>
                </div>
              </div>

              <ol className="relative mt-8 flex flex-col gap-5">
                <span
                  aria-hidden
                  className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-vibe-purple via-vibe-purple/40 to-vibe-cyan"
                />
                {rewardCard.steps.map(({ title, body }, i) => {
                  const Icon = REWARD_ICONS[i];
                  return (
                    <li key={title} className="relative flex items-start gap-4">
                      <span
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#0d0d16] ${
                          i === rewardCard.steps.length - 1 ? "bg-vibe-cyan text-black" : "bg-vibe-purple text-white"
                        }`}
                      >
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </span>
                      <div className="pt-1.5">
                        <div className="text-[15px] font-semibold text-white">{title}</div>
                        <p className="mt-1 text-[13.5px] leading-[1.65] text-white/55">{body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <p className="mt-auto pt-8 text-[12px] leading-[1.7] text-white/35">{rewardCard.note}</p>
            </article>
          </Reveal>

          {/* PROMO (paused): B2B offset card — 100% pass refund on partner bookings.
              Swap this in for the Reward card above when the promotion returns.
          <Reveal className="h-full" delay={0.12}>
            <article className="flex h-full flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-[13px] font-semibold tracking-wide text-vibe-cyan">B2B Offset</span>
                  <h3 className="mt-2 text-balance text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-white sm:text-[26px]">
                    제휴 예약 시 패스 비용 100% 환급
                  </h3>
                </div>
                <div
                  aria-label="실질 이용 비용 0원"
                  className="flex shrink-0 flex-col items-center justify-center self-start rounded-2xl border border-vibe-cyan/30 bg-vibe-cyan/[0.08] px-6 py-3 sm:self-auto"
                >
                  <span className="bg-gradient-to-r from-vibe-light to-vibe-cyan bg-clip-text text-[40px] font-extrabold leading-none tracking-[-0.03em] text-transparent">
                    0원
                  </span>
                  <span className="mt-1.5 text-[11.5px] text-white/55">실질 이용 비용</span>
                </div>
              </div>

              <ol className="relative mt-8 flex flex-col gap-5">
                <span
                  aria-hidden
                  className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-vibe-purple via-vibe-purple/40 to-vibe-cyan"
                />
                {OFFSET_STEPS.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className="relative flex items-start gap-4">
                    <span
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#0d0d16] ${
                        i === OFFSET_STEPS.length - 1 ? "bg-vibe-cyan text-black" : "bg-vibe-purple text-white"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <div className="pt-1.5">
                      <div className="text-[15px] font-semibold text-white">{title}</div>
                      <p className="mt-1 text-[13.5px] leading-[1.65] text-white/55">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-auto pt-8 text-[12px] leading-[1.7] text-white/35">
                * 환급 대상 제휴 상품과 세부 조건은 앱 내 안내를 따릅니다.
              </p>
            </article>
          </Reveal>
          */}
        </div>
      </Container>
    </section>
  );
}
