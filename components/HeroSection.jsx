'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Trophy, HomeIcon, Star } from 'lucide-react';

export default function HeroSection() {
    const [isMounted, setIsMounted] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
                    alt="Luxury Villa Hyderabad"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradients for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-sm font-semibold mb-6 backdrop-blur-sm">
                        ✨ Premium Real Estate Agency in Hyderabad
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white leading-tight mb-6 text-balance drop-shadow-lg">
                        Find Your Dream Property in Hyderabad
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-10 text-balance leading-relaxed">
                        Luxury Apartments, Villas & Commercial Spaces — Trusted by 2000+ Families to find their perfect space.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link
                            href="#contact"
                            className="bg-gold hover:bg-yellow-500 text-navy font-bold text-lg px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:shadow-[0_0_30px_rgba(201,168,76,0.6)] transition-all text-center flex items-center justify-center gap-2"
                        >
                            Enquire Now <span className="text-xl">→</span>
                        </Link>
                        <Link
                            href="/properties"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg px-8 py-4 rounded-lg transition-all text-center"
                        >
                            View Properties
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 md:gap-8 pb-12 md:pb-0">
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <ShieldCheck className="text-gold" size={20} /> RERA Registered
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <Trophy className="text-gold" size={20} /> 15+ Years
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <HomeIcon className="text-gold" size={20} /> 500+ Properties
                        </div>
                        <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                            <Star className="text-gold" size={20} /> 4.9/5 Rating
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Animated Stats Section */}
            <div
                ref={ref}
                className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background to-transparent pt-32 pb-8 md:pb-12"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100">
                        {/* Stat 1 */}
                        <div className="text-center border-r border-gray-200 last:border-0 lg:last:border-r">
                            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-1">
                                {isMounted && inView ? <CountUp end={500} duration={2.5} separator="," /> : '500'}+
                            </h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Properties</p>
                        </div>
                        {/* Stat 2 */}
                        <div className="text-center lg:border-r border-gray-200">
                            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-1">
                                ₹{isMounted && inView ? <CountUp end={200} duration={2.5} /> : '200'}Cr+
                            </h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sold</p>
                        </div>
                        {/* Stat 3 */}
                        <div className="text-center border-r border-gray-200 lg:border-r">
                            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-1">
                                {isMounted && inView ? <CountUp end={2000} duration={2.5} separator="," /> : '2000'}+
                            </h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Happy Clients</p>
                        </div>
                        {/* Stat 4 */}
                        <div className="text-center">
                            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-1">
                                {isMounted && inView ? <CountUp end={15} duration={2.5} /> : '15'}+
                            </h3>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Exp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
