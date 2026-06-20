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
  metadataBase: new URL('https://www.mealdirectly.com'),
  title: 'Meal Direct | Scheduled Campus Meal Delivery',
  description: 'Premium scheduled campus meal delivery platform by Sulva Tech.',
  icons: {
    icon: [
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Meal Direct | Scheduled Campus Meal Delivery',
    description: 'Premium scheduled campus meal delivery platform by Sulva Tech.',
    images: ['/logofull.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen selection:bg-[#0B6B4F] selection:text-white flex flex-col" suppressHydrationWarning>
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
