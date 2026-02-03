'use client';

import { Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import LeadForm from '@/components/LeadForm';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' 
                    : 'bg-transparent border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${scrolled ? 'bg-blue-600' : 'bg-white'}`}>
                            <Home className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-blue-600'}`} />
                        </div>
                        <span className={`text-xl font-bold transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                            Casagrand 
                        </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setShowModal(true)}
                            className={`px-6 py-2 rounded-lg transition-all font-medium ${
                            scrolled 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                : 'bg-white text-blue-600 hover:bg-blue-50'
                        }`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Lead-Gated Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
                            aria-hidden="true"
                            onClick={() => setShowModal(false)}
                        ></div>

                        {/* Modal Panel */}
                        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-md p-6 sm:p-8">
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 p-2"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            {/* Modal Content */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Get In Touch
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fill in your details and our experts will contact you shortly
                                </p>
                            </div>

                            {/* Lead Form */}
                            <LeadForm />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
