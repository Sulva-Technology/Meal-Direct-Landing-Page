'use client';

import { motion } from 'motion/react';
import { TrendingUp, Users, Wallet, Clock, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';

export default function VendorsPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Vendor Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden"
              >
                 {/* Dashboard Mockup */}
                 <div className="bg-slate-900 p-4 flex items-center justify-between text-white">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400" />
                       <div className="w-3 h-3 rounded-full bg-yellow-400" />
                       <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="font-mono text-xs text-slate-400">Vendor.Dashboard</div>
                 </div>
                 <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="font-bold text-2xl text-slate-900">Total Pre-orders</h4>
                        <p className="text-slate-500">For today&apos;s lunch batch</p>
                      </div>
                      <div className="text-4xl font-display font-bold text-green-primary">142</div>
                    </div>
                    <div className="space-y-4">
                       {[
                          { item: 'Jollof Rice & Chicken', qty: 85, progress: 'w-[85%]' },
                          { item: 'Fried Rice & Beef', qty: 32, progress: 'w-[32%]' },
                          { item: 'Spaghetti & Meatballs', qty: 25, progress: 'w-[25%]' },
                       ].map((row, i) => (
                          <div key={i} className="flex flex-col gap-2">
                            <div className="flex justify-between text-sm font-medium text-slate-700">
                              <span>{row.item}</span>
                              <span>{row.qty} orders</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: row.progress.replace('w-[','').replace('%]','%') }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="bg-green-primary h-full rounded-full" 
                              />
                            </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
            </div>
            <div className="order-1 lg:order-2">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white mb-6">
                <span className="text-sm font-semibold text-slate-600">For Campus Vendors</span>
               </div>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight"
               >
                 More Orders.<br /> Less Waste.<br /> Better Planning.
               </motion.h2>
               <p className="text-lg text-slate-600 mb-8 max-w-lg">
                 Know exactly what to cook before you start cooking. Scheduled pre-orders eliminate food waste and guarantee daily revenue so you can grow your campus business faster.
               </p>
               <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: 'Predictable Demand', icon: TrendingUp },
                    { title: 'Advance Preparation', icon: Clock },
                    { title: 'Higher Visibility', icon: Users },
                    { title: 'Guaranteed Revenue', icon: Wallet },
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col gap-2 p-4 glass rounded-2xl bg-white border border-slate-100">
                      <item.icon className="w-6 h-6 text-green-primary" />
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </li>
                  ))}
               </ul>
               <a href="https://vendor.mealdirectly.com" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto">
                 Apply as Vendor
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>

        </div>
      </section>
      <CTA />
    </>
  );
}
