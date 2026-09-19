import { Check, ShieldCheck } from "lucide-react";
import Container from "./Container";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

const TRUST_POINTS = [
  "여행 일정 자동 생성",
  "여정 실시간 케어",
  "바우처 자동 정리",
  "내 일정 상품화(C2C)",
];

export default function HeroSection() {
  return (
    // sticky header(h-16 / md:h-[72px]) 아래까지 배경을 확장해 이음새를 없앤다
    <section
      id="top"
      className="relative -mt-16 w-full overflow-hidden pt-16 md:-mt-[72px] md:pt-[72px]"
    >
      {/* Ambient glows + grid (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10rem] -top-[22rem] h-[46rem] w-[46rem] rounded-full bg-vibe-purple opacity-[0.22] blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[26rem] right-[-8rem] h-[42rem] w-[42rem] rounded-full bg-vibe-cyan opacity-[0.14] blur-[170px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-16 pb-24 pt-10 sm:pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-16">
        {/* Left: copy + CTAs */}
        <Reveal y={14}>
          <div className="inline-flex items-center gap-2 rounded-full border border-vibe-purple/35 bg-vibe-purple/10 py-1.5 pl-2.5 pr-4 text-[13px] font-medium text-vibe-badge backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vibe-purple/25">
              <ShieldCheck className="h-3 w-3 text-vibe-tint" aria-hidden />
            </span>
            특허 출원 기술 (Patent Pending)
          </div>

          <h1 className="mt-7 text-balance text-[36px] font-bold leading-[1.18] tracking-[-0.03em] text-white min-[400px]:text-[40px] sm:text-[52px] lg:text-[58px]">
            대화 한 번으로 일정 완성,
            <br />
            현지에서는{" "}
            <span className="bg-gradient-to-r from-vibe-light via-vibe-purple to-vibe-cyan bg-clip-text text-transparent">
              내 손안의 AI 밀착 가이드
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-pretty text-[16.5px] leading-[1.75] text-white/55">
            수십 개의 탭을 오가던 여행 준비는 이제 그만. AI 플래닝부터 바우처 자동 정리, 실시간
            위치 기반 현지 케어까지 바이브트립 하나로 끝내세요.
          </p>

          {/* id="download": 헤더 [앱 다운로드] CTA 의 이동 지점 */}
          <StoreButtons id="download" className="mt-10" />

          <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px] text-white/40">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-vibe-cyan" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: phone mockup */}
        <Reveal delay={0.15} y={14}>
          <PhoneMockup />
        </Reveal>
      </Container>
    </section>
  );
}
