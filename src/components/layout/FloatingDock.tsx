"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, FileText } from "lucide-react";
import Link from "next/link";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function MagneticButton({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Magnetic pull distance
    x.set(mouseX * 0.3);
    y.set(mouseY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white glass group"
    >
      {children}
      {/* Tooltip for desktop (left) */}
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/60 text-white text-xs rounded opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block whitespace-nowrap backdrop-blur-md border border-white/10">
        {label}
      </span>
      {/* Tooltip for mobile (top) */}
      <span className="absolute bottom-full mb-4 px-3 py-1.5 bg-black/60 text-white text-xs rounded opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 md:hidden whitespace-nowrap backdrop-blur-md border border-white/10">
        {label}
      </span>
    </motion.a>
  );
}

export function FloatingDock() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:left-auto md:right-8 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 md:bottom-auto"
    >
      <div className="flex md:flex-col items-center gap-4 p-3 rounded-full glass-card">
        <MagneticButton href="#" label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#" label="GitHub">
          <Github className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#" label="Email">
          <Mail className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#" label="Phone">
          <Phone className="h-5 w-5" />
        </MagneticButton>
        <div className="w-px h-6 md:w-6 md:h-px bg-white/20 mx-1" />
        <MagneticButton href="#" label="Resume">
          <FileText className="h-5 w-5" />
        </MagneticButton>
      </div>
    </motion.div>
  );
}
