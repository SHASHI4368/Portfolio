"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, FileText } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function MagneticButton({
  children,
  href,
  label,
  isMobile,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
  isMobile?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
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
      aria-label={label}
      className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white glass group"
    >
      {children}

      {/* Desktop tooltip — appears to the left of the button */}
      <span className="absolute right-full mr-4 px-3 py-1.5 bg-black/60 text-white text-xs rounded opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block whitespace-nowrap backdrop-blur-md border border-white/10">
        {label}
      </span>

      {/* Mobile tooltip — appears above the button */}
      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/60 text-white text-xs rounded opacity-0 translate-y-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 md:hidden whitespace-nowrap backdrop-blur-md border border-white/10">
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
      // Mobile: fixed bottom bar, centered, full-width with padding
      // Desktop: fixed right side, vertically centered
      className="fixed z-50
        bottom-4 left-1/2 -translate-x-1/2
        md:bottom-auto md:left-auto md:right-6 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2"
    >
      {/* 
        Mobile: horizontal pill, constrained width, wraps safely
        Desktop: vertical pill 
      */}
      <div
        className="flex md:flex-col items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-full glass-card
        max-w-[calc(100vw-2rem)]   {/* prevents overflow on very small screens */}
      "
      >
        <MagneticButton
          href="https://www.linkedin.com/in/shashika-gurunayake"
          label="LinkedIn"
        >
          <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
        </MagneticButton>

        <MagneticButton href="https://github.com/SHASHI4368" label="GitHub">
          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
        </MagneticButton>

        <MagneticButton
          href="mailto:shashika.b.gurunayake@gmail.com"
          label="Email"
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
        </MagneticButton>

        <MagneticButton href="tel:+94773073668" label="Phone">
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
        </MagneticButton>

        {/* Separator: horizontal on mobile, vertical on desktop */}
        <div className="w-px h-5 md:w-5 md:h-px bg-white/20" />

        <MagneticButton
          href="https://drive.google.com/file/d/1oqn4sxFvRpDpGlPihT7qXzm-AknsO0h5/view?usp=sharing"
          label="Resume"
        >
          <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
        </MagneticButton>
      </div>
    </motion.div>
  );
}
