'use client';

import { FileText, Download, Calendar } from 'lucide-react';

const steps = [
    {
        number: '1',
        icon: FileText,
        title: 'Submit Your Details',
        description: 'Fill a simple form to get access to project information.',
    },
    {
        number: '2',
        icon: Download,
        title: 'Get Instant Access',
        description: 'Receive brochures, floor plans, pricing & offers instantly.',
    },
    {
        number: '3',
        icon: Calendar,
        title: 'Schedule a Visit',
        description: 'Our expert will help you book a site visit or consultation.',
    },
];

export default function HowItWorksSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Getting Your Dream Home Details Is Easy
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Follow these simple steps to unlock exclusive property information and start your
                        journey to your dream home.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Lines */}
                    <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    {/* Step Number Circle */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg z-10 relative">
                                            {step.number}
                                        </div>
                                        <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                                    </div>

                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
