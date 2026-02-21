import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import PropertiesSection from "./component/PropertiesSection";
import InteriorShowcase from "./component/InteriorShowcase";
import WhyChooseSection from "./component/WhyChooseSection";
import FAQSection from "./component/FAQSection";
import { ProjectProvider } from "@/context/ProjectContext";
import TestimonialsSection from "./component/TestimonialsSection";
import Footer from "./component/Footer";

const page = () => {
  return (
    <ProjectProvider>
      <main className="relative min-h-screen">
        <Header />
        <Hero />
        <PropertiesSection />
        <WhyChooseSection />
        <InteriorShowcase />
        <TestimonialsSection />
        <FAQSection />
        <Footer />

      </main>
    </ProjectProvider>
  );
};

export default page;
