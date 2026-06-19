'use client';

import { motion } from 'motion/react';
import { ArrowRight, UtensilsCrossed, CalendarClock, Clock, Navigation } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-green-accent/40 blur-[100px] opacity-70 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-[#f0fdf4] blur-[120px] opacity-80 mix-blend-multiply" />
        <div className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-green-300/20 blur-[80px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-primary/20 bg-green-50/50 mb-8 sm:mb-10">
              <span className="flex h-2 w-2 rounded-full bg-green-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-green-primary tracking-wide">
                Nigeria&apos;s First Scheduled Campus Meal Delivery
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl space-y-2 lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              <span className="block">Eat Smarter.</span>
              <span className="block">Order Once.</span>
              <span className="block text-gradient">Get Meals On Time.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Pre-order affordable meals from trusted campus vendors and receive breakfast, lunch, or dinner exactly when you need it. No more long queues or waiting for hours.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode: 'signup', defaultRole: 'student' }}))} className="px-8 py-4 bg-green-primary hover:bg-green-600 text-white rounded-2xl font-medium text-lg transition-all hover:shadow-xl hover:shadow-green-primary/30 hover:-translate-y-1 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode: 'signup', defaultRole: 'vendor' }}))} className="px-8 py-4 glass text-slate-700 hover:text-green-primary rounded-2xl font-medium text-lg transition-all hover:bg-white/60">
                Become a Vendor
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                      alt="User avatar" 
                      width={40} 
                      height={40} 
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-500">
                Trusted by Students, Vendors & Riders
              </div>
            </div>
          </motion.div>

          {/* Right Visual (Abstract 3D-like concept with floating glass cards) */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Center phone-like pillar */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[500px] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden"
            >
                <div className="w-full h-full bg-white relative">
                  <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-green-50 to-white" />
                  <div className="pt-12 px-6 relative z-10">
                    <div className="w-full h-32 rounded-2xl bg-slate-100 mb-6 overflow-hidden relative">
                       <Image src="https://picsum.photos/seed/food1/400/300" layout="fill" objectFit="cover" alt="Delicious meal" unoptimized />
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-slate-200 rounded-full" />
                      <div className="h-4 w-1/2 bg-slate-200 rounded-full" />
                      <div className="h-10 w-full bg-green-primary rounded-xl mt-6" />
                    </div>
                  </div>
                </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-32 left-0 glass rounded-2xl p-4 shadow-xl flex items-center gap-4 w-56"
            >
              <div className="bg-green-100 text-green-primary p-3 rounded-xl">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Status</p>
                <p className="text-sm font-bold text-slate-900">Lunch Scheduled</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-60 -right-8 glass rounded-2xl p-4 shadow-xl flex items-center gap-4 w-56"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <CalendarClock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Vendor</p>
                <p className="text-sm font-bold text-slate-900">Meal Confirmed</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-40 left-8 glass rounded-2xl p-4 shadow-xl flex items-center gap-4 w-56 border-green-primary/30"
            >
               <div className="bg-yellow-100 text-yellow-600 p-3 rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Batch Delivery</p>
                <p className="text-sm font-bold text-slate-900">Rider Assigned</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0], scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 right-4 glass rounded-2xl p-4 shadow-xl flex items-center gap-4 w-48 bg-green-primary/10 border-green-primary/40 backdrop-blur-md"
            >
              <div className="bg-green-primary text-white p-3 rounded-xl">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-green-700 font-medium">12:30 PM</p>
                <p className="text-sm font-bold text-slate-900">Delivered</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
