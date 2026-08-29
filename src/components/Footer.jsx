import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CONTACT_EMAIL = "mdhuzaifa00786@gmail.com";

const pageLinks = [
  { title: "Overview", path: "/overview" },
  { title: "Technologies", path: "/technologies" },
  { title: "Projects", path: "/projects" },
  { title: "Experience", path: "/experience" },
  { title: "Education", path: "/education" },
  { title: "Publications", path: "/certifications" },
  { title: "Achievements", path: "/achievements" },
  { title: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[22px] font-extrabold font-poppins tracking-tight uppercase">
                MOHAMMAD HUZAIFA
              </h3>
              <p className="text-[13px] text-zinc-400 font-poppins mt-2.5 leading-relaxed max-w-md">
                Agentic AI Engineer &amp; Backend Architect specializing in autonomous multi-agent systems and real-time backend pipelines.
              </p>
            </div>

            {/* Direct Quick Social Links */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/GuruMachanica"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad--huzaifa/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Send Email via Gmail"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <MdEmail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4">
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
              PAGES &amp; MODULES
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[12px] font-mono text-zinc-400 hover:text-white transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
              CONTACT
            </h4>
            <div className="space-y-2 font-mono text-[12px] text-zinc-400">
              <div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:underline block break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <a href="tel:+916391028860" className="text-white hover:underline">
                  +91 6391028860
                </a>
              </div>
              <div>
                <span className="text-zinc-400">Prayagraj, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Super Short Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[12px] font-mono text-zinc-300">
          <div>
            © 2026 Mohammad Huzaifa
          </div>
          <div>
            Built with React, Three.js &amp; TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
