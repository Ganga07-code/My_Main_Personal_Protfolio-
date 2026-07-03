"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, Code2, FileText, Laptop, Trophy, BrainCircuit } from "lucide-react";

const certificates = [
  {
    title: "Java SE 17 (Oracle)",
    description: "Certified in Java SE 17 Developer skills and core language concepts by Oracle.",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B681EBF49B3FA80D55F40A73D2A3FA540C1049998E59AB465B79DF37FB479049",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    title: "SAP Generative AI Developer",
    description: "Certified by SAP for skills in building Generative AI applications and solutions.",
    link: "https://www.credly.com/badges/8e0737ad-706e-4a17-b66c-7ee6781debb1",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    title: "Red Hat Certified Specialist in Containers",
    description: "Certified by Red Hat for expertise in container technologies and containerized application management.",
    link: "https://www.credly.com/badges/d54f2590-f7c3-4a8b-9ea6-65db8e73591c/public_url",
    icon: Award,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },

];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-black/20">
      <div className="container-custom">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Achievements</span>
          </motion.div>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-[800] text-white tracking-tighter leading-[0.9]"
          >
            <span className="text-gradient-primary">Certifications</span>
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg mt-6 max-w-xl mx-auto"
          >
            Courses, workshops, and hackathons I&apos;ve completed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] glass border border-white/5 hover:border-primary/20 transition-all duration-500 buoyant shadow-2xl flex flex-col gap-6"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${cert.bg} border ${cert.border} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <cert.icon className={`w-7 h-7 ${cert.color}`} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-[800] text-white mb-3 tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xs font-black text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] group/link"
              >
                <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-10 blur-3xl pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary animate-pulse" />
      </div>
    </section>
  );
}
