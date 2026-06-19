'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function StudentExperience() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-slate-50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Mockups */}
          <div className="relative h-[600px] flex justify-center items-center">
             <motion.div 
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                className="absolute z-10 w-64 h-[500px] rounded-[2.5rem] border-8 border-slate-900 bg-white shadow-2xl overflow-hidden -ml-20"
             >
                {/* Mockup 1: Menu */}
                <div className="absolute top-0 w-full h-20 bg-green-primary flex items-end px-4 pb-4">
                  <h4 className="text-white font-bold text-lg">Lunch Schedule</h4>
                </div>
                <div className="mt-20 p-4 space-y-4">
                   <div className="w-full h-8 bg-slate-100 rounded-full" />
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="flex gap-3 items-center">
                        <div className="w-16 h-16 bg-slate-200 rounded-xl overflow-hidden relative">
                           <Image src={`https://picsum.photos/seed/food${i}/100/100`} layout="fill" objectFit="cover" alt="food" unoptimized />
                        </div>
                        <div className="space-y-2 flex-1">
                           <div className="h-3 w-3/4 bg-slate-200 rounded" />
                           <div className="h-3 w-1/2 bg-slate-200 rounded" />
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute z-20 w-64 h-[500px] rounded-[2.5rem] border-8 border-slate-800 bg-slate-50 shadow-2xl overflow-hidden ml-20 mt-10"
             >
                {/* Mockup 2: Tracker */}
                <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-green-50 to-slate-50" />
                <div className="relative z-10 mt-16 p-4 flex flex-col items-center">
                   <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <div className="w-16 h-16 bg-green-primary rounded-full animate-pulse" />
                   </div>
                   <h4 className="font-bold text-slate-800 mb-2">On the way</h4>
                   <p className="text-xs text-slate-500 mb-8 text-center">Batch delivery reaching Hostel A in 5 mins.</p>
                   
                   <div className="w-full space-y-3">
                      <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-slate-100" />
                      <div className="w-full h-12 bg-white rounded-xl shadow-sm border border-slate-100" />
                   </div>
                </div>
             </motion.div>

             {/* Floating elements */}
             <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-20 right-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
             >
                <Image src="https://picsum.photos/seed/salad/80/80" width={60} height={60} className="rounded-xl" alt="salad" unoptimized />
             </motion.div>
          </div>

          {/* Content */}
          <div className="lg:pl-10 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
            >
              The Ultimate Student App Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-slate-600 mb-8"
            >
              A beautifully crafted mobile experience that lets you discover campus food, schedule deliveries, and track everything in real-time.
            </motion.p>
            
            <ul className="space-y-6">
              {[
                { title: 'Meal Discovery', desc: 'Find hidden gems and popular campus spots easily.' },
                { title: 'Flexible Scheduling', desc: 'Schedule just for today or plan the entire week ahead.' },
                { title: 'Live Tracking', desc: 'Know exactly when your batch delivery arrives at your block.' }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="glass p-5 rounded-2xl"
                >
                  <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
