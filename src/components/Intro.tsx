"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IntroProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export default function Intro({ isUnlocked, onUnlock }: IntroProps) {
  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.18),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(217,70,239,0.12),_transparent_38%)]" />

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl font-black text-black shadow-[0_0_40px_rgba(6,182,212,0.4)] sm:h-20 sm:w-20"
            >
              G
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-[800] tracking-tighter text-white sm:text-5xl md:text-7xl"
            >
              Myla <span className="text-gradient-primary">Gangadhar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 max-w-2xl text-sm font-bold uppercase tracking-[0.28em] text-slate-400 sm:text-base"
            >
              Frontend Developer & Cyber Security Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              I design secure, fast, and polished digital experiences that blend technical depth with thoughtful user-first design.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onUnlock}
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.25em] text-black shadow-[0_0_35px_rgba(6,182,212,0.35)] transition-all hover:bg-cyan-300"
            >
              Enter Portfolio
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
