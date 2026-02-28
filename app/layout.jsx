import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import SocialProofTicker from '@/components/SocialProofTicker';
import ChatBot from '@/components/ChatBot';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
    title: 'PrimeNest Realty',
    description: 'Find Your Dream Property in Hyderabad - Luxury Apartments, Villas & Commercial Spaces.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
            <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
                <div className="fixed top-0 w-full z-50 flex flex-col">
                    <SocialProofTicker />
                    <div className="relative"><Navbar /></div>
                </div>
                <main className="flex-1 flex flex-col pt-[110px] md:pt-[100px] pb-[60px] md:pb-0">{children}</main>
                <Footer />
                <ChatBot />
                <FloatingElements />
                <ExitIntentPopup />
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
