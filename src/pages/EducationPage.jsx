import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Education } from "../components";
import { FaArrowLeft } from "react-icons/fa";

const EducationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <span className="text-[12px] font-mono text-zinc-400">EDUCATION JOURNEY</span>
      </div>

      <Education />
      
    </div>
  );
};

export default EducationPage;
