"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "PrivAccess – Zero Knowledge RBAC",
    description: "Secure access control using Zero-Knowledge Proofs.",
    longDescription: "Solved the problem of sensitive data exposure in role-based systems. Implemented a ZKP framework that allows authorization without revealing identity details.",
    tech: ["Python", "FastAPI", "ZKP", "Cryptography"],
    githubUrl: "https://github.com/abhiram-1508/PrivAccess-A-Zero-Knowledge-Framework-for-Role-Based-Access-Control",
    liveUrl: "https://privaccess-app.onrender.com",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Credit Card Fraud Detection System",
    description: "Machine learning model to detect fraudulent transactions.",
    longDescription: "Developed a robust fraud detection system using advanced machine learning algorithms to identify anomalies and secure credit card transactions in real-time.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Data Science"],
    githubUrl: "https://github.com/Ganga07-code",
    liveUrl: "https://credit-card-fraud-detection-system-jet.vercel.app",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Alzheimer's Prediction System",
    description: "Deep learning model for early disease detection.",
    longDescription: "Addressed the need for early medical intervention by building a CNN-based model that predicts Alzheimer's progression from MRI scans with high accuracy.",
    tech: ["TensorFlow", "Python", "Medical AI", "Scikit-learn"],
    githubUrl: "https://github.com/Ganga07-code/Alzhimers-Prediction",
    liveUrl: "https://alzhimers-prediction.onrender.com",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "AI Rock Paper Scissors",
    description: "Real-time hand gesture recognition for AI games.",
    longDescription: "Developed a computer vision system to bridge physical interaction with digital play. Used MediaPipe for accurate hand tracking and real-time gesture classification.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    githubUrl: "https://github.com/Ganga07-code/AI-Rock-Paper-Scissors-Hand-Gesture",
    liveUrl: "https://ai-rock-paper-scissors-hand-gesture.vercel.app",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative glass rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-700 buoyant shadow-2xl ${
        project.featured ? "col-span-1 md:col-span-2" : "col-span-1"
      }`}
    >
      <div className={`flex flex-col ${project.featured ? "lg:flex-row" : ""} h-full`}>
        {/* Image Container */}
        <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2 min-h-[250px] sm:min-h-[300px] md:min-h-[400px]" : "w-full h-56 sm:h-64 md:h-72"}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {!project.featured && (
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex flex-wrap gap-2">
              {project.tech.slice(0, 2).map((t, i) => (
                <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl glass text-[10px] font-black text-white border border-white/10 uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${project.featured ? "lg:w-1/2" : "w-full"}`}>
          <div>
            {project.featured && (
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Featured Project</span>
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-[800] text-white mb-4 sm:mb-6 group-hover:text-primary transition-colors leading-[1.1] tracking-tighter">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-10">
              {project.featured ? project.longDescription : project.description}
            </p>
            
            {project.featured && (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-[10px] sm:text-xs font-black text-slate-300 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 sm:gap-8 flex-wrap">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black text-white hover:text-primary transition-all group/link buoyant"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="tracking-[0.2em]">SOURCE CODE</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black text-white hover:text-secondary transition-all group/link buoyant"
              >
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="tracking-[0.2em]">LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6 md:gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 sm:px-5 py-2 mb-4 sm:mb-6 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.3em]">Curated Portfolio</span>
            </motion.div>
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white mb-6 lg:mb-8 tracking-tighter leading-[0.9]"
            >
              Selected <span className="text-gradient-primary">Work</span>
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Engineering digital experiences that combine technical <span className="text-white font-bold">complexity</span> with aesthetic <span className="text-white font-bold">simplicity</span>.
            </motion.p>
          </div>
          
          <motion.a
            whileHover={{ x: 5 }}
            href="https://github.com/Ganga07-code"
            target="_blank"
            className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-black text-slate-500 hover:text-white transition-colors tracking-[0.2em]"
          >
            ALL PROJECTS <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
