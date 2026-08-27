import React, { useState, useEffect, useRef } from "react";
import { styles } from "../styles";
import { FaGithub, FaFileDownload, FaArrowRight } from "react-icons/fa";
import { animate, createTimeline, stagger } from "animejs";

const pipelineNodes = [
  {
    id: "agents",
    title: "1. Autonomous Agents",
    subtitle: "Multi-Agent Orchestrator",
    tech: "LangChain • Tool Calling",
    metric: "< 120ms Routing",
    description: "Semantic intent parsing, workflow routing, and multi-agent coordination.",
  },
  {
    id: "inference",
    title: "2. Deep Learning & RAG",
    subtitle: "Custom Inference Engine",
    tech: "PyTorch • Spatial GeoData",
    metric: "98.4% Precision",
    description: "Vectorized embeddings, domain-specific retrieval, and real-time inference pipelines.",
  },
  {
    id: "backend",
    title: "3. Async Backend & APIs",
    subtitle: "High-Throughput Services",
    tech: "FastAPI • WebSockets • Docker",
    metric: "Sub-second Stream",
    description: "Scalable microservices handling real-time streaming data with low-latency caches.",
  },
  {
    id: "output",
    title: "4. Spatial & UI Outputs",
    subtitle: "Interactive 3D & Analytics",
    tech: "3D Spatial • Live Dashboards",
    metric: "60 FPS Telemetry",
    description: "Automated generative 3D meshes, safety KPI monitors, and real-time web telemetry.",
  },
];

const Hero = () => {
  const [activeNode, setActiveNode] = useState("agents");
  const heroRef = useRef(null);

  useEffect(() => {
    // Dynamic typography and element reveal with Anime.js v4
    try {
      const tl = createTimeline();
      tl.add(".hero-badge", {
        opacity: [0, 1],
        scale: [0.9, 1],
        ease: "outExpo",
        duration: 800,
      })
      .add(".hero-letter", {
        opacity: [0, 1],
        translateY: [35, 0],
        delay: stagger(25),
        ease: "outExpo",
        duration: 900,
      }, "-=400")
      .add(".hero-subtext, .hero-meta, .hero-cta", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(100),
        ease: "outQuad",
        duration: 800,
      }, "-=400")
      .add(".hero-pipeline-panel", {
        opacity: [0, 1],
        translateY: [30, 0],
        ease: "outExpo",
        duration: 1000,
      }, "-=500");
    } catch (e) {
      console.warn("Anime.js animation fallback", e);
    }
  }, []);

  const headline = "MOHAMMAD HUZAIFA";

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen mx-auto stripe-grid stripe-radial flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-8 z-0">
      
      {/* Top Meta Badge (Pure Monochrome) */}
      <div className="hero-badge opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full brutalist-panel mb-6 border border-white/20 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        <span className="text-[12px] sm:text-[13px] font-bold font-mono tracking-wider text-white uppercase">
          AGENTIC AI ENGINEER &amp; BACKEND ARCHITECT
        </span>
      </div>

      {/* Main Headline (Letters dynamically animated with anime.js) */}
      <div className="max-w-4xl text-center flex flex-col items-center">
        
        <h1 className="text-white text-[38px] sm:text-[64px] lg:text-[78px] font-extrabold tracking-tight leading-[1.08] font-poppins uppercase overflow-hidden flex flex-wrap justify-center">
          {headline.split("").map((char, index) => (
            <span
              key={index}
              className="hero-letter inline-block opacity-0"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
              {char}
            </span>
          ))}
        </h1>

        <p className="hero-subtext opacity-0 mt-5 text-zinc-300 text-[16px] sm:text-[20px] max-w-2xl leading-relaxed font-normal">
          Building autonomous multi-agent pipelines, generative models, and scalable, high-throughput backend infrastructure.
        </p>

        {/* Location & Status Meta (Pure Black & White) */}
        <div className="hero-meta opacity-0 mt-4 flex flex-wrap items-center justify-center gap-4 text-[13px] text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Prayagraj, UP, India
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Open to AI &amp; Backend Roles
          </span>
        </div>

        {/* Action Buttons (Pure Monochrome) */}
        <div className="hero-cta opacity-0 mt-8 flex flex-wrap gap-3.5 justify-center">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-[14px] font-mono hover:bg-zinc-200 transition-all duration-200 shadow-md">
            VIEW PROJECTS <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-white font-bold text-[14px] font-mono hover:border-white/40 hover:bg-white/[0.08] transition-all duration-200">
            <FaGithub className="w-4 h-4" />
            GITHUB
          </a>
          <a
            href="/Mohammad_Huzaifa_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-zinc-300 font-bold text-[14px] font-mono hover:text-white hover:border-white/40 transition-all duration-200">
            <FaFileDownload className="w-3.5 h-3.5 text-white" />
            RESUME
          </a>
        </div>
      </div>

      {/* Interactive System Architecture Node Pipeline (Pure Monochrome) */}
      <div className="hero-pipeline-panel opacity-0 w-full max-w-5xl mt-14 p-6 sm:p-8 rounded-3xl brutalist-panel border border-white/10 shadow-2xl">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400">
              SYSTEM ARCHITECTURE
            </p>
            <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight">
              Interactive Agentic Engineering Pipeline
            </h3>
          </div>
          <span className="text-[12px] font-mono text-zinc-400">
            Click any node to inspect telemetry
          </span>
        </div>

        {/* 4 Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pipelineNodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white/[0.12] border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/30 hover:bg-white/[0.05]"
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase">
                      {node.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                      {node.metric}
                    </span>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-1">
                    {node.subtitle}
                  </h4>
                  <p className="text-[12px] text-zinc-400 font-mono">
                    {node.tech}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Node Detail Inspector */}
        {activeNode && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-black border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                SUBSYSTEM TELEMETRY:
              </span>
              <p className="text-[14px] text-zinc-300 mt-1 font-poppins">
                {pipelineNodes.find((n) => n.id === activeNode)?.description}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[12px] font-mono px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white">
                Status: <span className="text-white font-bold">OPTIMIZED</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
