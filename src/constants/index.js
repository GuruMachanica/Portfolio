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
  orvanto,
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

const experiences = [
  {
    title: 'Backend Developer Intern',
    company_name: 'Sanfy Consultancy Services Pvt. Ltd. (Orvanto AI)',
    icon: orvanto,
    iconBg: '#333333',
    date: 'Apr 2026 - Jul 2026',
    link: 'https://drive.google.com/file/d/100xwhMZa1ViRXZRXDTFmYDMBq3LtKmt4/view?usp=sharing',
  },
];

const educations = [
  {
    title: 'High School & Intermediate',
    company_name: 'Allahabad Public School, Prayagraj | 88.3% & 85.8%',
    icon: microverse,
    iconBg: '#333333',
    date: '2020 - 2022',
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
    title: "certificate: CS50's Introduction to Artificial Intelligence with Python",
    description:
      'Covered search algorithms, machine learning, neural networks, NLP, and AI in Python.',
    link: 'https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Concept3D',
    category: 'Agentic AI & 3D',
    description:
      'AI Concept-to-Visualization Platform. Led backend development and 3D data pipeline engineering, translating unstructured conceptual data into structured inputs for 3D model generation. Streamlined 3D generation workflows by designing an AI-driven semantic preprocessing pipeline with robust data caching and validation.',
    architecture: 'PyTorch • GenAI 3D Pipeline • Semantic Caching Engine',
    keyHighlights: [
      'Transforms unstructured conceptual inputs into structured 3D spatial models',
      'AI-driven semantic preprocessing pipeline with automated coordinate validation',
      'High-throughput data modeling optimized for generative rendering'
    ],
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
    repo: 'https://github.com/GuruMachanica/Concept-3D',
    demo: 'https://concept-3d.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'A.E.G.I.S',
    category: 'Backend & APIs',
    description:
      'Audio-based Edge Guard for Intelligent Scam-prevention. Architected backend data pipelines and API routing, leading the end-to-end integration of a real-time audio analytics and security application. Accelerated threat detection times by deploying a live audio processing pipeline equipped with automated WebSocket alerting.',
    architecture: 'FastAPI • WebSockets • Real-Time Audio Streaming • Docker',
    keyHighlights: [
      'Architected live streaming audio data pipeline for real-time scam detection',
      'Low-latency WebSocket notification system with sub-second alert triggers',
      'Containerized backend service infrastructure built with Docker & FastAPI'
    ],
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
    repo: 'https://github.com/GuruMachanica/A.E.G.I.S.',
    demo: 'https://aegis-anti-scam.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'SunMap',
    category: 'Computer Vision & 3D',
    description:
      '3D Solar Potential & Revenue Analytics. Led predictive analytics and spatial data structuring to enable simulation environments for solar energy assessment. Generated revenue forecasts and spatial cost-benefit analyses by training custom PyTorch models to predict localized solar energy capacity.',
    architecture: 'PyTorch • Spatial GeoData • Predictive Revenue Simulation',
    keyHighlights: [
      'Constructed 3D spatial simulation environments for solar energy assessment',
      'Trained PyTorch models on spatial datasets for accurate capacity forecasting',
      'Engineered automated cost-benefit and revenue estimation engines'
    ],
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
    category: 'Computer Vision & 3D',
    description:
      'AI-Based Safety KPI & Monitoring Dashboard. Developed end-to-end machine learning pipelines and backend service integrations for a smart safety monitoring system. Replaced manual safety compliance checks by deploying real-time predictive computer vision models processing live camera feeds.',
    architecture: 'OpenCV • FastAPI • Real-Time Camera Feed Pipelines',
    keyHighlights: [
      'Replaced manual compliance checks with real-time CV safety monitoring',
      'Engineered high-throughput video analytics pipelines using OpenCV & FastAPI',
      'Automated KPI tracking with live dashboard synchronization'
    ],
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
  experiences,
  educations,
  achievements,
  certifications,
  projects,
};
