'use client';

import { motion } from 'motion/react';
import { Route, Boxes, Map, Wallet, ArrowRight } from 'lucide-react';
import CTA from '@/components/CTA';

export default function RidersPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Rider Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white mb-6">
                <span className="text-sm font-semibold text-slate-600">For Logistics & Riders</span>
               </div>
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 tracking-tight"
               >
                 Earn While Delivering Smarter
               </motion.h2>
               <p className="text-lg text-slate-600 mb-8 max-w-lg">
                 Stop making single trips. Pick up batched orders from vendors and deliver directly to student zones for maximum efficiency and higher hourly earnings.
               </p>
               <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { title: 'Zone-Based Delivery', icon: Map },
                    { title: 'Grouped Orders', icon: Boxes },
                    { title: 'Better Routing', icon: Route },
                    { title: 'Flexible Income', icon: Wallet },
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col gap-2 p-4 glass rounded-2xl bg-white border border-slate-100">
                      <item.icon className="w-6 h-6 text-green-primary" />
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </li>
                  ))}
               </ul>
               <button onClick={() => window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { mode: 'signup', defaultRole: 'rider' }}))} className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto">
                 Apply to Ride
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            <div>
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden relative h-[500px]"
              >
                 <div className="absolute inset-0 bg-slate-100">
                    {/* Abstract map pattern */}
                    <div className="w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#16A34A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 </div>
                 
                 <motion.div 
                    className="absolute p-6 glass rounded-2xl bg-white shadow-xl z-10 flex items-center gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-green-primary w-64"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 >
                   <div className="w-12 h-12 rounded-xl bg-green-100 text-green-primary flex items-center justify-center shrink-0">
                      <Boxes className="w-6 h-6" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Hostel Block A</p>
                     <p className="text-xl font-bold text-slate-900">Deliver 15 Meals</p>
                   </div>
                 </motion.div>

                 {/* Connection Lines */}
                 <svg className="absolute inset-0 w-full h-full z-0 opacity-50" preserveAspectRatio="none">
                   <path d="M 50,400 C 150,400 150,250 250,250" stroke="#16A34A" strokeWidth="4" fill="none" strokeDasharray="8 8" className="animate-pulse" />
                 </svg>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
      <CTA />
    </>
  );
}
