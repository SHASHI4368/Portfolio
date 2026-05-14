"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Creative Developer",
    company: "Acme Corp",
    duration: "2021 - Present",
    description: "Leading frontend architecture and building high-performance web experiences with Next.js and WebGL. Improved core web vitals by 40% across flagship products.",
    tech: ["Next.js", "TypeScript", "Three.js", "Framer Motion"]
  },
  {
    role: "Frontend Engineer",
    company: "Globex Inc",
    duration: "2018 - 2021",
    description: "Developed scalable UI component libraries. Collaborated closely with the design team to implement award-winning interactive interfaces.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Redux"]
  },
  {
    role: "Web Developer",
    company: "Initech",
    duration: "2016 - 2018",
    description: "Built and maintained multiple client-facing websites. Focused on accessibility, performance optimization, and responsive design.",
    tech: ["HTML/CSS", "Vanilla JS", "PHP", "WordPress"]
  }
];

export function ExperienceTimeline() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">Journey</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="mb-16 relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-white/20 border-2 border-[#121212] group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl glow-effect hover:-translate-y-1 transition-transform duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-xl md:text-2xl font-medium text-white">{exp.role}</h4>
                  <span className="text-sm text-white/50 font-mono bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                <h5 className="text-lg text-white/70 mb-4">{exp.company}</h5>
                <p className="text-white/60 font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="text-xs text-white/40 uppercase tracking-wider bg-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
