"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CodeRain = () => {
  const chars = "01GANGADHAR<>/{}[]()";
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: "120vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 3 + (i % 4),
            delay: i * 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 text-primary/30 font-mono text-xs sm:text-sm whitespace-nowrap"
          style={{ 
            left: `${i * 7}%`,
          }}
        >
          {[...Array(25 + i % 10)].map((_, j) => (
            <div key={j} className="opacity-50">
              {chars[j % chars.length]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default function Intro() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <CodeRain />
          
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Logo with expanding ring */}
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/20"
              >
                <span className="text-black font-black text-4xl sm:text-5xl">G</span>
              </motion.div>
              
              {/* Expanding rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                />
              ))}
            </div>

            {/* Name with typing effect */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-4xl sm:text-6xl md:text-7xl font-[800] tracking-tighter text-white">
                  GANGADHAR
                </span>
              </motion.div>
              
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-12 sm:h-16 md:h-20 ml-1 align-middle bg-primary"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 text-xs sm:text-sm md:text-base text-slate-500 font-black uppercase tracking-[0.3em]"
            >
              Frontend Developer & Cyber Security Enthusiast
            </motion.p>

            {/* Progress dots */}
            <div className="mt-12 flex gap-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0.5] }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
