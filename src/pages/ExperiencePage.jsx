import PageTransition from "../components/PageTransition";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experiences } from "../constants/profile";
import { animate, stagger } from "animejs";

const ExperiencePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".exp-card", {
        opacity: [0, 1],
        translateY: [15, 0],
        delay: stagger(30, { start: 20 }),
        ease: "outExpo",
        duration: 350,
      });
    } catch (e) {
    /* noop: non-critical failure */
  }
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
      {/* Top Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          INDUSTRY CAREER TIMELINE
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
          PROFESSIONAL EXPERIENCE
        </p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
          Work Experience.
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          Hands-on software engineering experience delivering scalable backend systems, machine learning pipelines, and production APIs.
        </p>
      </div>

      {/* Bespoke Brutalist Timeline Showcase */}
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="exp-card opacity-100 brutalist-panel rounded-3xl p-6 sm:p-9 border border-white/10 hover:border-white/40 transition-all duration-300">
            
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20 uppercase">
                    {exp.type}
                  </span>
                  {exp.verified && (
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                      <FaCheckCircle className="text-white w-3 h-3" /> VERIFIED CREDENTIAL
                    </span>
                  )}
                </div>

                <h2 className="text-white text-[24px] sm:text-[28px] font-extrabold font-poppins tracking-tight">
                  {exp.role}
                </h2>
                <h3 className="text-zinc-300 text-[16px] sm:text-[18px] font-mono mt-1">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-1.5 font-mono text-[13px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <FaCalendarAlt className="w-3.5 h-3.5 text-zinc-400" /> {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-zinc-400" /> {exp.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="mt-6 text-zinc-300 text-[15px] sm:text-[16px] leading-relaxed font-poppins">
              {exp.summary}
            </p>

            {/* Key Deliverables */}
            <div className="mt-6">
              <h4 className="text-[12px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
                KEY RESPONSIBILITIES &amp; IMPACT
              </h4>
              <ul className="space-y-2.5">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 text-[14px] font-poppins leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips & Action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>

              {exp.certificateUrl && (
                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md shrink-0">
                  <FaExternalLinkAlt className="w-3 h-3" /> VIEW CERTIFICATE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default ExperiencePage;
