"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

const Hero = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/salesforce', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' });
                e.target.reset();
            } else {
                setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong.' });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: 'Failed to submit.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative pt-40 min-h-screen w-full overflow-hidden text-white bg-[#FDB33A]">
            {/* Background Image */}
            <div className="absolute inset-0  z-0">
                <Image
                    src="/images/Primrose/day cam - day cam - Casa Platinum_optimized.webp"
                    alt="Casa Platinum Skyline"
                    fill
                    className="object-cover opacity-200 saturate-200"
                    priority
                />
                {/* Re-designed overlays for V3 luxury look */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDB33A]/60 via-transparent to-[#FDB33A]/60 z-10" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#FDB33A]/70 via-transparent to-[#FDB33A]/70 z-10" /> */}
            </div>

            <div className="relative z-20 h-full w-full flex flex-col items-center justify-e ter px-4">
                {/* Main Content */}
                <div className="max-w-7xl w-full text-center mb-12 animate-fade-in-up">
                    <h1 className="text-[39px] sm:text-6xl font-semibold mb-4 leading-[1.1] text-white drop-shadow-2xl">
                        Explore Premium Homes in Chennai
                    </h1>
                    <p className="md:text-xl text-lg max-w-3xl mx-auto font-semibold trackin g-wide text-white drop-shad ow-md leading-relaxed">
                        Compare 5+ Casagrand Residential Projects in Chennai and get instant access to floor plans, pricing, and limited-period offers.
                    </p>
                </div>

                {/* Hero Form - Refined for visibility */}
                <div className="w-full z-30 max-w-5xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-6 md:p-8 rounded-2xl animate-fade-in-up">
                    <form onSubmit={handleSubmit} className="flex flex-col md:grid md:grid-cols-4 gap-6 items-end">
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold  tracking-[0.03em] mb-2 text-gray-800">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your name"
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium"
                                required
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold  tracking-[0.03em] mb-2 text-gray-800">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                title="Please enter a valid email address"
                                placeholder="your.email@example.com"
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium"
                                required
                            />
                        </div>
                        <div className="flex flex-col items-start w-full text-left">
                            <label className="text-[10px] font-bold  tracking-[0.03em] mb-2 text-gray-800">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                pattern="^[0-9]{10}$"
                                title="Please enter exactly 10 digits"
                                placeholder="9876543210"
                                maxLength="10"
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                }}
                                className="w-full bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-4 outline-none focus:border-[#C89574] focus:ring-1 focus:ring-[#C89574] transition-all font-medium"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 bg-[#FCB63A] hover:bg-[#FCB63A]/80 disabled:bg-[#FCB63A]/50 disabled:cursor-not-allowed text-black font-bold px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 disabled:active:scale-100 tracking-[0.03em] text-xs h-[58px]"
                        >
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enquire Now"}
                        </button>
                    </form>
                    {submitStatus && (
                        <div className={`mt-4 p-3 rounded-xl text-xs text-center font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                            {submitStatus.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
