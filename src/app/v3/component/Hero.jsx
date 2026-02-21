import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden text-white bg-[#2D5A75]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Primrose/day cam - day cam - Casa Platinum_optimized.webp"
                    alt="Casa Platinum Skyline"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Re-designed overlays for V3 luxury look */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A75]/60 via-transparent to-[#2D5A75] z-10" />
            </div>

            <div className="relative z-20 h-full w-full flex flex-col items-center justify-center px-4">
                {/* Main Content */}
                <div className="max-w-5xl w-full text-center mb-12 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-6 leading-tight text-white drop-shadow-2xl">
                        Invest in UAE’s <br />
                        <span className="text-[#C89574] italic font-light">Most Lucrative</span> Real Estate
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl font-medium max-w-3xl mx-auto tracking-wide text-gray-200 opacity-90 drop-shadow-md lg:leading-relaxed">
                        Experience absolute luxury and high returns, crafted with unmatched quality in iconic, world-class locations across Dubai.
                    </p>
                </div>

                {/* Hero Form - Redesigned to V3 aesthetic */}
                <div className="w-full max-w-5xl bg-[#2D5A75]/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl animate-fade-in-up transition-all hover:bg-[#2D5A75]/50">
                    <form className="flex flex-col md:grid md:grid-cols-4 gap-6 items-end">
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-300">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-300">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="your.email@example.com" 
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-300">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="+91 98765 43210" 
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium" 
                            />
                        </div>
                        <button 
                            type="button" 
                            className="w-full bg-[#C89574] hover:bg-[#b08264] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#C89574]/20 hover:shadow-[#C89574]/40 active:scale-95 uppercase tracking-[0.2em] text-xs h-[58px]"
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
