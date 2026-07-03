"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-mesh">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 sm:px-5 py-2 mb-6 sm:mb-8 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[800] text-white mb-6 sm:mb-10 tracking-tighter leading-[0.9]">
              Let&apos;s <span className="text-gradient-primary">Talk</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl mb-12 sm:mb-16 max-w-md leading-relaxed px-2">
              I&apos;m currently open to <span className="text-white font-bold">internship opportunities</span> and freelance projects. Let&apos;s build something amazing together!
            </p>

            <div className="space-y-6 sm:space-y-10 flex flex-col items-center w-full">
              <a
                href="mailto:gangadharmyla2006@gmail.com"
                className="flex items-center gap-4 sm:gap-8 group buoyant bg-white/5 border border-white/10 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] hover:border-primary/30 transition-all w-full justify-center max-w-md"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl glass flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-all duration-300 shadow-2xl">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Email Me</p>
                  <p className="text-white font-[800] text-base sm:text-xl tracking-tight break-all">gangadharmyla2006@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center">
                {[
                  { icon: Github, href: "https://github.com/Ganga07-code", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/gangadhar-myla-801aa035a/", label: "LinkedIn" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 transition-all shadow-2xl group buoyant"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
