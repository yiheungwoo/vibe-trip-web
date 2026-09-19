// Vibe Trip — Hero Section
// Reference implementation extracted from the HTML design prototype.
// Requires: Tailwind CSS, lucide-react, a Pretendard (or similar KR-friendly) font loaded globally.
// Replace the <img> logo src and mockup content with real assets/data as needed.

import {
  ShieldCheck, Apple, PlayCircle, Check, Ticket, MapPin, Sparkles,
  MoreHorizontal, Signal, Wifi, BatteryFull, PlaneLanding, BedDouble,
  Utensils, Star, ChevronRight, ArrowUp,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07070C] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-[22rem] -left-[10rem] h-[46rem] w-[46rem] rounded-full bg-[#6C5CE7] opacity-[0.22] blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-[26rem] right-[-8rem] h-[42rem] w-[42rem] rounded-full bg-[#00CEC9] opacity-[0.14] blur-[170px]" />
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />

      {/* Header / GNB */}
      <header className="relative z-10 mx-auto flex max-w-[1240px] items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center">
          {/* Full-color-on-white source: uploads/vibetrip_gnb_logo.png
              White version for dark bg: assets/vibetrip-logo-white.png */}
          <img src="/assets/vibetrip-logo-white.png" alt="Vibe Trip" className="h-12 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-[14px] text-white/60 md:flex">
          <a className="transition-colors hover:text-white" href="#">기능</a>
          <a className="transition-colors hover:text-white" href="#">루티 AI</a>
          <a className="transition-colors hover:text-white" href="#">요금제</a>
          <a className="transition-colors hover:text-white" href="#">고객사례</a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-16 px-6 pb-28 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-20">
        {/* Left: copy + CTAs */}
        <div className="animate-[vtrise_0.7s_ease-out_both]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6C5CE7]/35 bg-[#6C5CE7]/10 py-1.5 pl-2.5 pr-4 text-[13px] font-medium text-[#C9C1FF] backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#6C5CE7]/25">
              <ShieldCheck className="h-3 w-3 text-[#A79BFF]" />
            </span>
            특허 출원 기술 (Patent Pending)
          </div>

          <h1
            className="mt-7 text-[40px] font-bold leading-[1.18] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[58px]"
            style={{ textWrap: "balance" as any }}
          >
            대화 한 번으로 일정 완성,
            <br />
            현지에서는{" "}
            <span className="bg-gradient-to-r from-[#8B7CFF] via-[#6C5CE7] to-[#00CEC9] bg-clip-text text-transparent">
              내 손안의 AI 밀착 가이드
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-[16.5px] leading-[1.75] text-white/55" style={{ textWrap: "pretty" as any }}>
            수십 개의 탭을 오가던 여행 준비는 이제 그만. AI 플래닝부터 바우처 자동 정리, 실시간 위치 기반 현지 케어까지 바이브트립 하나로 끝내세요.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.03] px-6 py-[15px] text-[15px] font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#00CEC9]/45 hover:bg-white/[0.07]">
              <Apple className="h-[18px] w-[18px] text-[#00CEC9]" />
              App Store에서 다운로드
            </button>
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.03] px-6 py-[15px] text-[15px] font-semibold text-white/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-[#00CEC9]/45 hover:bg-white/[0.07]">
              <PlayCircle className="h-[17px] w-[17px] text-[#00CEC9]" />
              Google Play에서 다운로드
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px] text-white/40">
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#00CEC9]" />여행 일정 자동 생성</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#00CEC9]" />여정 실시간 케어</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#00CEC9]" />바우처 자동 정리</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-[#00CEC9]" />내 일정 상품화(C2C)</span>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="relative flex justify-center lg:justify-end animate-[vtrise_0.9s_0.15s_ease-out_both]">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6C5CE7] opacity-25 blur-[120px]" />

          {/* Floating trust chips (xl breakpoint and up) */}
          <div className="absolute -left-2 top-10 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#12121B]/85 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:flex animate-[vtfloat_6s_ease-in-out_infinite]">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00CEC9]/15"><Ticket className="h-[18px] w-[18px] text-[#00CEC9]" /></div>
            <div>
              <div className="text-[13px] font-semibold text-white">바우처 4건 자동 정리</div>
              <div className="text-[11.5px] text-white/45">메일함에서 불러옴</div>
            </div>
          </div>

          <div className="absolute -right-1 bottom-16 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-[#12121B]/85 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:flex animate-[vtfloat_7s_0.8s_ease-in-out_infinite]">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C5CE7]/20"><MapPin className="h-[18px] w-[18px] text-[#A79BFF]" /></div>
            <div>
              <div className="text-[13px] font-semibold text-white">현재 위치 기반 추천</div>
              <div className="text-[11.5px] text-white/45">도보 4분 · 지금 영업 중</div>
            </div>
          </div>

          {/* Phone frame */}
          <div className="relative z-10 w-[332px] rounded-[42px] border border-white/12 bg-gradient-to-b from-[#1B1B27] to-[#0C0C14] p-[10px] shadow-[0_40px_120px_-30px_rgba(108,92,231,0.55)]">
            <div className="relative overflow-hidden rounded-[33px] bg-[#0B0B12]">
              <div className="absolute left-1/2 top-2.5 z-20 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black" />
              <div className="flex items-center justify-between px-6 pb-2 pt-3.5 text-[12px] font-semibold text-white/80">
                <span>9:41</span>
                <span className="flex items-center gap-1.5">
                  <Signal className="h-3.5 w-3.5" />
                  <Wifi className="h-3.5 w-3.5" />
                  <BatteryFull className="h-4 w-4" />
                </span>
              </div>

              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-white/[0.07] px-5 py-3.5">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9]">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B0B12] bg-[#00CEC9]" />
                </div>
                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-white">루티 (Routi)</div>
                  <div className="text-[11px] text-[#00CEC9]">오사카 일정 생성 완료</div>
                </div>
                <MoreHorizontal className="h-5 w-5 text-white/35" />
              </div>

              {/* Chat body */}
              <div className="flex flex-col gap-3 px-5 py-4">
                <div className="self-end max-w-[78%] rounded-[18px] rounded-br-[6px] bg-[#6C5CE7] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white">
                  10월 오사카 3박 4일, 맛집 위주로 짜줘!
                </div>
                <div className="self-start max-w-[86%] rounded-[18px] rounded-bl-[6px] border border-white/[0.07] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/80">
                  좋아요. 도착 첫날 동선을 난바 중심으로 묶었어요 👇
                </div>

                {/* Timeline card */}
                <div className="mt-1 rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4">
                  <div className="mb-3.5 flex items-center justify-between">
                    <span className="text-[12.5px] font-semibold text-white">DAY 1 · 10월 17일</span>
                    <span className="rounded-full bg-[#00CEC9]/15 px-2 py-0.5 text-[10.5px] font-medium text-[#00CEC9]">자동 생성</span>
                  </div>
                  <div className="relative flex flex-col gap-3.5 pl-6">
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#6C5CE7] via-[#6C5CE7]/50 to-[#00CEC9]" />

                    <TimelineItem dot="#6C5CE7" icon={<PlaneLanding className="h-3.5 w-3.5 text-[#A79BFF]" />} title="간사이 공항 도착" time="10:20" sub="하루카 특급 · 난바역 45분" />
                    <TimelineItem dot="#8B7CFF" icon={<BedDouble className="h-3.5 w-3.5 text-[#A79BFF]" />} title="호텔 체크인" time="13:00" sub={<>난바 오리엔탈 호텔 <span className="rounded bg-[#00CEC9]/12 px-1.5 py-px text-[10px] text-[#00CEC9]">바우처 확인</span></>} />
                    <TimelineItem dot="#00CEC9" highlight icon={<Utensils className="h-3.5 w-3.5 text-[#00CEC9]" />} title="현지 맛집 · 쿠시카츠 다루마" time="18:30" sub={<><Star className="h-3 w-3 text-[#00CEC9] inline" /> 4.7 · 도보 6분 · 웨이팅 15분</>} />
                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/[0.06] py-2.5 text-[12px] font-semibold text-white/80 transition-colors hover:bg-white/[0.11]">
                    전체 일정 보기
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="mt-1 flex items-center gap-2 self-start rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00CEC9] animate-[vtpulse_1.4s_ease-in-out_infinite]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00CEC9] animate-[vtpulse_1.4s_0.2s_ease-in-out_infinite]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00CEC9] animate-[vtpulse_1.4s_0.4s_ease-in-out_infinite]" />
                  <span className="text-[11px] text-white/45">루티가 DAY 2를 짜는 중</span>
                </div>
              </div>

              {/* Input bar */}
              <div className="mx-5 mb-5 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5">
                <span className="flex-1 text-[12px] text-white/35">루티에게 무엇이든 물어보세요</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6C5CE7]">
                  <ArrowUp className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ dot, icon, title, time, sub, highlight }: {
  dot: string; icon: React.ReactNode; title: string; time: string; sub: React.ReactNode; highlight?: boolean;
}) {
  return (
    <div className="relative">
      <span className="absolute -left-[22px] top-[5px] h-[15px] w-[15px] rounded-full border-[3px] border-[#0F0F18]" style={{ background: dot }} />
      <div className={`rounded-[13px] border px-3 py-2.5 ${highlight ? "border-[#00CEC9]/25 bg-[#00CEC9]/[0.07]" : "border-white/[0.07] bg-[#14141F]"}`}>
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[12.5px] font-semibold text-white">{title}</span>
          <span className="ml-auto text-[10.5px] text-white/40">{time}</span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 pl-[22px] text-[11px] text-white/45">{sub}</div>
      </div>
    </div>
  );
}

/* Add to global CSS (e.g. globals.css) — Tailwind's `animate-[...]` arbitrary values
   need these @keyframes defined somewhere in scope:

@keyframes vtfloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
@keyframes vtrise  { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: translateY(0) } }
@keyframes vtpulse { 0%,100% { opacity: .5 } 50% { opacity: .9 } }
*/
