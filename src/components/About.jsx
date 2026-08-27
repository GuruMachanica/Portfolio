import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
      className="xs:w-[260px] w-full brutalist-panel rounded-2xl p-6 flex flex-col justify-between items-center text-center min-h-[260px] border border-white/10 hover:border-[#61DAFB]/50 transition-all duration-300">
      <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" />
      </div>
      <h3 className="text-white text-[19px] font-bold tracking-tight font-poppins">
        {title}
      </h3>
      <span className="text-[11px] font-mono text-slate-400 mt-2 uppercase tracking-wider">
        Core Competency
      </span>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>System Architecture &amp; Engineering</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-300 text-[17px] max-w-3xl leading-relaxed font-normal">
        B.Tech Computer Science student specializing in Machine Learning, Generative AI, and Agentic Systems. Proven track record of designing autonomous AI agents, fine-tuning LLMs, and building robust data curation pipelines. Passionate about dataset engineering, workflow automation, and developing intelligent backend solutions for operational efficiency.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
