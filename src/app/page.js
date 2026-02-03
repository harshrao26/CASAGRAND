import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PropertiesSection from "@/components/PropertiesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import StickyFooter from "@/components/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <PropertiesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <LeadMagnetSection />
      <TestimonialsSection />
      <Footer />
      <StickyFooter />
    </main>
  );
}
