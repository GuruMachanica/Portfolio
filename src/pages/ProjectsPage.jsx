import LiveProjectThumbnail from "../components/LiveProjectThumbnail";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import LiveWebsiteModal from "../components/demos/LiveWebsiteModal";
import { 
  FaArrowLeft, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch, 
  FaProjectDiagram, 
  FaTimes, 
  FaGlobe, 
  FaMicrochip, 
  FaCheckCircle, 
  FaShieldAlt,
  FaCogs
} from "react-icons/fa";
import { animate, stagger } from "animejs";

const architectureBlueprints = {
  "AnveshakSutra": {
    category: "Zero-Knowledge Breach OSINT & 3D Graph ML",
    math: "H(c) = \text{SHA-256}(c)[0:5] \implies k \ge 50 \text{ Bucket K-Anonymity}",
    pipeline: "Input Identity -> SHA-256 5-Char Prefix -> K-Anonymity Pool -> 3D WebGL Graph ML -> Canary Tripwire",
    coreStack: "FastAPI • PyTorch Geometric • Celery • Three.js WebGL • Redis",
    keyHighlights: [
      "Zero-Knowledge K-Anonymity protocol querying breach pools with 0% server identity leakage",
      "Interactive 3D WebGL Graph ML blast-radius engine computing Betweenness Centrality",
      "Asynchronous Celery sweepers with canary deception tripwires and synthetic telemetry"
    ],
    latency: "< 120ms Query Latency",
    security: "Zero Cleartext Server Ingestion",
    siteKey: "anveshaksutra",
    repo: "https://github.com/GuruMachanica/AnveshakSutra",
    demo: "https://anveshak-sutra.vercel.app/"
  },
  "Concept3D": {
    category: "AI Concept-to-3D Spatial Generator",
    math: "\mathcal{L}_{\text{spatial}} = \|\mathbf{z}_{\text{3D}} - \mathcal{E}_{\text{text}}(u)\|^2_2 + \lambda \mathcal{R}_{\text{mesh}}",
    pipeline: "Text / Image Input -> Semantic Tokenizer -> ChromaDB Vector Store -> PyTorch Latent Mesh -> WebGL 3D Canvas",
    coreStack: "Python • PyTorch • ChromaDB • Three.js • FastAPI",
    keyHighlights: [
      "Translates unstructured conceptual sketches and prompts into structured 3D spatial representations",
      "Semantic preprocessing pipeline with ChromaDB vector memory and embedding similarity",
      "Real-time WebGL mesh rendering and client-side viewport manipulation"
    ],
    latency: "< 2.4s Generation Time",
    security: "Input Sanitization & Schema Validation",
    siteKey: "concept3d",
    repo: "https://github.com/GuruMachanica/Concept-3D",
    demo: "https://concept-3d.vercel.app/"
  },
  "A.E.G.I.S": {
    category: "Real-Time Audio Edge Scam Defense",
    math: "\mathcal{S}_{\text{fraud}} = w_1 \cdot \mathcal{S}_{\text{AASIST}} + w_2 \cdot \mathcal{S}_{\text{NLP}} \ge \theta_{\text{alert}}",
    pipeline: "Audio Stream -> WebRTC VAD -> AASIST Voice Model -> Sarvam Multilingual STT -> Guardian SOS Alert",
    coreStack: "FastAPI • WebSockets • AASIST • Sarvam AI STT • WebRTC",
    keyHighlights: [
      "Sub-second (< 280ms) real-time audio pipeline detecting synthetic voice deepfakes and scam patterns",
      "Sarvam AI multilingual Speech-to-Text supporting 7+ Indic languages in real time",
      "Hybrid risk scoring engine with automated WebSocket Guardian SOS dispatch"
    ],
    latency: "< 280ms Sub-Second Inference",
    security: "End-to-End Encrypted WebSocket Stream",
    siteKey: "aegis",
    repo: "https://github.com/GuruMachanica/A.E.G.I.S.",
    demo: "https://aegis-anti-scam.netlify.app/"
  },
  "SunMap": {
    category: "3D Spatial Solar Irradiance & Yield Engine",
    math: "I_{\text{tilt}} = I_{\text{dir}} \cos(\theta) + I_{\text{diff}} \cdot Y_{\text{Perez}} + I_{\text{refl}}",
    pipeline: "CityGML LOD2 Meshes -> Normal Vector Parser -> Perez Transposition Physics -> 8,760h Raycast Shadow Engine",
    coreStack: "Three.js WebGL • CityGML LOD2 • Perez Model • Python • Docker",
    keyHighlights: [
      "60 FPS WebGL spatial simulation parsing CityGML LOD2 building geometries and normal vectors",
      "Perez clear-sky transposition physics benchmarked against NREL PVLib across 8,760 annual vectors",
      "Automated rooftop segmentation, shadow occlusion analysis, and carbon abatement calculations"
    ],
    latency: "60 FPS GPU-Accelerated Raycasting",
    security: "Client-Side Sandboxed WebGL Engine",
    siteKey: "sunmap",
    repo: "https://github.com/GuruMachanica/SunMap",
    demo: "https://sunmapsolar.netlify.app/"
  },
  "KavachG": {
    category: "Industrial Edge Safety CV Command Center",
    math: "\text{IoU}(\text{box}_p, \text{box}_g) \ge 0.50 \implies \text{mAP}_{50} = 98.4\%",
    pipeline: "RTSP Video Stream -> OpenCV Buffer -> YOLOv8 Detection -> 17-Point Pose -> Three.js Plant Digital Twin",
    coreStack: "YOLOv8 • OpenCV • FastAPI • Three.js • MongoDB",
    keyHighlights: [
      "Real-time automated safety compliance monitoring achieving 98.4% mAP50 precision",
      "17-point human pose estimation detecting slips, falls, and unauthorized perimeter incursions",
      "Synchronized Three.js industrial plant digital twin mapping camera alerts to spatial 3D coordinates"
    ],
    latency: "< 95ms Inference Per Frame",
    security: "Role-Based Token Authentication",
    siteKey: "kavachg",
    repo: "https://github.com/GuruMachanica/KavachG",
    demo: "https://kavach-g.vercel.app/"
  }
};

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
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
  }, [search]);

  const filteredProjects = projects.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      (p.category && p.category.toLowerCase().includes(search.toLowerCase())) ||
      (p.architecture && p.architecture.toLowerCase().includes(search.toLowerCase())) ||
      p.tags.some((t) => t.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const getSiteKey = (name) => {
    if (name.includes("Concept")) return "concept3d";
    if (name.includes("A.E.G.I.S") || name.includes("AEGIS")) return "aegis";
    if (name.includes("SunMap")) return "sunmap";
    if (name.includes("Anveshak")) return "anveshaksutra";
    if (name.includes("Kavach")) return "kavachg";
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
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-black font-mono font-extrabold text-[13px] hover:bg-zinc-200 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:scale-105 shrink-0 cursor-pointer">
            <FaGlobe className="w-4 h-4" /> BROWSE LIVE WEBSITES
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-10 pb-6 border-b border-white/10">
          <div className="relative max-w-xl">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search all production projects by name, technology, or keywords..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-[13px] font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const siteKey = getSiteKey(project.name);
            const lookupKey = Object.keys(architectureBlueprints).find((k) => project.name.includes(k)) || "AnveshakSutra";

            return (
              <div key={project.id} className="project-card-anim opacity-100">
                <TiltCard className="brutalist-panel rounded-3xl overflow-hidden border border-white/10 hover:border-white/40 flex flex-col justify-between h-full group transition-all duration-300">
                  <div>
                    {/* Project Image Banner */}
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
                        
                        {/* Tactile Brutalist Architecture Button */}
                        <button
                          onClick={() => setSelectedArch(lookupKey)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white hover:text-black text-white font-mono text-[11px] font-bold transition-all border border-white/20 hover:border-white shadow-sm hover:scale-105 cursor-pointer"
                          title={`Inspect ${project.name} Architecture Telemetry`}>
                          <FaProjectDiagram className="w-3 h-3" />
                          <span>ARCHITECTURE</span>
                        </button>
                      </div>

                      <p className="text-zinc-300 text-[14px] leading-relaxed font-poppins mb-4">
                        {project.description}
                      </p>

                      {/* Architecture Specs */}
                      {project.architecture && (
                        <div className="mb-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-[12px] text-zinc-400">
                          <span className="text-white font-bold block mb-1">Architecture Stack:</span>
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
                  <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center gap-2.5">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[125px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-all shadow-md hover:scale-105 cursor-pointer"
                        title={`Open ${project.name} live deployment in new tab`}>
                        <FaExternalLinkAlt className="w-3 h-3" /> LIVE PREVIEW
                      </a>
                    )}

                    {siteKey && (
                      <button
                        onClick={() => openLiveWebsite(siteKey)}
                        className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[12px] border border-white/20 transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-1.5"
                        title={`Preview ${project.name} inside interactive modal`}>
                        <FaGlobe className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">VIEWER</span>
                      </button>
                    )}

                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[115px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white font-mono font-bold text-[12px] border border-white/15 transition-all hover:scale-105">
                        <FaGithub className="w-3.5 h-3.5" /> REPO
                      </a>
                    )}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Enhanced README-Scoped Architecture Modal */}
        {selectedArch && architectureBlueprints[selectedArch] && (
          <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <div className="w-full max-w-3xl bg-[#090909] border border-white/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArch(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 transition-colors cursor-pointer"
                title="Close Blueprint">
                <FaTimes className="w-4 h-4" />
              </button>

              {/* Title & Category */}
              <div className="mb-6 pb-4 border-b border-white/10 pr-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                  OFFICIAL README ARCHITECTURE TELEMETRY
                </span>
                <h3 className="text-[24px] sm:text-[28px] font-extrabold font-poppins text-white">
                  {selectedArch} Blueprint
                </h3>
                <p className="text-zinc-400 text-xs font-mono mt-1">
                  {architectureBlueprints[selectedArch].category}
                </p>
              </div>

              <div className="space-y-5 text-[13px]">
                {/* Mathematical Formulation / Core Formula */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1 font-bold">
                    CORE MATHEMATICAL / THEORETICAL FORMULATION
                  </span>
                  <div className="text-white text-xs sm:text-sm font-bold bg-black/50 p-2.5 rounded-lg border border-white/5">
                    {architectureBlueprints[selectedArch].math}
                  </div>
                </div>

                {/* Pipeline Flow */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1.5 font-bold">
                    EXECUTION PIPELINE SEQUENCE
                  </span>
                  <p className="text-zinc-200 text-xs sm:text-[13px] leading-relaxed">
                    {architectureBlueprints[selectedArch].pipeline}
                  </p>
                </div>

                {/* Verified Key Highlights */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider block mb-2 font-bold">
                    VERIFIED ENGINEERING HIGHLIGHTS (FROM README)
                  </span>
                  <ul className="space-y-2">
                    {architectureBlueprints[selectedArch].keyHighlights.map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-[13px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-500 uppercase">LATENCY</span>
                    <span className="text-white font-bold">{architectureBlueprints[selectedArch].latency}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-zinc-500 uppercase">SECURITY</span>
                    <span className="text-white font-bold">{architectureBlueprints[selectedArch].security}</span>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={architectureBlueprints[selectedArch].repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[12px] hover:border-white/40 transition-colors">
                    <FaGithub className="w-3.5 h-3.5" /> GITHUB REPO
                  </a>

                  {architectureBlueprints[selectedArch].siteKey && (
                    <button
                      onClick={() => {
                        const key = architectureBlueprints[selectedArch].siteKey;
                        setSelectedArch(null);
                        openLiveWebsite(key);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg hover:scale-105">
                      <FaGlobe className="w-3.5 h-3.5" /> LOAD {selectedArch} LIVE DEPLOYMENT
                    </button>
                  )}
                </div>
              </div>
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
