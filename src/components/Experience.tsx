"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Software Development & App Development Intern",
    company: "GetSetAI Innovations",
    period: "Jun 2026 – Present",
    description: "Engineered and deployed full-stack web and mobile application modules, contributing to scalable software solutions while streamlining deployment workflows and development efficiency. Collaborated across frontend, backend, and infrastructure teams to implement, debug, and optimize application features, accelerating project delivery and improving code maintainability.",
    tech: ["Full-Stack", "Mobile Dev", "Software Engineering"],
  },
  {
    role: "Web Development Intern",
    company: "Skill Craft Technology",
    period: "Jan 2026 – March 2026",
    description: "Built high-performance, responsive web interfaces. Focused on component-driven development and UI/UX optimization.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    role: "Research Intern",
    company: "SRM University, AP",
    period: "June 2025 – August 2025",
    description: "Researched Dual LLM Architectures for legal assistance systems. Optimized retrieval-augmented generation (RAG) pipelines.",
    tech: ["Python", "Gen AI", "LLMs", "RAG"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-black/30">
      <div className="container-custom">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-5 py-2 mb-4 sm:mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Work History</span>
          </motion.div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white tracking-tighter leading-[0.9]"
          >
            Professional <span className="text-gradient-primary">Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 sm:space-y-24">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-12 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-950 border border-primary/40 -translate-x-1/2 z-10 flex items-center justify-center shadow-2xl shadow-primary/20 buoyant">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-20" : "md:pr-20"} pl-12 sm:pl-16`}>
                  <div className="glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 buoyant group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Briefcase className="w-16 h-16 sm:w-24 sm:h-24" />
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3 text-primary mb-4 sm:mb-6">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-[800] text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors tracking-tighter">{exp.role}</h3>
                    <p className="text-xs sm:text-sm font-black text-slate-500 mb-6 sm:mb-8 uppercase tracking-widest">{exp.company}</p>
                    
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="text-[10px] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-black uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
