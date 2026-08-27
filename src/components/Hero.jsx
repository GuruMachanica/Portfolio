import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaLinkedin, FaFileDownload, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { huzaifa } from "../assets";

const pipelineNodes = [
  {
    id: "agents",
    title: "1. Autonomous Agents",
    subtitle: "Multi-Agent Orchestration",
    tech: "LangChain • Tool Calling",
    metric: "< 120ms Routing",
    description: "Semantic intent parsing, workflow routing, and multi-agent coordination.",
  },
  {
    id: "inference",
    title: "2. Deep Learning & RAG",
    subtitle: "Custom Inference Engine",
    tech: "PyTorch • Spatial GeoData",
    metric: "98.4% Accuracy",
    description: "Vectorized embeddings, domain-specific retrieval, and real-time inference pipelines.",
  },
  {
    id: "backend",
    title: "3. Async Backend & APIs",
    subtitle: "High-Throughput Services",
    tech: "FastAPI • WebSockets • Docker",
    metric: "Sub-second Alerts",
    description: "Scalable microservices handling real-time streaming data with low-latency caches.",
  },
  {
    id: "output",
    title: "4. Spatial & UI Outputs",
    subtitle: "Interactive 3D & Analytics",
    tech: "3D Spatial • Live Dashboards",
    metric: "60 FPS Render",
    description: "Automated generative 3D meshes, safety KPI monitors, and real-time web telemetry.",
  },
];

const Hero = () => {
  const [activeNode, setActiveNode] = useState("agents");

  return (
    <section className="relative w-full min-h-screen mx-auto stripe-grid stripe-radial flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 z-0">
      
      {/* Top Meta Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full brutalist-panel mb-6 border border-white/10 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#61DAFB] animate-pulse" />
        <span className="text-[12px] sm:text-[13px] font-bold font-mono tracking-wider text-[#61DAFB] uppercase">
          AGENTIC AI ENGINEER &amp; BACKEND ARCHITECT
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl text-center flex flex-col items-center">
        
        <h1 className="text-white text-[38px] sm:text-[64px] lg:text-[76px] font-extrabold tracking-tight leading-[1.08] font-poppins uppercase">
          MOHAMMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61DAFB] via-white to-[#10B981]">HUZAIFA</span>
        </h1>

        <p className="mt-5 text-slate-300 text-[16px] sm:text-[20px] max-w-2xl leading-relaxed font-normal">
          Building autonomous multi-agent pipelines, generative models, and scalable, high-throughput backend infrastructure.
        </p>

        {/* Location & Status Meta */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[13px] text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Prayagraj, UP, India
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Open to AI &amp; Backend Roles
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-3.5 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-bold text-[14px] font-mono hover:bg-[#61DAFB] hover:text-black transition-all duration-200 shadow-md">
            VIEW PROJECTS →
          </a>
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-white font-bold text-[14px] font-mono hover:border-white/30 transition-all duration-200">
            <FaGithub className="w-4 h-4" />
            GITHUB
          </a>
          <a
            href="/Mohammad_Huzaifa_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-slate-300 font-bold text-[14px] font-mono hover:text-white hover:border-white/30 transition-all duration-200">
            <FaFileDownload className="w-3.5 h-3.5 text-[#61DAFB]" />
            RESUME
          </a>
        </div>
      </motion.div>

      {/* Interactive System Architecture Node Pipeline (Stripe AI Style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="w-full max-w-5xl mt-14 p-6 sm:p-8 rounded-3xl brutalist-panel border border-white/10 shadow-2xl">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
          <div>
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#61DAFB]">
              SYSTEM ARCHITECTURE
            </p>
            <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight">
              Interactive Agentic Engineering Pipeline
            </h3>
          </div>
          <span className="text-[12px] font-mono text-slate-400">
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
                    ? "bg-white/[0.07] border-[#61DAFB] shadow-[0_0_20px_rgba(97,218,251,0.2)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                }`}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                      {node.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/50 text-[#61DAFB] border border-[#61DAFB]/30">
                      {node.metric}
                    </span>
                  </div>
                  <h4 className="text-[15px] font-bold text-white mb-1">
                    {node.subtitle}
                  </h4>
                  <p className="text-[12px] text-slate-400 font-mono">
                    {node.tech}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Node Detail Inspector */}
        {activeNode && (
          <motion.div
            key={activeNode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#10B981] uppercase tracking-wider">
                ACTIVE SUBSYSTEM TELEMETRY:
              </span>
              <p className="text-[14px] text-slate-200 mt-1 font-poppins">
                {pipelineNodes.find((n) => n.id === activeNode)?.description}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[12px] font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
                Status: <span className="text-[#10B981] font-bold">OPTIMIZED</span>
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
