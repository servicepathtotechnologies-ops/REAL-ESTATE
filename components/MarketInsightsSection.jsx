'use client';

import { TrendingUp, Building, Map } from 'lucide-react';

export default function MarketInsightsSection() {
    return (
        <section className="py-20 bg-background border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-serif font-bold text-navy mb-4">Hyderabad Real Estate Market Insights</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Stay informed with the latest trends shaping the property landscape.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="font-bold text-navy text-xl mb-3">Property prices in HITEC City rose 18% YoY</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Continued IT expansion and infrastructural developments have fueled immense demand for premium residential spaces.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Building size={24} />
                        </div>
                        <h3 className="font-bold text-navy text-xl mb-3">450+ new luxury projects launched in 2024</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Developers are focusing heavily on gated communities and high-rise apartments with world-class amenities.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Map size={24} />
                        </div>
                        <h3 className="font-bold text-navy text-xl mb-3">Hyderabad ranks #1 in residential growth</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Among top Indian metros, the city offers the best balance of affordability, lifestyle, and high ROI.
                        </p>
                    </div>

                </div>

                <p className="text-center text-xs text-gray-400 mt-10">
                    Source: Industry Reports 2024 | Data provided for reference purposes only.
                </p>
            </div>
        </section>
    );
}
