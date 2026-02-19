import React from "react";
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

const page = () => {
  return (
    <ProjectProvider>
      <div>
        <Header />
        <Hero />
        <PropertiesSection />
        <WhyChooseSection />
        <BenefitsSection />
        <LeadMagnetSection />
        <HowItWorksSection />
        <TestimonialsSection />
         <Footer />
        
      </div>
    </ProjectProvider>
  );
};

export default page;
