'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Store, Bike, X } from 'lucide-react';
import Image from 'next/image';

type Role = 'student' | 'vendor' | 'rider';

// Each app handles its own signup/login. Landing page just routes the user
// to the right subdomain instead of opening an in-page auth modal.
const ROLE_URLS: Record<Role, string> = {
  student: 'https://user.mealdirectly.com',
  vendor: 'https://vendors.mealdirectly.com',
  rider: 'https://riders.mealdirectly.com',
};

const ROLES = [
  { id: 'student', title: 'Student', desc: 'Order delicious meals', icon: GraduationCap },
  { id: 'vendor', title: 'Vendor', desc: 'Sell meals on campus', icon: Store },
  { id: 'rider', title: 'Rider', desc: 'Deliver & earn money', icon: Bike },
] as const;

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      const role: Role | undefined = e.detail?.defaultRole;
      // Role-specific button → redirect straight away.
      if (role && ROLE_URLS[role]) {
        window.location.href = ROLE_URLS[role];
        return;
      }
      // Generic Sign Up / Log In with no role → pick first.
      setIsOpen(true);
    };
    window.addEventListener('open-auth-modal', handler);
    return () => window.removeEventListener('open-auth-modal', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const go = (role: Role) => { window.location.href = ROLE_URLS[role]; };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden shadow-green-primary/10 border border-slate-100"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-50"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-9" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <Image
                  src="/logo.png"
                  alt="Meal Direct"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 shadow-lg shadow-green-primary/20"
                />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Continue as</h2>
                <p className="text-slate-500">Select how you want to use Meal Direct.</p>
              </div>

              <div className="space-y-3">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => go(r.id)}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-green-primary bg-white hover:bg-green-50/50 transition-all text-left group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-green-100 flex items-center justify-center transition-colors">
                      <r.icon className="w-6 h-6 text-slate-500 group-hover:text-green-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{r.title}</h3>
                      <p className="text-sm text-slate-500">{r.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
