import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologyGroups } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleChange = (e) => setIsMobile(e.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

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
                <div className="w-24 h-24" key={technology.name}>
                  {isMobile ? (
                    <div className="w-24 h-24 rounded-2xl bg-[#1a1a1a] border border-white/20 p-3 flex items-center justify-center">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : (
                    <BallCanvas icon={technology.icon} />
                  )}
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
