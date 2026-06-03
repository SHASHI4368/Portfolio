"use client";

import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
            About Me
          </h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">
            Building Modern Software <br className="hidden md:block" />
            <span className="text-white/60">with Purpose.</span>
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
          <div className="space-y-6 max-w-2xl">
            <p className="text-slate-400 leading-relaxed">
              My journey in tech started with a deep curiosity about how complex
              systems work under the hood, leading me to pursue Computer
              Engineering at the University of Ruhuna. Graduating with a{" "}
              <span className="text-white underline decoration-emerald-400 decoration-2 underline-offset-4 font-semibold">
                CGPA of 3.79/4.0
              </span>
              , I honed a strong foundational understanding of software design
              patterns and clean code principles.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Today, I specialize in bringing fast, dynamic web applications to
              life using{" "}
              <span className="text-white font-medium">
                React.js and Next.js
              </span>
              , while leveraging robust backend fundamentals in{" "}
              <span className="text-white font-medium">Java</span>.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Beyond full-stack engineering, I closely follow and experiment
              with evolving technologies in{" "}
              <span className="text-sky-400">Cloud Computing</span>,{" "}
              <span className="text-sky-400">Cybersecurity</span>, and{" "}
              <span className="text-sky-400">AI</span>, ensuring the
              applications I build tomorrow are secure, intelligent, and
              infinitely scalable.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
