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
  vaakkavach,
  sunmap,
  kavachg,
} from '../assets';

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
    siteKey: 'vaakkavach',
    name: 'VaakKavach',
    category: 'Edge AI & Cybersecurity',
    description:
      'Autonomous Edge AI Acoustic Defense & Real-Time Deepfake Shield. Architected sub-15ms native DSP audio pipelines on-device to isolate synthetic voice clones, vocoder clamping, and digital arrest extortion. 100% offline, serverless, and sovereign with zero-cloud telemetry.',
    architecture: 'Edge AI • Flutter • Kotlin Native DSP • Sub-15ms FFT • SQLite Forensic Vault',
    keyHighlights: [
      'Sub-15ms on-device acoustic DSP inspecting phase jitter and vocoder spectral clamping',
      '100% serverless, zero-cloud sovereign architecture running fully offline in airplane mode',
      'Autonomous watchdog daemon auto-recovering audio buffers with encrypted forensic ledger'
    ],
    tags: [
      {
        name: 'flutter',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'kotlin',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'edge-ai',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'cybersecurity',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'deepfake-defense',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: vaakkavach,
    repo: 'https://github.com/GuruMachanica/VaakKavach',
    source_code_link: 'https://github.com/GuruMachanica/VaakKavach',
    demo: 'https://vaakkavach.netlify.app/',
  },
  {
    id: 'project-4',
    siteKey: 'arkasutra',
    name: 'ArkaSutra',
    category: 'Spatial 3D & Solar Intelligence',
    description:
      '3D Spatial Solar Energy & Autonomous Rooftop Intelligence Engine. Architected a 60 FPS WebGL/Three.js spatial simulation digital twin with an autonomous AI engineering agent, CityGML LOD2 building geometry extraction, live Copernicus/ERA5 satellite assimilation, and Perez transposition physics benchmarked against NREL PVLib.',
    architecture: 'Three.js WebGL • Autonomous Agent AI • CityGML LOD2 • Perez Transposition • FastAPI',
    keyHighlights: [
      'Architected autonomous AI solar engineering agent controlling 3D scene, tilt pitch, and shadow mitigation',
      'Engineered zero-upload global OSM 3D building streaming with coordinate-calibrated urban synthesis',
      'Integrated live Copernicus and ERA5 satellite weather telemetry with real-time cloud derate modeling'
    ],
    tags: [
      {
        name: 'three.js',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'agentic-ai',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
      {
        name: 'citygml-lod2',
        color: 'text-zinc-500 font-mono text-[11px]',
      },
      {
        name: 'fastapi',
        color: 'text-zinc-300 font-mono text-[11px]',
      },
      {
        name: 'pvlib-physics',
        color: 'text-zinc-400 font-mono text-[11px]',
      },
    ],
    image: sunmap,
    repo: 'https://github.com/GuruMachanica/ArkaSutra',
    source_code_link: 'https://github.com/GuruMachanica/ArkaSutra',
    demo: 'https://arkasutra.netlify.app/',
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
  technologyGroups,
  projects,
};

