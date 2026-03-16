'use client';

import Image from 'next/image';
import { useState, useMemo, useEffect, useCallback } from 'react';
import LeadForm from './LeadForm';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects, getProject } from '@/data/projects';
import { MapPin, Sparkles, ChevronLeft, ChevronRight, Home, IndianRupee, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const getProjectTags = (config) => {
    if (!config) return null;
    
    const lowerConfig = config.toLowerCase();
    const hasApartment = lowerConfig.includes('apartment');
    const hasVilla = lowerConfig.includes('villa');
    
    // Only show the badge if it's an Apartment or Villa
    if (!hasApartment && !hasVilla) return null;

    const parts = [];
    
    // Extract BHK part (e.g., "3/4 BHK")
    const bhkMatch = config.match(/[\d/]+\s*BHK/i);
    if (bhkMatch) {
        parts.push(bhkMatch[0].toUpperCase());
    }
    
    // Type part
    if (hasApartment) parts.push('Apartment');
    if (hasVilla) parts.push('Villa');
    
    const uniqueParts = [...new Set(parts)];
    return uniqueParts.join(' • ');
};

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
            {/* Project Tags / Batch */}
            {getProjectTags(property.configuration) && (
                <div className="absolute top-0 right-0 z-20">
                    <div className="bg-[#fca326] text-black text-[10px] sm:text-[12px] font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-bl-xl shadow-lg border-l border-b border-white/20 animate-in fade-in slide-in-from-right-4 duration-500 whitespace-nowrap">
                        {getProjectTags(property.configuration)}
                    </div>
                </div>
            )}

            {/* Location Ribbon */}
            {/* <div className="absolute top-0 left-6 z-20">
                <div className="bg-[#1C8A9B] text-white text-[11px] font-semibold px-4 pt-2 pb-4 [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] tracking-widest relative shadow-lg">
                    <span className="text-[12px] sm:text-[14px] font-medium tracking-tight">{property.city || property.location}</span>
                    <div className="absolute top-0 -left-2 w-2 h-2 bg-[#105661] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
                </div>
            </div> */}

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
    const { selectedProject, propertiesSectionRef, filterCity, filterPriceRange, filtersApplied, clearFilters } = useProjectContext();

    // Parse a price string to a numeric value in Lakhs for comparison
    const parseLakhs = (priceStr) => {
        if (!priceStr) return 0;
        const firstPart = priceStr.split(/[–-]/)[0].toLowerCase();
        const nums = firstPart.match(/[\d.]+/g);
        if (!nums) return 0;
        let val = parseFloat(nums[0]);
        if (firstPart.includes('cr')) {
            val = val * 100;
        }
        return Math.round(val);
    };

    // Filter properties based on selected project AND context filters
    const properties = useMemo(() => {
        let list;
        if (selectedProject) {
            const project = getProject(selectedProject);
            list = project ? [project] : [];
        } else {
            list = getAllProjects();
        }

        if (filtersApplied) {
            if (filterCity && filterCity !== 'All') {
                list = list.filter(p => p.city === filterCity || p.location?.toLowerCase().includes(filterCity.toLowerCase()));
            }
            list = list.filter(p => {
                const minPrice = parseLakhs(p.price);
                return minPrice >= filterPriceRange[0] && minPrice <= filterPriceRange[1];
            });
        }

        return list;
    }, [selectedProject, filterCity, filterPriceRange, filtersApplied]);

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

                {/* Property Grid or Empty State */}
                {properties.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="text-5xl mb-4">🏠</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
                        <p className="text-gray-500 text-sm max-w-md mb-6">
                            No projects match your current filters. Try adjusting the city or price range.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="bg-[#FCB63A] hover:bg-[#e0a030] text-black font-bold px-6 py-3 rounded-xl transition-all active:scale-95 text-sm"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-2 mt-10 lg:grid-cols-3 md:gap-6 gap-2">
                        {properties.map((property) => (
                            <div
                                key={property.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5 flex flex-col group pb-4 sm:pb-8"
                            >
                                {/* Property Image Slideshow */}
                                <PropertySlideshow property={property} />

                                {/* Property Details */}
                                <div className="px-2 sm:px-6 flex-1 flex flex-col ">


                                    {/* Project Name & Location */}
                                    <h3 className="text-sm sm:text-lg font-semibold text-black mb- leading-tight group-hover:text-[#fca326] transition-colors tight">
                                        Casagrand {property.name}
                                    </h3>
                                    <div className="flex items-cen ter gap-1.5 text-gray-500 ">
                                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1C8A9B]" />
                                        <span className="text-[12px] sm:text-[13px] font-medium text-gray-700">
                                            {property.location}{property.city ? `, ${property.city}` : ''}
                                        </span>
                                    </div>

                                    {/* Key Specs Grid */}
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 mb-0.5">CONFIGURATION</p>
                                        <p className="text-[12px] sm:text-[13px] font-  text-gray-800 leading-snug">
                                            {property.configuration}
                                        </p>
                                    </div>
                                    {/* Acres */}

                                    {/* Starting Rate */}

                                    {/* Budget Range */}
                                    <div>
                                        <p className="text-[10px] mt-2 font-bold text-gray-500 mb-0.5">BUDGET RANGE</p>
                                        <p className="text-[13px] sm:text-[15px] font-  text-[#f5a631] leading-snug">
                                            {property.budgetRange}
                                        </p>
                                    </div>



                                    {/* Near By Locations */}
                                    {property.nearby && (
                                        <div className="mb-2 mt-2">
                                            <p className="text-[10px] font-bold text-gray-500 mb-1">NEARBY</p>
                                            <p className="text-[11px] sm:text-[12px] text-gray-700 capitalize line-clamp-3 leading-snug font-medium">
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
                                    <div className="mt-auto flex  gap-2.5">
                                        <button
                                            onClick={() => handleViewDetails(property)}
                                            className="bg-[#fca326] hover:bg-[#e09121] text-black py-2.5 px-4 rounded-xl transition-all text-[9px] sm:text-[11px] font-bold w-full shadow-sm active:scale-95"
                                        >
                                            {property.ctaText || "Get A Quote"}
                                        </button>
                                        <button
                                            onClick={() => handleViewDetails(property)}
                                            className="bg-[#fca326] hover:bg-[#e09121] text-black py-2.5 px-4 rounded-xl transition-all text-[9px] sm:text-[11px] font-bold w-full shadow-sm active:scale-95"
                                        >
                                            {  "  Brochure"}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Detailed  <br />Pricing & Floor Plans
                            </h3>

                        </div>

                        {/* Lead Form */}
                        <LeadForm projectName={selectedProperty ? `Casagrand ${selectedProperty.name}` : "Properties Section Inquiry"} />
                    </div>
                </div>
            )}
        </section>
    );
}
