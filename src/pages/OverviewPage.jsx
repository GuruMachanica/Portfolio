import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import { FaArrowLeft, FaBrain, FaServer, FaCubes, FaDatabase, FaShieldAlt, FaMicrochip, FaArrowRight } from "react-icons/fa";
import { animate, stagger } from "animejs";

const engineeringPillars = [
  {
    icon: FaBrain,
    title: "Autonomous Agent Orchestration",
    tag: "AGENTIC AI",
    desc: "Designing stateful multi-agent pipelines with tool-calling frameworks, semantic memory indexing, and self-correcting execution loops."
  },
  {
    icon: FaServer,
    title: "High-Throughput Backend APIs",
    tag: "DISTRIBUTED SYSTEMS",
    desc: "Architecting asynchronous REST and WebSocket microservices using FastAPI, Redis caching, and async worker thread pools."
  },
  {
    icon: FaCubes,
    title: "Spatial 3D & Generative ML",
    tag: "COMPUTER VISION",
    desc: "Building AI-driven 3D coordinate transformation pipelines, spatial simulation engines, and generative visualization environments."
  },
  {
    icon: FaDatabase,
    title: "Vector Databases & Data Curation",
    tag: "DATA PIPELINES",
    desc: "Constructing automated data ingestion, validation, and feature curation pipelines for fine-tuning LLMs and computer vision models."
  },
  {
    icon: FaShieldAlt,
    title: "Audio Edge Security & Scam Prevention",
    tag: "SIGNAL PROCESSING",
    desc: "Engineering sub-second real-time streaming audio analysis systems equipped with automated anomaly detection and risk scoring."
  },
  {
    icon: FaMicrochip,
    title: "Bare-Metal & Systems Engineering",
    tag: "C++ & LOW-LEVEL",
    desc: "Developing memory-efficient data structures, low-level algorithm optimizations, and algorithmic problem-solving in modern C++."
  }
];

const OverviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".pillar-card", {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: stagger(70, { start: 100 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
            <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            SYSTEM ARCHITECTURE &amp; METHODOLOGY
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            ENGINEERING PHILOSOPHY
          </p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
            System Overview.
          </h1>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
            I specialize in Autonomous Agentic AI, high-throughput asynchronous backend systems, real-time audio analytics, and 3D spatial simulation.
          </p>
        </div>

        
        {/* 6 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="pillar-card opacity-0">
                <TiltCard className="brutalist-panel rounded-3xl p-7 border border-white/10 hover:border-white/40 flex flex-col justify-between h-full transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-white text-[20px] font-bold font-poppins tracking-tight mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-zinc-300 text-[13.5px] font-poppins leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-zinc-400">
                    <span>STATUS: ACTIVE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};

export default OverviewPage;
