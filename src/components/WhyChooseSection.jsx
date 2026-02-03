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
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Why Homebuyers Trust Casagrand
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Casagrand is one of South India's most trusted real estate developers, known for
                        delivering high-quality homes that combine thoughtful design, modern amenities, and
                        long-term value.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                            >
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badges */}
                
            </div>
        </section>
    );
}
