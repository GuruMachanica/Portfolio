import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import PageTransition from "../components/PageTransition";
import LiveWebsiteModal from "../components/demos/LiveWebsiteModal";
import ProjectCard from "../components/projects/ProjectCard";
import ArchitectureModal from "../components/projects/ArchitectureModal";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { animate, stagger } from "animejs";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedArch, setSelectedArch] = useState(null);
  const [liveModalOpen, setLiveModalOpen] = useState(false);
  const [activeSiteKey, setActiveSiteKey] = useState("anveshaksutra");

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".project-card", {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: stagger(60, { start: 100 }),
        ease: "outExpo",
        duration: 700,
      });
    } catch (e) {}
  }, []);

  const allTags = ["all", ...new Set(projects.flatMap((p) => p.tags.map((t) => t.name)))];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === "all" || project.tags.some((t) => t.name.toLowerCase() === selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  const openLiveWebsite = (siteKey) => {
    setActiveSiteKey(siteKey || "anveshaksutra");
    setLiveModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-28 px-4 sm:px-8 max-w-7xl mx-auto stripe-grid">
        
        {/* Top Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit mb-3">
              <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
            </Link>
            <h1 className="text-[34px] sm:text-[44px] font-extrabold font-poppins text-white tracking-tight">
              Production Projects.
            </h1>
            <p className="text-zinc-400 text-[14px] sm:text-[16px] mt-1 font-mono">
              Zero-Knowledge OSINT • 3D Generative Latents • Real-Time Scam Defense • Solar Yield Physics
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-3.5 h-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search architecture..."
              className="w-full bg-[#111111] border border-white/15 rounded-xl pl-9 pr-4 py-2 text-[13px] font-mono text-white focus:outline-none focus:border-white/50"
            />
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-[12px] font-mono capitalize transition-all cursor-pointer ${
                selectedTag.toLowerCase() === tag.toLowerCase()
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}>
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid: Strictly 2 Per Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              onOpenArchitecture={(name) => setSelectedArch(name)}
              onOpenLiveWebsite={openLiveWebsite}
            />
          ))}
        </div>

        {/* Architecture Blueprint Modal */}
        <ArchitectureModal
          selectedArch={selectedArch}
          onClose={() => setSelectedArch(null)}
          onOpenLiveWebsite={openLiveWebsite}
        />

        {/* Live Deployed Website Iframe Modal */}
        <LiveWebsiteModal
          isOpen={liveModalOpen}
          onClose={() => setLiveModalOpen(false)}
          initialSite={activeSiteKey}
        />
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
