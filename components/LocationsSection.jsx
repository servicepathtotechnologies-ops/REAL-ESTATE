'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const locations = [
    { name: 'Kondapur', properties: 45, img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jubilee Hills', properties: 32, img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
    { name: 'Banjara Hills', properties: 28, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80' },
    { name: 'Gachibowli', properties: 56, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Madhapur', properties: 41, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80' },
    { name: 'HITEC City', properties: 65, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kokapet', properties: 22, img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80' },
    { name: 'Nanakramguda', properties: 18, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80' },
];

export default function LocationsSection() {
    return (
        <section id="locations" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-4">
                            Prime Locations
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore our premium properties across Hyderabad&apos;s best neighborhoods.
                        </p>
                    </div>
                    <Link href="/properties" className="text-gold font-bold hover:text-navy transition-colors flex items-center gap-2 whitespace-nowrap">
                        View Map <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide gap-6 snap-x">
                    {locations.map((loc, idx) => (
                        <Link
                            href={`/properties?location=${loc.name}`}
                            key={idx}
                            className="relative min-w-[280px] h-[360px] rounded-2xl overflow-hidden group snap-start flex-shrink-0 shadow-sm border border-gray-200"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${loc.img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-white font-serif font-bold text-2xl mb-1">{loc.name}</h3>
                                <p className="text-gold text-sm font-medium">{loc.properties} Properties</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
