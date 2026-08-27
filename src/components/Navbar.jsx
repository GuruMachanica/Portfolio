import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo, logotext } from "../assets";
import { animate, stagger } from "animejs";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    try {
      animate(".navbar-element", {
        opacity: [0, 1],
        translateY: [-15, 0],
        delay: stagger(60, { start: 100 }),
        ease: "outQuad",
        duration: 600,
      });
    } catch (e) {
      console.warn("Navbar animation fallback", e);
    }
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3.5 fixed top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 navbar-element"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo}
            alt="logo"
            className="sm:w-[42px] sm:h-[42px] w-[38px] h-[38px] object-contain invert brightness-200"
            loading="eager"
            fetchpriority="high"
          />
          <img
            src={logotext}
            alt="logo text"
            className="sm:w-[85px] sm:h-[85px] w-[75px] h-[75px] -ml-[0.6rem] object-contain invert brightness-200"
            loading="eager"
            fetchpriority="high"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8 lg:gap-12 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`navbar-element text-[13px] font-mono font-bold tracking-[2px] uppercase cursor-pointer transition-colors duration-200 ${
                active === nav.title
                  ? "text-white border-b-2 border-white"
                  : "text-zinc-400 hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li className="navbar-element">
            <a
              href="/Mohammad_Huzaifa_Resume.pdf"
              download
              className="px-4 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-[12px] hover:bg-zinc-200 transition-colors shadow-sm">
              RESUME
            </a>
          </li>
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div className="p-6 bg-black/95 border-b border-white/10 absolute top-0 left-0 w-screen min-h-[100dvh] z-50 flex flex-col justify-between">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="text-white font-mono font-bold text-[14px]">MENU</span>
                <img
                  src={close}
                  alt="close"
                  className="w-5 h-5 object-contain cursor-pointer invert"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              <ul className="list-none flex flex-col gap-6 items-start mt-8">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-[28px] font-extrabold font-poppins text-white uppercase tracking-wider cursor-pointer"
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-white/10 text-zinc-500 font-mono text-[12px]">
                MOHAMMAD HUZAIFA • BLACK &amp; WHITE MONOLITH
              </div>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-7 h-7 object-contain cursor-pointer invert"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
