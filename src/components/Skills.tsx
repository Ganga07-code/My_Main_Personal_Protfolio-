"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, ShieldAlert, Terminal, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "React / Next.js", level: 65 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 75 },
    ],
  },
  {
    title: "Backend & Languages",
    icon: Terminal,
    color: "primary",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Python", level: 80 },
      { name: "C++", level: 60 },
      { name: "SQL / NoSQL", level: 70 },
    ],
  },
  {
    title: "Cyber Security",
    icon: ShieldAlert,
    color: "secondary",
    skills: [
      { name: "Security Fundamentals", level: 60 },
      { name: "Network Security", level: 60 },
      { name: "Cryptography", level: 75 },
    ],
  },
  {
    title: "Tools & AI",
    icon: Wrench,
    color: "primary",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "OpenCV", level: 80 },
      { name: "Generative AI", level: 75 },
      { name: "Docker", level: 60 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const barColor = color === "secondary"
    ? "bg-gradient-to-r from-cyan-500 to-sky-400"
    : "bg-gradient-to-r from-violet-600 to-purple-400";

  const textColor = color === "secondary" ? "text-cyan-400" : "text-violet-400";

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-bold text-slate-300">{name}</span>
        <span className={`text-xs font-black ${textColor}`}>{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${barColor} shadow-lg`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 sm:px-5 py-2 mb-4 sm:mb-6 rounded-full bg-secondary/10 border border-secondary/20"
          >
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">Expertise</span>
          </motion.div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white tracking-tighter leading-[0.9]"
          >
            Technical <span className="text-gradient-primary">Expertise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] glass border border-white/5 hover:border-primary/20 transition-all duration-500 buoyant shadow-2xl"
            >
              <div className="mb-6 sm:mb-10 flex items-center gap-3 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 transition-transform">
                  <group.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-[800] text-white tracking-tight uppercase">{group.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {group.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={i * 0.15 + j * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-20 blur-3xl pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-primary animate-pulse" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20 blur-3xl pointer-events-none">
        <div className="w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-secondary animate-pulse delay-1000" />
      </div>
    </section>
  );
}
