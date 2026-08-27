import React from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaWaveSquare, FaShieldAlt } from "react-icons/fa";

const bars = [14, 28, 45, 22, 60, 38, 52, 75, 30, 48, 65, 25, 40, 55, 32, 70, 42, 20];

const AudioWaveform = () => {
  return (
    <div className="brutalist-panel rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl mx-auto my-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
          <FaShieldAlt className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-white">
              A.E.G.I.S. AUDIO EDGE ENGINE
            </span>
          </div>
          <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
            Real-Time Asynchronous Stream • 48 kHz 24-Bit Audio Buffer
          </p>
        </div>
      </div>

      {/* Animated Equalizer Waveform Bars */}
      <div className="flex items-end gap-1 h-8 px-2">
        {bars.map((height, idx) => (
          <motion.div
            key={idx}
            animate={{
              height: [
                `${Math.max(6, height * 0.3)}px`,
                `${height * 0.4}px`,
                `${Math.max(6, height * 0.2)}px`
              ]
            }}
            transition={{
              duration: 0.8 + (idx % 4) * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: idx * 0.05
            }}
            className="w-1 bg-white/80 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default AudioWaveform;
