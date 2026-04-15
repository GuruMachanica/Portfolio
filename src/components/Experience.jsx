import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {education.date}
        </h3>
      </div>
    }
    iconStyle={{ background: education.iconBg }}
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
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {education.title}
      </h3>
      <p
        className="text-dim sm:text-[16px] text-[14px] font-semibold font-poppins tracking-[0.5px]"
        style={{ margin: 0 }}>
        {education.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Education Timeline.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {educations.map((education, index) => (
            <ExperienceCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>

      <button
        className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-[100] live-demo
        flex justify-between sm:text-[18px] text-[14px] text-timberWolf
        font-bold font-beckman items-center py-4 pl-3 pr-3 whitespace-nowrap
        gap-1 sm:w-[160px] sm:h-[58px] w-[130px] h-[48px] rounded-[12px]
        bg-jetLight hover:bg-battleGray hover:text-eerieBlack transition
        duration-[0.2s] ease-in-out shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1u2xt4lfEFvHCyCcoRaL9azhuzHQtiPNx/view?usp=sharing',
            '_blank'
          )
        }
        onMouseOver={() => {
          document.querySelector('.download-btn').setAttribute('src', downloadHover);
        }}
        onMouseOut={() => {
          document.querySelector('.download-btn').setAttribute('src', download);
        }}>
        MY RESUME
        <img
          src={download}
          alt="download"
          className="download-btn sm:w-[26px] sm:h-[26px] w-[23px] h-[23px] object-contain"
          loading="lazy"
          decoding="async"
        />
      </button>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
