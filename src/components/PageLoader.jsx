import { motion } from 'framer-motion';
import { logo } from '../assets';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0.95 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[999] bg-flashWhite flex flex-col items-center justify-center">
      <motion.img
        src={logo}
        alt="portfolio logo"
        initial={{ opacity: 0.85, scale: 0.95, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ rotate: { duration: 1.8, repeat: Infinity, ease: 'linear' } }}
        className="w-24 h-24 object-contain"
      />

      <motion.p
        initial={{ opacity: 0.4, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="mt-6 text-jet text-[14px] sm:text-[16px] font-poppins tracking-[1px] uppercase">
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
};

export default PageLoader;
