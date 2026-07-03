"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Rocket, BrainCircuit } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "10+", icon: Rocket },
  { label: "Technical Skills", value: "15+", icon: Code2 },
  { label: "Learning Path", value: "AI & Web", icon: BrainCircuit },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-[2rem] sm:rounded-[3rem] blur-2xl opacity-50 animate-pulse" />
              <div className="relative h-full w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 glass buoyant shadow-2xl">
                <Image
                  src="/assets/images/Hero.jpeg"
                  alt="Myla Gangadhar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12 order-1 lg:order-2"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 sm:px-5 py-2 mb-4 sm:mb-6 rounded-full bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5"
              >
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">The Story</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white mb-6 sm:mb-10 tracking-tighter leading-[0.9]">
                About <span className="text-gradient-primary">Me</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
                I&apos;m a Computer Science student and <span className="text-white font-bold">Frontend Developer</span> dedicated to building digital experiences that matter. My approach blends technical precision with creative problem-solving.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mt-4 sm:mt-6">
                Currently, I&apos;m diving deep into <span className="text-white font-bold">Next.js</span> and <span className="text-white font-bold">Generative AI</span>, exploring how to build smarter, more responsive applications for the next generation of the web.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] glass border border-white/5 hover:border-primary/20 transition-all text-center group buoyant"
                >
                  <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-primary mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl sm:text-3xl font-[800] text-white mb-2 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

