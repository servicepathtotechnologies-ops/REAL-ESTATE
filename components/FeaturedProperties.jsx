'use client';

import PropertyCard from './PropertyCard';
import { properties } from '@/data/properties';
import Link from 'next/link';

export default function FeaturedProperties() {
    return (
        <section className="py-24 bg-background border-t border-gray-100 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-6 inline-block relative">
                        Featured Properties
                        <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-gold rounded-full"></div>
                    </h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                        Handpicked premium listings across Hyderabad&apos;s most sought-after locations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {properties.slice(0, 6).map((prop) => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/properties"
                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-sm"
                    >
                        View All Properties <span className="text-xl">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
