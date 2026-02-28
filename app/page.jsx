'use client';

import { useRouter } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import SearchBar from '@/components/SearchBar';
import FeaturedProperties from '@/components/FeaturedProperties';
import LocationsSection from '@/components/LocationsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MarketInsightsSection from '@/components/MarketInsightsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
    const router = useRouter();

    const handleSearch = (filters) => {
        // Build query string
        const params = new URLSearchParams();
        if (filters.type) params.append('type', filters.type);
        if (filters.location) params.append('location', filters.location);
        if (filters.budget) params.append('budget', filters.budget);

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <>
            <HeroSection />
            <SearchBar onSearch={handleSearch} />
            <FeaturedProperties />
            <LocationsSection />
            <WhyChooseUsSection />
            <TestimonialsSection />
            <MarketInsightsSection />
            <ContactSection />
        </>
    );
}
