import {
  ArrowUp,
  BatteryFull,
  BedDouble,
  ChevronRight,
  MapPin,
  MoreHorizontal,
  PlaneLanding,
  Signal,
  Sparkles,
  Star,
  Ticket,
  Utensils,
  Wifi,
} from "lucide-react";

/** Hero 우측 모바일 타임라인 목업 (순수 프레젠테이션 — 이미지 없이 코드로 구성) */
export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vibe-purple opacity-25 blur-[120px]"
      />

      {/* Floating trust chips (xl 이상) */}
      <div className="absolute -left-2 top-10 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-vibe-card/85 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl motion-safe:animate-float xl:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-vibe-cyan/15">
          <Ticket className="h-[18px] w-[18px] text-vibe-cyan" aria-hidden />
        </div>
        <div>
          <div className="text-[13px] font-semibold text-white">바우처 4건 자동 정리</div>
          {/* 디자인 원안은 "메일함에서 불러옴"이나 Fact Sheet(OCR 파싱)에 없는 기능이라 OCR 기준으로 표기 */}
          <div className="text-[11.5px] text-white/45">OCR로 자동 인식</div>
        </div>
      </div>

      <div className="absolute -right-1 bottom-16 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-vibe-card/85 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl motion-safe:animate-float-slow xl:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-vibe-purple/20">
          <MapPin className="h-[18px] w-[18px] text-vibe-tint" aria-hidden />
        </div>
        <div>
          <div className="text-[13px] font-semibold text-white">현재 위치 기반 추천</div>
          <div className="text-[11.5px] text-white/45">도보 4분 · 지금 영업 중</div>
        </div>
      </div>

      {/* Phone frame */}
      <div
        role="img"
        aria-label="바이브트립 AI 어시스턴트 루티가 오사카 1일차 여행 타임라인을 생성한 앱 화면"
        className="relative z-10 w-[332px] max-w-full rounded-[42px] border border-white/12 bg-gradient-to-b from-[#1B1B27] to-[#0C0C14] p-[10px] shadow-[0_40px_120px_-30px_rgba(108,92,231,0.55)]"
      >
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
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-vibe-purple to-vibe-cyan">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0B0B12] bg-vibe-cyan" />
            </div>
            <div className="flex-1">
              <div className="text-[14px] font-semibold text-white">루티 (Routi)</div>
              <div className="text-[11px] text-vibe-cyan">오사카 일정 생성 완료</div>
            </div>
            <MoreHorizontal className="h-5 w-5 text-white/35" />
          </div>

          {/* Chat body */}
          <div className="flex flex-col gap-3 px-5 py-4">
            <div className="max-w-[78%] self-end rounded-[18px] rounded-br-[6px] bg-vibe-purple px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white">
              10월 오사카 3박 4일, 맛집 위주로 짜줘!
            </div>
            <div className="max-w-[86%] self-start rounded-[18px] rounded-bl-[6px] border border-white/[0.07] bg-white/[0.05] px-3.5 py-2.5 text-[12.5px] leading-[1.55] text-white/80">
              좋아요. 도착 첫날 동선을 난바 중심으로 묶었어요 👇
            </div>

            {/* Timeline card */}
            <div className="mt-1 rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-4">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="text-[12.5px] font-semibold text-white">DAY 1 · 10월 17일</span>
                <span className="rounded-full bg-vibe-cyan/15 px-2 py-0.5 text-[10.5px] font-medium text-vibe-cyan">
                  자동 생성
                </span>
              </div>

              <div className="relative flex flex-col gap-3.5 pl-6">
                <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-vibe-purple via-vibe-purple/50 to-vibe-cyan" />

                <TimelineItem
                  dot="#6C5CE7"
                  icon={<PlaneLanding className="h-3.5 w-3.5 text-vibe-tint" />}
                  title="간사이 공항 도착"
                  time="10:20"
                  sub="하루카 특급 · 난바역 45분"
                />
                <TimelineItem
                  dot="#8B7CFF"
                  icon={<BedDouble className="h-3.5 w-3.5 text-vibe-tint" />}
                  title="호텔 체크인"
                  time="13:00"
                  sub={
                    <>
                      난바 오리엔탈 호텔
                      <span className="rounded bg-vibe-cyan/12 px-1.5 py-px text-[10px] text-vibe-cyan">
                        바우처 확인
                      </span>
                    </>
                  }
                />
                <TimelineItem
                  dot="#00CEC9"
                  highlight
                  icon={<Utensils className="h-3.5 w-3.5 text-vibe-cyan" />}
                  title="현지 맛집 · 쿠시카츠 다루마"
                  time="18:30"
                  sub={
                    <>
                      <Star className="h-3 w-3 text-vibe-cyan" /> 4.7 · 도보 6분 · 웨이팅 15분
                    </>
                  }
                />
              </div>

              <div className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl bg-white/[0.06] py-2.5 text-[12px] font-semibold text-white/80">
                전체 일정 보기
                <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="mt-1 flex items-center gap-2 self-start rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-vibe-cyan motion-safe:animate-pulse-dot" />
              <span className="h-1.5 w-1.5 rounded-full bg-vibe-cyan motion-safe:animate-pulse-dot [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-vibe-cyan motion-safe:animate-pulse-dot [animation-delay:0.4s]" />
              <span className="text-[11px] text-white/45">루티가 DAY 2를 짜는 중</span>
            </div>
          </div>

          {/* Input bar */}
          <div className="mx-5 mb-5 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5">
            <span className="flex-1 text-[12px] text-white/35">루티에게 무엇이든 물어보세요</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-vibe-purple">
              <ArrowUp className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  dot,
  icon,
  title,
  time,
  sub,
  highlight,
}: {
  dot: string;
  icon: React.ReactNode;
  title: string;
  time: string;
  sub: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className="relative">
      <span
        className="absolute -left-[22px] top-[5px] h-[15px] w-[15px] rounded-full border-[3px] border-[#0F0F18]"
        style={{ background: dot }}
      />
      <div
        className={`rounded-[13px] border px-3 py-2.5 ${
          highlight ? "border-vibe-cyan/25 bg-vibe-cyan/[0.07]" : "border-white/[0.07] bg-vibe-card2"
        }`}
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[12.5px] font-semibold text-white">{title}</span>
          <span className="ml-auto shrink-0 text-[10.5px] text-white/40">{time}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1.5 pl-[22px] text-[11px] text-white/45">
          {sub}
        </div>
      </div>
    </div>
  );
}
