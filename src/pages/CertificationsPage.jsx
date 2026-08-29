import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import DocumentViewer from "../components/certifications/DocumentViewer";
import { credentialsData } from "../constants/certificatesData";
import { 
  FaArrowLeft, 
  FaBookOpen, 
  FaCertificate, 
  FaUniversity, 
  FaBriefcase 
} from "react-icons/fa";
import { createTimeline, stagger } from "animejs";

const CertificationsPage = () => {
  const [activeDocId, setActiveDocId] = useState("ijddt-paper");
  const activeDoc = credentialsData.find((d) => d.id === activeDocId) || credentialsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const tl = createTimeline();
      tl.add(".cert-badge", {
        opacity: [0, 1],
        translateY: [-10, 0],
        ease: "outExpo",
        duration: 500,
      })
      .add(".cert-tab", {
        opacity: [0, 1],
        translateY: [15, 0],
        delay: stagger(50),
        ease: "outExpo",
        duration: 600,
      }, "-=300");
    } catch (e) {}
  }, []);

  const getTabIcon = (id) => {
    switch (id) {
      case "ijddt-paper":
        return <FaBookOpen className="w-3.5 h-3.5" />;
      case "ijddt-cert":
        return <FaCertificate className="w-3.5 h-3.5" />;
      case "harvard-cs50ai":
        return <FaUniversity className="w-3.5 h-3.5" />;
      case "gfg-python":
        return <FaCertificate className="w-3.5 h-3.5" />;
      case "sanfy-internship":
        return <FaBriefcase className="w-3.5 h-3.5" />;
      default:
        return <FaCertificate className="w-3.5 h-3.5" />;
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-28 px-4 sm:px-8 max-w-7xl mx-auto stripe-grid select-none">
        
        {/* Top Header */}
        <div className="mb-10 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[12px] uppercase tracking-wider mb-3 transition-colors">
            <FaArrowLeft className="w-3 h-3" /> BACK TO MONOLITH
          </Link>
          <div className="cert-badge flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="text-[12px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
              VERIFIED ACADEMIC & INDUSTRY DOSSIER
            </span>
          </div>
          <h1 className="text-[34px] sm:text-[44px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Research Publications & Credentials.
          </h1>
          <p className="text-zinc-400 text-[14px] sm:text-[16px] mt-1 font-mono">
            Peer-reviewed structural bioinformatics research, Harvard CS50 AI certification, and verified credentials.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {credentialsData.map((doc) => (
            <button
              key={doc.id}
              onClick={() => setActiveDocId(doc.id)}
              className={`cert-tab flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                activeDocId === doc.id
                  ? "bg-white text-black font-bold shadow-xl scale-105"
                  : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}>
              {getTabIcon(doc.id)}
              <span className="truncate max-w-[200px]">{doc.title}</span>
            </button>
          ))}
        </div>

        {/* Document Viewer Component */}
        <DocumentViewer key={activeDoc.id} activeDoc={activeDoc} />
      </div>
    </PageTransition>
  );
};

export default CertificationsPage;
