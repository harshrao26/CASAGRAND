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
        <section className="py-16 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                        Your Path to Prestige Living
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
                        Three simple steps to unlock exclusive inventory, confidential pricing, and priority site visits.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Minimalist Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[72px] left-1/4 right-1/4 h-[1px] bg-gray-100" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="group relative flex flex-col items-center text-center animate-fade-in-up">
                                {/* Step Indicator & Icon Container */}
                                <div className="relative mb-8">
                                    <div className="w-16 h-16 rounded-[1.50rem] bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500 shadow-sm relative z-10">
                                        <Icon className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-white text-[12px] font-black z-20 shadow-lg group-hover:bg-yellow-600 transition-colors">
                                        {step.number}
                                    </div>

                                    {/* Decorative Glow */}
                                    <div className="absolute inset-0 bg-yellow-500/0 rounded-[1.50rem] group-hover:bg-yellow-500/20 blur-2xl transition-all duration-700" />
                                </div>

                                {/* Content */}
                                <div className="max-w-[280px]">
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Mobile/Tablet Connection Indicator */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden w-[1px] h-12 bg-gray-100 my-8" />
                                )}
                            </div>
                        );
                    })}
                </div>

               
            </div>
        </section>
    );
}
