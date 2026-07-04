"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CodeRain = () => {
  const chars = "01GANGADHAR<>/{}[]()";
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((i) => (
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
          className="absolute top-0 text-primary/30 font-mono text-[10px] sm:text-xs sm:text-sm whitespace-nowrap"
          style={{ 
            left: `${i * 7}%`,
          }}
        >
          {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33].map((j) => (
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
    }, 2000); // Shorter duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <CodeRain />
          
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Logo with expanding ring */}
            <div className="relative mb-4 sm:mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/20"
              >
                <span className="text-black font-black text-2xl sm:text-4xl md:text-5xl">G</span>
              </motion.div>
              
              {/* Expanding rings */}
              {[0,1,2].map((i) => (
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
                  className="absolute inset-0 border-2 border-primary rounded-xl sm:rounded-2xl"
                />
              ))}
            </div>

            {/* Name */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[800] tracking-tighter text-white">
                  GANGADHAR
                </span>
              </motion.div>
            </div>

            {/* Subtitle - less gap */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-500 font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-center"
            >
              Frontend Developer & Cyber Security Enthusiast
            </motion.p>

            {/* Progress dots */}
            <div className="mt-6 sm:mt-10 flex gap-2 sm:gap-3">
              {[0,1,2,3,4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0.5] }}
                  transition={{
                    duration: 0.5,
                    delay: 0.7 + i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1.3,
                  }}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-primary"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
