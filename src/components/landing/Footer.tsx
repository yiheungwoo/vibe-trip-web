import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { COMPANY } from "@/lib/site";
import Container from "./Container";
import LegalLinks from "./LegalLinks";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const rows: { label: string; value: string }[] = [
    { label: dict.labels.legalName, value: dict.company.legalName },
    { label: dict.labels.ceo, value: dict.company.ceo },
    { label: dict.labels.businessNo, value: COMPANY.businessNo },
    { label: dict.labels.mailOrderNo, value: dict.company.mailOrderNo },
    { label: dict.labels.address, value: dict.company.address },
    { label: dict.labels.support, value: COMPANY.contactEmail },
  ];

  return (
    <footer className="border-t border-white/[0.07] bg-[#05050A] py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Image
              src="/assets/vibetrip-logo-white-480.png"
              alt="Vibe Trip"
              width={480}
              height={167}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-[13.5px] leading-[1.75] text-white/45">{dict.tagline}</p>

            <div className="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-vibe-purple/30 bg-vibe-purple/10 px-3.5 py-2.5 text-[12.5px] text-vibe-badge">
              <ShieldCheck className="h-4 w-4 shrink-0 text-vibe-tint" aria-hidden />
              <span className="font-medium">{dict.patentLabel}</span>
              <span className="font-semibold text-white">{dict.patentNumber}</span>
              <span className="text-white/45">{dict.patentStatus}</span>
            </div>
          </div>

          <dl className="grid gap-x-10 gap-y-2.5 text-[12.5px] leading-[1.7] sm:grid-cols-[auto_1fr] lg:max-w-[520px]">
            {rows.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="text-white/35">{label}</dt>
                <dd className="break-words text-white/60">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} {dict.brand}. {dict.rightsReserved}
          </p>
          <LegalLinks dict={dict} />
        </div>
      </Container>
    </footer>
  );
}
