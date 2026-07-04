"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Text */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
              >
                <span className="text-black font-black text-xl sm:text-2xl">G</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-5xl font-[800] tracking-tighter text-white">
                  GANGA<span className="text-primary">DHAR</span>
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-black uppercase tracking-[0.3em]">
                  PORTFOLIO
                </span>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <span className="text-xs text-slate-600 font-black uppercase tracking-[0.3em]">
                LOADING
              </span>
              <span className="text-xs text-slate-600 font-black uppercase tracking-[0.3em] inline-block w-2 text-center">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  .
                </motion.span>
              </span>
              <span className="text-xs text-slate-600 font-black uppercase tracking-[0.3em] inline-block w-2 text-center">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                >
                  .
                </motion.span>
              </span>
              <span className="text-xs text-slate-600 font-black uppercase tracking-[0.3em] inline-block w-2 text-center">
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                >
                  .
                </motion.span>
              </span>
            </motion.div>
          </div>

          {/* Background Grid */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
