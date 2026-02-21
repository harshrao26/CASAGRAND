import React from 'react';
import { Home, TrendingUp, ShieldCheck, MapPin, Building2, Briefcase } from 'lucide-react';

const cards = [
    {
        icon: Building2,
        title: "IT & Industry Hubs",
        desc: "Strong demand driven by the booming IT and manufacturing sectors in Chennai."
    },
    {
        icon: MapPin,
        title: "Elite Connectivity",
        desc: "Excellent metro and road networks connecting major business hubs and residential areas."
    },
    {
        icon: TrendingUp,
        title: "Steady Appreciation",
        desc: "Consistent property value appreciation and high rental yields for long-term growth."
    },
    {
        icon: ShieldCheck,
        title: "Stable Investment",
        desc: "One of India's most stable markets, perfect for both end-users and smart investors."
    },
    {
        icon: Home,
        title: "Premium Proximity",
        desc: "Strategically located near top schools, hospitals, and malls for an effortless lifestyle."
    },
    {
        icon: Briefcase,
        title: "Employment Growth",
        desc: "Located within 10-20 minutes of major IT parks and employment centers."
    }
];

export default function WhyChooseSection() {

    return (
        <section className="relative w-full py-16 bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-[56px] font-serif text-[#1C1C1C] mb-4 tracking-tight leading-tight">
                    Why Invest in Chennai Real Estate?
                </h2>
                <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide max-w-3xl mx-auto">
                    Chennai continues to be one of India’s most stable and high-potential real estate markets, driven by strong IT growth, infrastructure development, and consistent demand from end-users and investors.
                </p>
            </div>

            {/* Grid Container */}
            <div className="relative w-full max-w-8xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col hover:shadow-2xl hover:border-[#FCB63A]/20 transition-all duration-500 group/card cursor-default"
                            >
                                <div className="mb-8 h-14 w-14 flex items-center justify-center bg-[#FDF8F4] rounded-xl transition-colors duration-500 group-hover/card:bg-[#FCB63A]/10">
                                    <Icon className="w-8 h-8 text-[#FCB63A] transition-transform duration-500 group-hover/card:scale-110" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-3xl font-semibold font-serif text-[#1C1C1C] mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Subtle bottom accent line */}
            <div className="max-w-8xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#FCB63A] via-gray-200 to-transparent" />
            </div>
        </section>
    );
}
