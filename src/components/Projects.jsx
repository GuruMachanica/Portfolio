import LiveProjectThumbnail from "./LiveProjectThumbnail";
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
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
      className="brutalist-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-white/40 transition-all duration-300">
      
      <div>
        {/* Project Thumbnail with Live Deployment Preview */}
    <div className="rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-white/10">
      <LiveProjectThumbnail
        name={name}
        fallbackImage={image}
        demoUrl={demo}
        category={name === "SunMap" ? "Spatial 3D" : name === "Concept3D" ? "GenAI & 3D" : name === "A.E.G.I.S" ? "Audio Security" : "Computer Vision"}
      />
    </div>

    {/* Title & Architecture */}
        <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[26px] font-extrabold font-poppins tracking-tight">
          {name}
        </h3>

        {architecture && (
          <p className="text-[11px] sm:text-[12px] font-mono text-zinc-400 mt-1 mb-2.5 sm:mb-3 leading-snug">
            {architecture}
          </p>
        )}

        {/* Description */}
        <p className="text-zinc-300 text-[13px] sm:text-[14px] leading-relaxed font-normal mb-4 sm:mb-5 font-poppins">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-white/10">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Action Buttons (Responsive on all screen sizes) */}
        <div className="flex flex-col xs:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white text-[12px] sm:text-[13px] font-mono font-bold transition-colors duration-200 border border-white/10 text-center">
            <FaGithub className="w-4 h-4" />
            CODE
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-[12px] sm:text-[13px] font-mono font-bold transition-all duration-200 shadow-md text-center">
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
    <div className="-mt-[2rem] sm:-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Selected Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 sm:mt-4 text-zinc-300 text-[15px] sm:text-[17px] max-w-3xl leading-relaxed font-normal">
        These projects highlight my work in Agentic AI systems, 3D visualization, real-time streaming backends, and computer vision. Each card includes context, architectural highlights, and links to source code and public showcases.
      </motion.p>

      {/* Responsive 2-Column Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
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
