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
  },
  kavachg: {
    id: "kavachg",
    name: "KavachG",
    url: "https://kavach-g.vercel.app/",
    icon: FaShieldAlt,
    domain: "kavach-g.vercel.app",
    tag: "EDGE-AI INDUSTRIAL SAFETY",
    description: "Autonomous Edge-AI Industrial Safety, Computer Vision Defense & 3D Plant Digital Twin."
  }
};

const LiveWebsiteModal = ({ isOpen, onClose, initialSite = "anveshaksutra" }) => {
  const [activeSiteKey, setActiveSiteKey] = useState(initialSite);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (initialSite && DEPLOYED_WEBSITES[initialSite]) {
      setActiveSiteKey(initialSite);
    }
  }, [initialSite, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeSite = DEPLOYED_WEBSITES[activeSiteKey] || DEPLOYED_WEBSITES.anveshaksutra;
  const Icon = activeSite.icon || FaGlobe;

  const handleRefresh = () => {
    setLoading(true);
    setReloadKey((prev) => prev + 1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`w-full bg-[#0c0c0c] border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
            isFullscreen ? "fixed inset-0 rounded-none h-screen" : "max-w-6xl h-[92vh] sm:h-[88vh]"
          }`}>
          
          {/* Header Browser Bar */}
          <div className="bg-[#141414] border-b border-white/10 px-4 py-3 flex items-center justify-between gap-3 shrink-0">
            
            {/* Window Dots & Tab Switcher */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
              <div className="hidden sm:flex items-center gap-1.5 mr-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1.5">
                {Object.values(DEPLOYED_WEBSITES).map((site) => {
                  const TabIcon = site.icon || FaGlobe;
                  const isActive = activeSiteKey === site.id;
                  return (
                    <button
                      key={site.id}
                      onClick={() => {
                        setActiveSiteKey(site.id);
                        setLoading(true);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-white text-black shadow-md"
                          : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                      }`}>
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>{site.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Refresh, Fullscreen, Open external, Close */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={handleRefresh}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Reload Frame">
                <FaSyncAlt className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              </button>

              <a
                href={activeSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors text-xs font-mono flex items-center gap-1.5 font-bold"
                title="Open in Native Browser Tab">
                <FaExternalLinkAlt className="w-3 h-3" />
                <span className="hidden md:inline">OPEN TAB</span>
              </a>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="hidden sm:flex p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
                {isFullscreen ? <FaCompress className="w-3.5 h-3.5" /> : <FaExpand className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 hover:text-white transition-colors cursor-pointer ml-1"
                title="Close Viewer">
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-bar / Address URL Simulator */}
          <div className="bg-[#0e0e0e] border-b border-white/5 px-4 py-2 flex items-center justify-between text-xs font-mono text-zinc-400 gap-2 shrink-0">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-zinc-500">https://</span>
              <span className="text-zinc-200 font-semibold truncate">{activeSite.domain}</span>
              <span className="hidden lg:inline px-2 py-0.5 rounded text-[10px] bg-white/10 text-zinc-300 font-bold ml-2">
                {activeSite.tag}
              </span>
            </div>
            <span className="text-[11px] text-zinc-500 hidden sm:inline truncate max-w-md">
              {activeSite.description}
            </span>
          </div>

          {/* Iframe Viewport Container */}
          <div className="relative flex-1 bg-black w-full h-full overflow-hidden">
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0c0c0c] text-white gap-3">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span className="text-xs font-mono text-zinc-400 tracking-wider">
                  INITIALIZING {activeSite.name.toUpperCase()} PREVIEW...
                </span>
              </div>
            )}

            <iframe
              key={reloadKey + activeSite.id}
              src={activeSite.url}
              title={activeSite.name}
              onLoad={() => setLoading(false)}
              className="w-full h-full border-0 bg-white"
              allow="camera; microphone; geolocation; fullscreen; accelerometer; autoplay"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LiveWebsiteModal;
