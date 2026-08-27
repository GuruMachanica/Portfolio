import { motion } from "framer-motion";
import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certifications = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Research &amp; Verified Credentials</p>
        <h2 className={styles.sectionHeadTextLight}>
          Publications &amp; Certifications.
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            variants={fadeIn("up", "spring", index * 0.15, 0.8)}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="brutalist-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-white/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20">
                  {cert.title.includes("Research") || cert.title.includes("Paper") || cert.title.includes("Protein") ? "Peer-Reviewed Paper" : "Harvard CS50"}
                </span>
                <FaExternalLinkAlt className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-white text-[20px] font-bold font-poppins tracking-tight mb-2">
                {cert.title}
              </h3>

              <p className="text-zinc-300 text-[14px] leading-relaxed font-normal font-poppins">
                {cert.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[12px] font-mono text-zinc-400 font-bold">
                VERIFIED CREDENTIAL
              </span>
              <span className="text-[12px] font-mono text-white font-bold group-hover:underline">
                VIEW DOCUMENT →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
