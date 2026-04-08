'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Home, ArrowRight, Phone, Mail } from 'lucide-react';
import Header from "@/app/v3/component/Header";
import Footer from "@/app/v3/component/Footer";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Header forceScrolled={true} />
            
            <div className="flex-grow flex items-center justify-center px-4 pt-32 pb-20">
                <div className="max-w-2xl w-full">
                    {/* Main Card */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-700">
                        {/* Top Accent Bar */}
                        <div className="h-2 bg-[#FCB63A]" />
                        
                        <div className="p-8 md:p-12 text-center">
                            {/* Success Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-ping opacity-25" />
                                    <div className="relative bg-green-50 p-4 rounded-full">
                                        <CheckCircle className="w-16 h-16 text-green-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                Submission Received!
                            </h1>
                            <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-md mx-auto">
                                Thank you for your interest in <span className="font-semibold text-gray-900">Casagrand </span>. 
                                Our dedicated property specialist will contact you shortly to provide detailed information.
                            </p>

                            {/* Next Steps */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 group hover:border-yellow-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                            <Phone className="w-3.5 h-3.5 text-[#FCB63A]" />
                                        </div>
                                        <h3 className="font-bold text-xs text-gray-800">Direct Call</h3>
                                    </div>
                                    <p className="text-[10px] text-gray-500">Expect a call from our expert within 24 hours.</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 group hover:border-yellow-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                            <Mail className="w-3.5 h-3.5 text-[#FCB63A]" />
                                        </div>
                                        <h3 className="font-bold text-xs text-gray-800">Email Updates</h3>
                                    </div>
                                    <p className="text-[10px] text-gray-500">Project brochures and pricing sent to your inbox.</p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link 
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 bg-[#FCB63A] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg shadow-yellow-500/20 transition-all hover:-translate-y-1 active:scale-95 text-sm"
                                >
                                    <Home className="w-4 h-4" />
                                    Back to Projects
                                </Link>
                               
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Verified Listing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">RERA Approved</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Branding Subtext */}
                    <p className="mt-8 text-center text-sm text-gray-400 font-medium">
                        © 2026 Casagrand . All rights reserved.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
