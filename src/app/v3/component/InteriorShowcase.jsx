"use client";
import React, { useEffect, useRef, useState } from 'react';

const InteriorShowcase = () => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-12 md:py-0 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-4xl sm:text-7xl text-[#1C1C1C] mb-12 tracking-tight leading-[1.1]">
                        Your Home, Quietly Perfected with <span className="text-[#FCB63A]">231 Standards</span>
                    </h2>
                </div>
                {isInView && (
                    <div className="relative aspect-video w-full rounded-[80px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] border border-gray-100">
                        <div className="absolute inset-0 pointer-events-none">
                            <iframe
                                src="https://www.youtube.com/embed/eOK6gwjKXZo?autoplay=1&mute=1&loop=1&playlist=eOK6gwjKXZo&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
                                className="absolute top-1/2 left-1/2 w-[101%] h-[101%] -translate-x-1/2 -translate-y-1/2 object-contain border-0"
                                allow="autoplay; encrypted-media"
                                title="Interior Showcase"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InteriorShowcase;
