'use client';

import { motion } from 'motion/react';
import { CalendarClock, Store, ShieldCheck, MapPin, Search, Layers, CreditCard } from 'lucide-react';
import CTA from '@/components/CTA';

const features = [
  {
    title: 'Scheduled Ordering',
    desc: 'Order breakfast, lunch, or dinner hours or even days in advance.',
    icon: CalendarClock,
    className: 'md:col-span-2 md:row-span-2 bg-green-50/50',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
  },
  {
    title: 'Vendor Marketplace',
    desc: 'Browse top-rated campus food spots.',
    icon: Store,
    className: 'md:col-span-1 md:row-span-1 bg-white',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Hostel Delivery',
    desc: 'Direct dispatch to your exact room or lodge.',
    icon: MapPin,
    className: 'md:col-span-1 md:row-span-1 bg-white',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
  },
  {
    title: 'Verified Partners',
    desc: 'Only hygienic, high-quality vendors approved.',
    icon: ShieldCheck,
    className: 'md:col-span-1 md:row-span-2 bg-slate-900 border border-slate-700 text-white',
    iconColor: 'text-white',
    iconBg: 'bg-white/20',
  },
  {
    title: 'Batch Optimization',
    desc: 'Aggregated orders per hostel to keep fees low.',
    icon: Layers,
    className: 'md:col-span-1 md:row-span-1 bg-white',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
  },
  {
    title: 'Secure Payments',
    desc: 'Pay safely with cards, transfers, or wallet.',
    icon: CreditCard,
    className: 'md:col-span-2 md:row-span-1 bg-green-primary border border-green-500 text-white overflow-hidden relative',
    iconColor: 'text-green-100',
    iconBg: 'bg-white/20',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-24 pb-24 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Designed for Campus Life
          </h1>
          <p className="text-lg text-slate-600">
            A complete suite of tools to make meal scheduling totally seamless, whether you&apos;re a student, vendor, or rider.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="grid md:grid-cols-4 md:grid-rows-3 gap-4 lg:gap-6 lg:h-[600px]">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`p-8 rounded-3xl shadow-lg flex flex-col justify-between group transition-all cursor-default ${feature.className} ${feature.className.includes('text-white') ? '' : 'glass'}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.iconBg} ${feature.iconColor}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${feature.className.includes('text-white') ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`${feature.className.includes('text-white') ? 'text-white/80' : 'text-slate-600'} leading-relaxed`}>
                    {feature.desc}
                  </p>
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center self-end ${feature.className.includes('text-white') ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-900'}`}>
                  <Search className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
