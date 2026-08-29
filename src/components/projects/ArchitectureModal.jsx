import React from "react";
import { FaTimes, FaGithub, FaGlobe } from "react-icons/fa";
import { architectureBlueprints } from "../../constants/architectureBlueprints";

const ArchitectureModal = ({ selectedArch, onClose, onOpenLiveWebsite }) => {
  if (!selectedArch || !architectureBlueprints[selectedArch]) return null;

  const blueprint = architectureBlueprints[selectedArch];

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
      <div className="w-full max-w-3xl bg-[#090909] border border-white/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
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
            {blueprint.category}
          </p>
        </div>

        <div className="space-y-5 text-[13px]">
          {/* Mathematical Formulation / Core Formula */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1 font-bold">
              CORE MATHEMATICAL / THEORETICAL FORMULATION
            </span>
            <div className="text-white text-xs sm:text-sm font-bold bg-black/50 p-2.5 rounded-lg border border-white/5">
              {blueprint.math}
            </div>
          </div>

          {/* Pipeline Flow */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 font-mono">
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider block mb-1.5 font-bold">
              EXECUTION PIPELINE SEQUENCE
            </span>
            <p className="text-zinc-200 text-xs sm:text-[13px] leading-relaxed">
              {blueprint.pipeline}
            </p>
          </div>

          {/* Verified Key Highlights */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider block mb-2 font-bold">
              VERIFIED ENGINEERING HIGHLIGHTS (FROM README)
            </span>
            <ul className="space-y-2">
              {blueprint.keyHighlights.map((hl, idx) => (
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
              <span className="text-white font-bold">{blueprint.latency}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
              <span className="text-zinc-500 uppercase">SECURITY</span>
              <span className="text-white font-bold">{blueprint.security}</span>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href={blueprint.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[12px] hover:border-white/40 transition-colors">
              <FaGithub className="w-3.5 h-3.5" /> GITHUB REPO
            </a>

            {blueprint.siteKey && (
              <button
                onClick={() => {
                  const key = blueprint.siteKey;
                  onClose();
                  onOpenLiveWebsite(key);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg hover:scale-105">
                <FaGlobe className="w-3.5 h-3.5" /> LOAD {selectedArch} LIVE DEPLOYMENT
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;
