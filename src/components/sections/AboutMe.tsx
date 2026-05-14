"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">About Me</h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
            Passion for <br className="hidden md:block" />
            <span className="text-white/60">Pixel Perfection.</span>
          </h3>
          <div className="w-20 h-1 bg-white/20 mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-white/70 leading-relaxed font-light"
        >
          <p className="mb-6">
            I am a senior creative developer specializing in building premium, high-performance web applications. My focus lies at the intersection of design engineering and robust frontend architecture.
          </p>
          <p>
            With expertise in Next.js, Framer Motion, and WebGL-inspired UI interactions, I craft digital experiences that not only look cinematic but perform flawlessly. I believe that every micro-interaction contributes to a memorable user journey.
          </p>
        </motion.div>
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
