"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t border-white/5 bg-black/40 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="text-2xl font-[800] tracking-tighter text-white group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-xs group-hover:rotate-12 transition-transform">G</div>
              GANGA<span className="text-primary">DHAR</span>
            </a>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Built with Passion & Precision
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Ganga07-code" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gangadhar-myla-801aa035a/" },
              { icon: Mail, href: "mailto:gangadharmyla2006@gmail.com" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:border-primary/40 transition-all buoyant"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all buoyant group shadow-2xl"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} MYLA GANGADHAR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">Next.js</span>
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">Tailwind</span>
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

