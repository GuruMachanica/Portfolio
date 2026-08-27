import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(13, 15, 22, 0.9)",
      color: "#f8fafc",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.8)",
      borderRadius: "20px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid rgba(255, 255, 255, 0.1)",
    }}
    date={
      <div>
        <h3 className="text-[#61DAFB] text-[15px] font-bold font-mono">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: "#11131a", border: "2px solid rgba(255, 255, 255, 0.15)" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    }>
    <div>
      <h3 className="text-white text-[22px] font-bold font-poppins tracking-tight">
        {experience.title}
      </h3>
      <p
        className="text-slate-300 sm:text-[15px] text-[13px] font-normal font-poppins"
        style={{ margin: "4px 0 0 0" }}>
        {experience.company_name}
      </p>
      {experience.link && (
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 px-4 py-1.5 bg-white text-black font-mono text-[12px] font-bold tracking-wider rounded-lg hover:bg-[#61DAFB] transition duration-200 shadow-sm">
          VIEW CERTIFICATE →
        </a>
      )}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Journey</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
