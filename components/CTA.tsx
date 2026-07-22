'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTACTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 p-12 lg:p-20 text-center text-white"
        >
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-green-primary rounded-full blur-[100px] opacity-30 -mr-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-green-accent rounded-full blur-[100px] opacity-20 -ml-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Your Food.<br />Your Campus.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">Your Time.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mb-10">
              Schedule meals in advance, skip the lines, and enjoy stress-free campus living. Join thousands of students eating smarter today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a href="https://user.mealdirectly.com" className="w-full sm:w-auto px-8 py-4 bg-green-primary hover:bg-green-500 text-white rounded-2xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(11,107,79,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://vendor.mealdirectly.com" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-2xl font-bold text-lg transition-all border border-white/20 text-center">
                Join As Vendor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
