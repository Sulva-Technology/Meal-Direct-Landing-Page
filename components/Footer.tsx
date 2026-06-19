'use client';

import Link from 'next/link';
import { Utensils } from 'lucide-react';

export default function Footer() {
  const openAuth = (mode: 'login' | 'signup', role: string | null = null) => {
    window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode, defaultRole: role }}));
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-primary text-white">
                <Utensils className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Meal <span className="text-green-primary">Direct</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Nigeria&apos;s first scheduled campus meal delivery platform. Built by Sulva Tech to eliminate food stress, wait times, and high delivery fees for students.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li><button onClick={() => openAuth('signup', 'student')} className="hover:text-green-primary transition-colors text-left">Order Now</button></li>
              <li><Link href="/#how-it-works" className="hover:text-green-primary transition-colors">How It Works</Link></li>
              <li><Link href="/features" className="hover:text-green-primary transition-colors">Features</Link></li>
              <li><Link href="/faq" className="hover:text-green-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Partners</h4>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li><button onClick={() => openAuth('signup', 'vendor')} className="hover:text-green-primary transition-colors text-left">Become a Vendor</button></li>
              <li><button onClick={() => openAuth('login', 'vendor')} className="hover:text-green-primary transition-colors text-left">Vendor Dashboard</button></li>
              <li><button onClick={() => openAuth('signup', 'rider')} className="hover:text-green-primary transition-colors text-left">Deliver for Us</button></li>
              <li><button onClick={() => openAuth('login', 'rider')} className="hover:text-green-primary transition-colors text-left">Rider Portal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3 text-sm flex flex-col items-start">
              <li><a href="https://sulvatech.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-primary transition-colors">About Sulva Tech</a></li>
              <li><a href="https://sulvatech.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-green-primary transition-colors">Careers</a></li>
              <li><a href="mailto:support@sulvatech.com" className="hover:text-green-primary transition-colors">Contact Support</a></li>
              <li><a href="https://sulvatech.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-green-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Meal Direct by Sulva Tech. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="hover:text-green-primary transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
