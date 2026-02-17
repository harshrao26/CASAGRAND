'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-24 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* SEO & Legal Content */}
                <div className="mb-12 border-b border-gray-800 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                         {/* SEO Text */}
                        <div>
                            <Image 
                                src="/Casagrand-Logo1.webp" 
                                alt="Casagrand Logo" 
                                width={180} 
                                height={50} 
                                className="h-10 w-auto mb-6 brightness-0 invert"
                            />
                            <h3 className="text-lg font-semibold text-white mb-4">About Casagrand Chennai</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Casagrand offers a wide range of <span className="text-white font-medium">premium apartments and luxury homes in Chennai</span>, thoughtfully designed across prime residential locations. Explore Casagrand projects featuring modern amenities, excellent connectivity, and strong investment potential.
                            </p>
                        </div>

                        {/* Legal & Trust */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Legal & Trust</h3>
                            <ul className="grid gap-3 text-sm text-gray-400">
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    RERA Registration Details
                                </li>
                                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Disclaimer & Pricing Terms
                                </li>
                                <a href="https://www.casagrand.co.in/new-privacy-policy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Privacy Poacy
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    {/* Copyright */}
                    <div className="text-center text-gray-400 text-sm">
                        <p>© {new Date().getFullYear()} Casagrand. All rights reserved.</p>
                        <p className="mt-2 text-xs opacity-60">
                            *Prices mentioned are indicative and subject to change. Please contact our sales team
                            for current pricing and availability.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
