import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-jetLight/95 border border-battleGray/40 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] text-timberWolf">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-night/80 flex items-center justify-center text-silver hover:text-white hover:bg-battleGray transition-colors duration-200">
            ✕
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-[11px] font-bold font-beckman uppercase tracking-wider rounded-full bg-battleGray/30 text-emerald-400 border border-emerald-400/30">
              {project.category || 'Featured'}
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] font-extrabold font-beckman tracking-wide text-timberWolf">
            {project.name}
          </h2>

          <p className="text-[14px] font-semibold text-dim mt-1 font-poppins">
            Architecture: <span className="text-silver font-normal">{project.architecture || 'Distributed AI Architecture'}</span>
          </p>

          {/* Project Preview Image */}
          <div className="my-5 rounded-2xl overflow-hidden border border-white/10 max-h-[220px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-silver text-[14px] sm:text-[15px] leading-relaxed font-poppins">
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          {project.keyHighlights && (
            <div className="mt-5">
              <h4 className="text-[14px] font-bold font-beckman tracking-wider uppercase text-timberWolf mb-2">
                Technical Highlights:
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-[13.5px] text-silver font-poppins">
                {project.keyHighlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[12px] font-semibold px-2.5 py-1 rounded-md bg-night/70 ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap gap-3 justify-end">
            <button
              onClick={() => window.open(project.repo, '_blank')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-night text-timberWolf text-[13px] font-bold font-beckman hover:bg-battleGray hover:text-eerieBlack transition-colors">
              <img src={github} alt="github" className="w-4 h-4 object-contain" />
              VIEW CODE
            </button>
            <button
              onClick={() => window.open(project.demo, '_blank')}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-timberWolf text-eerieBlack text-[13px] font-bold font-beckman hover:bg-white transition-colors shadow-sm">
              <img src={pineapple} alt="demo" className="w-4 h-4 object-contain" />
              LAUNCH DEMO
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  category,
  index,
  active,
  handleClick,
  onOpenModal,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[360px] sm:h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
        loading="lazy"
        decoding="async"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
            <div className="absolute inset-0 flex justify-end m-3 gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal();
                }}
                className="bg-night/90 text-timberWolf px-3 py-1 text-[11px] font-bold font-beckman rounded-full hover:bg-battleGray hover:text-eerieBlack transition-colors">
                DETAILS
              </button>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(repo, '_blank');
                }}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            <button
              className="live-demo flex justify-between 
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                window.open(demo, '_blank');
              }}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  ?.setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  ?.setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px] 
                  w-[30px] h-[30px] object-contain"
                loading="lazy"
                decoding="async"
              />
              {name === 'SunMap' ? 'LIVE DEMO' : 'DEMO'}
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const categories = ['All', 'Agentic AI & 3D', 'Backend & APIs', 'Computer Vision & 3D'];

const Projects = () => {
  const [active, setActive] = useState('project-2');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="-mt-[6rem]">
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Selected Work</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          These projects highlight my work in AI systems, 3D visualization,
          and product-focused frontend engineering. Each card includes context,
          technology choices, and links to code profiles or public showcases.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-bold font-beckman tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-timberWolf text-eerieBlack shadow-md scale-105'
                : 'bg-jetLight/60 text-silver hover:bg-battleGray/40 hover:text-white'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[40px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              onOpenModal={() => setModalProject(project)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');

