import {
  c,
  cplusplus,
  python,
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
  threejs,
  postgresql,
  anveshaksutra,
  concept3d,
  aegis,
  sunmap,
  kavachg,
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
  },
  {
    title: 'Backend Developer',
  },
  {
    title: 'UI/UX Designer',
  },
  {
    title: 'Data Engineer',
  },
];

const technologyGroups = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Python',
        icon: python,
      },
      {
        name: 'C++',
        icon: cplusplus,
      },
      {
        name: 'C',
        icon: c,
      },
    ],
  },
  {
    title: 'Machine Learning & CV',
    items: [
      {
        name: 'PyTorch',
        icon: pytorch,
      },
      {
        name: 'TensorFlow',
        icon: tensorflow,
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
    title: 'Backend & Data Engineering',
    items: [
      {
        name: 'FastAPI',
        icon: fastapi,
      },
      {
        name: 'PostgreSQL',
        icon: postgresql,
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
    title: 'Tools & Automation',
    items: [
      {
        name: 'Docker',
        icon: dockerTech,
      },
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
    ],
  },
  {
    title: 'UI/UX & 3D Spatial',
    items: [
      {
        name: 'Figma',
        icon: figmaTech,
      },
      {
        name: 'Three.js',
        icon: threejs,
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
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'B.Tech in Computer Science & Engineering',
    company_name: 'United Institute of Technology, Prayagraj | 7.47 CGPA',
    iconBg: '#333333',
    date: '2023 - 2027',
  },
];

const achievements = [
  {
    title: 'Prototype Development Sprint Qualifier',
    company_name: 'Sankalp 2026 – National Summit on Innovation & Skills (Organized by MNNIT Prayagraj)',
    iconBg: '#333333',
    date: '2026',
  },
  {
    title: 'Second Runner-Up, UHACK 4.0 Hackathon',
    company_name: 'United Group of Institutions (A.E.G.I.S Scam Detection)',
    iconBg: '#333333',
    date: 'Jan 2026 - Feb 2026',
  },
  {
    title: 'Second Runner-Up, CodeStorm\'25 Hackathon',
    company_name: 'Shambhunath Group of Institutions (SunMap)',
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
    siteKey: 'anveshaksutra',
    name: 'AnveshakSutra',
    category: 'Zero-Knowledge & Cyber AI',
    description:
      'Autonomous Zero-Knowledge Dark Web Exposure Monitor, 3D Graph ML Blast Radius Analyzer & Deception Tripwire Platform. Executes 5-character SHA-256 K-Anonymity queries and 3D WebGL graph centrality analytics with zero cleartext identity leakage.',
    architecture: 'FastAPI • WebGL Three.js • K-Anonymity • Celery • Supabase',
    keyHighlights: [
      'Engineered Zero-Knowledge K-Anonymity prefix lookups ensuring zero server-side cleartext leakage',
      'Constructed 3D WebGL Graph ML visualizer analyzing Betweenness Centrality blast radius',
      'Deployed canary honey-credentials with automated verification challenge probes'
    ],
    tags: [
      {
        name: 'fastapi',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'zero-knowledge',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'three.js',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'graph-ml',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'supabase',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: anveshaksutra,
    repo: 'https://github.com/GuruMachanica/AnveshakSutra',
    source_code_link: 'https://github.com/GuruMachanica/AnveshakSutra',
    demo: 'https://anveshak-sutra.vercel.app/',
  },
  {
    id: 'project-2',
    siteKey: 'concept3d',
    name: 'Concept3D',
    category: 'GenAI & 3D Visualization',
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
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'pytorch',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'gen-ai',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: '3d-ml',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'data-modeling',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: concept3d,
    repo: 'https://github.com/GuruMachanica/Concept-3D',
    source_code_link: 'https://github.com/GuruMachanica/Concept-3D',
    demo: 'https://concept-3d.vercel.app/',
  },
  {
    id: 'project-3',
    siteKey: 'aegis',
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
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'fastapi',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'websocket-api',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'docker',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'data-wrangling',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: aegis,
    repo: 'https://github.com/GuruMachanica/A.E.G.I.S.',
    source_code_link: 'https://github.com/GuruMachanica/A.E.G.I.S.',
    demo: 'https://aegis-anti-scam.netlify.app/',
  },
  {
    id: 'project-4',
    siteKey: 'sunmap',
    name: 'SunMap',
    category: 'Spatial 3D & Solar Intelligence',
    description:
      '3D Spatial Solar Energy & Rooftop Intelligence Engine. Architected a 60 FPS WebGL/Three.js spatial simulation engine parsing CityGML LOD2 building geometries, rooftop surface normals, and ray-traced shadow occlusions with Perez transposition physics benchmarked against NREL PVLib.',
    architecture: 'Three.js WebGL • CityGML LOD2 • Perez Transposition • Docker',
    keyHighlights: [
      'Architected 60 FPS Three.js ray-traced shadow occlusion engine across 8,760 annual vectors',
      'Extracted sub-degree CityGML LOD2 building surface normals and usable rooftop areas',
      'Engineered bankable financial cashflow, LCOE, and carbon abatement forecasting engines'
    ],
    tags: [
      {
        name: 'three.js',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'citygml-lod2',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'python-spatial',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'pvlib-physics',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'docker',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: sunmap,
    repo: 'https://github.com/GuruMachanica/SunMap',
    source_code_link: 'https://github.com/GuruMachanica/SunMap',
    demo: 'https://sunmapsolar.netlify.app/',
  },
  {
    id: 'project-5',
    siteKey: 'kavachg',
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
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'computer-vision',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'opencv',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'fastapi',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'ml-pipelines',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: kavachg,
    repo: 'https://github.com/GuruMachanica/KavachG',
    source_code_link: 'https://github.com/GuruMachanica/KavachG',
    demo: 'https://kavach-g.vercel.app/',
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

