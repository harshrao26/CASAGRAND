'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Phone, Lock, ArrowRight, Loader2 } from 'lucide-react';

export default function LeadForm({ className = "" }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            fullName: data.fullName,
            email: data.email,
            phone: data.phone,
            projectInterested: 'Landing Page Inquiry',
            submission_url: typeof window !== 'undefined' ? window.location.href : '',
            initial_utm_url: typeof window !== 'undefined' ? window.location.href : '',
        };

        try {
            const response = await fetch('/api/salesforce', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                router.push('/thank-you');
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
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Full Name
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-600 transition-colors">
                        <User className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            {/* Email Address */}
            <div className="group">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Email Address
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-600 transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            {/* Phone Number */}
            <div className="group">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 group-focus-within:text-yellow-600 transition-colors">
                    Phone Number
                </label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-600 transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 font-semibold text-gray-900 disabled:opacity-50"
                        required
                        disabled={isSubmitting}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-400 disabled:cursor-not-allowed text-white py-3.5 rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transform hover:-translate-y-1 disabled:hover:translate-y-0 flex items-center justify-center gap-3 mt-4 active:scale-95 disabled:active:scale-100"
            >
                {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    <>
                        <span>View Projects & Offers</span>
                        <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>

            {/* Status Message */}
            {submitStatus && (
                <div className={`p-3 rounded-xl text-sm text-center font-medium ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {submitStatus.message}
                </div>
            )}

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 group/note py-2">
                <div className="p-1 rounded-full bg-green-50 text-green-600 group-hover/note:bg-green-100 transition-colors">
                    <Lock className="w-3 h-3" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
                    Secure & Private Verification
                </p>
            </div>
        </form>
    );
}
