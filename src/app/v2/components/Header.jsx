"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const email = "hello@strucaxis.com";
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch { }
  };

  const links = [
    { href: "/", label: "" },


  ];

  return (
    <header className="fixed z-[1000] top-4 left-1/2 -translate-x-1/2   w-full px-3 md:px-0">
      {/* Floating pill container */}
      <div className="mx-auto max-w-8xl ">
        <div className="relative bg-white/90 py-1 flex items-center justify-between rounded-full   text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 rin g-black/30 backdrop-blur-md">

          {/* Left circular logo/button */}
          <Link
            href="/"
            className="m-1 ml-2 flex h-12   items-center justify-center   text-white font-semibold text-2xl px-4 tracking-wide select-none hover:scale-105 transition"
            aria-label="StrucAxis home"
            title="StrucAxis"
          >
            {/* Struc<span className="text-yellow-500 ">Axis</span> */}
            <Image src="/Casagrand-Logo1.webp" alt="StrucAxis logo" width={200} height={48} className="h-12 w-auto z-50" />
          </Link>

          {/* Desktop nav */}
          <nav className="  te md:flex items-center gap-8 font-medium px-4">
            <Link
              href="/contact-us"
              className=" w-full   md:block rounded-full bg-yellow-500 text-white font-medium px-3 py-[7px]   transition"
            >
              Contact Us
            </Link >
          </nav>

          
        </div>
      </div>

      {/* Mobile sheet */}
       
    </header>
  );
}