import LiveProjectThumbnail from "../components/LiveProjectThumbnail";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import LiveWebsiteModal from "../components/demos/LiveWebsiteModal";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaSearch, FaPlay, FaProjectDiagram, FaTimes, FaGlobe } from "react-icons/fa";
import { animate, stagger } from "animejs";

const architectureBlueprints = {
  "AnveshakSutra": {
    pipeline: "Input Identity -> 5-Char SHA-256 Hash -> K-Anonymity Exposure Bucket -> 3D Graph ML Centrality -> Deception Tripwire Trigger",
    latency: "< 120ms Zero-Knowledge Query",
    throughput: "Asynchronous Celery Sweepers",
    security: "Zero Server Cleartext Leakage (K-Anonymity)",
    siteKey: "anveshaksutra"
  },
  "Concept3D": {
    pipeline: "Text / Image Input -> Semantic Tokenizer -> Coordinate Validation Grid -> PyTorch 3D Latent Mapping -> WebGL 3D Mesh Output",
    latency: "< 2.4s Generation Time",
    throughput: "Optimized Spatial Caching",
    security: "Input Sanitization & Schema Validation",
    siteKey: "concept3d"
  },
  "A.E.G.I.S": {
    pipeline: "Audio Stream Buffer -> Edge Signal Normalization -> FastAPI WebSocket Pipeline -> Scam Intent Risk Scorer -> Real-Time Alert Engine",
    latency: "< 250ms Sub-Second Detection",
    throughput: "Asynchronous ASGI Workers",
    security: "End-to-End WebSocket Encryption",
    siteKey: "aegis"
  },
  "SunMap": {
    pipeline: "CityGML LOD2 Geometry -> 60 FPS WebGL Raycaster -> Perez Irradiance Transposition -> Bankable Yield & Financial ROI Engine",
    latency: "60 FPS Real-Time Simulation",
    throughput: "Client-Side WebGL Ray Tracing",
    security: "Static Sandboxed Execution",
    siteKey: "sunmap"
  },
  "KavachG": {
    pipeline: "RTSP Video Feed -> OpenCV Frame Extractor -> YOLOv8 PPE & Hazard Detector -> Incident Logger DB -> FastAPI Dashboard Alert Feed",
    latency: "< 100ms Inference Per Frame",
    throughput: "Multi-Camera Streaming",
    security: "Role-Based Token Access",
    siteKey: null
  }
};

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedArch, setSelectedArch] = useState(null);
  const [liveModalOpen, setLiveModalOpen] = useState(false);
  const [activeSiteKey, setActiveSiteKey] = useState("aegis");

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".project-card-anim", {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: stagger(80, { start: 100 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, [search, activeCategory]);

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.name.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      activeCategory === "ALL" ||
      (p.category && p.category.toUpperCase().includes(activeCategory));

    return matchesSearch && matchesCategory;
  });

  const getSiteKey = (name) => {
    if (name.includes("Concept")) return "concept3d";
    if (name.includes("A.E.G.I.S") || name.includes("AEGIS")) return "aegis";
    if (name.includes("SunMap")) return "sunmap";
    if (name.includes("Anveshak")) return "anveshaksutra";
    return null;
  };

  const openLiveWebsite = (siteKey) => {
    if (siteKey) {
      setActiveSiteKey(siteKey);
      setLiveModalOpen(true);
    }
  };

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
            LIVE DEPLOYED WEBSITES &amp; PRODUCTION SYSTEMS
          </div>
        </div>

        {/* Page Title & Live Browser Launch */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
              ENGINEERING SHOWCASE
            </p>
            <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
              Projects.
            </h1>
            <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-2xl leading-relaxed">
              Production-grade autonomous AI platforms, high-throughput backend APIs, and real-time computer vision systems with live deployed websites.
            </p>
          </div>

          <button
            onClick={() => openLiveWebsite("aegis")}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-black font-mono font-extrabold text-[13px] hover:bg-zinc-200 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-105 shrink-0">
            <FaGlobe className="w-4 h-4" /> BROWSE LIVE WEBSITES
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Real-Time Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by name, tag, or stack..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-9 pr-4 py-2 text-[13px] font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "AI", "BACKEND", "3D", "VISION"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-wider uppercase transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const siteKey = getSiteKey(project.name);
            return (
              <div key={project.id} className="project-card-anim opacity-100">
                <TiltCard className="brutalist-panel rounded-3xl overflow-hidden border border-white/10 hover:border-white/40 flex flex-col justify-between h-full group transition-all duration-300">
                  <div>
                    {/* Project Image Banner with Live Screenshot Support */}
    <LiveProjectThumbnail
      name={project.name}
      fallbackImage={project.image}
      demoUrl={project.demo}
      category={project.category}
    />

    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h2 className="text-white text-[22px] sm:text-[26px] font-extrabold font-poppins tracking-tight">
                          {project.name}
                        </h2>
                        <button
                          onClick={() => setSelectedArch(project.name)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 hover:bg-white hover:text-black text-white transition-colors border border-white/15">
                          <FaProjectDiagram className="w-3 h-3" /> ARCHITECTURE
                        </button>
                      </div>

                      <p className="text-zinc-300 text-[14px] leading-relaxed font-poppins mb-4">
                        {project.description}
                      </p>

                      {/* Architecture & Highlights */}
                      {project.architecture && (
                        <div className="mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-[12px] text-zinc-400">
                          <span className="text-white font-bold block mb-0.5">Architecture:</span>
                          {project.architecture}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
                            #{tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center gap-3">
                    {siteKey ? (
                      <button
                        onClick={() => openLiveWebsite(siteKey)}
                        className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md">
                        <FaGlobe className="w-3.5 h-3.5" /> LIVE PREVIEW
                      </button>
                    ) : project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md">
                        <FaExternalLinkAlt className="w-3 h-3" /> LIVE DEMO
                      </a>
                    ) : null}

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[13px] border border-white/20 transition-colors">
                        <FaGithub className="w-4 h-4" /> CODE REPO
                      </a>
                    )}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Architecture Telemetry Modal */}
        {selectedArch && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setSelectedArch(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 transition-colors">
                <FaTimes className="w-4 h-4" />
              </button>

              <div className="mb-6 pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  SYSTEM ARCHITECTURE TELEMETRY
                </span>
                <h3 className="text-[24px] font-extrabold font-poppins text-white">
                  {selectedArch} Pipeline Blueprint
                </h3>
              </div>

              {architectureBlueprints[selectedArch] ? (
                <div className="space-y-5 font-mono text-[13px]">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider block mb-1.5 font-bold">END-TO-END FLOW</span>
                    <p className="text-white font-poppins leading-relaxed">
                      {architectureBlueprints[selectedArch].pipeline}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-zinc-500 uppercase block mb-1">LATENCY TARGET</span>
                      <span className="text-white font-bold">{architectureBlueprints[selectedArch].latency}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-zinc-500 uppercase block mb-1">THROUGHPUT</span>
                      <span className="text-white font-bold">{architectureBlueprints[selectedArch].throughput}</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <span className="text-[10px] text-zinc-500 uppercase block mb-1">SECURITY</span>
                      <span className="text-white font-bold">{architectureBlueprints[selectedArch].security}</span>
                    </div>
                  </div>

                  {architectureBlueprints[selectedArch].siteKey && (
                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={() => {
                          const key = architectureBlueprints[selectedArch].siteKey;
                          setSelectedArch(null);
                          openLiveWebsite(key);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-colors">
                        <FaGlobe className="w-3.5 h-3.5" /> LOAD {selectedArch} LIVE DEPLOYMENT
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-zinc-400 font-mono text-[13px]">
                  Detailed telemetry blueprint active for this module.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Live Deployed Website Iframe Modal */}
        <LiveWebsiteModal
          isOpen={liveModalOpen}
          onClose={() => setLiveModalOpen(false)}
          initialSite={activeSiteKey}
        />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
