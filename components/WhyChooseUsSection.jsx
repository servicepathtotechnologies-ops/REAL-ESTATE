'use client';

import Image from 'next/image';
import { Trophy, ShieldCheck, SearchCheck, Briefcase, IndianRupee, Handshake, Download } from 'lucide-react';

const features = [
    {
        icon: <Trophy size={24} className="text-navy" />,
        title: '15+ Years Market Expertise',
        desc: 'Deep local knowledge to find the best appreciated properties.'
    },
    {
        icon: <ShieldCheck size={24} className="text-navy" />,
        title: '100% RERA Compliant',
        desc: 'All listings are thoroughly vetted for legal compliance.'
    },
    {
        icon: <SearchCheck size={24} className="text-navy" />,
        title: 'Verified Listings',
        desc: 'Transparent details with accurate pricing and specs.'
    },
    {
        icon: <Briefcase size={24} className="text-navy" />,
        title: 'End-to-End Assistance',
        desc: 'From property search to fast registration hand-holding.'
    },
    {
        icon: <IndianRupee size={24} className="text-navy" />,
        title: 'Best Price Guarantee',
        desc: 'Direct developer partnerships to secure the best rates.'
    },
    {
        icon: <Handshake size={24} className="text-navy" />,
        title: 'Dedicated Manager',
        desc: 'A single point of contact for a seamless experience.'
    }
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                                alt="Modern Office Agency"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-navy/10"></div>
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] hidden md:block max-w-[250px] border border-gray-100">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="bg-gold/20 p-3 rounded-full text-gold">
                                    <Trophy size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-xl">Top Rated</h4>
                                    <p className="text-sm text-gray-500">Agency 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-6 leading-tight">
                            Why 2000+ Families Trust PrimeNest Realty
                        </h2>
                        <p className="text-gray-600 mb-10 text-lg leading-relaxed content-balance">
                            We go beyond just buying and selling. We build long-term relationships by providing transparency, trust, and unmatched expertise in Hyderabad&apos;s dynamic real estate market.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="bg-gold/20 p-3 rounded-full flex-shrink-0 mt-1 shadow-sm border border-gold/30">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); alert('Downloading Demo Brochure...'); }}
                            className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg"
                        >
                            <Download size={20} />
                            Download Property Brochure
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
