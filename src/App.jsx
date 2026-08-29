import React, { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import {
  Hero,
  Navbar,
  Footer,
} from "./components";
import PageLoader from "./components/PageLoader";
import SkeletonLoader from "./components/SkeletonLoader";
import PageTransition from "./components/PageTransition";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import AmbientGlow from "./components/AmbientGlow";
import TiltCard from "./components/TiltCard";
import { FaBrain, FaCubes, FaFolderOpen, FaBriefcase, FaGraduationCap, FaCertificate, FaTrophy, FaPaperPlane, FaArrowRight, FaFilePdf } from "react-icons/fa";
import { animate, stagger } from "animejs";

// Lazy-loaded dedicated standalone pages
const OverviewPage = lazy(() => import("./pages/OverviewPage"));
const TechnologiesPage = lazy(() => import("./pages/TechnologiesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const CertificationsPage = lazy(() => import("./pages/CertificationsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const hubCards = [
  {
    title: "System Overview",
    path: "/overview",
    icon: FaBrain,
    desc: "Autonomous multi-agent architectures, tool calling, and backend engineering philosophy.",
    tag: "ARCHITECTURE",
  },
  {
    title: "Technologies",
    path: "/technologies",
    icon: FaCubes,
    desc: "Interactive 3D physics tech balls, languages, frameworks, and proficiency matrix.",
    tag: "3D STACK",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FaFolderOpen,
    desc: "Concept3D, A.E.G.I.S, SunMap, and KavachG production systems with code & demos.",
    tag: "PORTFOLIO",
  },
  {
    title: "Work Experience",
    path: "/experience",
    icon: FaBriefcase,
    desc: "Backend developer internship experience with verified credential.",
    tag: "INDUSTRY",
  },
  {
    title: "Education",
    path: "/education",
    icon: FaGraduationCap,
    desc: "B.Tech Computer Science degree journey, coursework, and foundations.",
    tag: "ACADEMICS",
  },
  {
    title: "Publications & Certs",
    path: "/certifications",
    icon: FaCertificate,
    desc: "Peer-reviewed IJDDT research paper and Harvard CS50 verified credential.",
    tag: "RESEARCH",
  },
  {
    title: "Achievements",
    path: "/achievements",
    icon: FaTrophy,
    desc: "Competitive programming milestones, hackathons, and certifications.",
    tag: "HONORS",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: FaPaperPlane,
    desc: "Direct communication channels, copy-to-clipboard email & phone, and message form.",
    tag: "CONNECT",
  },
  {
    title: "Technical Resume",
    path: "/resume",
    icon: FaFilePdf,
    desc: "Interactive 1-page master resume with instant download, zoom, and competency dossier.",
    tag: "RESUME",
  },
];

const HomePage = () => {
  useEffect(() => {
    try {
      animate(".hub-card", {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(50, { start: 100 }),
        ease: "outExpo",
        duration: 600,
      });
    } catch (e) {}
  }, []);

  return (
    <PageTransition>
      <Hero />

      {/* Interactive Monolith Hub (Gateway to All Dedicated Standalone Pages) */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-white/[0.08] stripe-grid px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            MONOLITH ARCHITECTURE INDEX
          </p>
          <h2 className="text-[32px] sm:text-[46px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Explore System Modules.
          </h2>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 leading-relaxed">
            Select a technical module below to enter its dedicated deep-dive page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hubCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.path} to={card.path} className="hub-card opacity-100 group">
                <TiltCard className="brutalist-panel rounded-3xl p-6 border border-white/10 group-hover:border-white/40 flex flex-col justify-between h-full transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 font-bold">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-white text-[19px] font-bold font-poppins tracking-tight mb-2 group-hover:text-white">
                      {card.title}
                    </h3>

                    <p className="text-zinc-400 text-[13px] font-poppins leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-zinc-400 group-hover:text-white">
                    <span>ENTER MODULE</span>
                    <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </TiltCard>
              </Link>
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SkeletonLoader />}>
        <Routes location={location} key={location.pathname}>
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
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);

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
        <ScrollProgress />
        <AmbientGlow />

        <AnimatePresence mode="wait">
          {isLoading && <PageLoader />}
        </AnimatePresence>

        <Navbar />
        <CommandPalette />
        <ScrollToTop />

        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>

      
    </BrowserRouter>
  );
};

export default App;
