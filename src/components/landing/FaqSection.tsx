import { Car, ScanLine, ShieldCheck, type LucideIcon } from "lucide-react";
import Container from "./Container";
import FaqAccordion from "./FaqAccordion";
import { FAQ_ITEMS } from "./faq-data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TRUST_CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ShieldCheck, title: "특허 출원 중", body: "실시간 컨텍스트 엔진 · 이종 데이터 파싱" },
  { icon: ScanLine, title: "Gemini Vision OCR", body: "항공·호텔·교통 바우처 하이브리드 파싱" },
  { icon: Car, title: "Uber · Grab 연결", body: "국가별 모빌리티 딥링크" },
];

export default function FaqSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="FAQ & Trust"
              title="자주 묻는 질문"
              description="궁금한 점을 먼저 확인해 보세요. 바이브트립이 무엇을 하고, 무엇을 하지 않는지 있는 그대로 안내합니다."
            />
            <ul className="mt-8 flex flex-col gap-3">
              {TRUST_CARDS.map(({ icon: Icon, title, body }, i) => (
                <li key={title}>
                  <Reveal delay={0.08 * i}>
                    <div className="flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vibe-purple/30 to-vibe-cyan/20 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-white" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[14px] font-semibold text-white">{title}</div>
                        <div className="text-[12.5px] leading-[1.5] text-white/50">{body}</div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <FaqAccordion items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </Container>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- 정적 FAQ 데이터를 JSON-LD 로 직렬화
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
