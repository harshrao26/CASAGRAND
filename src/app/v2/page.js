import React, { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { ProjectProvider } from "@/context/ProjectContext";
import PropertiesSection from "./components/PropertiesSection";
import BenefitsSection from "./components/BenefitsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import LeadMagnetSection from "./components/LeadMagnetSection";
import WhyChooseSection from "./components/WhyChooseSection";
import Footer from "./components/Footer";
import StickyFooter from "./components/StickyFooter";
import { Loader2 } from "lucide-react";

const page = () => {
  return (
    <ProjectProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#FDB33A] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
        <div>
          <Header />
          <StickyFooter/>
          <Hero />
          <PropertiesSection />
          <WhyChooseSection />
          <BenefitsSection />
          <LeadMagnetSection />
          <HowItWorksSection />
          <TestimonialsSection />
           <Footer />
        </div>
      </Suspense>
    </ProjectProvider>
  );
};

export default page;
