import {
  c,
  cplusplus,
  python,
  canva,
  mongodb,
  mysql,
  tensorflow,
  pytorch,
  vscode,
  figmaTech,
  gitTech,
  githubTech,
  n8n,
  dockerTech,
  fastapi,
  opencv,
  scikitlearn,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  github,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  sunmap,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Agentic AI Engineer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'Data Engineer',
    icon: prototyping,
  },
];

const technologyGroups = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'C++',
        icon: cplusplus,
      },
      {
        name: 'Python',
        icon: python,
      },
      {
        name: 'C',
        icon: c,
      },
    ],
  },
  {
    title: 'UI/UX',
    items: [
      {
        name: 'Figma',
        icon: figmaTech,
      },
      {
        name: 'Canva',
        icon: canva,
      },
    ],
  },
  {
    title: 'Backend & Data Engineering',
    items: [
      {
        name: 'FastAPI',
        icon: fastapi,
      },
      {
        name: 'MongoDB',
        icon: mongodb,
      },
      {
        name: 'MySQL',
        icon: mysql,
      },
    ],
  },
  {
    title: 'Machine Learning & CV',
    items: [
      {
        name: 'TensorFlow',
        icon: tensorflow,
      },
      {
        name: 'PyTorch',
        icon: pytorch,
      },
      {
        name: 'Scikit-Learn',
        icon: scikitlearn,
      },
      {
        name: 'OpenCV',
        icon: opencv,
      },
    ],
  },
  {
    title: 'Tools & Automation',
    items: [
      {
        name: 'Git',
        icon: gitTech,
      },
      {
        name: 'GitHub',
        icon: githubTech,
      },
      {
        name: 'n8n',
        icon: n8n,
      },
      {
        name: 'VS Code',
        icon: vscode,
      },
      {
        name: 'Docker',
        icon: dockerTech,
      },
    ],
  },
];

const educations = [
  {
    title: 'High School',
    company_name: 'Allahabad Public School, Prayagraj | 88.3%',
    icon: microverse,
    iconBg: '#333333',
    date: '2020',
  },
  {
    title: 'Intermediate',
    company_name: 'Allahabad Public School, Prayagraj | 85.8%',
    icon: microverse,
    iconBg: '#333333',
    date: '2022',
  },
  {
    title: 'B.Tech in Computer Science & Engineering',
    company_name: 'United Institute of Technology, Prayagraj | 7.47 CGPA',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2023 - 2027',
  },
];

const achievements = [
  {
    title: 'Prototype Development Sprint Qualifier',
    company_name: 'Sankalp 2026 – National Summit on Innovation & Skills (Organized by MNNIT Prayagraj)',
    icon: microverse,
    iconBg: '#333333',
    date: '2026',
  },
  {
    title: 'Second Runner-Up, UHACK 4.0 Hackathon',
    company_name: 'United Group of Institutions (A.E.G.I.S Scam Detection)',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2026 - Feb 2026',
  },
  {
    title: 'Second Runner-Up, CodeStorm\'25 Hackathon',
    company_name: 'Shambhunath Group of Institutions (SunMap)',
    icon: dcc,
    iconBg: '#333333',
    date: 'Oct 2025',
  },
];

const certifications = [
  {
    title: 'publication: Physiochemical Pattern Fingerprinting (PPF)',
    description:
      'Physiochemical Pattern Fingerprinting (PPF): A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection. Co-authored by Rohit Mishra et al. (including Mohammad Huzaifa). Published in the International Journal of Drug Delivery Technology (IJDDT), Vol 16, Issue 4.',
    link: 'https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue43s,Article31.pdf',
  },
  {
    title: 'certificate: Machine Learning A-Z: AI, Python',
    description:
      'Covered machine learning fundamentals, model building, and real-world datasets.',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a0237679-e3fc-4010-9950-4d826538b75f.pdf',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Concept3D',
    description:
      'AI Concept-to-Visualization Platform. Led backend development and 3D data pipeline engineering, translating unstructured conceptual data into structured inputs for 3D model generation. Streamlined 3D generation workflows by designing an AI-driven semantic preprocessing pipeline with robust data caching and validation.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'gen-ai',
        color: 'pink-text-gradient',
      },
      {
        name: '3d-ml',
        color: 'blue-text-gradient',
      },
      {
        name: 'data-modeling',
        color: 'green-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/GuruMachanica/Concept-2-3D',
    demo: 'https://drive.google.com/file/d/1Ua7wEPlCZiUdz7Kv_qTL-wFtMvAdNS8C/view?usp=sharing',
  },
  {
    id: 'project-2',
    name: 'A.E.G.I.S',
    description:
      'Audio-based Edge Guard for Intelligent Scam-prevention. Architected backend data pipelines and API routing, leading the end-to-end integration of a real-time audio analytics and security application. Accelerated threat detection times by deploying a live audio processing pipeline equipped with automated WebSocket alerting.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'green-text-gradient',
      },
      {
        name: 'websocket-api',
        color: 'pink-text-gradient',
      },
      {
        name: 'docker',
        color: 'blue-text-gradient',
      },
      {
        name: 'data-wrangling',
        color: 'green-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GuruMachanica/A.E.G.I.S',
    demo: 'https://drive.google.com/file/d/1BpMsXgtdAWEucwtnrn0tjiO6rDOgp3-r/view?usp=sharing',
  },
  {
    id: 'project-3',
    name: 'SunMap',
    description:
      '3D Solar Potential & Revenue Analytics. Led predictive analytics and spatial data structuring to enable simulation environments for solar energy assessment. Generated revenue forecasts and spatial cost-benefit analyses by training custom PyTorch models to predict localized solar energy capacity.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'pytorch',
        color: 'green-text-gradient',
      },
      {
        name: 'sql',
        color: 'pink-text-gradient',
      },
      {
        name: 'statistical-analysis',
        color: 'blue-text-gradient',
      },
      {
        name: 'spatial-data',
        color: 'green-text-gradient',
      },
    ],
    image: sunmap,
    repo: 'https://github.com/GuruMachanica/SunMap',
    demo: 'https://sunmapsolar.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'KavachG',
    description:
      'AI-Based Safety KPI & Monitoring Dashboard. Developed end-to-end machine learning pipelines and backend service integrations for a smart safety monitoring system. Replaced manual safety compliance checks by deploying real-time predictive computer vision models processing live camera feeds.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'computer-vision',
        color: 'green-text-gradient',
      },
      {
        name: 'opencv',
        color: 'pink-text-gradient',
      },
      {
        name: 'fastapi',
        color: 'blue-text-gradient',
      },
      {
        name: 'ml-pipelines',
        color: 'green-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/GuruMachanica/KavachG',
    demo: 'https://github.com/GuruMachanica/KavachG',
  },
];

export {
  services,
  technologyGroups,
  educations,
  achievements,
  certifications,
  projects,
};
