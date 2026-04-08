'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadForm({ className = "" }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        preferredLocation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/salesforce', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    projectInterested: formData.preferredLocation || 'Landing Page Inquiry',
                    submission_url: typeof window !== 'undefined' ? window.location.href : '',
                    initial_utm_url: typeof window !== 'undefined' ? window.location.href : '',
                }),
            });

            const result = await response.json();

            if (result.success) {
                router.push('/thank-you');
            } else {
                setError(result.message || 'Failed to submit form. Please try again.');
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            {/* Full Name */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Full Name
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                    disabled={loading}
                />
            </div>

            {/* Email Address */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                    disabled={loading}
                />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    required
                    disabled={loading}
                />
            </div>

            {/* Preferred Location */}
            <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Preferred Location
                </label>
                <div className="relative">
                    <select 
                        name="preferredLocation"
                        value={formData.preferredLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none text-gray-900 disabled:opacity-50"
                        disabled={loading}
                    >
                        <option value="" disabled>Select location</option>
                        <option value="north-chennai">North Chennai</option>
                        <option value="west-chennai">West Chennai</option>
                        <option value="omr">OMR (Old Mahabalipuram Road)</option>
                        <option value="gst-road">GST Road</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3.5 rounded-lg font-bold text-base transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all mt-2 disabled:cursor-not-allowed"
            >
                {loading ? 'Submitting...' : 'View Projects & Offers'}
            </button>

            {/* Security Note */}
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1.5 mt-4">
                <span className="text-yellow-600">🔒</span> No spam. Your details are safe with us.
            </p>
        </form>
    );
}
