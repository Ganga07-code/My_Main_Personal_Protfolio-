"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Glass Container for Navbar Content */}
        <div className={`flex w-full justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 border ${
          isScrolled 
            ? "glass border-white/10 shadow-2xl bg-black/40" 
            : "border-transparent"
        }`}>
          <a href="#home" className="text-xl sm:text-2xl font-[800] tracking-tighter text-white group flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center text-black font-black text-xs group-hover:rotate-12 transition-transform">G</div>
            GANGA<span className="text-primary">DHAR</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 text-[10px] font-black rounded-xl bg-white text-black hover:bg-primary hover:text-white transition-all uppercase tracking-[0.2em] buoyant"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 p-4"
          >
            <div className="glass border border-white/10 rounded-[1.5rem] p-6 space-y-5 shadow-2xl bg-black/90">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-black text-slate-400 hover:text-white transition-all uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full py-4 text-center rounded-xl bg-primary text-white font-black uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

