'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "🔥 Ravi from Kondapur just enquired 2 minutes ago",
    "⭐ Priya from Banjara Hills booked a site visit",
    "💼 3 new properties added in Jubilee Hills today",
    "✅ Anil secured a 4BHK Villa in Gachibowli",
    "📈 Home loan rates starting at 8.35% for premium properties"
];

export default function SocialProofTicker() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 4000); // Change message every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-navy text-white text-xs md:text-sm py-2 px-4 text-center font-medium overflow-hidden border-b border-gold/30">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {messages[currentIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
