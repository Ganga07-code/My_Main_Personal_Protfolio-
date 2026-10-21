"use client";

import { useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";

interface IntroProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

const orbitingParticles = [
  { top: "7%", left: "48%", delay: 0 },
  { top: "50%", left: "96%", delay: 0.8 },
  { top: "93%", left: "48%", delay: 1.6 },
  { top: "50%", left: "3%", delay: 2.4 },
  { top: "18%", left: "82%", delay: 1.2 },
  { top: "82%", left: "18%", delay: 2 },
];

export default function Intro({ isUnlocked, onUnlock }: IntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 80, damping: 18 });
  const rotateY = useSpring(pointerX, { stiffness: 80, damping: 18 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (shouldReduceMotion || event.pointerType !== "mouse") return;
      pointerX.set(((event.clientX / window.innerWidth) - 0.5) * 8);
      pointerY.set(((event.clientY / window.innerHeight) - 0.5) * -8);
    },
    [pointerX, pointerY, shouldReduceMotion],
  );

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.main
          key="intro-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#10100f] text-[#f5f1e8]"
        >
          <div className="intro-grid pointer-events-none absolute inset-0 opacity-70" />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { x: [0, 32, -22, 0], y: [0, -28, 18, 0], scale: [1, 1.12, 0.94, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-32 top-[-18rem] h-[38rem] w-[38rem] rounded-full bg-primary/[0.09] blur-[110px]"
          />
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { x: [0, -28, 24, 0], y: [0, 24, -18, 0], scale: [1, 0.92, 1.1, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-64 -right-40 h-[42rem] w-[42rem] rounded-full bg-[#a9b99a]/[0.08] blur-[120px]"
          />

          <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-12 lg:px-20">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                <motion.span
                  aria-hidden="true"
                  animate={shouldReduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.85, 1.1, 0.85] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgba(243,166,90,0.8)]"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c7c0b2] sm:text-xs">
                  Portfolio · 2026
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.7 }}
                className="text-5xl font-[800] leading-[0.96] tracking-[-0.07em] text-white sm:text-6xl md:text-6xl lg:text-[5.25rem] xl:text-[6.5rem]"
              >
                Myla
                <br />
                <span className="text-gradient-primary">Gangadhar.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.65 }}
                className="mt-6 text-xs font-semibold uppercase tracking-[0.19em] text-[#c7c0b2] sm:text-sm"
              >
                Frontend Developer <span className="mx-2 text-primary">/</span> Cyber Security Enthusiast
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.37, duration: 0.65 }}
                className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#a8a398] sm:text-lg md:mx-0"
              >
                I build thoughtful digital experiences where crisp design meets practical engineering.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.65 }}
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onUnlock}
                className="group mt-9 inline-flex items-center gap-5 rounded-full border border-primary/50 bg-primary px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#17130e] shadow-[0_10px_35px_rgba(243,166,90,0.18)] transition-all hover:bg-[#ffc17d] sm:px-7"
              >
                Explore my work
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </motion.button>
            </motion.section>

            <motion.div
              style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
              initial={{ opacity: 0, scale: 0.88, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
              className="relative mx-auto flex aspect-square w-[min(78vw,28rem)] shrink-0 items-center justify-center md:w-[min(36vw,31rem)]"
            >
              <div className="absolute inset-[7%] rounded-full border border-white/[0.09]" />
              <div className="absolute inset-[18%] rounded-full border border-primary/20" />
              <div className="absolute inset-[29%] rounded-full border border-dashed border-white/10" />

              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[7%] rounded-full"
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(243,166,90,0.9)]" />
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[18%] rounded-full"
              >
                <span className="absolute bottom-[9%] right-[9%] h-2 w-2 rounded-full bg-[#d2c49e] shadow-[0_0_16px_rgba(210,196,158,0.75)]" />
              </motion.div>

              {orbitingParticles.map((particle, index) => (
                <motion.span
                  key={index}
                  aria-hidden="true"
                  animate={shouldReduceMotion ? undefined : { opacity: [0.2, 0.9, 0.2], scale: [0.75, 1.2, 0.75] }}
                  transition={{ duration: 3 + index * 0.35, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute h-1.5 w-1.5 rounded-full bg-primary/80"
                  style={{ top: particle.top, left: particle.left }}
                />
              ))}

              <div className="absolute inset-[31%] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))] shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(243,166,90,0.2),transparent_60%)]" />
                <div className="intro-scan absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-primary/[0.08] to-transparent" />
                <div className="relative flex h-full flex-col items-center justify-center">
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-7xl font-[800] tracking-[-0.1em] text-[#f7e9d4] sm:text-8xl"
                  >
                    G<span className="text-primary">.</span>
                  </motion.span>
                  <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#a8a398]">
                    Design · Build · Secure
                  </span>
                </div>
              </div>

              <div className="absolute bottom-[6%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.22em] text-[#827e74]">
                <ArrowDownRight className="h-3.5 w-3.5 text-primary" />
                A little about me
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77746c] sm:bottom-8 sm:left-10 sm:right-10">
            <span>Based in India</span>
            <span className="hidden sm:inline">Scroll-free by design</span>
            <span>Open to opportunities</span>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
