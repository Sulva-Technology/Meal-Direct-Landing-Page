'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import CTA from '@/components/CTA';

const faqs = [
  {
    q: 'How does meal scheduling work?',
    a: 'You can browse meals and select a specific delivery window (e.g., Lunch slot between 12:30 PM - 1:30 PM). Vendors prepare all orders in batches, and our riders deliver them efficiently to your location during that timeframe.',
  },
  {
    q: 'Can I subscribe for a full week?',
    a: 'Yes! Our weekly plans let you pay once and automatically receive lunch or dinner (or both) every day from Monday to Friday without opening the app again.',
  },
  {
    q: 'How are vendors verified?',
    a: 'We physically inspect every campus vendor for hygiene, food quality, and capacity to handle batch orders before allowing them on Meal Direct. Only highly-rated vendors remain on the platform.',
  },
  {
    q: 'What campuses are currently supported?',
    a: 'We are currently launching at select universities. You can check if your campus is live by entering your school name during sign-up.',
  },
  {
    q: 'What happens if I miss my delivery window?',
    a: 'Riders arrive at specific zone hubs (like Hostel Blocks) within the time window. You will receive notifications when the batch arrives. We wait for a grace period, but standard scheduled rules apply to ensure everyone gets their food hot.',
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Common Questions
          </h1>
          <p className="text-lg text-slate-600">
            Everything you need to know about how Meal Direct works and how it can help you.
          </p>
        </div>
      </div>
      
      <section className="pb-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
              >
                <Accordion.Item value={`item-${i}`} className="glass bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left focus:outline-none group">
                      <span className="font-bold text-lg text-slate-800 group-hover:text-green-primary transition-colors">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-slate-400 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </div>
      </section>
      <CTA />
    </>
  );
}
