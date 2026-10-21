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

function SkillBar({ name, level, color, isInView }: { name: string; level: number; color: string; isInView: boolean }) {
  const barColor = color === "secondary"
    ? "bg-gradient-to-r from-secondary to-primary"
    : "bg-gradient-to-r from-primary to-secondary";

  const textColor = color === "secondary" ? "text-secondary" : "text-primary";

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-bold text-slate-300">{name}</span>
        <span className={`text-xs font-black ${textColor}`}>{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-[width] duration-500 ease-out`}
          style={{ width: isInView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative overflow-hidden">
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
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-[#1c1b18]/90 border border-white/5 hover:border-primary/30 transition-colors duration-300 shadow-lg"
            >
              <div className="mb-6 sm:mb-10 flex items-center gap-3 sm:gap-5">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:border-primary/50 transition-all duration-300 shadow-lg shadow-primary/10"
                >
                  <group.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-[800] text-white tracking-tight uppercase">{group.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
