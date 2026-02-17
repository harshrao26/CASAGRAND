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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        What Our Homebuyers Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from thousands of satisfied homeowners who
                        trusted Casagrand for their dream home.
                    </p>
                </div>
 
                {/* Video Testimonials Section */}
                <div className="mb-20">
                     
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videoTestimonials.map((video) => (
                            <div key={video.id} className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 text-center border border-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-2">4.5/5</div>
                        <p className="text-gray-700 font-medium">Average Rating</p>
                        <p className="text-sm text-gray-600">From 2,500+ reviews</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border border-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                        <p className="text-gray-700 font-medium">Customer Satisfaction</p>
                        <p className="text-sm text-gray-600">Would recommend us</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 text-center border border-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                        <p className="text-gray-700 font-medium">Happy Families</p>
                        <p className="text-sm text-gray-600">Living in our homes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
