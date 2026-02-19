'use client';

import { Award, Building2, Users, Shield, Star } from 'lucide-react';

const stats = [
    {
        icon: Award,
        title: '20+ Years of Excellence',
        description: 'Trusted legacy in real estate',
    },
    {
        icon: Building2,
        title: '140+ Completed Projects',
        description: 'Quality homes delivered',
    },
    {
        icon: Users,
        title: '50,000+ Happy Families',
        description: 'Satisfied homeowners',
    },
    {
        icon: Shield,
        title: 'RERA Approved',
        description: 'All developments certified',
    },
    {
        icon: Star,
        title: '4.5★ Rating',
        description: 'Google customer reviews',
    },
];

export default function WhyChooseSection() {
    return (
        <section className="py-16 bg-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                        The Casagrand <span className="text-yellow-500">Benchmark</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
                        South India's leading real estate developer, committed to providing world-class quality and exceptional value across every square foot.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center p-8 bg-gray-50/50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:border-yellow-200 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)] transition-all duration-500 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-yellow-500 transition-all duration-500 group-hover:scale-110">
                                    <Icon className="w-6 h-6 text-yellow-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-yellow-700 transition-colors">
                                    {stat.title}
                                </h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                                    {stat.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Trust Badge Row */}
                 
            </div>
        </section>
    );
}
