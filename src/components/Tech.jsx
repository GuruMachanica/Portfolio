import { motion } from 'framer-motion';
import { TechBalls } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologyGroups } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const competencies = [
  {
    domain: 'Agentic AI & LLM Systems',
    level: '92%',
    description: 'Autonomous multi-agent orchestration, function calling, RAG pipelines, and prompt fine-tuning.',
    tools: ['LangChain', 'RAG', 'LLM Fine-Tuning', 'Agentic AI', 'Data Curation'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    domain: 'Backend Engineering & High-Throughput APIs',
    level: '94%',
    description: 'Asynchronous microservices, WebSocket streaming, REST API architecture, and database caching.',
    tools: ['FastAPI', 'Python', 'WebSockets', 'Docker', 'SQL / DBMS'],
    color: 'from-emerald-400 to-teal-500',
  },
  {
    domain: 'Computer Vision & Deep Learning',
    level: '88%',
    description: 'Real-time video analytics, spatial 3D data preprocessing, object tracking, and model inference.',
    tools: ['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-Learn', '3D ML'],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    domain: 'Data Modeling & System Architecture',
    level: '90%',
    description: 'Structured ETL pipelines, database schema design, containerization, and automated workflows.',
    tools: ['MySQL', 'MongoDB', 'Docker', 'n8n', 'Data Wrangling'],
    color: 'from-amber-400 to-orange-500',
  },
];

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologyGroups.map((group) => (
          <div
            key={group.title}
            className="bg-[rgba(20,20,20,0.48)] border border-white/25 rounded-2xl px-5 py-5">

            <h3
              className="text-silver sm:text-[28px] text-[24px] font-beckman
              tracking-[1px] mb-3 text-center md:text-left">
              {group.title}
            </h3>

            {/* All balls for this group share ONE WebGL context */}
            <TechBalls items={group.items} />
          </div>
        ))}
      </div>

      {/* Core Engineering Competencies Matrix */}
      <div className="mt-16">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextLight}>Core Specialization</p>
          <h3 className="text-silver sm:text-[32px] text-[26px] font-beckman tracking-[1px] mb-6">
            Engineering Matrix.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((c, idx) => (
            <motion.div
              key={c.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[rgba(20,20,20,0.55)] border border-white/15 hover:border-white/30 transition-all duration-300 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[17px] sm:text-[19px] font-bold font-beckman text-timberWolf tracking-wide">
                    {c.domain}
                  </h4>
                  <span className="text-[13px] font-extrabold font-beckman text-emerald-400">
                    {c.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-night/80 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full bg-gradient-to-r ${c.color} rounded-full`}
                    style={{ width: c.level }}
                  />
                </div>

                <p className="text-[13.5px] text-silver font-poppins leading-relaxed mb-4">
                  {c.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {c.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-semibold font-poppins px-2.5 py-0.5 rounded-full bg-jetLight/70 text-dim border border-white/5">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');


