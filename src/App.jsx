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
    </BrowserRouter>
  );
};

export default App;
