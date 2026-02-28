'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';
import SearchBar from '@/components/SearchBar';

function PropertiesContent() {
    const searchParams = useSearchParams();
    const initialType = searchParams.get('type') || '';
    const initialLocation = searchParams.get('location') || '';
    const initialBudget = searchParams.get('budget') || '';

    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [activeFilters, setActiveFilters] = useState({
        type: initialType,
        location: initialLocation,
        budget: initialBudget
    });

    const applyFilters = (filters) => {
        setActiveFilters(filters);

        let result = properties;

        if (filters.type) {
            result = result.filter(p => p.type === filters.type);
        }

        if (filters.location) {
            result = result.filter(p => p.location.includes(filters.location));
        }

        if (filters.budget) {
            result = result.filter(p => {
                const priceVal = parseFloat(p.price.replace('₹', '').replace(' Cr', '').replace('L', ''));
                const isLakhs = p.price.includes('L');
                const priceInCr = isLakhs ? priceVal / 100 : priceVal;

                if (filters.budget === 'Under ₹50L') return priceInCr < 0.5;
                if (filters.budget === '₹50L–1Cr') return priceInCr >= 0.5 && priceInCr <= 1;
                if (filters.budget === '₹1Cr–3Cr') return priceInCr > 1 && priceInCr <= 3;
                if (filters.budget === '₹3Cr+') return priceInCr > 3;
                return true;
            });
        }

        setFilteredProperties(result);
    };

    useEffect(() => {
        applyFilters({
            type: initialType,
            location: initialLocation,
            budget: initialBudget
        });
    }, [initialType, initialLocation, initialBudget]);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-12">
                <div className="bg-white rounded-2xl shadow-xl">
                    <SearchBar onSearch={applyFilters} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
                <div className="mb-8 flex justify-between items-end border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-bold text-navy">
                        {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
                    </h2>
                    <div className="flex gap-2">
                        {activeFilters.type && <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded font-semibold">{activeFilters.type}</span>}
                        {activeFilters.location && <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded font-semibold">{activeFilters.location}</span>}
                        {activeFilters.budget && <span className="text-xs bg-gold/20 text-gold-900 px-2 py-1 rounded font-semibold border border-gold/30">{activeFilters.budget}</span>}
                    </div>
                </div>

                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map(prop => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-navy mb-2">No properties found</h3>
                        <p className="text-gray-500">Try adjusting your filters to find what you&apos;re looking for.</p>
                        <button
                            onClick={() => applyFilters({ type: '', location: '', budget: '' })}
                            className="mt-6 text-gold font-bold hover:underline"
                        >
                            Clear All Filters
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default function PropertiesPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="bg-navy py-12 md:py-20 text-center px-4 relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 relative z-10">Property Listings</h1>
                <p className="text-gray-300 max-w-2xl mx-auto relative z-10 text-lg">
                    Discover exclusive luxury homes and premium commercial spaces.
                </p>
            </div>

            <Suspense fallback={<div className="text-center py-20 text-navy font-bold">Loading properties...</div>}>
                <PropertiesContent />
            </Suspense>
        </div>
    );
}
