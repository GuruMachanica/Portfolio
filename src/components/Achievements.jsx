import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { achievements } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const AchievementCard = ({ achievement }) => (
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
        <h3 className="text-timberWolf text-[18px] font-bold font-beckman">
          {achievement.date}
        </h3>
      </div>
    }
    iconStyle={{ background: achievement.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={achievement.icon}
          alt={achievement.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-eerieBlack text-[24px] font-bold font-beckman tracking-[2px]">
        {achievement.title}
      </h3>
      <p
        className="text-eerieBlack sm:text-[16px] text-[14px] font-semibold font-poppins tracking-[0.5px]"
        style={{ margin: 0 }}>
        {achievement.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextLight} sm:pl-16 pl-[2rem]`}>
          Competitive milestones
        </p>
        <h2 className={`${styles.sectionHeadTextLight} sm:pl-16 pl-[2rem]`}>
          Achievements Timeline.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, 'achievements');
