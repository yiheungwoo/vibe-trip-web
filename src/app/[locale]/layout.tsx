import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import MotionProvider from "@/components/landing/MotionProvider";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

// Production origin (www is the canonical host). CI overrides it via the SITE_URL repository variable.
// `||` (not `??`): CI passes an empty string when the variable is unset.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.vibetrip.co.kr";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const { meta } = getDictionary(params.locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: "Vibe Trip",
    keywords: meta.keywords,
    alternates: {
      canonical: `/${params.locale}`,
      languages: { ko: "/ko", en: "/en", "x-default": "/ko" },
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      siteName: "Vibe Trip",
      title: meta.title,
      description: meta.description,
      url: `/${params.locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#07070C",
  colorScheme: "dark",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();

  return (
    <html lang={params.locale}>
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
