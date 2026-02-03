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
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Why Invest in Chennai Real Estate?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Chennai continues to be one of India’s most stable and high-potential real estate markets, driven by strong IT growth, infrastructure development, and consistent demand from end-users and investors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Key Benefits Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                            Key Benefits
                        </h3>
                        <div className="grid gap-6">
                            {benefits.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                                            <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Proximity Highlights Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-green-500 rounded-full"></span>
                            Proximity Highlights
                        </h3>
                        <div className="grid gap-6">
                            {proximityHighlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                                            <Icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <p className="text-gray-700 font-medium pt-2">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Decorative Map/City Illustration Hint */}
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
                                <Map className="w-5 h-5" />
                                <span>Strategic locations near major employment hubs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
