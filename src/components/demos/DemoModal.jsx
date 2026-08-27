import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCube, FaShieldAlt, FaSun, FaVideo, FaExternalLinkAlt } from "react-icons/fa";
import Concept3DDemo from "./Concept3DDemo";
import AegisDemo from "./AegisDemo";
import SunMapDemo from "./SunMapDemo";
import KavachGDemo from "./KavachGDemo";

const DEMO_TABS = [
  { id: "concept3d", name: "Concept3D", icon: FaCube, desc: "Prompt to 3D Mesh Generator" },
  { id: "aegis", name: "A.E.G.I.S.", icon: FaShieldAlt, desc: "Audio Edge Scam Detector" },
  { id: "sunmap", name: "SunMap", icon: FaSun, desc: "3D Solar & Shadow Simulator" },
  { id: "kavachg", name: "KavachG", icon: FaVideo, desc: "Computer Vision Safety Hub" }
];

const DemoModal = ({ isOpen, onClose, initialTab = "concept3d" }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-full max-w-5xl bg-[#090909] border border-white/20 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[90vh]">
          
          {/* Modal Header & Tab Navigation */}
          <div className="p-4 sm:p-5 bg-[#111111] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-extrabold font-poppins text-[17px] tracking-tight">
                  Interactive System Demos
                </h3>
                <p className="text-[11px] font-mono text-zinc-400">
                  Live client-side simulations of Mohammad Huzaifa production architectures
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="self-end sm:self-center p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors border border-white/10">
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Selector Bar */}
          <div className="px-4 sm:px-6 py-2.5 bg-black/40 border-b border-white/10 flex flex-wrap gap-2">
            {DEMO_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-[12px] font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-black shadow-md"
                      : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                  }`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Demo Viewport */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto min-h-[420px]">
            {activeTab === "concept3d" && <Concept3DDemo />}
            {activeTab === "aegis" && <AegisDemo />}
            {activeTab === "sunmap" && <SunMapDemo />}
            {activeTab === "kavachg" && <KavachGDemo />}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
