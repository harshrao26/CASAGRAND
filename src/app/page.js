import React from "react";
import { Poppins } from "next/font/google";
import Header from "@/app/v3/component/Header";
import Hero from "@/app/v3/component/Hero";
import PropertiesSection from "@/app/v3/component/PropertiesSection";
import InteriorShowcase from "@/app/v3/component/InteriorShowcase";
import WhyChooseSection from "@/app/v3/component/WhyChooseSection";
import FAQSection from "@/app/v3/component/FAQSection";
import { ProjectProvider } from "@/context/ProjectContext";
import TestimonialsSection from "@/app/v3/component/TestimonialsSection";
import Footer from "@/app/v3/component/Footer";
import StickyFooter from "@/app/v3/component/StickyFooter";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
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
}
