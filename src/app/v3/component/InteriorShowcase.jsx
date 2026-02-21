import React from 'react';
import Image from 'next/image';

const InteriorShowcase = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-[#05111A]">
            <Image
                src="/images/Primrose/CG PRIMROSE ELEVATION-01_optimized.webp"
                alt="Luxurious Architecture View"
                fill
                className="object-cover"
                sizes="100vw"
            />
            {/* Optional gradient overlays for a cinematic feel */}
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05111A] to-transparent z-10" />

 
        </section>
    );
};

export default InteriorShowcase;
