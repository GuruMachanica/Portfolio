import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { 
  FaArrowLeft, 
  FaDownload, 
  FaExternalLinkAlt, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaUndo, 
  FaFilePdf, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaCode, 
  FaGraduationCap, 
  FaTrophy 
} from "react-icons/fa";

const ResumePage = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const pdfUrl = "/Mohammad_Huzaifa_Resume.pdf";

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(150, prev + 15));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(70, prev - 15));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit mb-2">
              <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-poppins text-white flex items-center gap-3">
              <FaFilePdf className="w-8 h-8 text-white" />
              <span>Curriculum Vitae</span>
            </h1>
            <p className="text-zinc-400 text-sm font-poppins">
              Official 1-Page Master Resume • Agentic AI, Backend Architecture &amp; Distributed Systems
            </p>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Direct Download Button */}
            <a
              href={pdfUrl}
              download="Mohammad_Huzaifa_Resume.pdf"
              className="px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-md">
              <FaDownload className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            {/* Open in Full Native Tab */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl brutalist-panel text-white font-mono text-[12px] flex items-center gap-2 hover:border-white/40 transition-colors">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span>OPEN FULLSCREEN</span>
            </a>
          </div>
        </div>

        {/* Executive Highlights Quick-Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="brutalist-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <FaCode className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">5 Production Systems</span>
              <span className="text-xs font-semibold text-white">AnveshakSutra, Concept3D, AEGIS, SunMap, KavachG</span>
            </div>
          </div>

          <div className="brutalist-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <FaShieldAlt className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Primary Specialization</span>
              <span className="text-xs font-semibold text-white">Zero-Knowledge Protocols &amp; Async Microservices</span>
            </div>
          </div>

          <div className="brutalist-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <FaGraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Academic Degree</span>
              <span className="text-xs font-semibold text-white">B.Tech Computer Science (2023 – 2027)</span>
            </div>
          </div>

          <div className="brutalist-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <FaTrophy className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-zinc-400 font-bold block">Key Honors</span>
              <span className="text-xs font-semibold text-white">UHACK 4.0 &amp; CodeStorm'25 Winner</span>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer Container */}
        <div className="brutalist-panel rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4">
          
          {/* Canvas Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MiKTeX pdflatex Verified Build (1-Page Strict Layout)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Zoom Out">
                <FaSearchMinus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-bold text-white">{zoomLevel}%</span>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Zoom In">
                <FaSearchPlus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Reset Zoom">
                <FaUndo className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* PDF Display Frame with responsive container */}
          <div className="w-full flex justify-center overflow-auto bg-[#141414] rounded-2xl p-2 sm:p-4 border border-white/5 min-h-[750px] lg:min-h-[1050px]">
            <div 
              className="w-full max-w-4xl transition-transform duration-200 origin-top h-full"
              style={{ transform: `scale(${zoomLevel / 100})` }}>
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Mohammad Huzaifa Resume"
                className="w-full h-[750px] sm:h-[900px] lg:h-[1100px] rounded-xl border border-white/10 shadow-2xl bg-white"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ResumePage;
