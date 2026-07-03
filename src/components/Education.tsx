"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech. Computer Science Engineering",
    institution: "SRM University, Andhra Pradesh",
    period: "2023 – 2027",
    score: "CGPA: 8.36 / 10",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Jr. College, Tenali",
    period: "2021 – 2023",
    score: "94.9%",
  },
  {
    degree: "SSC",
    institution: "Narayana English Medium School, Tenali",
    period: "2020 – 2021",
    score: "100%",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container-custom">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-5 py-2 mb-4 sm:mb-6 rounded-full bg-secondary/10 border border-secondary/20"
          >
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Education</span>
          </motion.div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white tracking-tighter leading-[0.9]"
          >
            Academic <span className="text-gradient-primary">Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 sm:space-y-24">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-12 md:gap-0 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-950 border border-secondary/40 -translate-x-1/2 z-10 flex items-center justify-center shadow-2xl shadow-secondary/20 buoyant">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>

                <div className={`md:w-1/2 ${i % 2 !== 0 ? "md:pl-20" : "md:pr-20"} pl-12 sm:pl-16`}>
                  <div className="glass p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/5 hover:border-secondary/20 transition-all duration-500 buoyant group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap className="w-16 h-16 sm:w-24 sm:h-24" />
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3 text-secondary mb-4 sm:mb-6">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        {edu.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-[800] text-white mb-2 sm:mb-3 group-hover:text-secondary transition-colors tracking-tighter">{edu.degree}</h3>
                    <p className="text-xs sm:text-sm font-black text-slate-500 mb-6 sm:mb-8 uppercase tracking-widest">{edu.institution}</p>
                    
                    <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-black uppercase tracking-widest">
                      {edu.score}
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
