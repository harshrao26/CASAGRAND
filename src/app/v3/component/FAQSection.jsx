"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Why should I buy a home in Chennai?",
        answer: "Chennai offers strong IT growth, metro connectivity, and steady property appreciation. It's ideal for families and professionals due to its schools, hospitals, and job hubs."
    },
    {
        question: "Is investing near OMR (Old Mahabalipuram Road) worth it?",
        answer: "OMR is Chennai's prime IT corridor with high rental demand. Upcoming infrastructure and commercial growth make it a smart long-term investment choice."
    },
    {
        question: "Are Casagrand Chennai projects RERA approved?",
        answer: "Yes, all Casagrand projects in Chennai are RERA-registered and approved by the Tamil Nadu Real Estate Regulatory Authority (TNRERA). You can buy your dream home with confidence, ensuring complete transparency and legal compliance."
    },
    {
        question: "How do I book a site visit?",
        answer: "Just submit your details through the enquiry form, and our sales team will get in touch to coordinate a free site visit at your convenience. For our NRI customers, a virtual site tour can also be arranged based on your preferred date and time."
    },
    {
        question: "How long will the offer price be available?",
        answer: "The offer price is valid for a limited period and is subject to availability. We recommend scheduling a site visit at the earliest to secure the current pricing and benefits."
    },
    {
        question: "Can I book my dream home by paying an advance/deposit to confirm?",
        answer: "Yes, you can book your preferred unit by paying a booking amount (advance). Once the payment is made, the unit will be reserved for you, subject to terms and conditions. Our sales team will guide you through the booking process and share the payment details."
    },
    {
        question: "Is the site visit free and how can I schedule one?",
        answer: "Yes, the site visit is completely free of cost with no obligation to book. You can schedule your visit by filling out the enquiry form. Our sales team will assist you in arranging the free site visit and confirm your preferred date and time."
    },
    {
        question: "How many members are allowed for a site visit?",
        answer: "You may bring up to 3–4 family members for the site visit. We recommend bringing key decision-makers to make the most of your visit."
    },
    {
        question: "When will the project be handed over?",
        answer: "Handover timelines vary by project. Estimated completion dates are clearly mentioned in the agreement and marketing materials."
    },
    {
        question: "How can I track construction progress?",
        answer: "Buyers receive: Regular construction updates, Site visit opportunities, Photo/video progress reports, and Dedicated relationship manager support."
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
                        <h2 className="text-4xl sm:text-5xl text-[#1C1C1C] leading-[1.1]">
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
