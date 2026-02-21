import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between">
            {/* Left Box (empty spacer for true centering) */}
            <div className="flex-1 hidden md:block"></div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-start md:justify-center">
                <Link href="/" className="relative block h-10 w-40 md:h-12 md:w-48 transition-transform hover:scale-105">
                    <Image
                        src="/Casagrand-Logo1.webp"
                        alt="Casagrand Logo"
                        fill
                        className="object-contain brightness-500"
                        priority
                    />
                </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex-1 flex justify-end">
                {/* <div className="hidden md:flex items-center gap-8 text-white text-sm tracking-widest font-medium uppercase drop-shadow-md">
                    <Link href="#" className="hover:text-amber-500 transition-colors">Projects</Link>
                    <Link href="#" className="hover:text-amber-500 transition-colors">About Us</Link>
                    <Link href="#" className="hover:text-amber-500 transition-colors">Contact</Link>
                </div> */}

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white drop-shadow-md p-2 -mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
