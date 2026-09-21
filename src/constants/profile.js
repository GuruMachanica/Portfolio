/**
 * profile.js — SINGLE SOURCE OF TRUTH for portfolio content.
 *
 * Everything dynamic (experience, education, achievements, certifications,
 * projects) is defined here once and consumed directly by the pages.
 * The legacy fetch("/data/portfolioData.json") path was removed:
 * no AJAX round-trip, no fallback drift, no duplicated content.
 *
 * Edit content HERE only.
 */

/* ---------------------------- Experience ---------------------------- */
export const experiences = [
  {
    id: 'exp-1',
    role: 'Backend Developer Intern',
    company: 'Sanfy Consultancy Services Pvt. Ltd. (Orvanto AI)',
    period: 'May 2026 - Jul 2026',
    location: 'Hybrid, India',
    type: 'Full-Time Internship',
    summary:
      'Spearheaded backend architecture and machine learning data curation pipelines for intelligent automation products.',
    highlights: [
      'Designed and implemented high-throughput asynchronous REST & WebSocket APIs using FastAPI for real-time model inference.',
      'Built automated data ingestion, validation, and feature curation pipelines for fine-tuning custom LLMs and computer vision models.',
      'Optimized database query performance across MongoDB and MySQL, reducing latency for telemetry queries by 35%.',
      'Collaborated with cross-functional engineering teams to containerize microservices using Docker and establish automated CI/CD workflows.',
    ],
    skills: ['FastAPI', 'Python', 'Docker', 'MongoDB', 'MySQL', 'WebSockets', 'ML Pipelines', 'Redis'],
    certificateUrl:
      'https://drive.google.com/file/d/100xwhMZa1ViRXZRXDTFmYDMBq3LtKmt4/view?usp=sharing',
    verified: true,
  },
];

/* ---------------------------- Education ----------------------------- */
export const educations = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'United Institute of Technology, Prayagraj',
    period: '2023 - 2027 (Ongoing)',
    score: '7.45 CGPA (up to 6th sem)',
    status: 'In Progress',
    description:
      'Focusing on artificial intelligence, systems engineering, distributed computing, and advanced data structures.',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems & Systems Programming',
      'Database Management Systems (DBMS)',
      'Machine Learning & Neural Networks',
      'Computer Networks & Security',
      'Theory of Computation & Compiler Design',
    ],
    highlights: [
      'Active member of Technical Societies & AI Innovation Clubs',
      'Led multiple university hackathon development teams',
      'Published peer-reviewed research during undergraduate studies',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Senior Secondary (Class XII - Intermediate)',
    field: 'Science Stream (Physics, Chemistry, Mathematics & CS)',
    institution: 'Allahabad Public School, Prayagraj',
    period: '2021 - 2022',
    score: '85.8%',
    status: 'Completed',
    description:
      'Core science education with foundation in advanced mathematics and computer science fundamentals.',
    coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English'],
    highlights: ['Distinction in Mathematics and Computer Science'],
  },
  {
    id: 'edu-3',
    degree: 'Secondary School (Class X - Matriculation)',
    field: 'General Science & Mathematics',
    institution: 'Allahabad Public School, Prayagraj',
    period: '2019 - 2020',
    score: '88.3%',
    status: 'Completed',
    description: 'Comprehensive foundational secondary education.',
    coursework: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
    highlights: ['Top percentile in Mathematics and Science subjects'],
  },
];

/* --------------------------- Achievements --------------------------- */
export const achievements = [
  {
    id: 'ach-1',
    title: 'Prototype Development Sprint Qualifier',
    event: 'Sankalp 2026 - National Summit on Innovation & Skills',
    organization: 'Motilal Nehru National Institute of Technology (MNNIT) Prayagraj',
    date: '2026',
    category: 'National Innovation Summit',
    description:
      'Qualified for the competitive National Prototype Sprint by presenting an automated AI agent workflow solution for operational automation.',
    tags: ['National Qualifier', 'AI Prototyping', 'MNNIT Prayagraj'],
  },
  {
    id: 'ach-2',
    title: 'Second Runner-Up (3rd Place)',
    event: 'UHACK 4.0 Hackathon',
    organization: 'United Group of Institutions',
    date: 'Jan 2026 - Feb 2026',
    category: 'Hackathon',
    description:
      'Built and deployed A.E.G.I.S (Audio-based Edge Guard for Intelligent Scam-prevention), delivering sub-second real-time streaming detection.',
    tags: ['2nd Runner-Up', 'FastAPI', 'WebSockets', 'Audio Security'],
  },
  {
    id: 'ach-3',
    title: 'Second Runner-Up (3rd Place)',
    event: 'CodeStorm 2025 Hackathon',
    organization: 'Shambhunath Group of Institutions',
    date: 'Oct 2025',
    category: 'Hackathon',
    description:
      'Engineered SunMap 3D Spatial Solar Intelligence (now evolved into ArkaSutra), parsing CityGML LOD2 geometries with real-time WebGL shadow occlusion and Perez transposition physics.',
    tags: ['2nd Runner-Up', 'PyTorch', 'Spatial 3D', 'Predictive Analytics'],
  },
];

/* --------------------------- Certifications -------------------------- */
export const certifications = [
  {
    id: 'cert-1',
    title: 'Physiochemical Pattern Fingerprinting (PPF)',
    subtitle: 'A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection',
    type: 'Peer-Reviewed Research Publication',
    issuer: 'International Journal of Drug Delivery Technology (IJDDT)',
    citation: 'IJDDT, Vol 16, Issue 4s (Article 31)',
    authors: 'Rohit Mishra, Mohammad Huzaifa, et al.',
    date: '2026',
    description:
      'Physiochemical Pattern Fingerprinting (PPF): A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection. Published in the International Journal of Drug Delivery Technology (IJDDT), Vol 16, Issue 4.',
    abstract:
      'Novel computational methodology leveraging physiochemical residue properties to construct memory-efficient fingerprint vectors for detecting structural protein homology with ultra-low compute overhead.',
    link: 'https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue43s,Article31.pdf',
    certificateUrl: '/certificates/OP-7050_IJDDT_Certificate.pdf',
    keyInsights: [
      'Memory-efficient vectorization of complex protein structural residue patterns',
      'High sensitivity for detecting remote homologues across sparse sequence alignments',
      'Validated across benchmark structural databases with low computational footprint',
    ],
    verified: true,
    doi: '10.25258/ijddt.16.43s.31',
  },
  {
    id: 'cert-2',
    title: "CS50's Introduction to Artificial Intelligence with Python",
    subtitle: 'Harvard University Verified Online Credential',
    type: 'Verified Professional Certification',
    issuer: 'Harvard University (CS50 AI)',
    date: 'Jul 2026',
    description:
      "Covered search algorithms, machine learning, neural networks, NLP, and AI in Python.",
    abstract:
      'Rigorous coursework exploring the core concepts and algorithms underpinning modern artificial intelligence and machine learning in Python.',
    link: 'https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793',
    certificateUrl: 'https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793',
    keyInsights: [
      'Graph Search Algorithms, Minimax, Alpha-Beta Pruning, Constraint Satisfaction',
      'Markov Models, Bayesian Networks, Uncertainty Estimation',
      'Supervised Learning, Neural Networks, Convolutional Networks, NLP with Transformers',
    ],
    verified: true,
  },
  {
    id: 'cert-3',
    title: 'Python Programming - Self Paced (6-Week Intensive)',
    subtitle: 'GeeksforGeeks Verified Course Completion Credential',
    type: 'Verified Professional Certification',
    issuer: 'GeeksforGeeks (GFG)',
    date: 'Jul 2025',
    description:
      'Comprehensive 6-week intensive mastery of core & advanced Python programming, data structures, algorithms, functional paradigms, and modular software design.',
    abstract:
      'Comprehensive 6-week intensive mastery of core & advanced Python programming, data structures, algorithms, functional paradigms, and modular software design under Mr. Sandeep Jain.',
    link: 'https://media.geeksforgeeks.org/courses/certificates/1753170940/2ff7e42d765fa50c4bb21f37e408ecbb.pdf',
    certificateUrl: '/certificates/gfg_python_certificate.pdf',
    keyInsights: [
      'Object-Oriented Programming (OOP), Polymorphism, Inheritance & Custom Class Design',
      'Advanced Data Structures: Hash Maps, Tuples, Sets, Memory-Efficient Generators & Iterators',
      'Algorithmic Complexity, File Handling, Exception Pipelines & Modular Python Engineering',
    ],
    verified: true,
  },
];
