'use client';

import Image from 'next/image';
import { MapPin, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from 'react';
import LeadForm from '@/components/LeadForm';
import { useProjectContext } from '@/context/ProjectContext';
import { getAllProjects, getProject } from '@/data/projects';

const categories = [
    'All Type',
    'Industrial House',
    'Apartment',
    'Villa',
    'Duplex',
    'Warehouse',
    'Resort',
];

export default function PropertiesSection() {
    const [activeCategory, setActiveCategory] = useState('All Type');
    const [showModal, setShowModal] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { selectedProject, propertiesSectionRef } = useProjectContext();

    // Filter properties based on selected project
    const properties = useMemo(() => {
        if (selectedProject) {
            // If a specific project is selected, show only that project
            const project = getProject(selectedProject);
            return project ? [project] : [];
        } else {
            // Show all projects
            return getAllProjects();
        }
    }, [selectedProject]);

    const handleViewDetails = (property) => {
        setSelectedProperty(property);
        setShowModal(true);
    };

    return (
        <section ref={propertiesSectionRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Explore Casagrand Projects in Chennai
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Discover premium homes across Chennai's fastest-growing residential locations.
                        Detailed project information is available after registration.
                    </p>
                </div>

                {/* Category Filter */}
                {/* <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                                activeCategory === category
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div> */}

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Property Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                {/* Location Tag */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/20 shadow-lg">
                                        <MapPin className="w-3 h-3" />
                                        {property.location}
                                    </div>
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {property.name}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{property.location}</span>
                                </div>

                                {/* Price */}
                                <div className="mb-2">
                                    <span className="text-sm text-gray-600">Starting at </span>
                                    <span className="text-xl font-bold text-gray-900">
                                        {property.price}
                                    </span>
                                    <span className="text-sm text-gray-500">*</span>
                                </div>

                                {/* Amenities */}
                                <div className="flex items-center gap-2 text-gray-600 mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-sm">{property.amenities}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
                                    >
                                        Get A Quote Now
                                    </button>
                                    <button
                                        onClick={() => handleViewDetails(property)}
                                        className="flex-1 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 py-2.5 px-4 rounded-lg font-medium transition-colors text-sm"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lead-Gated Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Get Exclusive Details
                            </h3>
                            <p className="text-gray-600">
                                Register to view complete project details for {selectedProperty?.name}
                            </p>
                        </div>

                        {/* Lead Form */}
                        <LeadForm />
                    </div>
                </div>
            )}
        </section>
    );
}
