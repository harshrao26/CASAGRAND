'use client';

import { Quote, Star } from 'lucide-react';

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

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 relative"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-blue-600" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 relative z-10 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
