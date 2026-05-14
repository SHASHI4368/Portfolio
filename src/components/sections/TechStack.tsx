"use client";

import { motion } from "framer-motion";

const STACK_CATEGORIES = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL", "Three.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Java", "Python"]
  },
  {
    title: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git", "Linux", "Cisco"]
  }
];

export function TechStack() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            Technologies & Tools
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STACK_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl glow-effect relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-xl font-medium text-white mb-6 relative z-10">{category.title}</h4>
              <ul className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map(skill => (
                  <li 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
