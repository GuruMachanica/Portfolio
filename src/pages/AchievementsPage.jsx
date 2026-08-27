import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrophy, FaMedal, FaCalendarAlt, FaStar } from "react-icons/fa";
import { fetchPortfolioData } from "../services/dataService";
import { animate, stagger } from "animejs";

const fallbackAchievements = [
  {
    id: "ach-1",
    title: "Prototype Development Sprint Qualifier",
    event: "Sankalp 2026 - National Summit on Innovation & Skills",
    organization: "Motilal Nehru National Institute of Technology (MNNIT) Prayagraj",
    date: "2026",
    category: "National Innovation Summit",
    description: "Qualified for the competitive National Prototype Sprint by presenting an automated AI agent workflow solution for operational automation.",
    tags: ["National Qualifier", "AI Prototyping", "MNNIT Prayagraj"]
  },
  {
    id: "ach-2",
    title: "Second Runner-Up (3rd Place)",
    event: "UHACK 4.0 Hackathon",
    organization: "United Group of Institutions",
    date: "Jan 2026 - Feb 2026",
    category: "Hackathon",
    description: "Built and deployed A.E.G.I.S (Audio-based Edge Guard for Intelligent Scam-prevention), delivering sub-second real-time streaming detection.",
    tags: ["2nd Runner-Up", "FastAPI", "WebSockets", "Audio Security"]
  },
  {
    id: "ach-3",
    title: "Second Runner-Up (3rd Place)",
    event: "CodeStorm 2025 Hackathon",
    organization: "Shambhunath Group of Institutions",
    date: "Oct 2025",
    category: "Hackathon",
    description: "Engineered SunMap for 3D Solar Potential & Revenue Analytics, creating predictive spatial modeling pipelines with custom PyTorch models.",
    tags: ["2nd Runner-Up", "PyTorch", "Spatial 3D", "Predictive Analytics"]
  }
];

const AchievementsPage = () => {
  const [achievements, setAchievements] = useState(fallbackAchievements);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Asynchronous AJAX Data Fetching
    fetchPortfolioData().then((data) => {
      if (data && data.achievements) {
        setAchievements(data.achievements);
      }
      try {
        animate(".ach-card", {
          opacity: [0, 1],
          translateY: [25, 0],
          delay: stagger(100, { start: 100 }),
          ease: "outExpo",
          duration: 700,
        });
      } catch (e) {}
    });
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
          HONORS &amp; COMPETITIVE MILESTONES
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
          COMPETITIVE ACHIEVEMENTS
        </p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
          Achievements &amp; Honors.
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          National summit qualifiers, hackathon placements, and engineering competition awards.
        </p>
      </div>

      {/* Bespoke Brutalist Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="ach-card opacity-0 brutalist-panel rounded-3xl p-7 border border-white/10 hover:border-white/40 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FaTrophy className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold uppercase">
                  {ach.category}
                </span>
              </div>

              <h2 className="text-white text-[20px] font-bold font-poppins tracking-tight mb-1.5">
                {ach.title}
              </h2>
              <h3 className="text-zinc-300 text-[14px] font-mono font-medium">
                {ach.event}
              </h3>
              <p className="text-[12px] font-mono text-zinc-400 mt-1">
                {ach.organization}
              </p>

              <p className="mt-4 text-zinc-300 text-[13.5px] leading-relaxed font-poppins">
                {ach.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {ach.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-[12px] font-mono text-white font-bold">{ach.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
