import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
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
      className="relative w-full min-h-[90vh] mx-auto stripe-grid stripe-radial flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-8 z-0">
      
      {/* Top Tagline Pill */}
      <div className="hero-badge opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full brutalist-panel mb-6 border border-white/15 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span className="text-[12px] sm:text-[13px] font-bold font-mono tracking-widest text-zinc-300 uppercase">
          AGENTIC AI ENGINEER • BACKEND ARCHITECT
        </span>
      </div>

      {/* Main Headline (Grouped by word with clamp sizing to prevent single-letter line breaks) */}
      <div className="max-w-5xl text-center flex flex-col items-center">
        <h1 className="text-white text-[clamp(32px,6.5vw,72px)] font-extrabold tracking-tight leading-tight font-poppins uppercase flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
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

        <p className="hero-subtext opacity-0 mt-5 text-zinc-300 text-[16px] sm:text-[20px] max-w-2xl leading-relaxed font-normal">
          Designing autonomous multi-agent systems, deep learning pipelines, and high-throughput backend infrastructure.
        </p>

        {/* Location & Status Meta */}
        <div className="hero-meta opacity-0 mt-4 flex flex-wrap items-center justify-center gap-4 text-[13px] text-zinc-400 font-mono">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Prayagraj, UP, India
          </span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5 text-white font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            Open to AI &amp; Backend Roles
          </span>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta opacity-0 mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold text-[14px] font-mono hover:bg-zinc-200 transition-all duration-200 shadow-lg">
            VIEW PROJECTS <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-white font-bold text-[14px] font-mono hover:border-white/40 hover:bg-white/[0.08] transition-all duration-200">
            <FaGithub className="w-4 h-4" />
            GITHUB
          </a>
          <a
            href="/Mohammad_Huzaifa_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-3 rounded-xl brutalist-panel text-zinc-300 font-bold text-[14px] font-mono hover:text-white hover:border-white/40 transition-all duration-200">
            <FaFileDownload className="w-3.5 h-3.5 text-white" />
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
