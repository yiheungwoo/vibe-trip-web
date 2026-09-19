import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { COMPANY, LEGAL_LINKS, PATENT_APPLICATION_NO } from "@/lib/site";
import Container from "./Container";

const COMPANY_ROWS: { label: string; value: string }[] = [
  { label: "상호", value: COMPANY.legalName },
  { label: "대표자", value: COMPANY.ceo },
  { label: "사업자등록번호", value: COMPANY.businessNo },
  { label: "통신판매업 신고번호", value: COMPANY.mailOrderNo },
  { label: "주소", value: COMPANY.address },
  { label: "고객센터", value: COMPANY.contactEmail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#05050A] py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <Image
              src="/assets/vibetrip-logo-white.png"
              alt="Vibe Trip"
              width={1998}
              height={698}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-[13.5px] leading-[1.75] text-white/45">
              대화 한 번으로 일정 완성, 현지에서는 내 손안의 AI 밀착 가이드.
            </p>

            <div className="mt-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-vibe-purple/30 bg-vibe-purple/10 px-3.5 py-2.5 text-[12.5px] text-vibe-badge">
              <ShieldCheck className="h-4 w-4 shrink-0 text-vibe-tint" aria-hidden />
              <span className="font-medium">특허 출원 번호</span>
              <span className="font-semibold text-white">{PATENT_APPLICATION_NO}</span>
              <span className="text-white/45">(특허 출원 중)</span>
            </div>
          </div>

          <dl className="grid gap-x-10 gap-y-2.5 text-[12.5px] leading-[1.7] sm:grid-cols-[auto_1fr] lg:max-w-[520px]">
            {COMPANY_ROWS.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="text-white/35">{label}</dt>
                <dd className="text-white/60">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/35">
            © {new Date().getFullYear()} {COMPANY.brand}. All rights reserved.
          </p>
          <nav aria-label="약관 및 정책" className="flex items-center gap-5 text-[12.5px]">
            <a href={LEGAL_LINKS.terms} className="text-white/60 transition-colors hover:text-white">
              이용약관
            </a>
            <a href={LEGAL_LINKS.privacy} className="font-semibold text-white/75 transition-colors hover:text-white">
              개인정보처리방침
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
