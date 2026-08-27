import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ education }) => (
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
          {education.date}
        </h3>
      </div>
    }
    iconStyle={{ background: "#11131a", border: "2px solid rgba(255, 255, 255, 0.15)" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.icon}
          alt={education.company_name}
          className="w-[60%] h-[60%] object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    }>
    <div>
      <h3 className="text-white text-[22px] font-bold font-poppins tracking-tight">
        {education.title}
      </h3>
      <p
        className="text-slate-300 sm:text-[15px] text-[13px] font-normal font-poppins"
        style={{ margin: "4px 0 0 0" }}>
        {education.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <div className="-mt-[2rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
