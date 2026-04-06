import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Achievements,
  Certifications,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
} from './components';
import PageLoader from './components/PageLoader';

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

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
            <Certifications />

            <div
              className="relative overflow-hidden mb-10 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(165deg, rgba(20,20,20,0.8) 100%, rgba(109,109,116,0.8) 100%), url('/src/assets/backgrounds/city-scape.jpg')",
              }}>
              <div className="absolute inset-0 backdrop-blur-[1px] bg-black/10" />

              <div className="relative z-10">
                <Achievements />
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
