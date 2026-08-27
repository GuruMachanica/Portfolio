import React, { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Footer,
} from "./components";
import PageLoader from "./components/PageLoader";

const Tech = lazy(() => import("./components/Tech"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));
const Achievements = lazy(() => import("./components/Achievements"));

// Dedicated separate page components
import OverviewPage from "./pages/OverviewPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";

const HomePage = () => (
  <>
    <Hero />

    {/* About Overview */}
    <section id="about" className="relative z-10 py-12 sm:py-16 border-t border-white/[0.08] stripe-grid">
      <About />
    </section>

    {/* Technologies 3D Section */}
    <section id="technologies" className="relative z-10 py-12 sm:py-16 border-t border-white/[0.08]">
      <Suspense fallback={<div className="h-[200px]" />}>
        <Tech />
      </Suspense>
    </section>

    {/* Projects Section */}
    <section id="projects" className="relative z-10 py-12 sm:py-16 border-t border-white/[0.08] stripe-grid">
      <Suspense fallback={<div className="h-[200px]" />}>
        <Projects />
      </Suspense>
    </section>

    {/* Experience & Education Timelines */}
    <section id="experience" className="relative z-10 py-12 sm:py-16 border-t border-white/[0.08]">
      <Suspense fallback={<div className="h-[200px]" />}>
        <Experience />
        <div id="education"><Education /></div>
        <div id="certifications"><Certifications /></div>
        <div id="achievements"><Achievements /></div>
      </Suspense>
    </section>

    {/* Contact Section */}
    <section id="contact" className="relative z-10 py-12 sm:py-16 border-t border-white/[0.08] stripe-grid">
      <Contact />
    </section>
  </>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000000] text-[#ffffff] min-h-screen overflow-x-hidden flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {isLoading && <PageLoader />}
        </AnimatePresence>

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/about" element={<OverviewPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Floating Centered Resume Button */}
      {!isLoading && (
        <button
          className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-[9999]
            group flex items-center justify-center gap-0 group-hover:gap-2
            overflow-hidden rounded-full
            bg-[#111111] hover:bg-white
            shadow-[0_8px_32px_rgba(0,0,0,0.8)]
            w-12 h-12 sm:w-14 sm:h-14 hover:w-36 hover:rounded-2xl
            p-0 hover:px-4
            transition-all duration-300 ease-in-out
            cursor-pointer border border-white/20"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1u2xt4lfEFvHCyCcoRaL9azhuzHQtiPNx/view?usp=sharing",
              "_blank"
            )
          }>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-white group-hover:text-black transition-colors duration-200"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="hidden group-hover:inline-block whitespace-nowrap text-[12px] sm:text-[13px] font-mono font-bold text-black tracking-wide">
            RESUME
          </span>
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
