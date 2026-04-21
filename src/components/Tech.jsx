import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologyGroups } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologyGroups.map((group, index) => (
          <div
            key={group.title}
            className="bg-[rgba(20,20,20,0.48)] border border-white/25 rounded-2xl px-5 py-5">

            <h3
              className="text-silver sm:text-[28px] text-[24px] font-beckman
              tracking-[1px] mb-5 text-center md:text-left">
              {group.title}
            </h3>

            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              {group.items.map((technology) => (
                <div
                  className="relative group w-24 h-24"
                  key={technology.name}
                  title={technology.name}>
                  <BallCanvas icon={technology.icon} />
                  <span
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-8
                    whitespace-nowrap rounded-md bg-black/85 px-2 py-1 text-[12px] text-white
                    opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
