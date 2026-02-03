'use client';

import { Search, ChevronDown } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.png"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                {/* Dark Gradient Overlay */}
                {/* Additional Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex flex-col justify-center pt-20 pb-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text & Search */}
                    <div className="text-left">
                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                            Explore Premium Homes in Chennai
                            <span className="block text-2xl md:text-3xl mt-2 font-medium text-yellow-100">Unlock Brochures, Prices & Exclusive Offers</span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-white text-md md:text-lg mb-8 max-w-2xl drop-shadow-md opacity-90">
                            Compare 5+ Casagrand Residential Projects in Chennai and get instant access to floor plans, pricing, and limited-period offers.
                        </p>

                        {/* Trust Strip */}
                        <div className="flex flex-nowrap items-center gap-4 sm:gap-6 mb-10 text-white font-medium text-xs sm:text-base drop-shadow-sm overflow-x- auto no-scrollbar whitespace-nowrap">
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✓</div>
                                RERA Approved Projects
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✓</div>
                                Trusted Developer
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs">✓</div>
                                Happy Homeowners
                            </div>
                        </div>

                        {/* Search Bar (Pill Shape) */}
                        <div className="bg-white rounded-3xl p-2 pl-6 pr-2 w-full max-w-xl shadow-2xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">

                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 w-full gap-2 sm:gap-4 py-2">

                                {/* Budget */}
                                <div className="flex flex-col border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0 px-2 py-1 cursor-pointer group">
                                    <label className="text-xs text-gray-500 mb-1 group-hover:text-blue-600 transition-colors">Budget</label>
                                    <div className="flex items-center justify-between font-semibold text-gray-900 text-sm">
                                        <span>Any Budget</span>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex flex-col px-2 py-1 cursor-pointer group">
                                    <label className="text-xs text-gray-500 mb-1 group-hover:text-blue-600 transition-colors">Location</label>
                                    <div className="flex items-center justify-between font-semibold text-gray-900 text-sm">
                                        <span>Chennai</span>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                    </div>
                                </div>

                            </div>

                            {/* Search Button */}
                            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl sm:rounded-full transition-all flex-shrink-0 shadow-lg font-medium text-base flex items-center justify-center gap-2 mt-2 sm:mt-0">
                                <Search className="w-4 h-4" />
                                Search
                            </button>

                        </div>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="flex md:block hidden justify-center lg:justify-end">
                        <div className="bg-white rounded-2xl w-full max-w-md p-6 md:p-8 shadow-2xl">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Get Project Details Instantly
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fill in your details to unlock exclusive offers
                                </p>
                            </div>

                            <LeadForm />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
