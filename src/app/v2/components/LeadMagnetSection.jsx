'use client';

import { Gift, FileText, Video, Users, Sparkles } from 'lucide-react';
import LeadForm from './LeadForm';

const benefits = [
    {
        icon: FileText,
        title: 'Detailed Price Sheets',
        description: 'Complete confidential pricing breakdown',
    },
    {
        icon: Gift,
        title: 'Exclusive Launch Offers',
        description: 'Limited-period festive & early bird discounts',
    },
    {
        icon: Users,
        title: 'Private Consultation',
        description: 'One-on-one expert property guidance',
    },
    {
        icon: Video,
        title: 'Priority Site Visits',
        description: 'Guided tours and unit selection support',
    },
];

export default function LeadMagnetSection() {
    return (
        <section className="py-16 bg-gray-900 relative overflow-hidden">
            {/* Background Texture & Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in">
                            <Sparkles className="w-3 h-3" />
                            <span>Platinum Member Benefits</span>
                        </div>
                        
                        <h2 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-8 animate-fade-in-up">
                            Unlock Your <br /> 
                            <span className="text-yellow-500">Elite Advantage</span>
                        </h2>
                        
                        <p className="text-lg text-gray-400 font-medium max-w-xl mb-12 animate-fade-in-up delay-100">
                            Join over 50,000+ families who chose the Casagrand lifestyle. Register now to gain instant access to our master registry.
                        </p>

                        {/* Benefits Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="flex items-start gap-5">
                                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500 translate-y-1">
                                                <Icon className="w-5 h-5 text-yellow-500 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-yellow-500 transition-colors">{benefit.title}</h3>
                                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="lg:col-span-5 animate-fade-in-up delay-300">
                        <div className="bg-white/95 backdrop-blur-2xl p-8 sm:p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden">
                            {/* Card Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                            
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-black text-gray-900 mb-2">Instant Unlock</h3>
                                <p className="text-gray-500 text-sm font-medium">Download Brochure & Pricing Sheet</p>
                            </div>

                            <LeadForm />
                            
                            <p className="mt-8 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                • Zero Spam • Secure Verification •
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
