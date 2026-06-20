'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Riders', href: '/riders' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${
            scrolled ? 'bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm shadow-slate-200/50' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Meal Direct"
              width={40}
              height={40}
              priority
              className="w-10 h-10 rounded-xl shadow-lg shadow-green-primary/20 group-hover:shadow-green-primary/40 transition-shadow"
            />
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Meal <span className="text-green-primary">Direct</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold text-slate-800 hover:text-green-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-200" />
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode: 'signup' }}))} className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-primary to-green-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Get Started</span>
              <ChevronRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-6 right-6 mt-2 p-6 glass rounded-2xl lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-green-primary py-2 border-b border-white/50"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode: 'signup' }})); }} 
                className="mt-4 w-full px-6 py-3 text-sm font-medium text-white bg-green-primary rounded-xl shadow-lg shadow-green-primary/30"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
