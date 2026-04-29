"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "PrivAccess – Zero Knowledge RBAC",
    description: "A secure access control system using Zero-Knowledge Proofs (ZKP) to enable role-based authorization without exposing sensitive user data. Built for high-security environments.",
    tech: ["Python", "Cryptography", "ZKP", "FastAPI"],
    githubUrl: "https://github.com/abhiram-1508/PrivAccess-A-Zero-Knowledge-Framework-for-Role-Based-Access-Control",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "AI Rock Paper Scissors",
    description: "Computer vision application that uses MediaPipe and OpenCV to detect hand gestures in real-time and play Rock-Paper-Scissors against an AI opponent.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    githubUrl: "https://github.com/Ganga07-code/AI-Rock-Paper-Scissors-Hand-Gesture",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Alzheimer's Prediction System",
    description: "Deep learning model developed to predict the progression of Alzheimer's disease from MRI scan data using convolutional neural networks (CNNs).",
    tech: ["TensorFlow", "Python", "Medical AI", "Scikit-learn"],
    githubUrl: "https://github.com/Ganga07-code/Alzhimers-Prediction",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "Timetable Management System",
    description: "Automated database-driven system to manage university schedules, resolving conflicts between classes, rooms, and faculty members automatically.",
    tech: ["SQL", "DBMS", "Python", "Flask"],
    githubUrl: "https://github.com/Ganga07-code/Time-Table-Management-System",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2088&auto=format&fit=crop",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl glass transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${
        project.featured ? "col-span-1 md:col-span-2" : "col-span-1"
      }`}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${project.featured ? "md:w-1/2" : "w-full h-48 md:h-64"}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content Container */}
        <div className={`p-8 flex flex-col justify-between ${project.featured ? "md:w-1/2" : "w-full"}`}>
          <div>
            {project.featured && (
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Featured Project</span>
            )}
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" /> Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Demo
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
    <section id="projects" className="section-padding bg-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Selected <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-lg"
            >
              A showcase of projects where I&apos;ve applied my skills to solve real-world problems.
            </motion.p>
          </div>
          <motion.a
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            href="https://github.com/Ganga07-code"
            target="_blank"
            className="text-sm font-bold text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
          >
            View all on GitHub <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

