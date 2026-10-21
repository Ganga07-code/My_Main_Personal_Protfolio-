"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function BackgroundEffects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-[-2] overflow-hidden bg-[#10100f]">
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          x: [0, 70, 0],
          y: [0, 35, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 -top-56 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-primary/[0.12] to-secondary/[0.06] blur-[110px]"
      />

      <motion.div
        animate={shouldReduceMotion ? undefined : {
          x: [0, -55, 0],
          y: [0, -45, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute -bottom-64 -right-48 h-[42rem] w-[42rem] rounded-full bg-gradient-to-tr from-[#a9b99a]/[0.07] to-primary/[0.08] blur-[120px]"
      />

      <motion.div
        animate={shouldReduceMotion ? undefined : {
          x: [0, 38, 0],
          y: [0, 50, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute left-[42%] top-[36%] h-[26rem] w-[26rem] rounded-full bg-primary/[0.045] blur-[110px]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:radial-gradient(rgba(245,241,232,0.7)_0.6px,transparent_0.6px)] [background-size:5px_5px]" />
    </div>
  );
}
