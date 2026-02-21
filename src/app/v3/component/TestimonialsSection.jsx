'use client';

import { Quote, Star, Play } from 'lucide-react';

const testimonials = [
    {
        name: 'Rajesh K.',
        location: 'Chennai',
        rating: 5,
        text: 'Casagrand delivered exactly what they promised. Quality construction and great community living.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
        name: 'Priya S.',
        location: 'Chennai',
        rating: 5,
        text: 'The buying process was smooth, and the team was very transparent throughout.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
        name: 'Arun M.',
        location: 'Chennai',
        rating: 5,
        text: 'Excellent amenities and location. Best investment decision we made for our family.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
];

const videoTestimonials = [
    {
        id: 'oE67yPv9kt8',
        title: 'Customer Experience 1',
    },
    {
        id: 'Uv1jTGEFW78',
        title: 'Customer Experience 2',
    },
    {
        id: 'lNI5ePBlMi4',
        title: 'Customer Experience 3',
    },
    {
        id: 'Djk8Erf6NWA',
        title: 'Customer Experience 4',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 md:py-32 bg-white">
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
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videoTestimonials.map((video) => (
                            <div key={video.id} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group border border-gray-100">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="bg-[#C89574]/90 backdrop-blur-sm p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </div>
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
