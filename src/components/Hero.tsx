"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-primary/20"
            >
              <span className="text-sm font-medium text-primary-glow flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for Internship Opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              I&apos;m <span className="text-gradient-primary">Myla Gangadhar</span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-slate-300 mb-6 h-12">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "Problem Solver",
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

            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              I build fast, scalable, and user-friendly web applications that solve real-world problems with elegant code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="px-8 py-4 rounded-xl bg-primary text-white font-bold flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-xl glass text-white font-semibold flex items-center gap-3 transition-all hover:bg-white/5 border border-white/10"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/assets/images/hero_top.jpg" 
                  alt="Myla Gangadhar" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-bounce-slow" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
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

