"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "Bsc (Hons) in Engineering",
    university: "Faculty of Engineering, University of Ruhuna",
    duration: "2021 - 2026",
    description: "Specialization in Computer Engineering with a CGPA of 3.79/4.0",
  },
  {
    degree: "GCE A/L in Physical Science",
    university: "St.Sylvester's College, Kandy",
    duration: "2017 - 2019",
    description: "2A's and B with Z-score 1.9611. Ranked 51st in the District.",
  }
];

export function EducationTimeline() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-right"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">Foundation</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
            Education
          </h3>
        </motion.div>

        <div className="relative border-r border-white/10 mr-4 md:mr-0 md:pr-0">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="mb-16 relative pr-8 md:pr-16 text-right group"
            >
              {/* Timeline dot */}
              <div className="absolute right-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-white/20 border-2 border-[#121212] group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
              
              <div className="glass-card p-6 md:p-8 rounded-2xl glow-effect hover:-translate-y-1 transition-transform duration-500">
                <div className="flex flex-col md:flex-row-reverse md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-xl md:text-2xl font-medium text-white">{edu.degree}</h4>
                  <span className="text-sm text-white/50 font-mono bg-white/5 px-3 py-1 rounded-full w-fit md:ml-auto md:mr-0">
                    {edu.duration}
                  </span>
                </div>
                <h5 className="text-lg text-white/70 mb-4">{edu.university}</h5>
                <p className="text-white/60 font-light leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
