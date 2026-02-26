'use client';

import Image from 'next/image';
import { useState, useMemo, useEffect, useCallback } from 'react';
import LeadForm from './LeadForm';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects, getProject } from '@/data/projects';
import { MapPin, Sparkles, ChevronLeft, ChevronRight, Home, IndianRupee, ArrowUpRight, CheckCircle2 } from 'lucide-react';

function PropertySlideshow({ property }) {
    const images = property.images?.length ? property.images : [property.image];
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);
    const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, images.length]);

    return (
        <div className="relative h-[200px] sm:h-[300px] md:h-96 overflow-hidden rounded-t-xl mb-3 sm:mb-6 group/slide">
            {/* Location Ribbon */}
            <div className="absolute top-0 left-6 z-20">
                <div className="bg-[#1C8A9B] text-white text-[11px] font-semibold px-4 pt-2 pb-4 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] tracking-widest relative shadow-lg">
                    <span className="text-[12px] sm:text-[14px] font-medium tracking-tight">{property.city || property.location}</span>
                    <div className="absolute top-0 -left-2 w-2 h-2 bg-[#105661] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
                </div>
            </div>

            {/* Images */}
            {images.map((src, idx) => (
                <Image
                    key={idx}
                    src={src}
                    alt={`${property.name} ${idx + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx === 0}
                />
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A1C28] to-transparent z-10" />

            {/* Prev / Next arrows — only if multiple images */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 opacity-100 md:opacity-0 md:group-hover/slide:opacity-100 transition-opacity duration-200 active:scale-90"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 opacity-100 md:opacity-0 md:group-hover/slide:opacity-100 transition-opacity duration-200 active:scale-90"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dot indicators */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                                className={`rounded-full transition-all duration-300 ${idx === current ? 'bg-white w-4 h-1.5' : 'bg-white/50 w-1.5 h-1.5'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

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
        <section ref={propertiesSectionRef} className="md:py-16 py-8  bg-gra dient-to-b from-[#FDB33A]/90 to-[#FDB33A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                    <div className="max-w-5xl mx-auto ">

                        <h2 className="text-2xl sm:text-3xl text-center  text-black leading-[1.1] mb-4">
                            Explore Casagrand Projects in Chennai
                        </h2>
                        <p className="text-sm md:text-base text-center text-black leading-relaxed max-w-3xl mx-auto">
                            Discover premium homes across Chennai's fastest-growing residential locations. Detailed project information is available after registration.
                        </p>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 mt-10 lg:grid-cols-3 md:gap-6 gap-2">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5 flex flex-col group pb-4 sm:pb-8"
                        >
                            {/* Property Image Slideshow */}
                            <PropertySlideshow property={property} />

                            {/* Property Details */}
                            <div className="px-4 sm:px-6 flex-1 flex flex-col ">


                                {/* Project Name & Location */}
                                <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 leading-tight group-hover:text-[#fca326] transition-colors tight">
                                    Casagrand {property.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-gray-500 mb-4 mt-1">
                                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C8A9B]" />
                                    <span className="text-[12px] sm:text-[13px] font-medium text-gray-700">
                                        {property.location}{property.city ? `, ${property.city}` : ''}
                                    </span>
                                </div>

                                {/* Key Specs Grid */}
                                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {/* Configuration */}
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 mb-0.5">CONFIGURATION</p>
                                        <p className="text-[12px] sm:text-[13px] font-semibold text-gray-800 leading-snug">{property.configuration}</p>
                                    </div>
                                    {/* Acres */}
                                    {property.acres && (
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 mb-0.5">AREA</p>
                                        <p className="text-[12px] sm:text-[13px] font-semibold text-gray-800 leading-snug">{property.acres}</p>
                                    </div>
                                    )}
                                    {/* Starting Rate */}
                                    {property.startingRate && property.startingRate !== "Nil" && (
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 mb-0.5">STARTING RATE</p>
                                        <p className="text-[12px] sm:text-[13px] font-bold text-gray-800 leading-snug">{property.startingRate}</p>
                                    </div>
                                    )}
                                    {/* Budget Range */}
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 mb-0.5">BUDGET RANGE</p>
                                        <p className="text-[13px] sm:text-[15px] font-bold text-[#f5a631] leading-snug">{property.price}</p>
                                    </div>
                                </div>

                                {/* Amenities & Description */}
                                {property.description && (
                                    <div className="mb-4">
                                        <p className="text-[10px] font-bold text-gray-500 mb-1">OVERVIEW & AMENITIES</p>
                                        <p className="text-[11px] sm:text-[12px] text-gray-700 line-clamp-3 leading-snug font-medium">
                                            {property.description}
                                        </p>
                                    </div>
                                )}

                                {/* Near By Locations */}
                                {property.nearby && (
                                    <div className="mb-4">
                                        <p className="text-[10px] font-bold text-gray-500 mb-1">NEARBY</p>
                                        <p className="text-[11px] sm:text-[12px] text-gray-700 line-clamp-2 leading-snug font-medium">
                                            {property.nearby}
                                        </p>
                                    </div>
                                )}

                                {/* Links (Map & RERA) */}
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                                    {property.locationLink && (
                                    <a
                                        href={property.locationLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] sm:text-[12px] font-medium text-[#1C8A9B] hover:text-[#fca326] underline decoration-dotted underline-offset-4 transition-colors"
                                    >
                                        View on Google Maps
                                    </a>
                                    )}
                                    {property.reraNumber && (
                                    <p className="text-[9px] sm:text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                        <span className="font-bold">RERA:</span> {property.reraNumber}
                                    </p>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex flex-col gap-2.5">
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="bg-[#fca326] hover:bg-[#e09121] text-black py-2.5 px-4 rounded-xl transition-all text-[12px] sm:text-[13px] font-bold w-full shadow-sm active:scale-95"
                                    >
                                        {property.ctaText || "Get Cost Sheet"}
                                    </button>
                                    <div className="grid grid-cols-2 gap-2">
                                        {property.brochureLink && (
                                            <a 
                                                href={property.brochureLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-2 rounded-xl transition-all text-[11px] font-bold w-full flex items-center justify-center border border-gray-200"
                                            >
                                                PDF Brochure
                                            </a>
                                        )}
                                        {property.websiteLink && (
                                            <a 
                                                href={property.websiteLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-2 rounded-xl transition-all text-[11px] font-bold w-full flex items-center justify-center border border-gray-200"
                                            >
                                                Visit Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lead Form Modal — same as Header */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
                            <p className="text-gray-600 text-sm">Fill in your details and our experts will contact you shortly</p>
                        </div>

                        {/* Lead Form */}
                        <LeadForm />
                    </div>
                </div>
            )}
        </section>
    );
}
