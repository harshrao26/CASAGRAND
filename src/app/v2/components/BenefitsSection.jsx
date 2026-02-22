'use client';

import { TrendingUp, Map, Building2, Briefcase, Train, School } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: Briefcase,
            text: "Strong demand from IT & manufacturing sectors"
        },
        {
            icon: Map,
            text: "Excellent metro & road connectivity"
        },
        {
            icon: TrendingUp,
            text: "Steady property appreciation & rental yields"
        },
        {
            icon: Building2,
            text: "Ideal for both end-use and long-term investment"
        }
    ];

    const proximityHighlights = [
        {
            icon: Briefcase,
            text: "IT Parks & Business Hubs – 10–20 mins"
        },
        {
            icon: Train,
            text: "Metro Stations – Easy access"
        },
        {
            icon: School,
            text: "Schools, Hospitals & Malls – Nearby"
        }
    ];

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
Why Invest in Chennai Real Estate?
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
Chennai continues to be one of India’s most stable and high-potential real estate markets, driven by strong IT growth, infrastructure development, and consistent demand from end-users and investors.

                    </p>
                </div>

                {/* Benefits Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {benefits.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="group bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500 animate-fade-in-up">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100 group-hover:border-yellow-500">
                                    <Icon className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-gray-900 font-bold text-lg leading-snug">
                                    {item.text}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Focused Proximity Card */}
                <div className="animate-fade-in-up">
                    <div className="bg-white rounded-[3rem] p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden relative">
                        {/* Subtle Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                        
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                            <div className="max-w-md">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-1 w-12 bg-yellow-500 rounded-full" />
                                    <span className="text-yellow-600 font-bold text-xs uppercase tracking-widest">Connective Nodes</span>
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-6 leading-tight">
                                    Connectivity <br /> Redefined
                                </h3>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <Map className="w-6 h-6 text-yellow-500" />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600">Strategic positions near Chennai's multi-modal employment corridors.</span>
                                </div>
                            </div>

                            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {proximityHighlights.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-yellow-100 hover:shadow-sm transition-all duration-500">
                                            <div className="p-2.5 rounded-xl bg-white text-yellow-500 shadow-sm border border-gray-50">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-600 leading-tight">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
