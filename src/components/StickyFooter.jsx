'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import LeadForm from '@/components/LeadForm';

export default function StickyFooter() {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl transition-transform duration-300 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="grid grid-cols-3 gap-2 p-3">
                    <a
                        href="tel:+919876543210"
                        className="flex flex-col items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        <span className="text-xs font-medium">Call Now</span>
                    </a>

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-xs font-medium">WhatsApp</span>
                    </a>

                    <button
                        onClick={() => setShowModal(true)}
                        className="flex flex-col items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="text-xs font-medium">Enquire</span>
                    </button>
                </div>
            </div>

            {/* Lead-Gated Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                            <p className="text-gray-600">
                                Fill in your details and our experts will contact you shortly
                            </p>
                        </div>

                        {/* Lead Form */}
                        <LeadForm />
                    </div>
                </div>
            )}
        </>
    );
}
