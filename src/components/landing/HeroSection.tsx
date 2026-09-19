import { Check, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";

type HeroSectionProps = {
  dict: Dictionary["hero"];
  phone: Dictionary["phone"];
  store: Dictionary["store"];
};

export default function HeroSection({ dict, phone, store }: HeroSectionProps) {
  return (
    // Extend the background under the sticky header (h-16 / md:h-[72px]) to avoid a visible seam
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
            {dict.badge}
          </div>

          <h1 className="mt-7 text-balance text-[36px] font-bold leading-[1.18] tracking-[-0.03em] text-white min-[400px]:text-[40px] sm:text-[52px] lg:text-[58px]">
            {dict.titleLine1}
            <br />
            {dict.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-vibe-light via-vibe-purple to-vibe-cyan bg-clip-text text-transparent">
              {dict.titleGradient}
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-pretty text-[16.5px] leading-[1.75] text-white/55">
            {dict.description}
          </p>

          {/* id="download": scroll target of the header download CTA */}
          <StoreButtons dict={store} id="download" className="mt-10" />

          <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13.5px] text-white/40">
            {dict.trustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-vibe-cyan" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: phone mockup */}
        <Reveal delay={0.15} y={14}>
          <PhoneMockup dict={phone} />
        </Reveal>
      </Container>
    </section>
  );
}
