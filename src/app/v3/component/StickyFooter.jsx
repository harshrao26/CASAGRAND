'use client';

import { Phone, MessageCircle, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import LeadForm from '@/app/v3/component/LeadForm';

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
                className={`fixed bottom-0 left-0 right-0 z-40 bg-[#1C 1C1C]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid grid-cols-3 gap-4 p-3 pb-6 md:pb-3">
                    

                    <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl border border-white/10 transition-all active:scale-95"
                    >
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Chat</span>
                    </a>

                    <button
                        onClick={() => setShowModal(true)}
                        className="flex flex-col items-center justify-center gap-1.5 bg-[#C89574] hover:bg-[#B68465] text-white py-3 rounded-xl shadow-lg transition-all active:scale-95"
                    >
                        <Download className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Brochure</span>
                    </button>

                    <button
                        onClick={() => setShowModal(true)}
                        className="flex flex-col items-center justify-center gap-1.5 bg-white text-black py-3 rounded-xl shadow-lg transition-all active:scale-95"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">Enquire</span>
                    </button>
                    </div>
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
