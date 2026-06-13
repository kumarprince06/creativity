import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TargetAudiencesSection } from "@/components/sections/TargetAudiencesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { StoreTimingsSection } from "@/components/sections/StoreTimingsSection";
import { CTASection } from "@/components/sections/CTASection";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Home" 
        description="Welcome to Creativity - your trusted printing and stationery hub in Belur, Howrah. We offer fast, affordable, and high-quality xerox, custom t-shirt printing, binding, and premium office supplies." 
        keywords="printing shop Belur, xerox near me, custom printing Howrah, premium stationery, online printing services" 
        url="/"
      />
      <HeroSection />
      <MarqueeBanner />
      <ServicesSection />
      <StatsSection />
      <WhyChooseSection />
      <TargetAudiencesSection />
      <TestimonialsSection />
      <FAQSection />
      <StoreTimingsSection />
      <CTASection />
    </div>
  );
}
