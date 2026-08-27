import React, { useState, useEffect } from "react";
import { FaShieldAlt, FaHardHat, FaFire, FaExclamationCircle, FaVideo } from "react-icons/fa";

const CAM_FEEDS = [
  {
    id: "CAM-01",
    name: "Heavy Fabrication Bay 4",
    detections: [
      { label: "Hardhat Detected", conf: "98.4%", status: "safe", box: "top-12 left-16 w-28 h-36" },
      { label: "High-Vis Vest", conf: "97.1%", status: "safe", box: "top-44 left-14 w-32 h-44" }
    ],
    alert: null
  },
  {
    id: "CAM-02",
    name: "Zone C Chemical Storage",
    detections: [
      { label: "NO HARDHAT DETECTED", conf: "96.8%", status: "danger", box: "top-14 left-36 w-28 h-36" },
      { label: "Restricted Zone Intrusion", conf: "99.1%", status: "danger", box: "top-44 left-32 w-36 h-48" }
    ],
    alert: "SAFETY VIOLATION: Worker without PPE in Restricted Zone"
  }
];

const KavachGDemo = () => {
  const [activeCam, setActiveCam] = useState(CAM_FEEDS[0]);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(58 + Math.random() * 4));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full text-white">
      {/* Live Video Feed Simulation */}
      <div className="flex-1 bg-black/80 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[340px] p-4">
        
        {/* Top Overlay */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-white uppercase">
              RTSP STREAM: {activeCam.id} ({activeCam.name})
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
            {fps} FPS • OPENCV YOLOv8
          </span>
        </div>

        {/* Video Canvas Graphic & Bounding Boxes */}
        <div className="relative flex-1 my-4 bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
          
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

          {/* Render Bounding Boxes */}
          {activeCam.detections.map((d, i) => (
            <div
              key={i}
              className={`absolute p-1 border-2 font-mono text-[9px] font-bold rounded flex flex-col justify-between ${d.box} ${
                d.status === "danger"
                  ? "border-white bg-white/10 text-white animate-pulse"
                  : "border-white/60 bg-white/5 text-zinc-300"
              }`}>
              <span className="px-1 py-0.5 bg-black/90 rounded w-fit">
                {d.label} ({d.conf})
              </span>
              <span className="text-right text-[8px] text-zinc-400">YOLO_BOX_{i + 1}</span>
            </div>
          ))}

          <span className="text-[12px] font-mono text-zinc-600 select-none">
            [ SIMULATED RTSP LIVE SURVEILLANCE FEED ]
          </span>
        </div>

        {/* Bottom Telemetry Status */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>INFERENCE TIME: 14.2ms</span>
          <span className={activeCam.alert ? "text-white font-bold animate-pulse" : "text-zinc-400"}>
            {activeCam.alert || "ALL ZONES NOMINAL: PPE COMPLIANT"}
          </span>
        </div>
      </div>

      {/* Camera Selection & Control Panel */}
      <div className="w-full lg:w-80 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            INDUSTRIAL CAMERA NETWORK
          </span>
          <h4 className="text-[18px] font-bold font-poppins text-white mb-3">
            Safety KPI Feeds
          </h4>

          <div className="space-y-2.5 mb-4">
            {CAM_FEEDS.map((cam) => (
              <button
                key={cam.id}
                onClick={() => setActiveCam(cam)}
                className={`w-full text-left p-3.5 rounded-xl border font-mono text-[12px] transition-all ${
                  activeCam.id === cam.id
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/[0.03] text-zinc-300 hover:text-white border-white/10 hover:border-white/30"
                }`}>
                <div className="flex items-center justify-between mb-1">
                  <span>{cam.id}: {cam.name}</span>
                  <FaVideo className="w-3 h-3" />
                </div>
                <span className="text-[10px] block opacity-80">
                  {cam.alert ? "1 ACTIVE HAZARD DETECTED" : "COMPLIANCE: 100%"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Model Metrics */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-[11px] space-y-2 text-zinc-400">
          <span className="text-[10px] font-bold uppercase text-white block">
            EDGE VISION TELEMETRY:
          </span>
          <div className="flex justify-between">
            <span>FastAPI ASGI Queue:</span>
            <span className="text-white font-bold">0 Pending</span>
          </div>
          <div className="flex justify-between">
            <span>Incident Logging:</span>
            <span className="text-white font-bold">Automated SQLite/Mongo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KavachGDemo;
