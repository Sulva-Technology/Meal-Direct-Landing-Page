'use client';

import { motion } from 'motion/react';
import { XCircle, CheckCircle2, ArrowRightLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / (duration * 1000);
        
        if (progress < 1) {
            setCount(Math.min(Math.floor(progress * end), end));
            requestAnimationFrame(animate);
        } else {
            setCount(end);
        }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function WhyWeAreBetter() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="comparison">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-green-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Why Students Choose Us
          </motion.h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stop gambling with your daily meals on standard delivery platforms. Scheduled delivery changes everything.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center">
          
          {/* Traditional Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[400px] bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-3">
              Standard Delivery / Vendors
            </h3>
            <ul className="space-y-4">
              {[
                'Long queues during rush hour',
                'Unpredictable wait times',
                'High individual delivery fees',
                'Vendors often run out of food',
                'High daily stress'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden lg:flex w-16 h-16 rounded-full bg-white/10 items-center justify-center backdrop-blur-md border border-white/10 z-10">
            <ArrowRightLeft className="w-6 h-6 text-green-primary" />
          </div>

          {/* Meal Direct Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[450px] bg-gradient-to-b from-green-primary/20 to-green-primary/5 border border-green-primary/30 rounded-3xl p-8 shadow-[0_0_40px_rgba(22,163,74,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-primary/20 rounded-full blur-2xl" />
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              Meal Direct
            </h3>
            <ul className="space-y-4 relative z-10">
              {[
                'Zero waiting in lines',
                'Predictable exact-time delivery',
                'Ultra-low grouped delivery fees',
                'Guaranteed meal availability',
                'Subscribe and forget stress'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-green-primary shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-12">
          {[
            { value: 10000, suffix: '+', label: 'Meals Delivered' },
            { value: 98, suffix: '%', label: 'On-Time Success' },
            { value: 50, suffix: '+', label: 'Campus Vendors' },
            { value: 100, suffix: '%', label: 'Stress Free' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
               <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl md:text-5xl font-display font-bold text-green-primary mb-2"
               >
                 <AnimatedCounter end={stat.value} suffix={stat.suffix} />
               </motion.div>
               <p className="text-slate-400 font-medium uppercase tracking-wider text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
