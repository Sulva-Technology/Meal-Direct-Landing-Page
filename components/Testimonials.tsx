'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah D.',
    role: 'Medical Student',
    text: 'Meal Direct literally saved my semester. No more waiting in lines during my 30-minute break. The food is always there when I arrive at the hostel.',
    avatar: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    name: 'Chef Tony (Mama B Kitchen)',
    role: 'Campus Vendor',
    text: 'Before, we had days with too much food waste and days where we sold out too early. With scheduled pre-orders, I know exactly what to cook.',
    avatar: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    name: 'Emeka U.',
    role: 'Engineering Student',
    text: 'The Weekly Lunch subscription is a cheat code for campus survival. Highly highly recommend the whole platform.',
    avatar: 'https://picsum.photos/seed/user3/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-green-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Trusted by the Campus Community
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass bg-white/60 p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-primary">
                  <Image src={t.avatar} width={48} height={48} alt={t.name} unoptimized />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
