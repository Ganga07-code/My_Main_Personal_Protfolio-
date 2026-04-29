"use client";

import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Web Development Intern",
    company: "Skill Craft Technology",
    period: "Jan 2026 – March 2026",
    description: "Developed responsive and dynamic web interfaces using modern technologies. Focused on performance optimization and reusable UI components.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    role: "Research Intern",
    company: "SRM University, AP",
    period: "June 2025 – August 2025",
    description: "Worked on AI-powered legal assistance systems. Conducted research on Dual LLM Architectures for efficient retrieval and generation.",
    tech: ["Python", "Gen AI", "LLMs"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative bg-mesh">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Work <span className="text-primary">History</span>
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black -translate-x-1/2 z-10" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8`}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-sm text-slate-400 mb-4">{exp.company}</p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 font-medium">
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

