import React from "react";
import TiltCard from "../TiltCard";
import LiveProjectThumbnail from "../LiveProjectThumbnail";
import { FaGithub, FaGlobe, FaProjectDiagram } from "react-icons/fa";

const ProjectCard = ({ project, onOpenArchitecture, onOpenLiveWebsite }) => {
  const repoUrl = project.source_code_link || project.repo || "https://github.com/GuruMachanica";

  return (
    <div className="project-card opacity-100 flex">
      <TiltCard className="brutalist-panel rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-white/40 flex flex-col justify-between h-full transition-all duration-300 w-full">
        <div>
          {/* Interactive Live Interactive Card Media with Architecture Blueprint Overlay */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-5 bg-[#0a0a0a] border border-white/10 group">
            <LiveProjectThumbnail
              fallbackImage={project.image}
              name={project.name}
              demoUrl={project.demo}
              category={project.category || "PRODUCTION"}
            />

            {/* Inspect Architecture Blueprint Button */}
            <button
              onClick={() => onOpenArchitecture(project.name)}
              className="absolute bottom-3 left-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] hover:bg-white hover:text-black transition-all cursor-pointer shadow-lg hover:scale-105"
              title="Inspect System Architecture Blueprint">
              <FaProjectDiagram className="w-3 h-3" />
              <span>INSPECT ARCHITECTURE</span>
            </button>
          </div>

          {/* Project Details */}
          <div className="mb-4">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-white font-bold font-poppins text-[20px] tracking-tight">
                {project.name}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/20 uppercase font-bold shrink-0">
                PROD
              </span>
            </div>
            <p className="text-zinc-400 text-[13px] leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Strictly 2 Buttons (Live Preview iframe Modal & GitHub Repo) */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
          <button
            onClick={() => onOpenLiveWebsite(project.siteKey)}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white text-black font-mono font-bold text-[11px] sm:text-[12px] hover:bg-zinc-200 transition-colors shadow-lg cursor-pointer">
            <FaGlobe className="w-3.5 h-3.5" />
            <span>[LIVE PREVIEW]</span>
          </button>

          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl brutalist-panel text-white font-mono font-bold text-[11px] sm:text-[12px] hover:border-white/40 transition-colors">
            <FaGithub className="w-3.5 h-3.5" />
            <span>[REPO]</span>
          </a>
        </div>
      </TiltCard>
    </div>
  );
};

export default ProjectCard;

