import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { logo } from "../assets";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        const next = Math.min(prev + diff, 100);
        
        if (next > 75) setStatusText("COMPILING 3D SHADERS");
        else if (next > 40) setStatusText("CALIBRATING AGENTIC PIPELINES");
        else if (next > 15) setStatusText("LOADING CORE ASSETS");
        
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[99999] bg-[#000000] stripe-grid flex flex-col items-center justify-center p-6 text-white select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      {/* Monolith Center Box */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
        
        {/* Animated Pure White Logo */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-8 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/30"
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md">
            <img
              src={logo}
              alt="Huzaifa Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain invert brightness-200"
            />
          </motion.div>
        </div>

        {/* Title */}
        <h2 className="text-white text-[18px] sm:text-[20px] font-extrabold font-poppins uppercase tracking-wider mb-1">
          MOHAMMAD HUZAIFA
        </h2>
        <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mb-6">
          MONOLITH ENVIRONMENT • 2026
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden p-0.5 border border-white/20 mb-3">
          <motion.div
            className="bg-white h-full rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Telemetry Text & Progress Counter */}
        <div className="w-full flex justify-between items-center text-[11px] font-mono text-zinc-400">
          <span className="truncate mr-2">{statusText}...</span>
          <span className="font-bold text-white shrink-0">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
