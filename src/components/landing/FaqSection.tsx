import { Car, ScanLine, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/i18n";
import Container from "./Container";
import FaqAccordion from "./FaqAccordion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TRUST_ICONS: LucideIcon[] = [ShieldCheck, ScanLine, Car];

export default function FaqSection({ dict }: { dict: Dictionary["faq"] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.items.map((item) => ({
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
              eyebrow={dict.eyebrow}
              title={dict.title}
              description={dict.description}
            />
            <ul className="mt-8 flex flex-col gap-3">
              {dict.trustCards.map(({ title, body }, i) => {
                const Icon = TRUST_ICONS[i];
                return (
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
                );
              })}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <FaqAccordion items={dict.items} />
          </Reveal>
        </div>
      </Container>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static FAQ data serialized as JSON-LD; "<" is escaped so a "</script>" in a string can never end the block
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </section>
  );
}
