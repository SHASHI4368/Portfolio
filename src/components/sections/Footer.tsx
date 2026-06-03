"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-20 px-6 lg:px-12 bg-[#050505] flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10 relative">
        <div className="flex flex-col mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            {`Let's build something `}
            <br />
            <span className="text-white/50">extraordinary.</span>
          </h2>
          <div className="flex md:flex-row flex-col items-center gap-3">
            <a
              href="mailto:shashika.b.gurunayake@gmail.com"
              className="text-lg text-white/70 hover:text-white transition-colors underline underline-offset-8 decoration-white/20 hover:decoration-white/100 w-fit mx-auto md:mx-0 mt-4"
            >
              shashika.b.gurunayake@gmail.com
            </a>
            <p className="text-lg md:flex hidden text-white/70 hover:text-white transition-colors  underline-offset-8 decoration-white/20 hover:decoration-white/100 w-fit mx-auto md:mx-0 mt-4">
              |
            </p>
            <p className="text-lg text-white/70 hover:text-white transition-colors  underline-offset-8 decoration-white/20 hover:decoration-white/100 w-fit mx-auto md:mx-0 mt-4">
              +94 77 307 3668
            </p>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300 group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="w-full max-w-7xl mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 z-10 relative">
        <p>
          © {new Date().getFullYear()} Shashika Gurunayake. All rights reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/shashika-gurunayake"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SHASHI4368"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
