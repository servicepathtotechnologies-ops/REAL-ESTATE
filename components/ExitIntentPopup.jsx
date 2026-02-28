'use client';

import { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const hasSeenPopup = sessionStorage.getItem('primenest_exit_popup');

        if (!hasSeenPopup) {
            const handleMouseOut = (e) => {
                if (e.clientY < 50 && e.relatedTarget === null) {
                    setIsVisible(true);
                    sessionStorage.setItem('primenest_exit_popup', 'true');
                }
            };

            document.addEventListener('mouseout', handleMouseOut);
            return () => document.removeEventListener('mouseout', handleMouseOut);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsVisible(false), 3000);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors bg-gray-100 rounded-full p-1 z-10"
                >
                    <X size={20} />
                </button>

                <div className="bg-gold p-8 text-center text-navy">
                    <FileText size={48} className="mx-auto mb-4 opacity-90" />
                    <h2 className="font-serif text-3xl font-bold mb-2">Wait! Before you go...</h2>
                    <p className="font-medium">Get our FREE Hyderabad Property Price Guide 2025</p>
                </div>

                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl text-navy mb-2">Guide Sent to Email!</h3>
                            <p className="text-gray-600">Check your inbox shortly.</p>
                        </div>
                    ) : (
                        <>
                            <p className="text-center text-gray-600 mb-6 font-medium">
                                Make an informed decision. Download our exclusive insights on top performing neighborhoods.
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3 rounded-lg transition-colors shadow-lg"
                                >
                                    Send Me the Guide
                                </button>
                            </form>
                            <p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. No spam.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
