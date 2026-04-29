"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Myla Gangadhar. Built for the future.
          </div>
          
          <div className="flex items-center gap-6">
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
                className="text-slate-500 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

