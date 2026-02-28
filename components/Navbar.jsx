'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Phone, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isCrm = pathname === '/crm';
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Properties', href: '/properties' },
        { name: 'Locations', href: '/#locations' },
        { name: 'Why Us', href: '/#why-us' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Home className="text-gold" size={28} />
                        <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-navy">
                            PrimeNest Realty
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {!isCrm ? (
                            <>
                                <div className="flex items-center gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-foreground hover:text-gold font-medium transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="tel:+919876543210"
                                        className="flex items-center gap-2 border border-gold text-navy px-4 py-2 rounded-lg font-bold hover:bg-gold/10 transition-colors text-sm group"
                                    >
                                        <Phone size={16} className="text-gold group-hover:animate-pulse" />
                                        +91-9876543210
                                    </a>
                                    <a
                                        href="/#contact"
                                        className="bg-navy text-white px-5 py-2.5 rounded-lg font-bold hover:bg-gold hover:text-navy transition-all shadow-md text-sm"
                                    >
                                        Book Free Consultation
                                    </a>
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/"
                                className="bg-navy text-white px-5 py-2.5 rounded-lg font-bold hover:bg-gold hover:text-navy transition-colors text-sm"
                            >
                                Back to Website
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-navy p-2 focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out origin-top border-t border-gray-100 ${isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}>
                <div className="px-4 py-6 flex flex-col gap-4">
                    {!isCrm ? (
                        <>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-navy font-bold text-lg py-2 border-b border-gray-100 hover:text-gold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-4 mt-6">
                                <a
                                    href="tel:+919876543210"
                                    className="flex items-center justify-center gap-2 border border-gold text-navy px-4 py-3 rounded-lg font-bold text-center"
                                >
                                    <Phone size={18} className="text-gold" />
                                    +91-9876543210
                                </a>
                                <a
                                    href="/#contact"
                                    className="bg-navy text-white px-4 py-3 rounded-lg font-bold text-center shadow-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book Free Consultation
                                </a>
                                <Link
                                    href="/crm"
                                    className="text-gray-500 text-sm font-semibold text-center mt-4 border-t border-gray-100 pt-4"
                                >
                                    Agent Login
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Link
                            href="/"
                            className="bg-navy text-white px-4 py-3 rounded-lg font-bold text-center"
                        >
                            Back to Website
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
