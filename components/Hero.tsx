'use client';

import { motion } from 'motion/react';
import { ArrowRight, UtensilsCrossed, CalendarClock, Navigation, RotateCw } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroLogo3D = dynamic(() => import('./HeroLogo3D'), { ssr: false });

// Design default: the 3D logo stands alone. Flip to true to layer the status cards over it.
const SHOW_CARDS = true;

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
              <a href="https://user.mealdirectly.com" className="px-8 py-4 bg-green-primary hover:bg-green-600 text-white rounded-2xl font-medium text-lg transition-all hover:shadow-xl hover:shadow-green-primary/30 hover:-translate-y-1 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://vendor.mealdirectly.com" className="px-8 py-4 glass text-slate-700 hover:text-green-primary rounded-2xl font-medium text-lg transition-all hover:bg-white/60">
                Become a Vendor
              </a>
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

          {/* Right Visual: interactive 3D Meal Direct logo */}
          <div className="relative h-[580px] w-full hidden lg:block">
            <HeroLogo3D />

            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[4] inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white/70 border border-green-primary/15 text-[13px] font-semibold text-green-primary pointer-events-none">
              <RotateCw className="w-3.5 h-3.5" />
              Drag to spin
            </div>

            {SHOW_CARDS && (
              <>
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                  className="absolute top-16 -left-1.5 z-[5] glass rounded-[18px] p-4 shadow-xl flex items-center gap-3 w-56 bg-white/70"
                >
                  <div className="shrink-0 bg-green-100 text-green-primary w-11 h-11 rounded-[13px] grid place-items-center">
                    <UtensilsCrossed className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Status</p>
                    <p className="text-sm font-bold text-slate-900">Lunch Scheduled</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-[210px] -right-3.5 z-[5] glass rounded-[18px] p-4 shadow-xl flex items-center gap-3 w-56 bg-white/70"
                >
                  <div className="shrink-0 bg-blue-100 text-blue-600 w-11 h-11 rounded-[13px] grid place-items-center">
                    <CalendarClock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Vendor</p>
                    <p className="text-sm font-bold text-slate-900">Meal Confirmed</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut" }}
                  className="absolute bottom-12 right-5 z-[5] glass rounded-[18px] p-4 shadow-xl flex items-center gap-3 w-52 bg-green-primary/10 border-green-primary/35"
                >
                  <div className="shrink-0 bg-green-primary text-white w-11 h-11 rounded-[13px] grid place-items-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-green-700 font-medium">12:30 PM</p>
                    <p className="text-sm font-bold text-slate-900">Delivered</p>
                  </div>
                </motion.div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
