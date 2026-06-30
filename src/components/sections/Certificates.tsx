"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATES = [
  {
    name: "JUnit and Mockito Unit Testing for Java Developers",
    institution: "Packt",
    date: "June 2026",
    link: "https://coursera.org/share/728be6b83ebf624ece026846269930b5",
  },
  {
    name: "Spring - Ecosystem and Core",
    institution: "LearnQuest",
    date: "June 2026",
    link: "https://coursera.org/share/bc8c2c2e076f4ca5dad4ee9ada559df2",
  },
];

export function Certificates() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">Credentials</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            Certifications
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl glow-effect group relative"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Award className="w-6 h-6" />
                </div>
                <a href={cert.link} className="text-white/30 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h4 className="text-lg font-medium text-white mb-2 leading-tight">
                {cert.name}
              </h4>
              <p className="text-white/60 text-sm mb-4">
                {cert.institution}
              </p>
              <span className="text-xs text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded w-fit">
                {cert.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
