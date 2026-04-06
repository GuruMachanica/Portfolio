import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import { huzaifa, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[120px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="max-w-[68vw] sm:max-w-none">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray sm:text-[90px]
                text-eerieBlack text-[clamp(34px,9vw,50px)] font-mova
                font-extrabold uppercase">
                Mohammad Huzaifa
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              CS student building AI products and clean user experiences.
              <br className="sm:block hidden" />
              Turning ideas into practical software.
            </p>
            <p className="mt-3 text-[14px] sm:text-[16px] text-eerieBlack font-poppins">
              Prayagraj, India | Open to internships
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute right-0 bottom-0 w-[52vw] max-w-[540px]
            md:w-[44vw] lg:w-[38vw] 2xl:w-[32vw] h-auto max-h-[86vh]
            object-contain pointer-events-none"
            src={huzaifa}
            alt="mohammad huzaifa"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </section>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        className="fixed left-3 sm:left-6 bottom-4 sm:bottom-6 z-30
        bg-[rgba(255,255,255,0.92)] backdrop-blur-sm rounded-[18px]
        border border-[#d9d9d9] shadow-lg px-3 py-3">
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="hover:scale-110 transition-transform duration-200">
            <FaGithub className="w-6 h-6 text-black" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-huzaifa-137939322/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:scale-110 transition-transform duration-200">
            <FaLinkedin className="w-6 h-6 text-black" />
          </a>

          <a
            href="https://leetcode.com/u/6e8oFGT8hK/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode profile"
            className="hover:scale-110 transition-transform duration-200">
            <SiLeetcode className="w-6 h-6 text-black" />
          </a>

          <a
            href="mailto:mdhuzaifa00786@gmail.com"
            aria-label="Send email"
            className="hover:scale-110 transition-transform duration-200">
            <MdEmail className="w-6 h-6 text-black" />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
