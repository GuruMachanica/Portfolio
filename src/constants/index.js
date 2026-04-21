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
    title: 'Machine Learning Enthusiast',
    icon: frontend,
  },
  {
    title: 'Frontend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'DSA Problem Solver',
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
    title: 'Databases',
    items: [
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
    title: 'Machine Learning & AI',
    items: [
      {
        name: 'TensorFlow',
        icon: tensorflow,
      },
      {
        name: 'PyTorch',
        icon: pytorch,
      },
    ],
  },
  {
    title: 'Tools',
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
    title: 'certificate: Machine Learning A-Z: AI, Python',
    description:
      'Covered machine learning fundamentals, model building, and real-world datasets.',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a0237679-e3fc-4010-9950-4d826538b75f.pdf',
  },
  {
    title: 'certificate: Python Programming',
    description:
      'Focused on data science, problem-solving, and algorithmic optimization.',
    link: 'https://www.geeksforgeeks.org/certificate/52efc3c0f0f7c6b889007279db05670d',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Concept3D',
    description:
      'AI concept-to-visualization platform. Implemented an AI-driven semantic processing model to reduce 3D prototyping time by 50%, alongside a fallback to ensure 99% rendering reliability.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'pink-text-gradient',
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
      'Real-time scam detection & analytics system. Engineered a real-time live audio pipeline delivering instant insights and automated WebSocket alerts, reducing threat response time by 40%.',
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
        name: 'flutter',
        color: 'pink-text-gradient',
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
      '3D Solar Potential & Revenue Analytics. Integrated PyTorch models to forecast solar energy capacity, delivering actionable revenue insights and cost-benefit visualizations.',
    tags: [
      {
        name: 'pytorch',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'python',
        color: 'pink-text-gradient',
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
      'AI-based safety KPI & monitoring dashboard. Developed predictive analytics for live video feeds, automating safety compliance monitoring to save 20+ hours weekly with a responsive BI dashboard.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
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
