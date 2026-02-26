"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const InteriorShowcase = () => {
    const sectionRef = useRef(null);
    const iframeRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

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

    const togglePlay = () => {
        if (!iframeRef.current || !iframeRef.current.contentWindow) return;

        const func = isPlaying ? 'pauseVideo' : 'playVideo';
        iframeRef.current.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: func }),
            '*'
        );
        setIsPlaying(!isPlaying);
    };

    const trustStats = [
        { label: "Years of Excellence", value: "20+" },
        { label: "Completed Projects", value: "140+" },
        { label: "Happy Families", value: "50,000+" },
        { label: "RERA Approved", value: "Developments" },
        { label: "Google Rating", value: "4.5★" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-10 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 md:mb-16 text-center">
                    <h2 className="text-2xl sm:text-3xl text-[#1C1C1C] mb-6 tracking-tight leading-[1.1]">
                        Your Home, Quietly Perfected with <span className="text-[#FCB63A]">231 Standards</span>
                    </h2>

                </div>



                {isInView && (
                    <div className="relative aspect-video w-full rounded-[40px] md:rounded-[80px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] border border-gray-100 group">
                        <div className="absolute inset-0 pointer-events-none">
                            <iframe
                                ref={iframeRef}
                                src="https://www.youtube.com/embed/eOK6gwjKXZo?enablejsapi=1&autoplay=1&loop=1&playlist=eOK6gwjKXZo&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
                                className="absolute top-1/2 left-1/2 w-[101%] h-[101%] -translate-x-1/2 -translate-y-1/2 object-contain border-0"
                                allow="autoplay; encrypted-media"
                                title="Interior Showcase"
                            ></iframe>
                        </div>

                        {/* Play/Pause Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/10">
                            <button
                                onClick={togglePlay}
                                className="w-16 h-16 md:w-20 md:h-20 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center transition-all transform hover:scale-105 cursor-pointer shadow-lg"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 md:w-10 md:h-10 text-white fill-current" />
                                ) : (
                                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InteriorShowcase;
