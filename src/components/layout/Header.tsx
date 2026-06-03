"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certificates" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    // Small delay lets the menu animate out before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* ── Desktop pill nav (lg+) ── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center py-6 px-4 pointer-events-none"
      >
        <nav className="glass-card rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </motion.header>

      {/* ── Mobile top bar (below lg) ── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 py-4 pointer-events-none"
      >
        {/* Logo / name mark */}
        <span className="pointer-events-auto text-white/80 text-sm font-medium tracking-widest uppercase glass-card px-4 py-2 rounded-full">
          SG
        </span>

        {/* Hamburger toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full glass-card text-white/70 hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.header>

      {/* ── Mobile fullscreen overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              key="menu"
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 lg:hidden glass-card rounded-2xl px-6 py-6 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex items-center justify-between py-3.5 border-b border-white/10 last:border-0 text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-colors group"
                >
                  <span>{link.name}</span>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-xs">
                    →
                  </span>
                </motion.a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
