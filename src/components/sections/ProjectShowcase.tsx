"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Globe } from "lucide-react";

const CATEGORIES = [
  "All",
  "Frontend",
  // "Backend",
  "Fullstack",
  "AI",
  // "Cybersecurity",
  "Parallel Computing",
  "Other",
];

const PROJECTS = [
  {
    id: 1,
    title: "JobKindle Hiring Platform",
    description:
      "An AI-driven recruitment platform that streamlines candidate sourcing, screening, and engagement for tech companies.",
    category: "Frontend",
    tech: ["Next.js", "ShadCN UI", "Tailwind CSS", "imagekit.io"],
    github: "https://github.com/SHASHI4368/JobKindle--Frontend.git",
    live: null,
    projectImage: "jobkindle.png",
  },
  {
    id: 2,
    title: "Book Fair Reservation System",
    description:
      "Enable reserving book fair stalls using an interactive map-based interface, enabling users to visually select and manage stall locations through dynamic object positioning on images.",
    category: "Frontend",
    tech: ["Next.js", "Tailwind CSS"],
    github:
      "https://github.com/Final-Year-Group-Projects-FOE-UOR/Book-Fair-Reservation-System---Frontend.git",
    live: null,
    projectImage: "bookfair.png",
  },
  {
    id: 3,
    title: "Hybrid Distributed Document Search System",
    description:
      "A high-performance document search system supporting exact and approximate string matching, parallelizing operations to efficiently handle large document collections.",
    category: "Parallel Computing",
    tech: ["C", "OpenMP", "MPI"],
    github:
      "https://github.com/SHASHI4368/Hybrid-Distributed-Document-Search-System-with-Exact-Approximate-Matching.git",
    live: null,
    projectImage: "docsearch.png",
  },
  {
    id: 4,
    title: "Dungeon Crawler Game",
    description:
      "A game with a React-based frontend and a Haskell backend built using Stack, applying functional programming principles such as immutable state management, recursive logic, algebraic data types, and pattern matching to model game behavior.",
    category: "Fullstack",
    tech: ["React", "Haskell", "Stack"],
    github: "https://github.com/SHASHI4368/Dungeon-Crawler.git",
    live: null,
    projectImage: "dungeoncrawler.png",
  },
  {
    id: 5,
    title: "Cheating detection model for online interviews",
    description:
      "A machine learning model for detecting cheating in online interviews. Integrated into the JobKindle platform, it analyzes video feed in real-time to identify suspicious behaviors, ensuring a fair hiring process.",
    category: "AI",
    tech: ["Python", "TensorFlow", "React"],
    github:
      "https://github.com/SHASHI4368/Cheating-Detection-Considering-Face-Orientation-For-Interviews.git",
    live: null,
    projectImage: "cheatingdetection.png",
  },
  {
    id: 6,
    title: "Appointment Management System for Faculty Staff",
    description:
      "A web-based application for managing appointments between staff and students with interactive calendar views, real-time notifications, and secure authentication.",
    category: "Fullstack",
    tech: [
      "React.js",
      "Node.js",
      "SQLite",
      "Material UI",
      "socket.io",
      "Express.js",
    ],
    github: "https://github.com/SHASHI4368/AMS.git",
    live: null,
    projectImage: "ams.png",
  },
  {
    id: 7,
    title: "File Transfer Application",
    description:
      "A client–server file transfer application for sharing files within a local network with concurrent file transfers between multiple clients over WiFi or Ethernet.",
    category: "Fullstack",
    tech: ["Java", "Java Swing", "Multithreading", "Sockets"],
    github: "https://github.com/SHASHI4368/FTP.git",
    live: null,
    projectImage: "ftp.png",
  },
  {
    id: 8,
    title: "Secure P2P Chat Application",
    description:
      "A secure peer-to-peer chat application with end-to-end encryption, enabling confidential message exchange over a socket-based network",
    category: "Fullstack",
    tech: ["Java", "Java Swing", "Multithreading", "Sockets", "Cryptography"],
    github: "https://github.com/SHASHI4368/Secure-P2P-ChatApp.git",
    live: null,
    projectImage: "chatapp.png",
  },
  {
    id: 9,
    title: "Single-Cycle RISC V Processor",
    description:
      "A single-cycle RISC V processor implemented in Verilog, supporting a subset of the RISC V instruction set architecture, designed for educational purposes to demonstrate basic processor design and functionality.",
    category: "Other",
    tech: ["Verilog"],
    github:
      "https://github.com/SHASHI4368/Single-Cycle-RISC_V-Processor-using-Verilog.git",
    live: null,
    projectImage: "riscv.png",
  },
];

export function ProjectShowcase() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter,
  );

  return (
    <section className="relative w-full py-32 px-6 lg:px-12 bg-[#121212] flex flex-col items-center min-h-screen">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-12">
            Projects
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  filter === cat
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full glow-effect"
              >
                {/* Project Image Container */}
                <div className="w-full h-48 bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors duration-500 z-10" />

                  {project.projectImage ? (
                    <Image
                      src={`/images/projects/${project.projectImage}`}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    /* Fallback Placeholder when image doesn't exist */
                    <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-4xl font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-700">
                      {project.title.substring(0, 2)}
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-xl font-medium text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-white/60 font-light text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
