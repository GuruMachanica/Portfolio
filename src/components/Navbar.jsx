import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { close, menu, logo, logotext } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { animate, stagger } from "animejs";

const navItems = [
  { title: "Overview", path: "/overview" },
  { title: "Technologies", path: "/technologies" },
  { title: "Projects", path: "/projects" },
  { title: "Experience", path: "/experience" },
  { title: "Education", path: "/education" },
  { title: "Publications", path: "/certifications" },
  { title: "Achievements", path: "/achievements" },
  { title: "Contact", path: "/contact" },
];

const CONTACT_EMAIL = "mdhuzaifa00786@gmail.com";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      animate(".navbar-element", {
        opacity: [0, 1],
        translateY: [-10, 0],
        delay: stagger(40, { start: 50 }),
        ease: "outQuad",
        duration: 500,
      });
    } catch (e) {
      console.warn("Navbar animation fallback", e);
    }
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2 navbar-element shrink-0"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain invert brightness-200"
            loading="eager"
          />
          <img
            src={logotext}
            alt="logo text"
            className="w-16 h-16 sm:w-20 sm:h-20 -ml-2 object-contain invert brightness-200"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden xl:flex flex-row gap-5 items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="navbar-element">
                <Link
                  to={item.path}
                  className={`text-[12px] font-mono font-bold tracking-[1.5px] uppercase py-1 px-1 transition-all duration-200 ${
                    isActive
                      ? "text-white border-b-2 border-white"
                      : "text-zinc-400 hover:text-white"
                  }`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Header Quick Links & Actions */}
        <div className="hidden sm:flex items-center gap-3 navbar-element">
          
          {/* Direct Social Links */}
          <div className="flex items-center gap-2 border-r border-white/10 pr-3">
            <a
              href="https://github.com/GuruMachanica"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all">
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad--huzaifa/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all">
              <MdEmail className="w-4 h-4" />
            </a>
          </div>

          {/* Resume CTA */}
          <Link
            to="/resume"
            className="px-3.5 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-colors shadow-sm">
            RESUME
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="xl:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href="https://github.com/GuruMachanica"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/5 text-zinc-300">
              <FaGithub className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad--huzaifa/"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/5 text-zinc-300">
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-xl brutalist-panel text-white hover:border-white/40">
            {toggle ? (
              <img src={close} alt="close" className="w-5 h-5 object-contain invert" />
            ) : (
              <img src={menu} alt="menu" className="w-5 h-5 object-contain invert" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {toggle && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-black/95 border-b border-white/15 p-5 sm:p-6 backdrop-blur-2xl flex flex-col gap-4 shadow-2xl max-h-[calc(100dvh-70px)] overflow-y-auto no-scrollbar">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest pb-2 border-b border-white/10">
            PAGES &amp; SECTIONS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setToggle(false)}
                className="p-3 rounded-xl brutalist-panel text-white font-mono font-bold text-[13px] hover:border-white/40 flex items-center justify-between">
                <span>{item.title}</span>
                <span className="text-zinc-500">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-zinc-400">
              <a href="https://github.com/GuruMachanica" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mohammad--huzaifa/" target="_blank" rel="noreferrer" className="hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                <MdEmail className="w-5 h-5" />
              </a>
            </div>

            <Link
              to="/resume"
              onClick={() => setToggle(false)}
              className="px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] text-center hover:bg-zinc-200 transition-all">
              VIEW RESUME
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
