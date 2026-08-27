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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] font-extrabold font-poppins tracking-tight uppercase">
                MOHAMMAD HUZAIFA
              </h3>
              <p className="text-[14px] text-zinc-400 font-poppins mt-3 leading-relaxed max-w-md">
                Agentic AI Engineer &amp; Backend Architect specializing in autonomous multi-agent pipelines, fine-tuned generative models, and high-throughput real-time APIs.
              </p>
            </div>

            {/* Direct Quick Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/GuruMachanica"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad--huzaifa/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Send Email via Gmail"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all">
                <MdEmail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-4">
            <h4 className="text-[13px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">
              PAGES &amp; SECTIONS
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-[13px] font-mono text-zinc-400 hover:text-white transition-colors">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">
              DIRECT INQUIRIES
            </h4>
            <div className="space-y-3 font-mono text-[13px] text-zinc-400">
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">EMAIL</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:underline block break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">PHONE</span>
                <a href="tel:+916391028860" className="text-white hover:underline">
                  +91 6391028860
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">LOCATION</span>
                <span className="text-zinc-300">Prayagraj, UP, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[12px] font-mono text-zinc-400">
          <div>
            © 2026 Mohammad Huzaifa. All rights reserved.
          </div>
          <div>
            Built with <span className="text-white font-bold">React</span>, <span className="text-white font-bold">Three.js</span>, <span className="text-white font-bold">Anime.js</span> &amp; <span className="text-white font-bold">TailwindCSS</span>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
