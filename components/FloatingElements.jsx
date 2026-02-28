'use client';

import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingElements() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-20 md:bottom-8 right-4 flex flex-col gap-4 z-40">
                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20a%20property"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={24} className="fill-current" />
                    <span className="absolute right-full mr-4 bg-white text-navy font-bold text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                        WhatsApp Us
                    </span>
                </a>

                {/* Back to Top */}
                <button
                    onClick={scrollToTop}
                    className={`bg-navy hover:bg-navy/90 text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-all ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                        }`}
                    aria-label="Back to Top"
                >
                    <ArrowUp size={24} />
                </button>
            </div>

            {/* Floating Call Button (Bottom Left) */}
            <div className="hidden md:flex fixed bottom-8 left-4 z-40">
                <a
                    href="tel:+919876543210"
                    className="bg-navy hover:bg-navy/90 text-white pl-4 pr-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-3 group border border-gold/30"
                    aria-label="Call Us"
                >
                    <div className="bg-gold p-2 rounded-full group-hover:animate-pulse">
                        <Phone size={18} className="text-navy fill-current" />
                    </div>
                    <span className="font-bold">+91 98765 43210</span>
                </a>
            </div>

            {/* Mobile Sticky CTA Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <a
                    href="tel:+919876543210"
                    className="flex-1 bg-white border border-navy text-navy font-semibold py-3 rounded-lg text-center flex items-center justify-center gap-2"
                >
                    <Phone size={18} /> Call
                </a>
                <a
                    href="#contact"
                    className="flex-[2] bg-navy text-white font-semibold py-3 rounded-lg text-center"
                >
                    Book Consultation
                </a>
            </div>
        </>
    );
}
