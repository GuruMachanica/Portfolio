import React from "react";
import { motion } from "framer-motion";
import { TechBalls } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologyGroups } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Interactive 3D Stack</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologyGroups.map((group) => (
          <div
            key={group.title}
            className="brutalist-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h3 className="text-white sm:text-[22px] text-[19px] font-bold font-poppins tracking-tight">
                {group.title}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20">
                3D WebGL
              </span>
            </div>

            {/* All balls for this group share ONE WebGL context */}
            <div className="w-full flex items-center justify-center">
              <TechBalls items={group.items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
