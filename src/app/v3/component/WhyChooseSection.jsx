"use client";
import React, { useEffect, useRef } from 'react';
import { Home, TrendingUp, ShieldCheck, CreditCard, Banknotes, BadgePercent } from 'lucide-react';

const cards = [
    {
        icon: Home,
        title: "Rental Yields",
        desc: "6-8% net yield with real rent comps & cost"
    },
    {
        icon: TrendingUp,
        title: "High Rental Demand",
        desc: "Consistent occupancy rates across prime communities with rising tenant demand."
    },
    {
        icon: ShieldCheck,
        title: "Transparent & Regulated",
        desc: "One of the most transparent real-estate markets globally with strict compliance standards."
    },
    {
        icon: CreditCard,
        title: "Flexible Payment Plans",
        desc: "Multiple options backed by secure, developer-friendly and investor-focused payment structures."
    },
    {
        icon: BadgePercent,
        title: "Tax-Free Environment",
        desc: "0% income and capital gains tax allows you to maximize your investment returns."
    }
];

export default function WhyChooseSection() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                const cardWidth = 350 + 24; // Card width + gap (approx)
                
                // If we reach the end of the scrollable area, snap back to start
                if (scrollLeft + clientWidth >= scrollWidth - 20) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Otherwise shift left 1 by 1
                    scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }
        }, 3000); // Wait 3 seconds at a time

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl lg:text-[56px] font-serif text-[#1C1C1C] mb-4 tracking-tight leading-tight">
                    Why Dubai Is the World's Most Secure Investment Market.
                </h2>
                <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
                    Quick answers to core investor motivations.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full max-w-8xl px-3 mx-auto group">
                {/* 
                  Horizontal scroll container with snap-x so it perfectly aligns to cards when shifting 1 by 1.
                */}
                <div 
                    ref={scrollRef}
                    className="flex  0 hide-scrollbar overflow-x-auto snap-x snap-mandatory space-x-6 pb-6 px-4 sm:px-6 lg:px-8"
                >
                    {[...cards, ...cards, ...cards].map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div 
                                key={idx} 
                                className="w-[300px]  md:w-[350px] shrink-0 snap-start snap-always bg-white border border-gray-200 rounded-xl p-8 flex flex-col hover:shadow-xl transition-all duration-300 group/card cursor-default"
                            >
                                <div className="mb-6 h-12 w-12 flex items-center justify-center">
                                    <Icon className="w-10 h-10 text-[#C89574] transition-transform duration-500 group-hover/card:scale-110" strokeWidth={1} />
                                </div>
                                <h3 className="text-[22px] font-serif text-[#1C1C1C] mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-[13px] text-gray-600 leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
                
                {/* Optional side gradients to soften the edges of the scrolling area */}
             </div>

            {/* Subtle bottom accent line */}
            <div className="max-w-8xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#C89574] via-gray-200 to-transparent" />
            </div>
        </section>
    );
}
