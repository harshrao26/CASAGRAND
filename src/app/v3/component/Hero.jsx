import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative pt-40 h-screen w-full overflow-hidden text-white bg-[#276290]">
            {/* Background Image */}
            <div className="absolute inset-0  z-0">
                <Image
                    src="/images/Primrose/day cam - day cam - Casa Platinum_optimized.webp"
                    alt="Casa Platinum Skyline"
                    fill
                    className="object-cover opacity-200 saturate-200"
                    priority
                />
                {/* Re-designed overlays for V3 luxury look */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#276290]/100 via-transparent to-[#276290]/20 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#276290]/80 via-transparent to-[#276290]/70 z-10" />
            </div>

            <div className="relative z-20 h-full w-full flex flex-col items-center justify-e ter px-4">
                {/* Main Content */}
                <div className="max-w-7xl w-full text-center mb-12 animate-fade-in-up">
                    <h1 className="text-6xl md:text-7xl font-serif mb-4 leading-tighter text-white drop-shadow-2xl">
                        Invest in UAE’s <span className="text-[#C89574]   font-light">Most Lucrative</span> Real Estate
                    </h1>
                    <p className="text-lg md:text-xl mx-auto tracking-wide text-gray-200 opacity-90 drop-shadow-md lg:leading-relaxed">
                        Experience absolute luxury and high returns, crafted with unmatched quality in iconic, world-class locations across Dubai.
                    </p>
                </div>

                {/* Hero Form - Refined for visibility */}
                <div className="w-full z-30 max-w-5xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-6 md:p-8 rounded-2xl animate-fade-in-up">
                    <form className="flex flex-col md:grid md:grid-cols-4 gap-6 items-end">
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-500">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-500">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-500">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <button 
                            type="button" 
                            className="w-full bg-[#C89574] hover:bg-[#b08264] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-[0.2em] text-xs h-[58px]"
                        >
                            Inquire Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
