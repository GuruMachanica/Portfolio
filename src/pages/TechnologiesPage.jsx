import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TechBalls } from "../components/canvas";
import { technologyGroups } from "../constants";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import { FaArrowLeft, FaTerminal, FaBrain, FaServer, FaCubes, FaFilter, FaCheckCircle, FaBolt, FaLayerGroup } from "react-icons/fa";
import { animate, stagger } from "animejs";

const techTelemetry = {
  "Python": {
    role: "Primary Backend & AI Language",
    projects: "A.E.G.I.S, Concept3D, SunMap, KavachG",
    features: "FastAPI, PyTorch, LangChain, NumPy, Pandas, WebSockets",
    metric: "< 120ms API Response",
  },
  "C++": {
    role: "High-Performance Systems & Algorithms",
    projects: "DSA Foundations, Competitive Programming",
    features: "STL, Memory Management, Object-Oriented Design",
    metric: "O(log N) Time Complexity",
  },
  "C": {
    role: "Low-Level Computing & Memory",
    projects: "Operating Systems, System Kernels",
    features: "Pointers, Bitwise Manipulation, Structured Architecture",
    metric: "Bare-Metal Execution",
  },
  "FastAPI": {
    role: "Asynchronous Microservices Engine",
    projects: "A.E.G.I.S Audio Security, Production APIs",
    features: "Pydantic V2, ASGI Workers, WebSocket Streams, OpenAPI",
    metric: "Sub-Second Audio Stream",
  },
  "PyTorch": {
    role: "Deep Learning & Neural Homology",
    projects: "IJDDT Research Paper, SunMap Spatial Model",
    features: "Custom Loss Functions, Tensors, Embeddings, GPU Acceleration",
    metric: "98.4% Precision",
  },
  "Docker": {
    role: "Microservices Containerization",
    projects: "A.E.G.I.S, Production Backends",
    features: "Multi-stage Builds, Docker Compose, Isolated Environments",
    metric: "100% Reproducibility",
  },
  "MongoDB": {
    role: "Document & Telemetry Data Store",
    projects: "KavachG Safety KPI, Vector Data Pipelines",
    features: "Aggregation Pipelines, Schema-less Storage, Indexing",
    metric: "35% Faster Query Latency",
  },
  "MySQL": {
    role: "Relational Schema & Transactional DB",
    projects: "Enterprise Backend Architecture",
    features: "ACID Compliance, Foreign Key Constraints, Normalized Tables",
    metric: "100% Transaction Integrity",
  },
  "OpenCV": {
    role: "Computer Vision & Edge Filtering",
    projects: "KavachG Safety KPI Dashboard",
    features: "Real-time Video Processing, Frame Filtering, Spatial Grids",
    metric: "60 FPS Processing",
  },
  "Scikit-Learn": {
    role: "Statistical Machine Learning",
    projects: "Predictive Analytics, Homology Detection",
    features: "PCA, Regression, Random Forests, Feature Engineering",
    metric: "High Convergence Rate",
  },
  "Git": {
    role: "Version Control & Release Pipeline",
    projects: "All Production Repositories",
    features: "Branching, PRs, Merge Strategies, Git Actions",
    metric: "Zero Merge Conflicts",
  },
  "GitHub": {
    role: "CI/CD & Collaboration Platform",
    projects: "GuruMachanica Portfolio & Open Source",
    features: "GitHub Actions, Issue Tracking, Security Scans",
    metric: "Automated Deployment",
  },
  "VS Code": {
    role: "Primary Development IDE",
    projects: "Full-Stack Development Workflow",
    features: "Custom Extensions, Remote SSH, Debugging Tools",
    metric: "High Velocity Flow",
  },
  "Figma": {
    role: "UI/UX & Wireframe Prototyping",
    projects: "Monolith System Design, Portfolio Wireframes",
    features: "Component Systems, Auto-Layout, Interactive Prototyping",
    metric: "Pixel-Perfect UI",
  },
  "Canva": {
    role: "Visual Graphics & Banner Curation",
    projects: "Research Posters, Brand Assets",
    features: "Vector Composition, Typography Layouts",
    metric: "Clean Visual Branding",
  },
  "TensorFlow": {
    role: "Neural Network Architecture",
    projects: "Model Prototyping & Computer Vision",
    features: "Keras, TensorBoard, Model Quantization",
    metric: "Production Ready",
  },
  "n8n": {
    role: "Workflow & Pipeline Automation",
    projects: "Automated Data Ingestion & Alerts",
    features: "Webhook Triggers, Multi-App Orchestration",
    metric: "Zero-Latency Webhooks",
  },
};

const TechnologiesPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedTech, setSelectedTech] = useState("Python");

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".tech-metric-card", {
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: stagger(60, { start: 100 }),
        ease: "outExpo",
        duration: 600,
      });
      animate(".tech-panel-item", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(50, { start: 200 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, [activeCategory]);

  const filteredGroups = activeCategory === "ALL"
    ? technologyGroups
    : technologyGroups.filter((g) => g.title.toUpperCase().includes(activeCategory));

  const currentDetails = techTelemetry[selectedTech] || {
    role: "Core Technology Stack",
    projects: "Production Engineering Systems",
    features: "Scalable Architecture & Integration",
    metric: "High Performance",
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Breadcrumb Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
            <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            3D WEBGL PHYSICS STACK &amp; TELEMETRY
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            TECHNICAL ARSENAL
          </p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Technologies.
          </h1>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
            Interactive 3D physics tech balls spanning AI/ML, asynchronous backends, real-time databases, and systems engineering. Click any technology ball to inspect live telemetry.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="tech-metric-card opacity-100 brutalist-panel p-5 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">CORE TECHNOLOGIES</span>
            <span className="text-[26px] sm:text-[32px] font-extrabold text-white font-poppins">17+</span>
            <p className="text-[12px] font-mono text-zinc-400 mt-1">Interactive 3D WebGL Spheres</p>
          </div>
          <div className="tech-metric-card opacity-100 brutalist-panel p-5 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">BACKEND ARCHITECTURE</span>
            <span className="text-[26px] sm:text-[32px] font-extrabold text-white font-poppins">&lt; 120ms</span>
            <p className="text-[12px] font-mono text-zinc-400 mt-1">Asynchronous API Latency</p>
          </div>
          <div className="tech-metric-card opacity-100 brutalist-panel p-5 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">MACHINE LEARNING</span>
            <span className="text-[26px] sm:text-[32px] font-extrabold text-white font-poppins">98.4%</span>
            <p className="text-[12px] font-mono text-zinc-400 mt-1">Model Precision Benchmark</p>
          </div>
          <div className="tech-metric-card opacity-100 brutalist-panel p-5 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">PIPELINE STREAMING</span>
            <span className="text-[26px] sm:text-[32px] font-extrabold text-white font-poppins">60 FPS</span>
            <p className="text-[12px] font-mono text-zinc-400 mt-1">Real-Time Audio &amp; CV Feeds</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {["ALL", "PROGRAMMING", "MACHINE LEARNING", "BACKEND", "TOOLS", "UI/UX"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[12px] font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Tech Ball Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div key={group.title} className="tech-panel-item opacity-100">
              <TiltCard className="brutalist-panel rounded-3xl p-6 border border-white/10 hover:border-white/35 flex flex-col justify-between h-full transition-all duration-300">
                <div>
                  <div className="pb-3 border-b border-white/10 mb-4 flex items-center justify-between">
                    <h3 className="text-white text-[19px] sm:text-[22px] font-bold font-poppins tracking-tight">
                      {group.title}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {group.items.length} Modules
                    </span>
                  </div>

                  {/* 3D WebGL Spheres Canvas */}
                  <div className="w-full flex items-center justify-center overflow-hidden py-2">
                    <TechBalls items={group.items} />
                  </div>
                </div>

                {/* Clickable Quick Selector Pills */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {group.items.map((it) => (
                    <button
                      key={it.name}
                      onClick={() => setSelectedTech(it.name)}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all ${
                        selectedTech === it.name
                          ? "bg-white text-black font-bold shadow-md"
                          : "bg-white/[0.04] text-zinc-300 hover:text-white border border-white/10 hover:border-white/30"
                      }`}>
                      {it.name}
                    </button>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Live Tech Telemetry Inspector Panel */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl brutalist-panel border border-white/15 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-widest block">
                ACTIVE TELEMETRY INSPECTOR
              </span>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold font-poppins text-white tracking-tight mt-0.5">
                {selectedTech} Architecture Breakdown
              </h2>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-bold w-fit">
              {currentDetails.metric}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">PRIMARY SPECIALIZATION</span>
              <p className="text-white font-bold text-[15px] font-poppins">{currentDetails.role}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">INTEGRATED IN PROJECTS</span>
              <p className="text-white font-bold text-[15px] font-poppins">{currentDetails.projects}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">CORE ECOSYSTEM TOOLS</span>
              <p className="text-white font-bold text-[14px] font-mono">{currentDetails.features}</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TechnologiesPage;
