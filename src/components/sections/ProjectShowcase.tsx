"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const CATEGORIES = ["All", "Frontend", "Backend", "Fullstack", "AI", "Cybersecurity"];

const PROJECTS = [
  {
    id: 1,
    title: "Aura UI Library",
    description: "A premium headless component library built for Next.js with advanced WebGL interactions.",
    category: "Frontend",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Nexus Core API",
    description: "High-performance distributed microservices architecture for real-time data processing.",
    category: "Backend",
    tech: ["Go", "gRPC", "Redis", "Docker"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Sentient Dashboard",
    description: "AI-powered analytics platform for predictive modeling and anomaly detection.",
    category: "AI",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "DefendX OSINT Tool",
    description: "Open-source intelligence gathering toolkit with an interactive threat map visualization.",
    category: "Cybersecurity",
    tech: ["Node.js", "TypeScript", "D3.js"],
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "E-Commerce OmniPlatform",
    description: "End-to-end multi-tenant e-commerce solution with integrated payment gateways.",
    category: "Fullstack",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "Lumina Shader Studio",
    description: "In-browser GLSL shader editor and renderer with real-time compilation.",
    category: "Frontend",
    tech: ["WebGL", "React", "Zustand"],
    github: "#",
    live: "#"
  }
];

export function ProjectShowcase() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center min-h-screen">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-12">
            Projects
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full glow-effect"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-4xl font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-700">
                    {project.title.substring(0, 2)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 uppercase tracking-widest">{project.category}</span>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                      <a href={project.live} className="text-white/40 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-3">{project.title}</h4>
                  <p className="text-white/60 font-light text-sm mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
