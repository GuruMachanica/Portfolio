import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CONTACT_EMAIL = "mdhuzaifa00786@gmail.com";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#06070a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div>
          <h3 className="text-[20px] font-extrabold font-poppins tracking-tight">
            MOHAMMAD HUZAIFA
          </h3>
          <p className="text-[13px] text-slate-400 font-poppins mt-1">
            Agentic AI Engineer &amp; Backend Architect
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/GuruMachanica"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:text-white transition-all">
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad--huzaifa/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:text-white transition-all">
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:text-white transition-all">
            <MdEmail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.04] py-5 text-center text-[12px] font-mono text-slate-500">
        © {new Date().getFullYear()} Mohammad Huzaifa. Built with React, Three.js &amp; TailwindCSS.
      </div>
    </footer>
  );
};

export default Footer;
