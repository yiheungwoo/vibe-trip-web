import type { Metadata, Viewport } from "next";
import MotionProvider from "@/components/landing/MotionProvider";
import "./globals.css";

const TITLE = "Vibe Trip (바이브트립) — 대화 한 번으로 완성하는 AI 여행 플래너";
const DESCRIPTION =
  "AI 플래닝부터 바우처 자동 정리, 실시간 위치 기반 현지 케어까지. 바이브트립 하나로 여행 준비를 3분 만에 끝내세요.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Vibe Trip",
  keywords: ["바이브트립", "Vibe Trip", "AI 여행 플래너", "여행 일정", "바우처 OCR", "여행 앱"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Vibe Trip",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
