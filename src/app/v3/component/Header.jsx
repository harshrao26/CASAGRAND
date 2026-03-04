'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LeadForm from '@/app/v3/component/LeadForm';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${isScrolled
                        ? 'bg-white/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg'
                        : 'bg-transparent border-b border-transparent'
                    }`}
            >
                {/* Left Box (empty spacer for true centering) */}
                <div className="flex-1 hidden md:block"></div>

                {/* Center Logo */}
                <div className="flex-1 flex justify-start md:justify-center">
                    <Link href="/" className="relative block h-10 w-40 md:h-12 md:w-48 transition-transform hover:scale-105">
                        <Image
                            src="/Casagrand-Logo1.webp"
                            alt="Casagrand Logo"
                            fill
                            className="object-contain brightn00"
                            priority
                        />
                    </Link>
                </div>

                {/* Right Navigation */}
                <div className="flex-1 flex justify-end">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#FCB63A] text-sm md:text-base font-semibold text-black/80 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                    >
                        Enquire Now
                    </button>
                </div>
            </header>

            {/* Lead-Gated Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
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
                            <h3 className="md:text-base text-sm  font-semibold text-gray-900 mb-2">
                              Request Detailed Pricing & Floor Plans

                            </h3>
                           
                        </div>

                        {/* Lead Form */}
                        <LeadForm />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
