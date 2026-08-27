import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiLeetcode } from 'react-icons/si';
import { huzaifa, bwmap, worldmap } from '../assets';

const NeuralCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor((width * height) / 22000), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 1,
        color: Math.random() > 0.4 ? '#4a5568' : '#718096',
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 120 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.45;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#4a5568';
            ctx.globalAlpha = (1 - dist2 / 100) * 0.15;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1] w-full h-full"
    />
  );
};

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
      <NeuralCanvas />
      <section
        className="relative flex sm:flex-row flex-col w-full min-h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-0 top-[120px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row sm:items-center items-start
          justify-between gap-3 z-10`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="max-w-[68vw] sm:max-w-[50%]">
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-battleGray/20 border border-battleGray/40 backdrop-blur-md mb-3 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[12px] sm:text-[13px] font-semibold text-eerieBlack tracking-wide font-beckman">
                AVAILABLE FOR AI &amp; BACKEND ROLES
              </span>
            </div>

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
              CS student specializing in Machine Learning, Generative AI, and Agentic Systems.
              <br className="sm:block hidden" />
              Building autonomous agents and intelligent backend solutions.
            </p>
            <p className="mt-3 text-[14px] sm:text-[16px] text-eerieBlack font-poppins">
              Prayagraj, India | Open to internships &amp; full-time opportunities
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
            href="https://www.linkedin.com/in/mohammad--huzaifa/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hover:scale-110 transition-transform duration-200">
            <FaLinkedin className="w-6 h-6 text-black" />
          </a>

          <a
            href="https://leetcode.com/u/mohammad-huzaifa-/"
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
