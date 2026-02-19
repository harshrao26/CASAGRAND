'use client';

import { Quote, Star, Play, Sparkles, Users } from 'lucide-react';

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
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-6xl font-black text-gray-900 leading-[1.1] mb-8">
                        The Voice of Our <br /> <span className="text-yellow-500">Homeowners</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-medium max-w-3xl mx-auto leading-relaxed">
                        Join 50,000+ satisfied families who have found their dream homes with Casagrand. Discover their stories of quality, trust, and community.
                    </p>
                </div>

                {/* Video Testimonials Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videoTestimonials.map((video, index) => (
                            <div key={video.id} className="relative aspect-video rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <iframe
                                    className="w-full h-full  group-hover:-0 transition-all duration-700"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                                        <Play className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Elements / Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                    <div className="bg-gray-50/80 border border-gray-100 rounded-[2.5rem] p-8 text-center hover:bg-white hover:border-yellow-200 hover:shadow-xl transition-all duration-500 group animate-fade-in-up">
                        <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">4.5/5</div>
                        <div className="flex items-center justify-center gap-1 mb-4 text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">Average Rating</p>
                        <p className="text-xs text-gray-400 font-medium">From 2,500+ verified owner reviews</p>
                    </div>

                    <div className="bg-gray-50/80 border border-gray-100 rounded-[2.5rem] p-8 text-center hover:bg-white hover:border-yellow-200 hover:shadow-xl transition-all duration-500 group animate-fade-in-up delay-100">
                        <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">98%</div>
                        <div className="flex items-center justify-center gap-1 mb-4 text-green-500 opacity-60">
                            <Sparkles className="w-5 h-5" />
                        </div>
                        <p className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">Satisfaction Rate</p>
                        <p className="text-xs text-gray-400 font-medium">Monthly homeowner referral average</p>
                    </div>

                    <div className="bg-gray-50/80 border border-gray-100 rounded-[2.5rem] p-8 text-center hover:bg-white hover:border-yellow-200 hover:shadow-xl transition-all duration-500 group animate-fade-in-up delay-200">
                        <div className="text-4xl font-black text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">50K+</div>
                        <div className="flex items-center justify-center gap-1 mb-4 text-yellow-500 opacity-60">
                            <Users className="w-5 h-5" />
                        </div>
                        <p className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">Happy Families</p>
                        <p className="text-xs text-gray-400 font-medium">Across our Chennai residential portfolio</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
