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
        <section ref={propertiesSectionRef} className="py-16 bg-gray-50/50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-1 w-12 bg-yellow-500 rounded-full" />
                            <span className="text-yellow-600 font-semibold text-xs uppercase tracking-[0.2em] py-1">Featured Collections</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                            Explore Casagrand Projects   in Chennai
                        </h2>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">
                            Discover premium homes across Chennai's fastest-growing residential locations. Detailed project information is available after registration.

                        </p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="p-5 rounded-3xl bg-white border border-gray-100 hover:bg-yellow-500 hover:text-white transition-all shadow-sm active:scale-95">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="p-5 rounded-3xl bg-white border border-gray-100 hover:bg-yellow-500 hover:text-white transition-all shadow-sm active:scale-95">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 border border-gray-100 flex flex-col"
                        >
                            {/* Property Image Container */}
                            <div className="relative h-80 overflow-hidden m-4 rounded-[2.5rem]">
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />

                                {/* Image Overlays */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex items-end">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1 px-3 rounded-xl bg-yellow-500 text-white text-[10px] font-black uppercase tracking-[0.15em] shadow-2xl">
                                            RERA Verified
                                        </div>
                                    </div>
                                </div>

                                {/* Location Badge */}
                                <div className="absolute top-6 right-6">
                                    <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-[1.25rem] shadow-2xl flex items-center gap-2.5 border border-white">
                                        <MapPin className="w-4 h-4 text-yellow-500" />
                                        <span className="text-sm font-semibold text-gray-900">{property.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="px-6 py-2 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors mb-2">
                                            {property.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <IndianRupee className="w-4 h-4" />
                                            <span className="text-sm font-semibold text-gray-600">Starting from {property.price}</span>
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-2xl bg-gray-50 text-gray-300 group-hover:text-yellow-500 group-hover:bg-yellow-50 transition-all duration-500">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Amenities Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-gray-50/50 border border-transparent group-hover:bg-white group-hover:border-yellow-100 group-hover:shadow-sm transition-all duration-500">
                                        <div className="p-2 rounded-xl bg-white text-yellow-500 shadow-sm border border-gray-50">
                                            <Sparkles className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 truncate">{property.amenities}</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-4 rounded-[1.5rem] bg-gray-50/50 border border-transparent group-hover:bg-white group-hover:border-yellow-100 group-hover:shadow-sm transition-all duration-500">
                                        <div className="p-2 rounded-xl bg-white text-yellow-500 shadow-sm border border-gray-50">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-tighter">Luxury Living</span>
                                    </div>
                                </div>

                                <div className="mt-auto flex flex-col gap-4">
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="w-full bg-gray-900 hover:bg-yellow-500 text-white py-5 px-8 rounded-2xl font-semibold transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-yellow-500/30 active:scale-95 group/btn overflow-hidden relative"
                                    >
                                        <span className="relative z-10">Instant Price Sheet</span>
                                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="w-full border-2 border-gray-100 hover:border-yellow-500 text-gray-500 hover:text-yellow-600 py-5 px-8 rounded-2xl font-semibold transition-all hover:bg-yellow-50/50 active:scale-95"
                                    >
                                        Request Callback
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
                    <div className="bg-white rounded-[4rem] max-w-2xl w-full p-8 sm:p-10 relative z-10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.4)] border border-gray-100 animate-fade-in-up flex flex-col items-center">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-8 right-8 p-3 rounded-full hover:bg-gray-100 text-gray-300 hover:text-gray-900 transition-all active:scale-90"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-50 text-yellow-600 font-black text-[10px] uppercase tracking-[0.25em] mb-6 shadow-sm border border-yellow-100/50">
                                <Sparkles className="w-3 h-3" />
                                <span>Platinum Access</span>
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
                                Unlock <br /> Elite Details
                            </h3>
                            <p className="text-gray-400 font-medium max-w-sm mx-auto leading-relaxed">
                                Join our elite registry to receive the <span className="text-gray-900 font-semibold italic">Master Plan</span>, <span className="text-gray-900 font-semibold italic">Confidential Price List</span>, and priority site visit slots for <span className="text-yellow-600 font-bold underline decoration-yellow-200 decoration-2 underline-offset-4">{selectedProperty?.name}</span>.
                            </p>
                        </div>

                        {/* Integrated Lead Form Container */}
                        <div className="w-full bg-gray-50/50 p-6 sm:p-8 rounded-[3rem] border border-gray-100 relative group/form transition-all duration-500 hover:border-yellow-200 hover:bg-white shadow-sm">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full border border-gray-100 shadow-sm text-[10px] font-black uppercase tracking-widest text-gray-400">
                                Secure Registration
                            </div>
                            <LeadForm />
                        </div>

                        {/* Brand Trust Footer */}
                        <div className="mt-12 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 whitespace-nowrap">Official Developer Partner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
