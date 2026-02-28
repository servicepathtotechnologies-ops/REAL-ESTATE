import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import ChatBot from '@/components/ChatBot';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'PrimeNest Realty',
    description: 'Find Your Dream Property in Hyderabad - Luxury Apartments, Villas & Commercial Spaces.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col pt-16`}>
                <Navbar />
                <main className="flex-1 flex flex-col">{children}</main>
                <ChatBot />
                <Toaster position="top-right" />
            </body>
        </html>
    );
}
