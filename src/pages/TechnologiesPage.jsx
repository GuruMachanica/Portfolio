import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Tech } from "../components";
import { FaArrowLeft, FaTerminal, FaBrain, FaServer, FaCubes, FaLayerGroup } from "react-icons/fa";
import { animate, stagger } from "animejs";

const stackDetails = [
  {
    category: "Languages & Runtime",
    skills: [
      { name: "Python", level: "Production", desc: "FastAPI, PyTorch, LangChain, NumPy, Pandas" },
      { name: "C++ / C", level: "Advanced", desc: "Data Structures, Algorithms, Memory Management" },
      { name: "JavaScript / ES6+", level: "Production", desc: "React 18, Node.js, WebSockets, Three.js" },
    ],
  },
  {
    category: "AI, Agents & ML",
    skills: [
      { name: "LangChain & Agents", level: "Production", desc: "Autonomous workflows, tool calling, prompt chains" },
      { name: "PyTorch & Transformers", level: "Advanced", desc: "Model fine-tuning, embeddings, transfer learning" },
      { name: "Scikit-Learn & OpenCV", level: "Production", desc: "Classical ML, feature engineering, vision pipelines" },
    ],
  },
  {
    category: "Databases & Backend",
    skills: [
      { name: "FastAPI & WebSockets", level: "Production", desc: "Asynchronous endpoints, live bidirectional telemetry" },
      { name: "MongoDB & MySQL", level: "Production", desc: "Document stores, schema design, relational modeling" },
      { name: "Redis & Docker", level: "Production", desc: "In-memory caching, container orchestration, microservices" },
    ],
  },
];

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".tech-card", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(60, { start: 150 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, []);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
      {/* Top Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          INTERACTIVE 3D &amp; PROFICIENCY MATRIX
        </div>
      </div>

      {/* 3D Tech Component */}
      <Tech />

      {/* Detailed Technical Matrix */}
      <div className="mt-20 pt-12 border-t border-white/10">
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            COMPREHENSIVE BREAKDOWN
          </p>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Stack Matrix.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stackDetails.map((group, idx) => (
            <div
              key={idx}
              className="tech-card opacity-0 brutalist-panel p-7 rounded-3xl border border-white/10 hover:border-white/35 flex flex-col justify-between">
              <div>
                <h3 className="text-white text-[20px] font-bold font-poppins pb-3 border-b border-white/10 mb-6">
                  {group.category}
                </h3>

                <div className="space-y-5">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-bold text-[15px] font-poppins">{skill.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/15 font-bold">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-[12px] font-mono mt-1">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
