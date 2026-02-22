"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Is Casagrand a reliable builder in Chennai?",
        answer: "With over two decades of excellence, Casagrand is one of South India's leading real estate developers. We have delivered over 140+ projects and are trusted by 50,000+ happy families, known for our commitment to quality and on-time delivery."
    },
    {
        question: "Are all Casagrand projects in Chennai RERA compliant?",
        answer: "Yes, absolute transparency is our core value. Every Casagrand project is registered with the Tamil Nadu Real Estate Regulatory Authority (TNRERA), ensuring that all project details, timelines, and legalities are strictly followed and accessible to our buyers."
    },
    {
        question: "What makes Casagrand residential projects unique?",
        answer: "Our projects are 'Designed for Life.' We focus on providing 40+ superior amenities in every project, high-quality finishes, maximum ventilation (Vastu compliant), and strategic locations near major IT and industrial corridors, ensuring great rental potential."
    },
    {
        question: "Does Casagrand offer flexible payment options for homebuyers?",
        answer: "We offer several attractive payment structures, including construction-linked plans and tie-ups with leading financial institutions for easy home loans, making it convenient for both first-time homebuyers and seasoned investors to secure their dream home."
    }
];

export default function FAQSection() {
    const [openIndices, setOpenIndices] = useState([0, 1]);

    const toggleFaq = (idx) => {
        setOpenIndices(prev =>
            prev.includes(idx)
                ? prev.filter(i => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <section className="w-full py-20   bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left: Title */}
                    <div className="lg:w-1/3 shrink-0">
                        <h2 className="text-4xl sm:text-7xl text-[#1C1C1C] leading-[1.1]">
                            FAQs
                        </h2>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndices.includes(idx);
                            return (
                                <div
                                    key={idx}
                                    className="border border-gray-200 bg-[#FCB63A]/50 hover:bg-[#F3 F3F3] rounded-md overflow-hidden transition-colors duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                                    >
                                        <div className="flex items-start gap-4 pr-4">
                                            <div className="shrink-0 mt-.5">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#FCB63A] text-black text-xs font-semibold">
                                                    Q{idx + 1}
                                                </span>
                                            </div>
                                            <span className="text-[15px]   md:text-base font-medium text-[#1C1C1C] leading-snug">
                                                {faq.question}
                                            </span>
                                        </div>
                                        <div className="shrink-0 text-gray-500">
                                            {isOpen ? <Minus className="w-5 h-5 text-[#FCB63A]" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden bg-[#F3F3F3] transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-5 md:p-6 pt-0 text-sm md:text-[15px] text-gray-800 leading-relaxed border-t border-gray-200/50 mt-2">
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
