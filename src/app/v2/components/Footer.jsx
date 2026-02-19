import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            
        ],
        portfolios: [
            { label: 'Luxury Homes', href: '#' },
            { label: 'Commercial Spaces', href: '#' },
            { label: 'Industrial Parks', href: '#' },
            { label: 'Residential Plots', href: '#' }
        ],
        legal: [
            { label: 'Privacy Policy', href: 'https://www.casagrand.co.in/new-privacy-policy/' },
            { label: 'RERA Details', href: '#' },
            { label: 'Terms & Conditions', href: '#' },
            { label: 'Disclaimer', href: '#' }
        ]
    };

    return (
        <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
            {/* Background Texture Decorations */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 max-w-sm">
                        <Link href="/v2" className="inline-block mb-8 group transition-transform active:scale-95">
                            <Image
                                src="/Casagrand-Logo1.webp"
                                alt="Casagrand Logo"
                                width={180}
                                height={45}
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 font-medium leading-relaxed mb-10">
                            Pioneering world-class living spaces across South India. With a legacy of excellence and a commitment to quality, Casagrand builds homes that define your lifestyle.
                        </p>

                        {/* Social Block */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all duration-500 group">
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16">

                       
                       

                        {/* Legal Links */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                                <div className="w-6 h-[1px] bg-yellow-500" />
                                Legacy & Trust
                            </h4>
                            <ul className="space-y-6">
                                {footerLinks.legal.map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"} className="text-gray-400 font-medium hover:text-yellow-500 transition-colors flex items-center gap-2 group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 scale-0 group-hover:scale-100 transition-transform" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-gray-400 text-sm font-medium">
                                © {currentYear} Casagrand Builder Private Limited. All rights reserved.
                            </p>
                           
                        </div>
 
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-gray-500 font-medium leading-relaxed max-w-4xl mx-auto italic">
                            *Disclaimer: The information provided on this website is for general informational purposes only. All renderings, floor plans, and maps are artist's conceptions and not actual depictions of the building or its surroundings. Prices and availability are subject to change without notice. Please verify all details with our sales team before making a purchase.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
