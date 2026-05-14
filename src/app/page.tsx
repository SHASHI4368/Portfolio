"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Loader } from "@/components/layout/Loader";
import { Header } from "@/components/layout/Header";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { ScrollyCanvas } from "@/components/canvas/ScrollyCanvas";
import { AboutMe } from "@/components/sections/AboutMe";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { Certificates } from "@/components/sections/Certificates";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-background min-h-screen text-white">
      {!isLoaded && <Loader onLoadComplete={() => setIsLoaded(true)} />}

      <div className={`transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
        <Header />
        <div id="home"><ScrollyCanvas /></div>
        <div id="about"><AboutMe /></div>
        <div id="stack"><TechStack /></div>
        <div id="experience"><ExperienceTimeline /></div>
        <div id="education"><EducationTimeline /></div>
        <div id="projects"><ProjectShowcase /></div>
        <div id="certificates"><Certificates /></div>
        <Footer />
        <FloatingDock />
      </div>
    </main>
  );
}
