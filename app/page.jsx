'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
                        alt="Luxury Homes"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight shadow-sm drop-shadow-md">
                        Find Your Dream Property in Hyderabad
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium tracking-wide drop-shadow">
                        Luxury Apartments, Villas & Commercial Spaces
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
                        <Link
                            href="#contact"
                            className="bg-gold hover:bg-yellow-500 text-navy font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
                        >
                            Enquire Now
                        </Link>
                        <Link
                            href="#properties"
                            className="bg-white/10 hover:bg-white/20 border-2 border-white/50 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
                        >
                            View Properties
                        </Link>
                    </div>

                    <div className="hidden sm:flex bg-navy/80 border border-white/10 backdrop-blur-md rounded-full px-8 py-4 divide-x divide-white/20 shadow-2xl">
                        <div className="px-6 text-center">
                            <p className="text-gold font-bold text-xl">500+</p>
                            <p className="text-white text-xs uppercase tracking-wider mt-1 opacity-80">Properties</p>
                        </div>
                        <div className="px-6 text-center">
                            <p className="text-gold font-bold text-xl">₹200Cr+</p>
                            <p className="text-white text-xs uppercase tracking-wider mt-1 opacity-80">Sold</p>
                        </div>
                        <div className="px-6 text-center">
                            <p className="text-gold font-bold text-xl">2000+</p>
                            <p className="text-white text-xs uppercase tracking-wider mt-1 opacity-80">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Listings */}
            <section id="properties" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 inline-block relative">
                            Featured Properties
                            <div className="absolute -bottom-3 left-1/4 right-1/4 h-1 bg-gold rounded-full"></div>
                        </h2>
                        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">Explore our handpicked selection of premium real estate options across the best locations in Hyderabad.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map(prop => (
                            <PropertyCard key={prop.id} property={prop} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Why Choose PrimeNest Realty?</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                For over 15 years, PrimeNest Realty has been redefining luxury living and smart investments in Hyderabad. We bring transparency, trust, and unmatched local market expertise to help you find precisely what you&apos;re looking for.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    '15+ Years Experience',
                                    'RERA Registered',
                                    '500+ Verified Properties',
                                    'Award Winning Agency'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-gold" size={24} />
                                        <span className="font-semibold text-navy">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80"
                                alt="Modern Architecture"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 bg-navy text-white relative border-t-4 border-gold">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Find Your Dream Property.</h2>
                            <p className="text-gray-300 mb-12 text-lg leading-relaxed">Fill out the form below or chat with our fast response AI agent. Our property experts are ready to assist you.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="bg-white/10 p-4 rounded-full group-hover:bg-gold transition-colors">
                                        <MapPin className="text-gold group-hover:text-navy transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm tracking-widest uppercase text-gray-400">Headquarters</h4>
                                        <p className="text-lg">Jubilee Hills, Hyderabad, 500033</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="bg-white/10 p-4 rounded-full group-hover:bg-gold transition-colors">
                                        <Phone className="text-gold group-hover:text-navy transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm tracking-widest uppercase text-gray-400">Call Us Directly</h4>
                                        <p className="text-lg">+91-9876543210</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="bg-white/10 p-4 rounded-full group-hover:bg-gold transition-colors">
                                        <Mail className="text-gold group-hover:text-navy transition-colors" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm tracking-widest uppercase text-gray-400">Email Address</h4>
                                        <p className="text-lg">info@primenest.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl text-navy">
                            <h3 className="text-2xl font-bold mb-6">Send an Enquiry</h3>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Use the chatbot for the demo flow!"); }}>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" placeholder="Ravi Sharma" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all" placeholder="9876543210" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                    <textarea rows="4" className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-all resize-none" placeholder="I am looking for a 3BHK..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gold hover:bg-yellow-500 text-navy font-bold text-lg p-4 rounded-xl transition-colors shadow-md mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-navy border-t border-white/10 py-12 text-center text-gray-400">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Building2 className="text-gold" size={32} />
                    <span className="font-bold text-2xl text-white tracking-wide">PrimeNest Realty</span>
                </div>
                <p className="mb-4 text-sm font-medium">© 2025 PrimeNest Realty. All rights reserved.</p>
                <p className="text-xs text-gray-500">Demo System | Hyderabad, Telangana</p>
            </footer>
        </>
    );
}
