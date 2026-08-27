import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { About } from "../components";
import { FaArrowLeft, FaBrain, FaServer, FaCubes, FaDatabase, FaBolt, FaShieldAlt } from "react-icons/fa";
import { animate, stagger } from "animejs";

const corePillars = [
  {
    icon: FaBrain,
    title: "Autonomous Agent Orchestration",
    desc: "Designing multi-agent state machines, semantic intent parsers, tool-calling pipelines, and self-reflection loops using LangChain and specialized LLM architectures.",
    tag: "LangChain • Tool Calling • ReAct",
  },
  {
    icon: FaServer,
    title: "High-Throughput Asynchronous Backends",
    desc: "Building low-latency microservices with FastAPI, WebSockets, asynchronous workers, and Redis caching layers for real-time data streaming.",
    tag: "FastAPI • WebSockets • Redis",
  },
  {
    icon: FaCubes,
    title: "Spatial 3D & Computer Vision",
    desc: "Developing 3D geometric spatial simulators, OpenCV feature extraction pipelines, and interactive WebGL canvas visualizers for spatial analytics.",
    tag: "Three.js • OpenCV • PyTorch",
  },
  {
    icon: FaDatabase,
    title: "Dataset & Vector Curation",
    desc: "Automating end-to-end dataset curation, high-dimensional vector index embeddings, and hybrid retrieval-augmented generation (RAG) pipelines.",
    tag: "Vector DBs • PyTorch • ETL",
  },
  {
    icon: FaBolt,
    title: "Real-Time Telemetry & Dashboards",
    desc: "Streaming real-time metrics, automated safety KPI dashboards, and live analytical systems with sub-second alert triggers.",
    tag: "Streaming • Docker • CI/CD",
  },
  {
    icon: FaShieldAlt,
    title: "Audio & Edge Security Systems",
    desc: "Deploying edge-ready acoustic analysis models and automated verification algorithms for real-time scam prevention and audio intelligence.",
    tag: "Edge AI • Librosa • Signal Proc",
  },
];

const OverviewPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".overview-card", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(60, { start: 150 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
      {/* Top Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          SYSTEM ARCHITECTURE &amp; COMPETENCIES
        </div>
      </div>

      {/* Main Component */}
      <About />

      {/* Expanded Deep-Dive Pillars */}
      <div className="mt-20 pt-12 border-t border-white/10">
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            ARCHITECTURAL METHODOLOGY
          </p>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Engineering Pillars.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="overview-card opacity-0 brutalist-panel p-7 rounded-3xl border border-white/10 hover:border-white/40 flex flex-col justify-between group transition-all duration-300">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-white text-[19px] font-bold font-poppins mb-2.5 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-[14px] leading-relaxed font-poppins">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                  {pillar.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
