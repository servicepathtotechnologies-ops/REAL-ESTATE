'use client';

import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const isCrm = pathname === '/crm';

    return (
        <nav className="fixed top-0 w-full bg-navy text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Building2 className="text-gold" size={28} />
                        <span className="font-bold text-xl tracking-wide">PrimeNest Realty</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        {!isCrm ? (
                            <>
                                <Link href="/#properties" className="hidden md:block hover:text-gold transition-colors text-sm font-semibold">
                                    Properties
                                </Link>
                                <Link href="/#about" className="hidden md:block hover:text-gold transition-colors text-sm font-semibold">
                                    About
                                </Link>
                                <Link href="/crm" className="bg-gold text-navy px-4 py-2 rounded font-bold text-sm tracking-wide hover:bg-yellow-500 transition-colors">
                                    Agent Login
                                </Link>
                            </>
                        ) : (
                            <Link href="/" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm transition-colors">
                                Back to Website
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
