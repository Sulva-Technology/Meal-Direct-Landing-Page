'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after a short delay to simulate app loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Use a use-layout-effect equivalent if needed, but useEffect is fine for a 2s timer
  // We'll also prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-50"
        >
          {/* Abstract Background Blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/50 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-100/50 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center z-10"
          >
            <div className="relative flex items-center justify-center w-28 h-28 mb-8">
              {/* Outer spinning dash ring */}
              <motion.svg
                className="absolute inset-0 w-full h-full text-green-primary opacity-50"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="20 10"
                />
              </motion.svg>
              
              {/* Inner continuous spinning ring */}
              <motion.svg
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] text-green-500 opacity-30"
                viewBox="0 0 100 100"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="150 150"
                />
              </motion.svg>

              {/* Inner bouncing logo icon */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-primary to-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.3)] relative"
              >
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping" style={{ animationDuration: '3s' }} />
                <Utensils className="w-8 h-8 relative z-10" />
              </motion.div>
            </div>
            
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="font-display font-bold text-3xl tracking-tight text-slate-900 mb-2">
                Meal <span className="text-green-primary">Direct</span>
              </h1>
              <div className="h-1.5 w-16 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                   className="h-full bg-green-primary rounded-full"
                   initial={{ width: "0%", x: "-100%" }}
                   animate={{ width: "50%", x: "200%" }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
