import { notFound } from "next/navigation";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PainSolutionSection from "@/components/landing/PainSolutionSection";
import PassOffsetSection from "@/components/landing/PassOffsetSection";
import UspBentoSection from "@/components/landing/UspBentoSection";
import { LOCALES, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";

/**
 * Only "ko" and "en" are exported. `next dev` needs this on the page itself when output is "export";
 * do NOT set `dynamicParams = false` here - with "output: export" it makes `next dev` fail for every locale.
 * Unknown locales are 404s in production simply because no such file exists in out/.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function Home({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict.header} />
      <main>
        <HeroSection dict={dict.hero} phone={dict.phone} store={dict.store} />
        <PainSolutionSection dict={dict.painSolution} />
        <UspBentoSection dict={dict.bento} />
        <HowItWorksSection dict={dict.howItWorks} />
        <PassOffsetSection dict={dict.pass} store={dict.store} />
        <FaqSection dict={dict.faq} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
