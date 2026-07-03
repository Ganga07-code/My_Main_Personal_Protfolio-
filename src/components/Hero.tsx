"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="container-custom z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 rounded-full glass border border-primary/20 shadow-lg shadow-primary/5"
            >
              <span className="text-xs sm:text-sm font-bold text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                Available for Internship Opportunities
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[800] tracking-tighter mb-6 leading-[0.9] text-white">
              I&apos;m{" "}
              <span className="text-gradient-primary">Myla Gangadhar</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-400 mb-8 flex items-center gap-2 sm:gap-4 justify-center">
              <span className="text-secondary opacity-50">/</span>
              <TypeAnimation
                sequence={[
                  "Cyber Security Enthusiast",
                  2000,
                  "Frontend Developer",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white"
              />
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed text-center px-2">
              I&apos;m <span className="text-white font-bold">Myla Gangadhar</span>. I craft high-performance web applications and explore cyber security, bridging the gap between <span className="text-white font-bold">complexity</span> and <span className="text-white font-bold">intuition</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
              <Link
                href="#projects"
                className="group px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-primary text-white font-black flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-95"
              >
                View Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-1.5 glass">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

