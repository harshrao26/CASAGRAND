import React from "react";
import { Poppins } from "next/font/google";
import Header from "./component/Header";
import Hero from "./component/Hero";
import PropertiesSection from "./component/PropertiesSection";
import InteriorShowcase from "./component/InteriorShowcase";
import WhyChooseSection from "./component/WhyChooseSection";
import FAQSection from "./component/FAQSection";
import { ProjectProvider } from "@/context/ProjectContext";
import TestimonialsSection from "./component/TestimonialsSection";
import Footer from "./component/Footer";
import StickyFooter from "./component/StickyFooter";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <ProjectProvider>
      <main className={`${poppins.className} relative min-h-screen`}>
        <Header />
        <Hero />
        <PropertiesSection />
        <WhyChooseSection />
        <InteriorShowcase />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
        <StickyFooter />
      </main>
    </ProjectProvider>
  );
};

export default page;
