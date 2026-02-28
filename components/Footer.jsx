'use client';

import Link from 'next/link';
import { Building2, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-16 pb-6 relative z-10 border-t border-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Info */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Building2 className="text-gold" size={32} />
                            <span className="font-serif font-bold text-2xl tracking-wide">PrimeNest Realty</span>
                        </Link>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            Premium real estate consultants in Hyderabad. Discover luxury apartments, villas, and commercial spaces tailored to your lifestyle.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-navy hover:border-gold transition-all">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 tracking-wide text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/properties" className="text-gray-400 hover:text-gold transition-colors block text-sm">Properties</Link></li>
                            <li><Link href="/#about" className="text-gray-400 hover:text-gold transition-colors block text-sm">About Us</Link></li>
                            <li><Link href="/#locations" className="text-gray-400 hover:text-gold transition-colors block text-sm">Locations We Serve</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-gold transition-colors block text-sm">Contact Us</Link></li>
                            <li><Link href="/crm" className="text-gray-400 hover:text-gold transition-colors block text-sm font-semibold flex items-center gap-2">Agent Login <ArrowRight size={14} /></Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Property Types */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 tracking-wide text-white">Property Types</h3>
                        <ul className="space-y-4">
                            <li><Link href="/properties?type=Apartment" className="text-gray-400 hover:text-gold transition-colors block text-sm">Luxury Apartments</Link></li>
                            <li><Link href="/properties?type=Villa" className="text-gray-400 hover:text-gold transition-colors block text-sm">Premium Villas</Link></li>
                            <li><Link href="/properties?type=Plot" className="text-gray-400 hover:text-gold transition-colors block text-sm">Residential Plots</Link></li>
                            <li><Link href="/properties?type=Commercial" className="text-gray-400 hover:text-gold transition-colors block text-sm">Commercial Spaces</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 tracking-wide text-white">Stay Updated</h3>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">Subscribe to get latest property listings and market insights.</p>
                        <form className="flex mb-6" onSubmit={(e) => { e.preventDefault(); alert("Subscribed for demo!"); }}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-gold w-full text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-gold hover:bg-yellow-500 text-navy font-bold px-4 py-2 rounded-r-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm">📍 Jubilee Hills, Hyderabad 500033</p>
                            <p className="text-gray-400 text-sm">📞 <a href="tel:+919876543210" className="hover:text-gold transition-colors">+91-9876543210</a></p>
                            <p className="text-gray-400 text-sm">📧 <a href="mailto:info@primenest.in" className="hover:text-gold transition-colors">info@primenest.in</a></p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 PrimeNest Realty. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-xs font-semibold px-2 border-r border-gray-600">RERA Reg. No. P0240000xxxx</span>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
