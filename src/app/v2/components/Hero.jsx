"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import h1 from "@/assets/hero/h1.png"
import h2 from "@/assets/hero/h2.png"
import h3 from "@/assets/hero/h3.png"
import h4 from "@/assets/hero/h4.png"
import h5 from "@/assets/hero/h5.png"
import { Search, ChevronDown, CheckCircle2 } from 'lucide-react';
import LeadForm from './LeadForm';
import { useProjectContext } from '@/context/ProjectContext';

const PROJECTS_BY_REGION = {
  'North Chennai': ['Mercury'],
  'West Chennai': ['Elysium', 'Massimo', 'Osaka', 'Reva'],
  'OMR': ['Hola', 'Flagship', 'Jarvis'],
  'GST': ['Madelyn', 'Primrose']
};

export default function Hero() {
  const [localSelectedProject, setLocalSelectedProject] = useState('Select Project');
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const { setSelectedProject, scrollToProperties } = useProjectContext();

  const handleSearch = () => {
    if (localSelectedProject !== 'Select Project') {
      setSelectedProject(localSelectedProject);
    } else {
      setSelectedProject(null);
    }
    scrollToProperties();
  };

  const slides = useMemo(
    () => [
      { key: "bg-1", src: h1 },
      { key: "bg-2", src: h2 },
      { key: "bg-3", src: h4 },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background marquee (cross-fade) */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.src}
              alt="Background"
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover scale-105"
            />
          </div>
        ))}
        {/* Multi-layered overlay for depth and contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-transparent z-20" />
      </div>

      {/* Content Container */}
      <div className="relative  z-30 mx-auto max-w-8xl px-6 sm:px-8 pt-20 pb-16 w-full">

        {/* Grid Layout for Desktop */}
        <div className="grid grid-cols-1 pt-10 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Brand Content & Search */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                RERA Approved Projects
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Trusted Developer
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Happy Homeowners
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-[1.1] tracking-tight opacity-0 animate-fade-in-up delay-100">
              Explore Premium Homes <br /> in Chennai
            </h1>

            {/* Subcopy */}
            <div className="space--4">
              <p className="text-xl sm:text-3xl font-bold text-yellow-500 leading-relaxed opacity-0 animate-fade-in-up delay-200">
                Unlock Brochures, Prices & Exclusive Offers
              </p>
              <p className="max-w-xl text-lg text-white/70 leading-relaxed opacity-0 animate-fade-in-up delay-200">
                Compare 5+ Casagrand Residential Projects in Chennai and get instant access to floor plans, pricing, and limited-period offers.
              </p>
            </div>

            {/* Search Bar Container */}
            <div className="w-full md:block hidden  max-w-xl opacity-0 animate-fade-in-up delay-300">
              <div className="bg-white/95 backdrop-blur-2xl p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 flex flex-col sm:flex-row items-center gap-2">

                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">

                  {/* Budget Selector */}
                  <div className="px-6 py-3 cursor-pointer group">
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-yellow-600 transition-colors mb-1">Budget</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900">Any Budget</span>
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-transform" />
                    </div>
                  </div>

                  {/* Project Selector */}
                  <div className="relative px-6 py-3 cursor-pointer group" onClick={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-yellow-600 transition-colors mb-1">Project</label>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-gray-900 truncate pr-2">{localSelectedProject}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-transform ${isProjectDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Custom Dropdown Menu */}
                    {isProjectDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                        <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
                          {Object.entries(PROJECTS_BY_REGION).map(([region, projects]) => (
                            <div key={region} className="mb-4 last:mb-0">
                              <div className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50/50 rounded-lg mb-1">
                                {region}
                              </div>
                              {projects.map((project) => (
                                <div
                                  key={project}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLocalSelectedProject(project);
                                    setIsProjectDropdownOpen(false);
                                  }}
                                  className="px-4 py-2.5 hover:bg-yellow-50 rounded-xl cursor-pointer text-sm font-semibold text-gray-700 hover:text-yellow-600 transition-all flex items-center justify-between group/item"
                                >
                                  {project}
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-[1.5rem] transition-all flex items-center justify-center gap-3 shadow-lg shadow-yellow-500/20 active:scale-95"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-5 opacity-0 animate-fade-in-up delay-400">
            <div className="bg-white/95 backdrop-blur-2xl p-5 sm:p-6 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Get Instant Access</h3>
                <p className="text-gray-500 text-sm">Download brochure and price sheet instantly</p>
              </div>
              <LeadForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}