"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Tech Stack", value: "15+" },
  { label: "Experience", value: "1yr+" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Profile Image with Glow */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
                <Image
                  src="/assets/images/Hero.jpeg"
                  alt="Myla Gangadhar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <div className="lg:col-span-7">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Building the <span className="text-primary">Future</span> of Web
            </motion.h2>
            
            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed mb-8"
            >
              I&apos;m a Frontend Developer and CS student at SRM AP, passionate about creating high-performance, secure web systems. Currently exploring Computer Vision and Generative AI to push the boundaries of what&apos;s possible on the web.
            </motion.p>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

