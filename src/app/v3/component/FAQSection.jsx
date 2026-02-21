"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Why should I invest in Dubai Properties with Casagrand?",
        answer: "Casagrand offers unmatched quality, on-time delivery, and high rental yields. With our strong track record and focus on investor satisfaction, we provide secure and highly profitable investment opportunities in Dubai."
    },
    {
        question: "What types of properties are available for sale in Dubai through Casagrand?",
        answer: "We offer a diverse portfolio of premium residential properties, ranging from luxury apartments and spacious townhouses to exclusive villas in prime, high-demand communities."
    },
    {
        question: "Can foreign investors buy property in Dubai with Casagrand?",
        answer: "Yes, Dubai offers designated freehold areas where foreign nationals can 100% own real estate. Casagrand provides end-to-end assistance for foreign investors to seamlessly acquire property."
    },
    {
        question: "What makes Casagrand's developments stand out in the Dubai real estate market?",
        answer: "Our developments are distinguished by world-class amenities, premium finishes, strategic locations, and a commitment to sustainable living, ensuring high capital appreciation and rental demand."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="w-full py-20 md:py-32 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left: Title */}
                    <div className="lg:w-1/3 shrink-0">
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-[#1C1C1C]">
                            FAQs
                        </h2>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className="border border-gray-200 bg-[#F9F9F9] hover:bg-[#F3F3F3] rounded-md overflow-hidden transition-colors duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                                    >
                                        <div className="flex items-start gap-4 pr-4">
                                            <div className="shrink-0 mt-0.5">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#C89574] text-white text-xs font-semibold">
                                                    Q{idx + 1}
                                                </span>
                                            </div>
                                            <span className="text-[15px] md:text-base font-medium text-[#1C1C1C] leading-snug">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="shrink-0 text-gray-500">
                                            {isOpen ? <Minus className="w-5 h-5 text-[#C89574]" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-5 md:p-6 pt-0 text-sm md:text-[15px] text-gray-600 leading-relaxed border-t border-gray-200/50 mt-2">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
