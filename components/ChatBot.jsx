'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ propertyType: '', budget: '', name: '', phone: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handlePropertyType = (type) => {
        setData({ ...data, propertyType: type });
        setStep(2);
    };

    const handleBudget = (budget) => {
        setData({ ...data, budget });
        setStep(3);
    };

    const submitLead = async (e) => {
        e.preventDefault();
        if (step === 3 && data.name.length < 2) {
            toast.error('Name must be at least 2 characters.');
            return;
        }
        if (step === 3) {
            setStep(4);
            return;
        }

        // step 4 submit
        if (!/^\d{10}$/.test(data.phone)) {
            toast.error('Please enter a valid 10-digit phone number.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/save-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            if (json.success) {
                setStep(5);
                toast.success('Enquiry sent successfully!');
            } else {
                toast.error('Failed to send enquiry. Try again.');
            }
        } catch (error) {
            toast.error('Network error. Try again.');
        }
        setLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl mb-4 w-80 md:w-96 overflow-hidden border border-gray-100 flex flex-col transition-all duration-300">
                    <div className="bg-navy text-white p-4 flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 font-bold rounded-full animate-pulse mr-1"></div>
                            <span className="font-bold tracking-wide">PrimeNest Agent</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-4 bg-gray-50 flex-1 min-h-[300px] max-h-[400px] overflow-y-auto flex flex-col justify-end space-y-4">

                        {/* Step 1 */}
                        <div className="w-full">
                            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-navy max-w-[85%] mb-3 border border-gray-100 font-medium">
                                Hello 👋 Looking for property in Hyderabad?
                            </div>
                            {step === 1 && (
                                <div className="flex flex-wrap gap-2">
                                    {['2BHK', '3BHK', 'Villas', 'Commercial'].map(type => (
                                        <button key={type} onClick={() => handlePropertyType(type)} className="bg-white hover:bg-gold/10 hover:text-navy border border-gold/30 text-navy px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm">
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {step > 1 && (
                                <div className="flex justify-end">
                                    <div className="bg-blueActive text-white p-3 py-2 rounded-lg rounded-tr-none shadow-sm text-sm max-w-[85%]">
                                        {data.propertyType}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Step 2 */}
                        {step >= 2 && (
                            <div className="w-full">
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-navy max-w-[85%] mb-3 font-medium">
                                    Great choice! What is your budget?
                                </div>
                                {step === 2 && (
                                    <div className="flex flex-col gap-2">
                                        {['Under ₹50L', '₹50L-1Cr', '₹1Cr-2Cr', 'Above ₹2Cr'].map(budget => (
                                            <button key={budget} onClick={() => handleBudget(budget)} className="bg-white hover:bg-gold/10 border border-gold/30 text-navy px-4 py-2 rounded text-xs font-bold transition-all shadow-sm text-left flex justify-between items-center">
                                                {budget} <ChevronRight size={14} className="text-gold" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {step > 2 && (
                                    <div className="flex justify-end">
                                        <div className="bg-blueActive text-white p-3 py-2 rounded-lg rounded-tr-none shadow-sm text-sm max-w-[85%]">
                                            {data.budget}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 3 & 4 (Forms) */}
                        {step >= 3 && step < 5 && (
                            <div className="w-full">
                                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-navy max-w-[85%] mb-3 font-medium">
                                    {step === 3 ? "Please share your name:" : "Please share your 10-digit phone number:"}
                                </div>
                                <form onSubmit={submitLead} className="flex gap-2 relative">
                                    <input
                                        autoFocus
                                        type={step === 3 ? "text" : "tel"}
                                        value={step === 3 ? data.name : data.phone}
                                        onChange={e => setData(step === 3 ? { ...data, name: e.target.value } : { ...data, phone: e.target.value })}
                                        placeholder={step === 3 ? "Your Name" : "9876543210"}
                                        className="flex-1 bg-white border border-gray-200 text-sm outline-none px-4 py-3 pb-3 rounded-lg focus:border-blueActive focus:ring-1 focus:ring-blueActive"
                                    />
                                    <button type="submit" disabled={loading} className="bg-blueActive hover:bg-blue-700 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                                        {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Send size={18} />}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Step 5 */}
                        {step === 5 && (
                            <div className="w-full text-center py-6 animate-pulse">
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <div className="text-2xl mb-2">🎉</div>
                                    <h4 className="font-bold text-green-800 mb-1">Thank you!</h4>
                                    <p className="text-xs text-green-700 font-medium">Our property expert will contact you shortly.</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}

            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-navy hover:bg-blueActive transition-colors text-white p-4 rounded-full shadow-2xl animate-bounce border border-white/20 relative"
                    aria-label="Open Chat"
                >
                    <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
                    <MessageSquare size={28} />
                </button>
            )}
        </div>
    );
}
