import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import TiltCard from "../components/TiltCard";
import { 
  FaArrowLeft, 
  FaDownload, 
  FaExternalLinkAlt, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaUndo, 
  FaFilePdf, 
  FaAward, 
  FaCheckCircle, 
  FaCopy, 
  FaCheck,
  FaUniversity,
  FaBookOpen,
  FaCertificate,
  FaBriefcase,
  FaShieldAlt
} from "react-icons/fa";
import { createTimeline, stagger } from "animejs";

const credentialsData = [
  {
    id: "ijddt-paper",
    title: "Physiochemical Pattern Fingerprinting (PPF)",
    subtitle: "A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection",
    category: "Research Publication",
    issuer: "International Journal of Drug Delivery Technology (IJDDT)",
    date: "2026",
    doi: "10.25258/ijddt.16.43s.31",
    citation: "IJDDT, Vol 16, Issue 4s (Article 31)",
    authors: "Rohit Mishra, Amit Kumar Tiwari, Isnia Izhar, Ashutosh Mishra, Ashutosh Suryavanshi, Mohammad Huzaifa",
    docType: "pdf",
    docUrl: "/IJDDT_Vol16_Issue43s_Article31.pdf",
    downloadName: "IJDDT_Physiochemical_Pattern_Fingerprinting_Paper.pdf",
    officialVerifyUrl: "https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue43s,Article31.pdf",
    officialVerifyLabel: "VERIFY VIA JOURNAL REPOSITORY",
    abstract: "Novel computational bioinformatics methodology leveraging physiochemical residue properties to construct memory-efficient fingerprint vectors for detecting structural protein homology with 4.8x reduced memory overhead compared to traditional MSA algorithms.",
    keyInsights: [
      "Engineered memory-efficient vectorization of complex protein structural residue patterns",
      "High sensitivity for detecting remote homologues across sparse sequence alignments",
      "Published and peer-reviewed in International Journal of Drug Delivery Technology (ISSN: 0975-4415)"
    ],
    verified: true
  },
  {
    id: "ijddt-cert",
    title: "IJDDT Publication Acceptance Certificate",
    subtitle: "Official Certificate of Publication for Research Paper (OP-7050)",
    category: "Acceptance Certificate",
    issuer: "IJDDT Editorial Board",
    date: "2026",
    doi: "10.25258/ijddt.16.43s.31",
    citation: "Certificate ID: OP-7050 (ISSN: 0975-4415)",
    authors: "Awarded to Mohammad Huzaifa et al.",
    docType: "pdf",
    docUrl: "/OP-7050_IJDDT_Certificate.pdf",
    downloadName: "OP-7050_IJDDT_Certificate.pdf",
    officialVerifyUrl: "/OP-7050_IJDDT_Certificate.pdf",
    officialVerifyLabel: "VIEW SIGNED CERTIFICATE (PDF)",
    abstract: "Official certificate of publication awarded by the International Journal of Drug Delivery Technology confirming peer review and publication of the research paper.",
    keyInsights: [
      "Official verification certificate signed by the IJDDT Editorial Board",
      "Peer-reviewed authentication under ISSN 0975-4415",
      "Recognizes structural bioinformatics research contribution"
    ],
    verified: true
  },
  {
    id: "harvard-cs50ai",
    title: "CS50's Introduction to Artificial Intelligence with Python",
    subtitle: "Harvard University Verified Online Credential (Twelve Projects Completed)",
    category: "Harvard Credential",
    issuer: "Harvard University (CS50 AI)",
    date: "Jul 2026",
    doi: "ID: 110613e9-87d7-4464-9897-63780847a793",
    citation: "Awarded from Cambridge, Massachusetts under Prof. David J. Malan",
    authors: "Mohammad Huzaifa",
    docType: "image",
    docUrl: "/cs50_ai_certificate.png",
    downloadName: "Harvard_CS50AI_Certificate.png",
    officialVerifyUrl: "https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793",
    officialVerifyLabel: "VERIFY VIA HARVARD UNIVERSITY",
    abstract: "Rigorous coursework exploring modern artificial intelligence foundations, probabilistic inference, machine learning, deep neural networks, and multi-agent systems in Python under Prof. David J. Malan.",
    keyInsights: [
      "Graph Search Algorithms, Minimax, Alpha-Beta Pruning, Constraint Satisfaction",
      "Markov Models, Bayesian Networks, Uncertainty Estimation & Reinforcement Learning",
      "Supervised Learning, Deep Neural Networks, Convolutional Networks, NLP & Transformers"
    ],
    verified: true
  },
  {
    id: "gfg-python",
    title: "Python Programming - Self Paced (6-Week Intensive)",
    subtitle: "GeeksforGeeks Verified Course Completion Credential",
    category: "Professional Mastery",
    issuer: "GeeksforGeeks (GFG)",
    date: "Jul 2025",
    doi: "ID: 52efc3c0f0f7c6b889007279db05670d",
    citation: "Signed by Mr. Sandeep Jain (Founder & CEO, GeeksforGeeks)",
    authors: "Mohammad Huzaifa",
    docType: "pdf",
    docUrl: "/gfg_python_certificate.pdf",
    downloadName: "GFG_Python_Programming_Certificate.pdf",
    officialVerifyUrl: "https://media.geeksforgeeks.org/courses/certificates/52efc3c0f0f7c6b889007279db05670d.pdf",
    officialVerifyLabel: "VERIFY VIA GEEKSFORGEEKS",
    abstract: "Comprehensive 6-week intensive mastery of core and advanced Python programming, data structures, algorithms, functional programming, and modular software engineering.",
    keyInsights: [
      "Object-Oriented Programming (OOP), Polymorphism, Inheritance & Custom Class Design",
      "Advanced Data Structures: Hash Maps, Tuples, Sets, Memory-Efficient Generators & Iterators",
      "Algorithmic Complexity, File Handling, Exception Pipelines & Modular Architecture"
    ],
    verified: true
  },
  {
    id: "sanfy-internship",
    title: "Backend Developer Internship Certificate",
    subtitle: "Sanfy Consultancy Services Pvt. Ltd. (Orvanto AI)",
    category: "Industry Engineering",
    issuer: "Sanfy Consultancy Services",
    date: "Jul 2026",
    doi: "Division: Product & Technology (Orvanto AI)",
    citation: "Role: Backend Developer Intern (Hybrid, India)",
    authors: "Mohammad Huzaifa",
    docType: "external_pdf",
    docUrl: "https://drive.google.com/file/d/100xwhMZa1ViRXZRXDTFmYDMBq3LtKmt4/preview",
    downloadName: "Sanfy_Consultancy_Internship_Certificate.pdf",
    officialVerifyUrl: "https://drive.google.com/file/d/100xwhMZa1ViRXZRXDTFmYDMBq3LtKmt4/view?usp=sharing",
    officialVerifyLabel: "VERIFY VIA OFFICIAL CLOUD VAULT",
    abstract: "Backend engineering and infrastructure development for Orvanto AI within the Product & Technology division, architecting high-throughput FastAPI microservices, automated ML pipelines, and database optimization.",
    keyInsights: [
      "Architected asynchronous REST and WebSocket microservices using FastAPI",
      "Built automated data ingestion pipelines for fine-tuning LLMs and computer vision models",
      "Optimized MongoDB and MySQL database queries, reducing query latency by 35%"
    ],
    verified: true
  }
];

const CertificationsPage = () => {
  const [selectedId, setSelectedId] = useState("ijddt-paper");
  const [zoomLevel, setZoomLevel] = useState(100);
  const [copied, setCopied] = useState(false);

  const activeCred = credentialsData.find((c) => c.id === selectedId) || credentialsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const tl = createTimeline();
      tl.add(".cert-header", {
        opacity: [0, 1],
        translateY: [-15, 0],
        ease: "outExpo",
        duration: 700,
      })
      .add(".cert-stat-card", {
        opacity: [0, 1],
        translateY: [25, 0],
        delay: stagger(70),
        ease: "outExpo",
        duration: 800,
      }, "-=350")
      .add(".cert-canvas-container", {
        opacity: [0, 1],
        scale: [0.98, 1],
        translateY: [15, 0],
        ease: "outQuad",
        duration: 700,
      }, "-=350");
    } catch (e) {
      console.warn("Cert animations fallback", e);
    }
  }, []);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(150, prev + 15));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(70, prev - 15));
  const handleResetZoom = () => setZoomLevel(100);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(activeCred.officialVerifyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Header */}
        <div className="cert-header opacity-0 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit mb-2">
              <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
            </Link>
            <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>OFFICIAL ACADEMIC &amp; RESEARCH REPOSITORY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-poppins text-white flex items-center gap-3">
              <FaAward className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              <span>Certifications &amp; Research</span>
            </h1>
            <p className="text-zinc-400 text-sm font-poppins">
              Peer-Reviewed Publications • Harvard University AI • Industry &amp; Computer Science Credentials
            </p>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Copy Official Link Button */}
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2.5 rounded-xl brutalist-panel text-zinc-300 hover:text-white font-mono text-[12px] flex items-center gap-2 hover:border-white/40 transition-all cursor-pointer"
              title="Copy official verification link to clipboard">
              {copied ? (
                <>
                  <FaCheck className="w-3.5 h-3.5 text-white" />
                  <span className="text-white font-bold">LINK COPIED!</span>
                </>
              ) : (
                <>
                  <FaCopy className="w-3.5 h-3.5" />
                  <span>COPY VERIFY URL</span>
                </>
              )}
            </button>

            {/* Direct Verification Forward Link */}
            <a
              href={activeCred.officialVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[12px] flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-md hover:scale-105 cursor-pointer">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span>{activeCred.officialVerifyLabel}</span>
            </a>
          </div>
        </div>

        {/* Telemetry Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="cert-stat-card opacity-0">
            <TiltCard options={{ max: 12, scale: 1.02, speed: 400 }}>
              <div className="brutalist-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5"><FaBookOpen className="w-3.5 h-3.5 text-white" /> RESEARCH</span>
                  <span className="text-white font-bold">01</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-poppins text-white">IJDDT Published</div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">PPF Bio-Informatics Algorithm</div>
              </div>
            </TiltCard>
          </div>

          <div className="cert-stat-card opacity-0">
            <TiltCard options={{ max: 12, scale: 1.02, speed: 400 }}>
              <div className="brutalist-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5"><FaUniversity className="w-3.5 h-3.5 text-white" /> HARVARD</span>
                  <span className="text-white font-bold">CS50 AI</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-poppins text-white">Artificial Intelligence</div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">12 Deep Learning Projects</div>
              </div>
            </TiltCard>
          </div>

          <div className="cert-stat-card opacity-0">
            <TiltCard options={{ max: 12, scale: 1.02, speed: 400 }}>
              <div className="brutalist-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5"><FaCertificate className="w-3.5 h-3.5 text-white" /> GEEKSFORGEEKS</span>
                  <span className="text-white font-bold">6-WEEK</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-poppins text-white">Python Mastery</div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">OOP &amp; Advanced Algorithms</div>
              </div>
            </TiltCard>
          </div>

          <div className="cert-stat-card opacity-0">
            <TiltCard options={{ max: 12, scale: 1.02, speed: 400 }}>
              <div className="brutalist-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/25 transition-all">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5"><FaBriefcase className="w-3.5 h-3.5 text-white" /> INDUSTRY</span>
                  <span className="text-white font-bold">HYBRID</span>
                </div>
                <div className="text-lg sm:text-xl font-bold font-poppins text-white">Sanfy (Orvanto AI)</div>
                <div className="text-[11px] font-mono text-zinc-400 mt-1">Backend Engineering Intern</div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Interactive Document Selector Tabs */}
        <div className="mb-6">
          <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>SELECT CREDENTIAL TO INSPECT LIVE</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {credentialsData.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setZoomLevel(100);
                  }}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    isSelected
                      ? "bg-white text-black border-white shadow-lg scale-[1.02]"
                      : "brutalist-panel text-white border-white/10 hover:border-white/30 hover:bg-white/5"
                  }`}>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-75 mb-1">
                    {item.category}
                  </div>
                  <div className="font-bold font-poppins text-[13px] line-clamp-1">
                    {item.title}
                  </div>
                  <div className={`text-[11px] font-mono mt-1 ${isSelected ? "text-zinc-800" : "text-zinc-400"}`}>
                    {item.issuer}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Embedded Interactive Viewer Container */}
        <div className="cert-canvas-container opacity-0 brutalist-panel rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl space-y-4 hover:border-white/25 transition-all">
          
          {/* Canvas Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-white font-bold">{activeCred.title}</span>
              <span className="hidden sm:inline">• {activeCred.issuer} ({activeCred.date})</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Zoom Out">
                <FaSearchMinus className="w-3.5 h-3.5" />
              </button>
              <span className="px-2 font-bold text-white">{zoomLevel}%</span>
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Zoom In">
                <FaSearchPlus className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                title="Reset Zoom">
                <FaUndo className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Document Display Frame */}
          <div className="w-full flex justify-center overflow-auto bg-[#141414] rounded-2xl p-2 sm:p-4 border border-white/5 min-h-[600px] sm:min-h-[850px] lg:min-h-[1050px]">
            <div 
              className="w-full max-w-4xl transition-transform duration-200 origin-top h-full flex justify-center"
              style={{ transform: `scale(${zoomLevel / 100})` }}>
              {activeCred.docType === "image" ? (
                <div className="w-full flex flex-col items-center justify-center p-4">
                  <img
                    src={activeCred.docUrl}
                    alt={activeCred.title}
                    className="w-full max-w-3xl rounded-xl border border-white/10 shadow-2xl bg-black"
                  />
                </div>
              ) : (
                <iframe
                  src={`${activeCred.docUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  title={activeCred.title}
                  className="w-full h-[600px] sm:h-[850px] lg:h-[1050px] rounded-xl border border-white/10 shadow-2xl bg-white"
                />
              )}
            </div>
          </div>

          {/* Viewer Footer Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-3.5 h-3.5 text-white" />
              <span>Official Cryptographic &amp; Institutional Document Verification Active</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={activeCred.officialVerifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors underline flex items-center gap-1.5 cursor-pointer">
                <span>Direct Verification Portal</span>
                <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Credential Dossier Section */}
        <div className="mt-12 brutalist-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                  {activeCred.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300">
                  <FaCheckCircle className="w-3 h-3 text-white" /> VERIFIED CREDENTIAL
                </span>
              </div>
              <h2 className="text-white text-[24px] sm:text-[30px] font-extrabold font-poppins tracking-tight mt-1">
                {activeCred.title}
              </h2>
              <h3 className="text-zinc-400 text-[14px] sm:text-[16px] font-mono mt-1">
                {activeCred.subtitle}
              </h3>
            </div>

            <div className="font-mono text-[13px] text-zinc-400 lg:text-right">
              <span className="block text-white font-bold">{activeCred.issuer}</span>
              <span className="block text-[12px]">{activeCred.date}</span>
              {activeCred.citation && <span className="block text-[11px] text-zinc-400">{activeCred.citation}</span>}
              {activeCred.doi && <span className="block text-[11px] text-zinc-300 font-mono">DOI: {activeCred.doi}</span>}
            </div>
          </div>

          {/* Authors */}
          {activeCred.authors && (
            <div className="text-[13px] font-mono text-zinc-400">
              <span className="text-white font-bold">Authors / Awardee:</span> {activeCred.authors}
            </div>
          )}

          {/* Overview & Abstract */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">
              OVERVIEW &amp; ABSTRACT
            </h4>
            <p className="text-zinc-300 text-[14px] sm:text-[15px] leading-relaxed font-poppins">
              {activeCred.abstract}
            </p>
          </div>

          {/* Key Insights & Curriculum */}
          {activeCred.keyInsights && (
            <div className="pt-5 border-t border-white/10">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2.5">
                CORE METHODOLOGIES &amp; CURRICULUM
              </h4>
              <ul className="space-y-2">
                {activeCred.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-300 text-[13px] sm:text-[14px] font-poppins">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verification Forward CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400">
              Institutional Verification Authority: <span className="text-white font-bold">{activeCred.issuer}</span>
            </div>

            <a
              href={activeCred.officialVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md cursor-pointer hover:scale-105">
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              <span>{activeCred.officialVerifyLabel} ↗</span>
            </a>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default CertificationsPage;
