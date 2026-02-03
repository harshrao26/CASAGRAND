'use client';

import { Gift, FileText, Video, Users } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const benefits = [
    {
        icon: FileText,
        title: 'Detailed price sheets',
        description: 'Complete pricing information',
    },
    {
        icon: Gift,
        title: 'Exclusive offers',
        description: 'Launch & festive discounts',
    },
    {
        icon: Users,
        title: 'Expert consultation',
        description: 'Free property guidance',
    },
    {
        icon: Video,
        title: 'Virtual walkthroughs',
        description: 'HD videos & 360° tours',
    },
];

export default function LeadMagnetSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Unlock Exclusive Benefits
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Register now to receive priority access to:
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                                            <p className="text-blue-100 text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-sm text-blue-200">
                            ⏰ Limited-time benefits available for registered users only.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Get Project Details Instantly
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Fill in your details to unlock exclusive offers
                        </p>

                        <LeadForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
