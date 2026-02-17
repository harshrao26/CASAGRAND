'use client';

import { useState, useEffect } from 'react';
import LeadForm from '@/components/LeadForm';
import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

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

    const scrollToLeadForm = () => {
        const element = document.getElementById('lead-form');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
                : 'bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/Casagrand-Logo1.webp"
                            alt="Casagrand Logo"
                            width={150}
                            height={40}
                            className={`h-8 w-auto transition-all ${!scrolled ? 'brightness-0 invert' : ''
                                }`}
                            priority
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToLeadForm}
                            className={`px-6 py-2 rounded-lg transition-all font-medium ${scrolled
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-white text-blue-600 hover:bg-blue-50'
                                }`}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
