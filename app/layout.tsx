import type {Metadata} from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import Preloader from '@/components/Preloader';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Meal Direct | Scheduled Campus Meal Delivery',
  description: 'Premium scheduled campus meal delivery platform by Sulva Tech.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen selection:bg-[#16A34A] selection:text-white flex flex-col" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AuthModal />
      </body>
    </html>
  );
}
