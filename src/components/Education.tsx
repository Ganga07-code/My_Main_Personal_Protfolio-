"use client";

import { motion } from "framer-motion";

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
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Academic <span className="text-primary">Journey</span>
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-black -translate-x-1/2 z-10" />

                <div className={`md:w-1/2 ${i % 2 !== 0 ? "md:pl-12" : "md:pr-12"} pl-8`}>
                  <div className="glass p-6 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-sm text-slate-400 mb-4">{edu.institution}</p>
                    <div className="inline-block px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold">
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

