'use client';

import React, { useState } from 'react';
import { Quote, Star, Play } from 'lucide-react';
import Image from 'next/image';

const videoTestimonials = [
    {
        id: 'oE67yPv9kt8',
        title: 'Luxury Living Experience',
        thumbnail: '/youtube/image.png',
    },
    {
        id: 'Uv1jTGEFW78',
        title: 'Our Dream Home Journey',
        thumbnail: '/youtube/image copy.png',
    },
    {
        id: 'lNI5ePBlMi4',
        title: 'Why We Chose Casagrand',
        thumbnail: '/youtube/image copy 2.png',
    },
    {
        id: 'Djk8Erf6NWA',
        title: 'The Perfect Investment',
        thumbnail: '/youtube/hero-bg_optimized.webp',
    },
];

export default function TestimonialsSection() {
    const [playingId, setPlayingId] = useState(null);

    return (
        <section className="py-20   bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1C1C1C] mb-6 leading-tight">
                        What Our Homebuyers Say
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 font-medium tracking-wide max-w-2xl mx-auto">
                        Don't just take our word for it - hear from thousands of satisfied homeowners who
                        trusted Casagrand for their dream home.
                    </p>
                </div>
 
                {/* Video Testimonials Section */}
                <div className="mb-24 px-4 sm:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {videoTestimonials.map((video) => (
                            <div key={video.id} className="flex flex-col gap-4">
                                <div 
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group border border-gray-100 cursor-pointer bg-gray-100"
                                    onClick={() => setPlayingId(video.id)}
                                >
                                    {playingId === video.id ? (
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <>
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-[#C89574]/90 backdrop-blur-sm p-5 md:p-7 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                                                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#1C1C1C] px-2 italic">
                                    "{video.title}"
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl font-serif text-[#C89574] mb-3">4.5/5</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Average Rating</p>
                        <p className="text-[13px] text-gray-500 font-medium">From 2,500+ reviews</p>
                    </div>

                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl font-serif text-[#C89574] mb-3">98%</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Customer Satisfaction</p>
                        <p className="text-[13px] text-gray-500 font-medium">Would recommend us</p>
                    </div>

                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl font-serif text-[#C89574] mb-3">50K+</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Happy Families</p>
                        <p className="text-[13px] text-gray-500 font-medium">Living in our homes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
