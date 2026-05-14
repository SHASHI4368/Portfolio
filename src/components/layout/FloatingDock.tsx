"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Globe, User, Mail, Phone, FileText } from "lucide-react";
import Link from "next/link";

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
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
      className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white glass"
    >
      {children}
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
        <MagneticButton href="#">
          <User className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#">
          <Globe className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#">
          <Mail className="h-5 w-5" />
        </MagneticButton>
        <MagneticButton href="#">
          <Phone className="h-5 w-5" />
        </MagneticButton>
        <div className="w-px h-6 md:w-6 md:h-px bg-white/20 mx-1" />
        <MagneticButton href="#">
          <FileText className="h-5 w-5" />
        </MagneticButton>
      </div>
    </motion.div>
  );
}
