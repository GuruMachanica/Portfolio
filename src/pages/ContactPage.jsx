import PageTransition from "../components/PageTransition";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Contact } from "../components";
import { FaArrowLeft } from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          DIRECT COMMUNICATION PORTAL
        </div>
      </div>

      <Contact />
    </div>
    </PageTransition>
  );
};

export default ContactPage;
