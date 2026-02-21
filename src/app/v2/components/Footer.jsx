import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const sections = [
        {
            title: "Portfolio",
            links: [
                { label: 'Luxury Homes', href: '#' },
                { label: 'Commercial Spaces', href: '#' },
                { label: 'Residential Plots', href: '#' },
                { label: 'Industrial Parks', href: '#' }
            ]
        },
        {
            title: "Quick Links",
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Our Projects', href: '#' },
                { label: 'RERA Details', href: '#' },
                { label: 'Contact Us', href: '#' }
            ]
        },
        {
            title: "Legacy & Trust",
            links: [
                { label: 'Privacy Policy', href: 'https://www.casagrand.co.in/new-privacy-policy/' },
                { label: 'Terms & Conditions', href: '#' },
                { label: 'Disclaimer', href: '#' }
            ]
        }
    ];

    return (
        <footer className="bg-[#276290] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section with Brand and Newsletter-style CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20 border-b border-white/5 items-start">
                    <div>
                        <Link href="/v2" className="inline-block mb-10 transition-opacity hover:opacity-80">
                            <Image
                                src="/Casagrand-Logo1.webp"
                                alt="Casagrand Logo"
                                width={180}
                                height={45}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <h3 className="text-3xl md:text-4xl font-semibold mb-6 max-w-md leading-tight">
                            Building excellence, <span className="text-yellow-500">defined by you.</span>
                        </h3>
                        <p className="text-gray-400 text-lg max-w-sm">
                            Pioneering world-class living spaces across South India for over two decades.
                        </p>
                    </div>
                    
                    <div className="lg:pl-12">
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-yellow-500/20 transition-colors duration-500"></div>
                            <h4 className="text-xl font-bold mb-4 relative z-10">Experience the Casagrand Lifestyle</h4>
                            <p className="text-gray-400 mb-8 relative z-10">Connect with our luxury consultants for exclusive property previews and early bird offers.</p>
                            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                                <Link 
                                    href="tel:+919876543210" 
                                    className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-2xl transition-all active:scale-95"
                                >
                                    <Phone className="w-5 h-5 fill-current" />
                                    Talk to Us
                                </Link>
                                <Link 
                                    href="#" 
                                    className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-2xl transition-all border border-white/10 active:scale-95"
                                >
                                    View Projects
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section with Info and Links */}
                <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-6">Contact Presence</h4>
                            <div className="space-y-4">
                                <a href="mailto:info@casagrand.co.in" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">info@casagrand.co.in</span>
                                </a>
                                <a href="tel:+914444111111" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium">+91 44 4411 1111</span>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-6">Social Connect</h4>
                            <div className="flex gap-3">
                                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                    <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links Sections */}
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-8">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            href={link.href} 
                                            target={link.href.startsWith('http') ? "_blank" : "_self"} 
                                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <p className="text-gray-500 text-sm font-medium">
                            © {currentYear} Casagrand Builder Private Limited. All rights reserved.
                        </p>
                        <p className="max-w-4xl text-[10px] text-gray-600 leading-relaxed italic">
                            *Disclaimer: The information provided on this website is for general informational purposes only. All renderings, floor plans, and maps are artist's conceptions and not actual depictions of the building or its surroundings. Prices and availability are subject to change without notice. Please verify all details with our sales team before making a purchase.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
