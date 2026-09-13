import PageTransition from "../components/PageTransition";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaTrophy } from "react-icons/fa";
import { achievements } from "../constants/profile";
import { animate, stagger } from "animejs";

const AchievementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      animate(".ach-card", {
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
          HONORS &amp; COMPETITIVE MILESTONES
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
          COMPETITIVE ACHIEVEMENTS
        </p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
          Achievements &amp; Honors.
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          National summit qualifiers, hackathon placements, and engineering competition awards.
        </p>
      </div>

      {/* Bespoke Brutalist Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="ach-card opacity-100 brutalist-panel rounded-3xl p-7 border border-white/10 hover:border-white/40 flex flex-col justify-between group transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <FaTrophy className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold uppercase">
                  {ach.category}
                </span>
              </div>

              <h2 className="text-white text-[20px] font-bold font-poppins tracking-tight mb-1.5">
                {ach.title}
              </h2>
              <h3 className="text-zinc-300 text-[14px] font-mono font-medium">
                {ach.event}
              </h3>
              <p className="text-[12px] font-mono text-zinc-400 mt-1">
                {ach.organization}
              </p>

              <p className="mt-4 text-zinc-300 text-[13.5px] leading-relaxed font-poppins">
                {ach.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {ach.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
                    #{t}
                  </span>
                ))}
              </div>
              <span className="text-[12px] font-mono text-white font-bold">{ach.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default AchievementsPage;
