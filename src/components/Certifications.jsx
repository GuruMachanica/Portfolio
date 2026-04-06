import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Certifications = () => {
  return (
    <div className="-mt-[3rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Verified learning</p>
        <h2
          className={`${styles.sectionHeadTextLight} drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]`}>
          Certifications.
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.title}
            variants={fadeIn('up', 'spring', index * 0.15, 0.8)}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="block bg-[rgba(244,244,246,0.85)] border border-[#cfcfd4]
            rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:translate-y-[-2px]
            transition-transform duration-200">
            <h3 className="text-jet text-[20px] font-bold font-beckman tracking-[1px]">
              {cert.title}
            </h3>
            <p className="mt-2 text-dim text-[15px] leading-[24px] font-poppins">
              {cert.description}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, 'certifications');
