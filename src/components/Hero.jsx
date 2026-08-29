import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
import { worldmap } from "../assets";
import { FaGithub, FaFileDownload, FaArrowRight } from "react-icons/fa";
import { createTimeline, stagger } from "animejs";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    try {
      const tl = createTimeline();
      tl.add(".hero-badge", {
        opacity: [0, 1],
        translateY: [-10, 0],
        ease: "outExpo",
        duration: 700,
      })
        .add(".hero-letter", {
          opacity: [0, 1],
          translateY: [25, 0],
          delay: stagger(20),
          ease: "outExpo",
          duration: 800,
        }, "-=400")
        .add(".hero-subtext, .hero-meta, .hero-cta", {
          opacity: [0, 1],
          translateY: [15, 0],
          delay: stagger(80),
          ease: "outQuad",
          duration: 700,
        }, "-=400");
    } catch (e) {
      console.warn("Hero animation fallback", e);
    }
  }, []);

  const firstName = "MOHAMMAD";
  const lastName = "HUZAIFA";

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] mx-auto stripe-grid stripe-radial flex flex-col justify-center items-center pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 z-0 overflow-hidden">

      {/* World Map Backdrop: Full Edge-to-Edge Fill with mix-blend-screen & Translucency */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.24] select-none"
        style={{
          maskImage: "radial-gradient(ellipse 95% 82% at 50% 50%, black 55%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 82% at 50% 50%, black 55%, transparent 100%)"
        }}>
        <img
          src={worldmap}
          alt="World Map Ambient Backdrop"
          className="w-full h-full object-fill pointer-events-none select-none mix-blend-screen"
          loading="eager"
        />
      </div>

      {/* Top Tagline Pill */}
      <div className="hero-badge opacity-100 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full brutalist-panel mb-5 sm:mb-6 border border-white/15 shadow-lg text-center max-w-full relative z-10">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
        <span className="text-[11px] sm:text-[13px] font-bold font-mono tracking-wider sm:tracking-widest text-zinc-300 uppercase truncate">
          AGENTIC AI ENGINEER • BACKEND ARCHITECT
        </span>
      </div>

      {/* Main Headline (Grouped by word with clamp sizing) */}
      <div className="w-full max-w-5xl text-center flex flex-col items-center">
        <h1 className="text-white text-[clamp(24px,7vw,70px)] font-extrabold tracking-tight leading-[1.08] font-poppins uppercase flex flex-wrap justify-center gap-x-2 sm:gap-x-4">
          <span className="inline-block whitespace-nowrap">
            {firstName.split("").map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block opacity-0">
                {char}
              </span>
            ))}
          </span>
          <span className="inline-block whitespace-nowrap">
            {lastName.split("").map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block opacity-0">
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="hero-subtext opacity-100 mt-4 sm:mt-5 text-zinc-300 text-[15px] sm:text-[19px] max-w-2xl leading-relaxed font-normal px-2">
          Designing autonomous multi-agent systems, deep learning pipelines, and high-throughput backend infrastructure.
        </p>

        {/* Location & Status Meta */}
        <div className="hero-meta opacity-100 mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[12px] sm:text-[13px] text-zinc-400 font-mono px-2">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Prayagraj, UP, India
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
            Open to AI &amp; Backend Roles
          </span>
        </div>

        {/* Action Buttons (Full width on small phones, inline on tablets/desktops) */}
        <div className="hero-cta opacity-100 mt-7 sm:mt-8 flex flex-col xs:flex-row w-full xs:w-auto gap-3 sm:gap-4 justify-center px-4 xs:px-0">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-[13px] sm:text-[14px] font-mono hover:bg-zinc-200 transition-all duration-200 shadow-lg text-center hover:scale-105">
            VIEW PROJECTS <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl brutalist-panel text-white font-bold text-[13px] sm:text-[14px] font-mono hover:border-white/40 hover:bg-white/[0.08] transition-all duration-200 text-center">
            <FaGithub className="w-4 h-4" />
            GITHUB
          </a>
          <Link
            to="/resume"
            className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl brutalist-panel text-zinc-300 font-bold text-[13px] sm:text-[14px] font-mono hover:text-white hover:border-white/40 transition-all duration-200 text-center">
            <FaFileDownload className="w-3.5 h-3.5 text-white" />
            RESUME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
