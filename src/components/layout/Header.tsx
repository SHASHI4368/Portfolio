"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certificates" },
];

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none"
    >
      <nav className="glass-card rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 pointer-events-auto">
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-xs md:text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
