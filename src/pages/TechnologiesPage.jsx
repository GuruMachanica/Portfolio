import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TechBalls } from "../components/canvas";
import { technologyGroups } from "../constants";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import { FaArrowLeft } from "react-icons/fa";
import { animate, stagger } from "animejs";

const TechnologiesPage = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".tech-panel-item", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(60, { start: 100 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, [activeCategory]);

  const filteredGroups = activeCategory === "ALL"
    ? technologyGroups
    : technologyGroups.filter((g) => g.title.toUpperCase().includes(activeCategory));

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Breadcrumb Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
            <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            3D WEBGL PHYSICS TECH SPHERES
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-10">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            TECHNICAL ARSENAL
          </p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Technologies.
          </h1>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
            Interactive 3D physics tech spheres spanning AI/ML, distributed backends, real-time databases, and systems engineering. Hover over any sphere to view its identity tag.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {["ALL", "PROGRAMMING", "MACHINE LEARNING", "BACKEND", "TOOLS", "UI/UX"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[12px] font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Tech Ball Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div key={group.title} className="tech-panel-item opacity-100">
              <TiltCard className="brutalist-panel rounded-3xl p-6 border border-white/10 hover:border-white/35 flex flex-col justify-between h-full transition-all duration-300">
                <div>
                  <div className="pb-3 border-b border-white/10 mb-4">
                    <h3 className="text-white text-[19px] sm:text-[22px] font-bold font-poppins tracking-tight">
                      {group.title}
                    </h3>
                  </div>

                  {/* 3D WebGL Spheres Canvas with Floating Hover Tags */}
                  <div className="w-full flex items-center justify-center overflow-hidden py-1">
                    <TechBalls items={group.items} />
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default TechnologiesPage;
