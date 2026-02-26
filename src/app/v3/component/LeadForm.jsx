'use client';

import { useState } from 'react';
import { User, Mail, Phone, Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function LeadForm({ className = "" }) {
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
                headers: {
                    'Content-Type': 'application/json',
                },
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
            setSubmitStatus({ type: 'error', message: 'Failed to submit the form. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            {/* Full Name */}
            <div className="group">
                <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Full Name
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-yellow-600 transition-colors">
                        <User className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        className="w-full text-sm pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-semibold text-gray-900"
                        required
                    />
                </div>
            </div>

            {/* Email Address */}
            <div className="group">
                <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-yellow-600 transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                        placeholder="your.email@example.com"
                        className="w-full text-sm pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-semibold text-gray-900"
                        required
                    />
                </div>
            </div>

            {/* Phone Number */}
            <div className="group">
                <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Phone Number
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-yellow-600 transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
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
                        className="w-full text-sm pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-300 font-semibold text-gray-900"
                        required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 disabled:cursor-not-allowed text-white py-3.5 rounded-2xl font-semibold text-base transition-all shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transform hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-3 mt-4 active:scale-95 disabled:active:scale-100"
            >
                {isSubmitting ? (
                    <Loader2 className="w-5 h-5 text-black animate-spin" />
                ) : (
                    <>
                        <span className='text-black'>Enquire Now</span>
                        <ArrowRight className="w-5 h-5 text-black" />
                    </>
                )}
            </button>

            {/* Status Message */}
            {submitStatus && (
                <div className={`p-3 rounded-xl text-xs text-center font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                    {submitStatus.message}
                </div>
            )}

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 group/note py-2">
                <div className="p-1 rounded-full bg-green-50 text-green-600 group-hover/note:bg-green-100 transition-colors">
                    <Lock className="w-3 h-3" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-600">
                    Secure & Private Verification
                </p>
            </div>
        </form>
    );
}
