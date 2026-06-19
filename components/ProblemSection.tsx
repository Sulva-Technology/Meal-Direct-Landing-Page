'use client';

import { motion } from 'motion/react';
import { ClockAlert, Ban, Receipt, TimerReset, Frown, BookOpen } from 'lucide-react';

const problems = [
  {
    icon: ClockAlert,
    title: 'Long Food Queues',
    desc: 'Waiting 30+ mins just to get food between lectures.',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
  },
  {
    icon: Ban,
    title: 'Unreliable Vendors',
    desc: 'Vendors running out of food or delivering wrong orders.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Receipt,
    title: 'High Delivery Costs',
    desc: 'Expensive fees for standard on-demand food delivery.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
  {
    icon: TimerReset,
    title: 'Missed Meal Times',
    desc: 'Forgetting to eat or eating late due to busy schedules.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Frown,
    title: 'Poor Planning',
    desc: 'Blowing weekly allowance on impulsive food purchases.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: BookOpen,
    title: 'Exam Season Stress',
    desc: 'No time to cook or source food when studying intensely.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Campus Food Shouldn&apos;t Be <span className="text-slate-400 line-through decoration-red-400">Stressful</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-lg text-slate-600"
          >
            The typical campus eating experience is chaotic, time-consuming, and expensive. It&apos;s time for an upgrade.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, i) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${prob.bg} ${prob.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <prob.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prob.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
