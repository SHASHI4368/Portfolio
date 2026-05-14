"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onLoadComplete: () => void;
}

export const FRAME_COUNT = 120;

export function Loader({ onLoadComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const preloadImages = async () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const indexStr = i.toString().padStart(3, "0");
        const src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
        
        const img = new Image();
        img.src = src;
        
        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages++;
            setProgress(Math.floor((loadedImages / FRAME_COUNT) * 100));
            resolve(null);
          };
          img.onerror = () => {
            loadedImages++; // continue even on error to prevent hanging
            setProgress(Math.floor((loadedImages / FRAME_COUNT) * 100));
            resolve(null);
          };
        });
      }

      // Finish loading
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          document.body.style.overflow = "";
          onLoadComplete();
        }, 800); // Wait for fade out animation
      }, 500);
    };

    preloadImages();
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white"
        >
          <div className="absolute inset-0 glow-effect opacity-50" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-light tracking-tighter"
            >
              {progress}%
            </motion.div>
            <div className="mt-4 h-[1px] w-48 bg-white/10 overflow-hidden">
              <motion.div 
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-sm text-white/40 tracking-widest uppercase font-mono"
            >
              Initializing Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
