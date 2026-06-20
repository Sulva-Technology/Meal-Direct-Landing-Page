'use client';

import { motion } from 'motion/react';
import { Store, Clock, CalendarCheck, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: Store,
    title: 'Choose Your Meal',
    desc: 'Browse a curated list of trusted, verified campus food vendors and restaurants.',
  },
  {
    icon: Clock,
    title: 'Select Delivery Time',
    desc: 'Pick your fixed delivery window for Breakfast, Lunch, or Dinner.',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Your Order',
    desc: 'Pre-order for today, tomorrow, or subscribe for the whole week. Securely pay upfront.',
  },
  {
    icon: PackageCheck,
    title: 'Receive Your Meal',
    desc: 'Your food arrives exactly on schedule at your hostel, lodge, or faculty perfectly packaged.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="absolute inset-0 bg-green-50/50 -skew-y-3 transform origin-bottom-right -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            A Better Way To Eat On Campus
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Order once, and let our campus-optimized logistics handle the rest. Scheduled batch delivery means your food is never late.
          </p>
        </div>

        <div className="relative pt-8">
          {/* Animated Connection Line */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] w-[75%] h-1 bg-green-200/50 -translate-y-1/2 z-0" />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '75%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[72px] left-[12.5%] h-1 bg-green-primary shadow-[0_0_15px_rgba(11,107,79,0.5)] -translate-y-1/2 z-0" 
          />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-3xl glass bg-white flex items-center justify-center mb-8 relative border-2 border-green-primary/20 group-hover:border-green-primary transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-green-primary" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-primary text-white font-bold flex items-center justify-center shadow-lg border-2 border-white">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
