import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { FaBrain, FaServer, FaLayerGroup, FaDatabase } from "react-icons/fa";

const coreServices = [
  {
    title: "Agentic AI Engineer",
    subtitle: "Multi-Agent Systems & Tool Calling",
    icon: FaBrain,
  },
  {
    title: "Backend Developer",
    subtitle: "FastAPI, WebSockets & Scalable APIs",
    icon: FaServer,
  },
  {
    title: "Computer Vision & 3D",
    subtitle: "PyTorch, OpenCV & 3D Meshes",
    icon: FaLayerGroup,
  },
  {
    title: "Data Engineer",
    subtitle: "ETL, Data Wrangling & Vector DBs",
    icon: FaDatabase,
  },
];

const ServiceCard = ({ index, title, subtitle, icon: Icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.15 * index, 0.75)}
      className="w-full brutalist-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between items-center text-center min-h-[220px] sm:min-h-[250px] border border-white/10 hover:border-white/40 hover:bg-white/[0.04] transition-all duration-300 group">
      
      {/* Crisp White Vector Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-black transition-colors duration-300" />
      </div>

      <div>
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold tracking-tight font-poppins">
          {title}
        </h3>
        <p className="text-zinc-400 text-[12px] sm:text-[13px] font-mono mt-1 sm:mt-1.5 leading-snug">
          {subtitle}
        </p>
      </div>

      <span className="text-[10px] font-mono font-bold text-zinc-500 mt-3 sm:mt-4 uppercase tracking-widest block">
        CORE COMPETENCY
      </span>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[2rem] sm:-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>System Architecture &amp; Engineering</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 sm:mt-4 text-zinc-300 text-[15px] sm:text-[17px] max-w-3xl leading-relaxed font-normal">
        B.Tech Computer Science student specializing in Machine Learning, Generative AI, and Agentic Systems. Proven track record of designing autonomous AI agents, fine-tuning LLMs, and building robust data curation pipelines. Passionate about dataset engineering, workflow automation, and developing intelligent backend solutions for operational efficiency.
      </motion.p>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {coreServices.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
