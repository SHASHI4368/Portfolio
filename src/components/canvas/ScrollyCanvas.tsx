"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion } from "framer-motion";
import { FRAME_COUNT } from "../layout/Loader";

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Pre-load all images into memory for instant canvas drawing
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${indexStr}_delay-0.066s.webp`;
      loadedImages.push(img);
      
      img.onload = () => {
        count++;
        if (count === FRAME_COUNT) {
          imagesRef.current = loadedImages;
          setImagesLoaded(true);
          // Small delay to ensure canvas is ready
          requestAnimationFrame(() => drawFrame(0));
        }
      };
    }
  }, []);

  const drawFrame = (index: number) => {
    const imgArray = imagesRef.current;
    if (!canvasRef.current || !imgArray[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    
    // Support high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = rect.width / rect.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = rect.width;
      drawHeight = rect.width / imgRatio;
      offsetX = 0;
      offsetY = (rect.height - drawHeight) / 2;
    } else {
      drawWidth = rect.height * imgRatio;
      drawHeight = rect.height;
      offsetX = (rect.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (imagesRef.current.length === FRAME_COUNT) {
      drawFrame(Math.floor(latest));
    }
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (imagesRef.current.length === FRAME_COUNT) {
        drawFrame(Math.floor(frameIndex.get()));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, frameIndex]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.55], [50, 0, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.9], [50, 0, -50]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          style={{ filter: "contrast(1.1) brightness(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
        
        {/* Storytelling Text Overlays */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pointer-events-none">
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6">
            <h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-4 drop-shadow-2xl">
              John Doe
            </h1>
            <p className="text-xl md:text-3xl text-white/70 font-light tracking-wide">
              Creative Developer
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white drop-shadow-2xl">
              I build digital experiences.
            </h2>
          </motion.div>

          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-right right-6 md:right-12">
            <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white drop-shadow-2xl">
              Bridging design<br />and engineering.
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

