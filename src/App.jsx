import { useEffect, useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Hero,
  Navbar,
  Footer,
} from './components';
import { nairobi, whiteabstract } from './assets';
import PageLoader from './components/PageLoader';

const Tech = lazy(() => import('./components/Tech'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <AnimatePresence mode="wait">
          {isLoading && <PageLoader />}
        </AnimatePresence>

        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div
          className="bg-cover bg-center bg-no-repeat pb-10"
          style={{
            backgroundImage:
              `linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url(${nairobi})`,
          }}>
          <Suspense fallback={<div className="h-[220px]" />}>
            <Tech />
          </Suspense>
        </div>

        <Suspense fallback={<div className="h-[220px]" />}>
          <Projects />
        </Suspense>

        <div
          className="bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]"
          style={{
            backgroundImage:
              `linear-gradient(135deg, rgba(244,244,246,0.5) 60%, rgba(10,10,10,0.2) 100%), url(${whiteabstract})`,
          }}>
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Suspense fallback={<div className="h-[220px]" />}>
              <Experience />
              <Education />
              <Certifications />
            </Suspense>

            <div
              className="relative overflow-hidden mb-10 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  `linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url(${nairobi})`,
              }}>
              <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10" />

              <div className="relative z-10">
                <Suspense fallback={<div className="h-[180px]" />}>
                  <Achievements />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="relative z-0">
          <Footer />
        </div>
      </div>

      {/* Resume button — only shown after loading completes */}
      {!isLoading && (
        <button
          className="fixed right-5 bottom-5 z-[9999]
            group flex items-center justify-center gap-0 group-hover:gap-2
            overflow-hidden rounded-full
            bg-jetLight hover:bg-battleGray
            shadow-[0_8px_32px_rgba(0,0,0,0.55)]
            w-14 h-14 hover:w-40 hover:rounded-2xl
            p-0 hover:px-4
            transition-all duration-300 ease-in-out
            cursor-pointer border border-white/10"
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1u2xt4lfEFvHCyCcoRaL9azhuzHQtiPNx/view?usp=sharing',
              '_blank'
            )
          }>
          <svg
            className="w-7 h-7 shrink-0 text-timberWolf group-hover:text-eerieBlack transition-colors duration-200"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="9" y1="13" x2="15" y2="13"/>
            <line x1="9" y1="17" x2="15" y2="17"/>
            <line x1="9" y1="9" x2="11" y2="9"/>
          </svg>
          <span
            className="text-[13px] font-bold font-beckman tracking-wide
            text-eerieBlack whitespace-nowrap
            max-w-0 group-hover:max-w-[80px] overflow-hidden
            transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            RESUME
          </span>
        </button>
      )}
    </BrowserRouter>
  );
};

export default App;
