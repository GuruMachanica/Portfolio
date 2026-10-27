import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";
import { createTimeline, stagger } from "animejs";

// three.js is ~600KB minified; keeping it out of the entry chunk lets the wordmark paint first.
const BlackHole = lazy(() => import("./canvas/BlackHole"));

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/GuruMachanica" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammad--huzaifa/" },
  { label: "Email", href: "mailto:mdhuzaifa00786@gmail.com" },
];

const NAME_LINES = ["Mohammad", "Huzaifa"];

const Hero = () => {
  const sectionRef = useRef(null);
  const [isCompact, setCompact] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 1024
  );
  // The WebGL layer costs a 117 KB gzipped chunk, so honour an explicit data-saver
  // request or a 2G-class link and let the CSS glow carry the hero instead.
  const [webglAllowed] = useState(() => {
    const conn = typeof navigator !== "undefined" ? navigator.connection : null;
    if (!conn) return true;
    if (conn.saveData) return false;
    return !["slow-2g", "2g"].includes(conn.effectiveType);
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    try {
      createTimeline()
        .add(".hero-badge", {
          opacity: [0, 1],
          translateY: [-8, 0],
          ease: "outExpo",
          duration: 650,
        })
        .add(
          ".hero-letter",
          {
            opacity: [0, 1],
            translateY: [34, 0],
            rotateZ: [4, 0],
            delay: stagger(24),
            ease: "outExpo",
            duration: 900,
          },
          "-=350"
        )
        .add(
          ".hero-lede, .hero-link, .hero-cta, .hero-meta",
          {
            opacity: [0, 1],
            translateY: [14, 0],
            delay: stagger(70),
            ease: "outQuad",
            duration: 700,
          },
          "-=450"
        );
    } catch (error) {
      console.warn("Hero animation fallback", error);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen min-h-[100svh] mx-auto flex flex-col justify-end sm:justify-center overflow-hidden pt-28 sm:pt-32 pb-24 sm:pb-16 bg-black">
      {/* Paints instantly and covers the gap while the lazily loaded chunk arrives. */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none hero-disk-glow" />

      {webglAllowed && (
        <Suspense fallback={null}>
          <BlackHole
            className="absolute inset-0 z-[1] bh-fade"
            focusX={isCompact ? 0.5 : 0.74}
            focusY={isCompact ? 0.2 : 0.5}
            scale={isCompact ? 0.44 : 0.62}
          />
        </Suspense>
      )}

      {/* Scrims keep the wordmark legible where the accretion disk passes behind it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.82) 34%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0) 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[2] h-48 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10">
        <div className="hero-badge opacity-0 flex items-center gap-2.5 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.32em] text-zinc-400">
            Open to AI &amp; Backend Roles
          </span>
        </div>

        <h1 className="hero-name text-white font-extrabold leading-[0.92] tracking-[-0.045em] text-[clamp(52px,13vw,104px)] sm:text-[clamp(76px,9.5vw,142px)]">
          {NAME_LINES.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line.split("").map((char, index) => (
                <span key={`${line}-${index}`} className="hero-letter inline-block opacity-0">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-lede opacity-0 mt-5 sm:mt-7 text-zinc-300 text-[11px] sm:text-[12.5px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.38em]">
          Agentic AI Engineer <span className="text-zinc-600 mx-1 sm:mx-2">&bull;</span> Backend Architect
        </p>

        <p className="hero-lede opacity-0 mt-5 sm:mt-6 max-w-xl text-zinc-400 text-[15px] sm:text-[17px] leading-relaxed">
          Designing autonomous multi-agent systems, deep learning pipelines, and
          high-throughput backend infrastructure.
        </p>

        <div className="hero-links mt-8 sm:mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="hero-link opacity-0 group relative text-white text-[14px] sm:text-[15px] font-semibold pb-1.5 border-b border-white/25 hover:border-white transition-colors duration-300">
              {link.label}
              <span className="absolute inset-x-0 -bottom-px h-px scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hero-cta opacity-0 mt-9 sm:mt-11 flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-black font-bold text-[12px] sm:text-[13px] font-mono uppercase tracking-wider hover:bg-zinc-200 transition-colors duration-200">
            View Projects
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            to="/resume"
            className="hero-pill-ghost flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-white font-bold text-[12px] sm:text-[13px] font-mono uppercase tracking-wider">
            <FaFileDownload className="w-3 h-3" />
            Resume
          </Link>
          <Link
            to="/technologies"
            className="hero-pill-ghost flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-zinc-300 font-bold text-[12px] sm:text-[13px] font-mono uppercase tracking-wider">
            Stack
          </Link>
        </div>

        <p className="hero-meta opacity-0 mt-8 text-[11px] sm:text-[12px] font-mono uppercase tracking-[0.22em] text-zinc-500">
          Prayagraj, UP, India
        </p>
      </div>
    </section>
  );
};

export default Hero;
