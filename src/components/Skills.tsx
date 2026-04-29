"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench, Code2, Database, Shield, Globe, Cpu } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
    ],
  },
  {
    title: "Backend & Languages",
    icon: Server,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 },
      { name: "SQL / NoSQL", level: 70 },
    ],
  },
  {
    title: "Tools & AI",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "OpenCV", level: 80 },
      { name: "Generative AI", level: 75 },
      { name: "Docker", level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-20">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical stack and the tools I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        whileInView={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + j * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

