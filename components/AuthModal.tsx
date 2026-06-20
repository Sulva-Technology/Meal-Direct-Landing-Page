'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store, GraduationCap, Bike, X, ChevronLeft, Mail, Lock, User } from 'lucide-react';
import Image from 'next/image';

type Role = 'student' | 'vendor' | 'rider' | null;
type Mode = 'login' | 'signup';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<Role>(null);
  const [mode, setMode] = useState<Mode>('signup');

  useEffect(() => {
    const handler = (e: any) => {
      setIsOpen(true);
      if (e.detail?.mode) setMode(e.detail.mode);
      if (e.detail?.defaultRole) {
        setRole(e.detail.defaultRole);
      } else {
        setRole(null);
      }
    };
    window.addEventListener('open-auth-modal', handler);
    return () => window.removeEventListener('open-auth-modal', handler);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  const roles = [
    { id: 'student', title: 'Student', desc: 'Order delicious meals', icon: GraduationCap },
    { id: 'vendor', title: 'Vendor', desc: 'Sell meals on campus', icon: Store },
    { id: 'rider', title: 'Rider', desc: 'Deliver & earn money', icon: Bike },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
            className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden shadow-green-primary/10 border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <button 
                onClick={() => role ? setRole(null) : handleClose()}
                className="p-2 -ml-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-50"
              >
                {role ? <ChevronLeft className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </button>
              <div className="flex overflow-hidden rounded-full border border-slate-200 bg-slate-50 p-1">
                <button
                  onClick={() => setMode('login')}
                  className={`px-4 py-1.5 text-sm font-bold rounded-full transition-all ${
                    mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setMode('signup')}
                  className={`px-4 py-1.5 text-sm font-bold rounded-full transition-all ${
                    mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Sign Up
                </button>
              </div>
              <div className="w-9" /> {/* Spacer for centering */}
            </div>

            <div className="p-6 sm:p-8">
              {/* Screen 1: Select Role */}
              <AnimatePresence mode="wait">
                {!role && (
                  <motion.div
                    key="role-selection"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center mb-8">
                      <Image
                        src="/logo.png"
                        alt="Meal Direct"
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-2xl mx-auto mb-4 shadow-lg shadow-green-primary/20"
                      />
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {mode === 'login' ? 'Welcome back' : 'Create an account'}
                      </h2>
                      <p className="text-slate-500">
                        Select how you want to use Meal Direct.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {roles.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setRole(r.id)}
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
                  </motion.div>
                )}

                {/* Screen 2: Form */}
                {role && (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 capitalize">
                        {mode === 'login' ? `${role} Login` : `${role} Sign Up`}
                      </h2>
                      <p className="text-slate-500">
                        {mode === 'login' 
                          ? `Welcome back, enter your credentials.` 
                          : `Get started with your new ${role} account.`}
                      </p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      {mode === 'signup' && (
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input 
                              type="text" 
                              placeholder="John Doe" 
                              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-all"
                            />
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            type="email" 
                            placeholder="you@university.edu" 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input 
                            type="password" 
                            placeholder="••••••••" 
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/20 focus:border-green-primary transition-all"
                          />
                        </div>
                      </div>

                      {mode === 'login' && (
                        <div className="flex justify-end">
                          <button type="button" className="text-sm font-semibold text-green-primary hover:text-green-600 transition-colors">
                            Forgot password?
                          </button>
                        </div>
                      )}

                      <button className="w-full py-3.5 bg-green-primary hover:bg-green-600 text-white rounded-xl font-bold transition-all mt-4 transform active:scale-[0.98]">
                        {mode === 'login' ? 'Sign In' : 'Create Account'}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
