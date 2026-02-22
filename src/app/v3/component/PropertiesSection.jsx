'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import LeadForm from './LeadForm';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects, getProject } from '@/data/projects';
import { MapPin, Sparkles, ChevronLeft, ChevronRight, Home, IndianRupee, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function PropertiesSection() {
    const [activeCategory, setActiveCategory] = useState('All Type');
    const [showModal, setShowModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { selectedProject, propertiesSectionRef } = useProjectContext();

    // Filter properties based on selected project
    const properties = useMemo(() => {
        if (selectedProject) {
            const project = getProject(selectedProject);
            return project ? [project] : [];
        } else {
            return getAllProjects();
        }
    }, [selectedProject]);

    const handleViewDetails = (property) => {
        setSelectedProperty(property);
        setShowModal(true);
    };

    return (
        <section ref={propertiesSectionRef} className="md:py-16 py-8  bg-gradient-to-b from-[#FDB33A]/90 to-[#FDB33A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                    <div className="max-w-5xl mx-auto ">

                        <h2 className="text-4xl sm:text-7xl text-center  text-black leading-[1.1] mb-4">
                            Explore Casagrand Projects in Chennai
                        </h2>
                        <p className="md:text-2xl text-xl text-center text-black leading-relaxed">
                            Discover premium homes across Chennai's fastest-growing residential locations. Detailed project information is available after registration.
                        </p>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5 flex flex-col group pb-8"
                        >
                            {/* Property Image Container */}
                            <div className="relative h-96 overflow-hidden rounded-t-xl mb-6">
                                {/* NEW Ribbon */}
                                <div className="absolute top-0 left-6 z-20">
                                    <div className="bg-[#1C8A9B] text-white text-[11px] font-semibold px-4 pt-2 pb-4 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] tracking-widest relative shadow-lg">

                                        {property.label}
                                      <div className="absolute top-0 -left-2 w-2 h-2 bg-[#105661] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
                                    </div>
                                </div>

                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                {/* Optional subtle gradient overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1C28] to-transparent" />
                            </div>

                            {/* Property Details */}
                            <div className="px-6 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-black mb-1 leading-tight group-hover:text-[#1C8A9B] transition-colors tracking-tight">
                                    {property.name}
                                </h3>
                                <p className="text-[13px] font-bold tracking-[0.15em] text-black uppercase mb-5">
                                    {property.configuration || "1, 2 AND 3 BED APARTMENTS"}
                                </p>

                               

                                <div className="mb-4">
                                    <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-black mb2">
                                        STARTING FROM
                                    </p>
                                    <p className="text-[22px] font-bold text-[#f5a631] tracking-wide">
                                        {property.price}
                                    </p>
                                </div>

                                <a
                                    href={property.locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-black mb-6 hover:text-[#1C8A9B] transition-colors group/loc"
                                >
                                    <MapPin className="w-[18px] h-[18px] shrink-0 transition-transform group-hover/loc:scale-110" strokeWidth={2} />
                                    <span className="text-[15px] font-medium underline decoration-black decoration-dotted underline-offset-4">View Location</span>
                                </a>

                                {property.nearby && (
                                    <div className="mb-4">
                                        <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-black mb-2">
                                            NEAR BY
                                        </p>
                                        <p className="text-[16px] text-gray-700 leading-snug   font-medium pr-4">
                                            {property.nearby}
                                        </p>
                                    </div>
                                )}

                                {property.reraNumber && (
                                    <div className="mb-4 flex items-center text-[12px] font-bold uppercase tracking-[0.1em] text-gray-500 gap-2">
                                        <p className="      ">
                                            RERA NO:
                                        </p>
                                        <p className=" ">
                                            {property.reraNumber}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-auto">
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="border border-white bg-[#fca326] hover:bg-[#e09121] text-black py-4 px-8 rounded-[40px] transition-all text-[15px] trac king-[0.15em] font-bold   w-full shadow-sm active:scale-95"
                                    >
                                        {property.ctaText || "Enquire Now"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lead-Gated Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop with heavy blur */}
                    <div
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl animate-fade-in transition-all duration-700"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal Content */}
                    <div className="bg-white   max-w-2xl w-full   relative z-10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.4)] border border-gray-100 animate-fade-in-up flex flex-col items-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-1 z-[10000000] right-1 p-3 rounded-full hover:bg-gray-100 text-red-900 hover:text-gray-900 transition-all active:scale-90"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Integrated Lead Form Container */}
                        <div className="w-full bg-gray-50/50 p-6 sm:p-8 rounded-[3rem] border border-gray-100 relative group/form transition-all duration-500 hover:border-yellow-200 hover:bg-white shadow-sm">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
