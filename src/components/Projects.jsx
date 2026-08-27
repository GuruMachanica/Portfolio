import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  id,
  name,
  description,
  architecture,
  image,
  repo,
  demo,
  tags,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="brutalist-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-[#61DAFB]/40 transition-all duration-300">
      
      <div>
        {/* Project Thumbnail with subtle hover scale */}
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mb-5 border border-white/10 bg-black/50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/80 text-[#61DAFB] border border-[#61DAFB]/30 backdrop-blur-md">
              {name === "SunMap" ? "Spatial 3D" : name === "Concept3D" ? "GenAI & 3D" : name === "A.E.G.I.S" ? "Audio Security" : "Computer Vision"}
            </span>
          </div>
        </div>

        {/* Title & Architecture Subtitle */}
        <h3 className="text-white text-[24px] sm:text-[26px] font-extrabold font-poppins tracking-tight">
          {name}
        </h3>

        {architecture && (
          <p className="text-[12.5px] font-mono text-[#10B981] mt-1 mb-3">
            {architecture}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-300 text-[14px] leading-relaxed font-normal mb-5 font-poppins">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5">
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-slate-200 hover:text-white text-[13px] font-mono font-bold transition-colors duration-200 border border-white/10">
            <FaGithub className="w-4 h-4" />
            CODE
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black hover:bg-[#61DAFB] text-[13px] font-mono font-bold transition-all duration-200 shadow-md">
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
            {name === "SunMap" ? "LIVE DEMO" : "PREVIEW"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-relaxed font-normal">
        These projects highlight my work in Agentic AI systems, 3D visualization, real-time streaming backends, and computer vision. Each card includes context, architectural highlights, and links to source code and public showcases.
      </motion.p>

      {/* Responsive 2-Column Brutalist Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
