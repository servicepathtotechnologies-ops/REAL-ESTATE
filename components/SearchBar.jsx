'use client';

import { Search, MapPin, Home, IndianRupee } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [filters, setFilters] = useState({
        type: '',
        location: '',
        budget: ''
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(filters);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-8 relative z-30 pb-16">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-4 items-center">

                {/* Type Filter */}
                <div className="w-full md:w-1/4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Home className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                        name="type"
                        value={filters.type}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-700 font-medium appearance-none cursor-pointer"
                    >
                        <option value="">Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Plot">Plot</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>

                {/* Location Filter */}
                <div className="w-full md:w-1/4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-700 font-medium appearance-none cursor-pointer"
                    >
                        <option value="">Location</option>
                        <option value="Kondapur">Kondapur</option>
                        <option value="Jubilee Hills">Jubilee Hills</option>
                        <option value="Banjara Hills">Banjara Hills</option>
                        <option value="Gachibowli">Gachibowli</option>
                        <option value="Madhapur">Madhapur</option>
                        <option value="HITEC City">HITEC City</option>
                    </select>
                </div>

                {/* Budget Filter */}
                <div className="w-full md:w-1/4 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <IndianRupee className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                        name="budget"
                        value={filters.budget}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-gray-700 font-medium appearance-none cursor-pointer"
                    >
                        <option value="">Budget</option>
                        <option value="Under ₹50L">Under ₹50L</option>
                        <option value="₹50L–1Cr">₹50L–1Cr</option>
                        <option value="₹1Cr–3Cr">₹1Cr–3Cr</option>
                        <option value="₹3Cr+">₹3Cr+</option>
                    </select>
                </div>

                {/* Search Button */}
                <div className="w-full md:w-1/4">
                    <button
                        onClick={handleSearch}
                        className="w-full bg-gold hover:bg-yellow-500 text-navy font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                        <Search size={20} />
                        Search Properties
                    </button>
                </div>
            </div>
        </div>
    );
}
