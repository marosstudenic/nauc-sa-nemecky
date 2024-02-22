import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { OfferSection } from "./components/OfferSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AboutLectorSection } from "./components/AboutLectorSection";
import { CTASection } from "./components/CTASection";
import { PricingSection } from "./components/PricingSection";
import { TestLessonSection } from "./components/TestLessonSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 overflow-hidden">
      <HeroSection />
      <ReviewsSection />
      <OfferSection />
      <SocialProofSection />
      <AboutLectorSection />
      <CTASection />
      <PricingSection />
      <TestLessonSection />
      <ContactForm />
    </main >
  );
}
