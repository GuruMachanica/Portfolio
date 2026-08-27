import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaVolumeUp } from "react-icons/fa";

const AUDIO_SAMPLES = [
  {
    id: 1,
    title: "Urgent Bank KYC Fraud Call",
    transcript: "Hello sir, this is from your bank security team. Your account will be blocked within 10 minutes unless you share the OTP received on your mobile device immediately.",
    risk: 94,
    detectedKeywords: ["blocked within 10 minutes", "share the OTP", "bank security team"],
    action: "CRITICAL ALERT: OTP Fraud Attempt Detected"
  },
  {
    id: 2,
    title: "Legitimate Courier Delivery Update",
    transcript: "Good morning, your parcel with tracking number 84920 will be delivered by 2 PM today. Please be available at your registered address.",
    risk: 4,
    detectedKeywords: ["tracking number", "delivered by 2 PM"],
    action: "SAFE: Standard Logistics Telemetry"
  }
];

const AegisDemo = () => {
  const [selectedSample, setSelectedSample] = useState(AUDIO_SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamProgress, setStreamProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setStreamProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 5;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSelect = (sample) => {
    setSelectedSample(sample);
    setStreamProgress(0);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full text-white">
      {/* Real-Time Processing Console */}
      <div className="flex-1 bg-black/60 rounded-2xl border border-white/10 p-5 flex flex-col justify-between space-y-4">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-white">
              FASTAPI WEBSOCKET STREAMING RUNNER
            </span>
          </div>
          <span className="text-[11px] font-mono text-zinc-400">LATENCY: &lt; 210ms</span>
        </div>

        {/* Audio Waveform Equalizer */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center space-y-3">
          <div className="flex items-end gap-1.5 h-12">
            {[20, 45, 75, 30, 90, 60, 40, 85, 35, 95, 50, 65, 30, 80, 45, 25].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: isPlaying ? [`${h * 0.3}px`, `${h * 0.5}px`, `${h * 0.2}px`] : "8px"
                }}
                transition={{
                  duration: 0.6 + (i % 3) * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="w-1.5 bg-white rounded-full"
              />
            ))}
          </div>

          {/* Audio Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (streamProgress >= 100) setStreamProgress(0);
                setIsPlaying(!isPlaying);
              }}
              className="px-4 py-1.5 rounded-lg bg-white text-black font-mono text-[12px] font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
              {isPlaying ? <FaPause className="w-3 h-3" /> : <FaPlay className="w-3 h-3" />}
              {isPlaying ? "PAUSE STREAM" : "SIMULATE CALL"}
            </button>
            <span className="text-[11px] font-mono text-zinc-400">
              BUFFER: {streamProgress}%
            </span>
          </div>
        </div>

        {/* Live Speech-to-Text Transcription */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold block">
            LIVE STT TRANSCRIPTION STREAM
          </span>
          <p className="text-[13px] font-mono text-zinc-200 leading-relaxed italic">
            &quot;{selectedSample.transcript}&quot;
          </p>
        </div>

        {/* Risk Assessment Banner */}
        <div className={`p-3.5 rounded-xl border flex items-center justify-between font-mono text-[12px] ${
          selectedSample.risk > 50
            ? "bg-white/10 border-white text-white font-bold"
            : "bg-white/[0.02] border-white/10 text-zinc-300"
        }`}>
          <div className="flex items-center gap-2">
            {selectedSample.risk > 50 ? (
              <FaExclamationTriangle className="w-4 h-4 text-white shrink-0" />
            ) : (
              <FaCheckCircle className="w-4 h-4 text-white shrink-0" />
            )}
            <span>{selectedSample.action}</span>
          </div>
          <span className="text-[13px] font-extrabold px-2 py-0.5 rounded bg-white text-black">
            RISK: {selectedSample.risk}%
          </span>
        </div>
      </div>

      {/* Sample Selector & Details */}
      <div className="w-full lg:w-80 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            TEST AUDIO PAYLOADS
          </span>
          <h4 className="text-[18px] font-bold font-poppins text-white mb-3">
            Anti-Scam Telemetry
          </h4>

          <div className="space-y-2.5 mb-4">
            {AUDIO_SAMPLES.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSelect(sample)}
                className={`w-full text-left p-3.5 rounded-xl border font-mono text-[12px] transition-all ${
                  selectedSample.id === sample.id
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/[0.03] text-zinc-300 hover:text-white border-white/10 hover:border-white/30"
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <span>{sample.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20">
                    {sample.risk}%
                  </span>
                </div>
                <span className="text-[10px] block opacity-80 truncate">
                  {sample.transcript}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detected Threat Keywords */}
        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[11px] space-y-2 text-zinc-400">
          <span className="text-[10px] font-bold uppercase text-white block">
            DETECTED THREAT VECTORS:
          </span>
          <div className="flex flex-wrap gap-1">
            {selectedSample.detectedKeywords.map((kw, i) => (
              <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px] border border-white/15">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AegisDemo;
