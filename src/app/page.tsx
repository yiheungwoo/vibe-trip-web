import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PainSolutionSection from "@/components/landing/PainSolutionSection";
import PassOffsetSection from "@/components/landing/PassOffsetSection";
import UspBentoSection from "@/components/landing/UspBentoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainSolutionSection />
        <UspBentoSection />
        <HowItWorksSection />
        <PassOffsetSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
