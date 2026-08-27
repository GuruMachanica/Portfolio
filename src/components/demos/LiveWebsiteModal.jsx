import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaSyncAlt, FaCube, FaShieldAlt, FaSun, FaLock, FaExpand, FaCompress, FaGlobe } from "react-icons/fa";

const DEPLOYED_WEBSITES = {
  anveshaksutra: {
    id: "anveshaksutra",
    name: "AnveshakSutra",
    url: "https://anveshak-sutra.vercel.app/",
    icon: FaLock,
    domain: "anveshak-sutra.vercel.app",
    tag: "ZERO-KNOWLEDGE OSINT",
    description: "Autonomous Zero-Knowledge Dark Web Exposure Monitor & 3D Graph ML Blast Radius Analyzer."
  },
  concept3d: {
    id: "concept3d",
    name: "Concept3D",
    url: "https://concept-3d.vercel.app/",
    icon: FaCube,
    domain: "concept-3d.vercel.app",
    tag: "AI & 3D VISUALIZATION",
    description: "AI-Powered Concept-to-3D Latent Mapping & Spatial Visualization Platform."
  },
  aegis: {
    id: "aegis",
    name: "A.E.G.I.S.",
    url: "https://aegis-anti-scam.netlify.app/",
    icon: FaShieldAlt,
    domain: "aegis-anti-scam.netlify.app",
    tag: "AUDIO EDGE ANTI-SCAM",
    description: "Real-Time Audio Deepfake & Voice Impersonation Threat Mitigation Engine."
  },
  sunmap: {
    id: "sunmap",
    name: "SunMap",
    url: "https://sunmapsolar.netlify.app/",
    icon: FaSun,
    domain: "sunmapsolar.netlify.app",
    tag: "3D SOLAR POTENTIAL",
    description: "3D Spatial Solar Energy & LOD2 CityGML Irradiance Simulation Platform."
  }
};

const LiveWebsiteModal = ({ isOpen, onClose, initialSite = "anveshaksutra" }) => {
  const [activeSiteKey, setActiveSiteKey] = useState(initialSite);
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (initialSite && DEPLOYED_WEBSITES[initialSite]) {
      setActiveSiteKey(initialSite);
    }
    setLoading(true);
  }, [initialSite, isOpen]);

  const activeSite = DEPLOYED_WEBSITES[activeSiteKey] || DEPLOYED_WEBSITES.anveshaksutra;

  const handleTabChange = (key) => {
    setActiveSiteKey(key);
    setLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleRefresh = () => {
    setLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10005] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/95 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`w-full bg-[#0a0a0a] border border-white/20 sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col transition-all duration-300 ${
            isFullscreen
              ? "fixed inset-0 z-[10006] max-h-none h-screen rounded-none"
              : "max-w-6xl h-screen sm:h-[88vh]"
          }`}>
          
          {/* Top Browser Titlebar */}
          <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#111111] border-b border-white/10 flex items-center justify-between gap-2 sm:gap-3">
            
            {/* Traffic lights & Tabs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  title="Close Preview"
                />
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hidden sm:block w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
                  title="Toggle Fullscreen"
                />
                <button
                  onClick={handleRefresh}
                  className="hidden sm:block w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
                  title="Reload Preview"
                />
              </div>

              {/* Live Website Switcher Tabs for Tablet / Desktop */}
              <div className="hidden md:flex items-center gap-1.5">
                {Object.values(DEPLOYED_WEBSITES).map((site) => {
                  const Icon = site.icon || FaGlobe;
                  const isActive = activeSiteKey === site.id;
                  return (
                    <button
                      key={site.id}
                      onClick={() => handleTabChange(site.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-[12px] font-bold transition-all ${
                        isActive
                          ? "bg-white text-black shadow-sm"
                          : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                      }`}>
                      <Icon className="w-3 h-3" />
                      <span>{site.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Browser Address URL Bar */}
            <div className="flex-1 max-w-xl mx-1 sm:mx-2">
              <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-[11px] sm:text-[12px]">
                <FaLock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span className="text-zinc-500 select-none hidden xs:inline">https://</span>
                <span className="text-white font-semibold truncate">{activeSite.domain}</span>
                <button
                  onClick={handleRefresh}
                  title="Reload Live Website"
                  className="ml-auto text-zinc-400 hover:text-white transition-colors p-1">
                  <FaSyncAlt className={`w-3 h-3 ${loading ? "animate-spin text-white" : ""}`} />
                </button>
              </div>
            </div>

            {/* Actions: Open External & Close */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={activeSite.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-black hover:bg-zinc-200 font-mono text-[11px] font-bold transition-colors shadow-sm">
                <span className="hidden xs:inline">OPEN</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:block p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors">
                {isFullscreen ? <FaCompress className="w-3.5 h-3.5" /> : <FaExpand className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white hover:text-black text-white transition-colors">
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Mobile Switcher Bar */}
          <div className="md:hidden px-2.5 py-2 bg-black/90 border-b border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {Object.values(DEPLOYED_WEBSITES).map((site) => (
              <button
                key={site.id}
                onClick={() => handleTabChange(site.id)}
                className={`px-3 py-1 rounded-lg font-mono text-[11px] font-bold whitespace-nowrap transition-all ${
                  activeSiteKey === site.id
                    ? "bg-white text-black shadow-sm"
                    : "bg-white/10 text-zinc-300 border border-white/10"
                }`}>
                {site.name}
              </button>
            ))}
          </div>

          {/* Embedded Live Iframe Viewport */}
          <div className="relative flex-1 w-full h-full bg-[#070a12] overflow-hidden">
            {loading && (
              <div className="absolute inset-0 z-10 bg-[#090d16] flex flex-col items-center justify-center space-y-3 p-4">
                <div className="w-9 h-9 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <div className="text-center space-y-1">
                  <p className="text-white font-mono font-bold text-[12px] sm:text-[13px] tracking-wide">
                    CONNECTING TO LIVE DEPLOYMENT...
                  </p>
                  <p className="text-zinc-500 font-mono text-[11px] truncate max-w-xs sm:max-w-md">
                    {activeSite.url}
                  </p>
                </div>
              </div>
            )}

            <iframe
              key={iframeKey + activeSite.url}
              src={activeSite.url}
              title={activeSite.name}
              onLoad={() => setLoading(false)}
              className="w-full h-full border-0 bg-black"
              allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LiveWebsiteModal;
