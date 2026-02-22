import React from 'react';

const videoTestimonials = [
    {
        id: 'oE67yPv9kt8',
        title: 'Luxury Living Experience',
    },
    {
        id: 'Uv1jTGEFW78',
        title: 'Our Dream Home Journey',
    },
    {
        id: 'lNI5ePBlMi4',
        title: 'Why We Chose Casagrand',
    },
    {
        id: 'Djk8Erf6NWA',
        title: 'The Perfect Investment',
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl sm:text-7xl text-center text-[#1C1C1C] mb-4 leading-[1.1]">
                        What Our Homebuyers Say
                    </h2>
                    <p className="md:text-2xl text-xl text-center text-gray-600 leading-relaxed max-w-4xl mx-auto">
                        Don't just take our word for it - hear from thousands of satisfied homeowners who
                        trusted Casagrand for their dream home.
                    </p>
                </div>

                <div className="mb-24 px-4 sm:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                        {videoTestimonials.map((video) => (
                            <div key={video.id} className="flex flex-col gap-4">
                                <div
                                    className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group border border-gray-100 bg-gray-100"
                                >
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}?controls=0&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h3 className="text-xl md:text-2xl text-[#1C1C1C] px-2 italic">
                                    "{video.title}"
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl text-[#FCB63A] mb-3">4.5/5</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Average Rating</p>
                        <p className="text-[13px] text-gray-500 font-medium">From 2,500+ reviews</p>
                    </div>

                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl text-[#FCB63A] mb-3">98%</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Customer Satisfaction</p>
                        <p className="text-[13px] text-gray-500 font-medium">Would recommend us</p>
                    </div>

                    <div className="bg-[#F9F9F9] hover:bg-[#F3F3F3] transition-colors duration-300 rounded-xl p-8 text-center border border-gray-200 shadow-sm">
                        <div className="text-4xl text-[#FCB63A] mb-3">50K+</div>
                        <p className="text-[15px] text-[#1C1C1C] font-semibold mb-1">Happy Families</p>
                        <p className="text-[13px] text-gray-500 font-medium">Living in our homes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
