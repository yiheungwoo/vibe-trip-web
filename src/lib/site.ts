/**
 * 랜딩페이지 전역 상수.
 * CLAUDE.md의 Fact Sheet에 근거한 값만 확정 값으로 두고,
 * 확인되지 않은 항목(스토어 URL, 사업자 정보, 약관 URL)은 아래 TODO 자리표시자로 남겨 둔다.
 */

export const NAV_ITEMS = [
  { label: "특장점", id: "features" },
  { label: "이용안내", id: "how-it-works" },
  { label: "바이브픽", id: "vibe-pick" },
  { label: "패스안내", id: "pass" },
  { label: "FAQ", id: "faq" },
] as const;

/** TODO: 실제 스토어 URL이 확정되면 교체 */
export const STORE_LINKS = {
  appStore: "#download",
  googlePlay: "#download",
} as const;

/** 특허 출원 번호 (출원 중 — 등록 완료 아님. CLAUDE.md: "Patent Granted" 표기 금지) */
export const PATENT_APPLICATION_NO = "제10-2026-0139069호";

/** TODO: 약관/개인정보처리방침 페이지 URL이 확정되면 교체 */
export const LEGAL_LINKS = {
  terms: "#",
  privacy: "#",
} as const;

/** TODO: 사업자 정보 — 아래 자리표시자를 실제 값으로 교체 */
export const COMPANY = {
  brand: "Vibe Trip (바이브트립)",
  legalName: "[법인명 입력]",
  ceo: "[대표자명 입력]",
  businessNo: "000-00-00000",
  mailOrderNo: "제0000-지역-0000호",
  address: "[사업장 주소 입력]",
  contactEmail: "[고객센터 이메일 입력]",
} as const;
