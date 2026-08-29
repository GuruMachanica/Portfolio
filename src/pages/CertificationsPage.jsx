import PageTransition from "../components/PageTransition";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileAlt, FaExternalLinkAlt, FaCheckCircle, FaAward, FaUniversity, FaCertificate } from "react-icons/fa";
import { fetchPortfolioData } from "../services/dataService";
import { animate, stagger } from "animejs";

const fallbackCerts = [
  {
    id: "cert-1",
    title: "Physiochemical Pattern Fingerprinting (PPF)",
    subtitle: "A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection",
    type: "Peer-Reviewed Research Publication",
    issuer: "International Journal of Drug Delivery Technology (IJDDT)",
    citation: "IJDDT, Vol 16, Issue 4s (Article 31)",
    doi: "10.25258/ijddt.16.43s.31",
    authors: "Rohit Mishra, Amit Kumar Tiwari, Isnia Izhar, Ashutosh Mishra, Ashutosh Suryavanshi, Mohammad Huzaifa",
    date: "2026",
    abstract: "Novel computational bio-informatics methodology leveraging physiochemical residue properties to construct memory-efficient fingerprint vectors for detecting structural protein homology with 4.8x reduced memory overhead.",
    link: "https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue43s,Article31.pdf",
    certificateUrl: "/OP-7050_IJDDT_Certificate.pdf",
    keyInsights: [
      "Memory-efficient vectorization of complex protein structural residue patterns",
      "High sensitivity for detecting remote homologues across sparse sequence alignments",
      "Verified under DOI 10.25258/ijddt.16.43s.31 with low computational footprint"
    ],
    verified: true
  },
  {
    id: "cert-2",
    title: "CS50's Introduction to Artificial Intelligence with Python",
    subtitle: "Harvard University Verified Credential (Twelve Projects Completed)",
    type: "Verified Professional Certification",
    issuer: "Harvard University (CS50 AI)",
    date: "2026",
    abstract: "Rigorous coursework exploring modern artificial intelligence, deep learning foundations, probabilistic inference, and machine learning in Python under Prof. David J. Malan.",
    link: "https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793",
    keyInsights: [
      "Graph Search Algorithms, Minimax, Alpha-Beta Pruning, Constraint Satisfaction",
      "Markov Models, Bayesian Networks, Uncertainty Estimation & Reinforcement Learning",
      "Supervised Learning, Deep Neural Networks, Convolutional Networks, NLP & Transformers"
    ],
    verified: true
  }
];

const CertificationsPage = () => {
  const [certs, setCerts] = useState(fallbackCerts);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPortfolioData().then((data) => {
      if (data && data.certifications) {
        setCerts(data.certifications);
      }
      try {
        animate(".cert-card", {
          opacity: [0, 1],
          translateY: [25, 0],
          delay: stagger(100, { start: 100 }),
          ease: "outExpo",
          duration: 700,
        });
      } catch (e) {}
    });
  }, []);

  return (
    <PageTransition>
      <div className="pt-28 pb-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen text-white">
        
        {/* Top Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
            <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
          </Link>
          <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            VERIFIED ACADEMIC &amp; PEER-REVIEWED CREDENTIALS
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-12">
          <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
            ACADEMIC DISTINCTION
          </p>
          <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
            Certifications &amp; Research.
          </h1>
          <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
            Peer-reviewed research publications in computational bioinformatics and verified credentials from world-leading institutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          {certs.map((item) => (
            <div
              key={item.id}
              className="cert-card opacity-0 brutalist-panel rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-white/30 transition-all duration-300">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20 uppercase tracking-wider">
                      {item.type}
                    </span>
                    {item.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300">
                        <FaCheckCircle className="w-3 h-3 text-white" /> VERIFIED
                      </span>
                    )}
                  </div>
                  <h2 className="text-white text-[24px] sm:text-[30px] font-extrabold font-poppins tracking-tight mt-1">
                    {item.title}
                  </h2>
                  <h3 className="text-zinc-400 text-[14px] sm:text-[16px] font-mono mt-1">
                    {item.subtitle}
                  </h3>
                </div>

                <div className="font-mono text-[13px] text-zinc-400 lg:text-right">
                  <span className="block text-white font-bold">{item.issuer}</span>
                  <span className="block text-[12px]">{item.date}</span>
                  {item.citation && <span className="block text-[11px] text-zinc-400">{item.citation}</span>}
                  {item.doi && <span className="block text-[11px] text-zinc-300 font-mono">DOI: {item.doi}</span>}
                </div>
              </div>

              {/* Authors if publication */}
              {item.authors && (
                <div className="mt-4 text-[13px] font-mono text-zinc-400">
                  <span className="text-white font-bold">Authors:</span> {item.authors}
                </div>
              )}

              {/* Abstract */}
              <div className="mt-5">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  OVERVIEW &amp; ABSTRACT
                </h4>
                <p className="text-zinc-300 text-[14px] sm:text-[15px] leading-relaxed font-poppins">
                  {item.abstract}
                </p>
              </div>

              {/* Key Insights */}
              {item.keyInsights && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2.5">
                    CORE METHODOLOGIES &amp; CURRICULUM
                  </h4>
                  <ul className="space-y-2">
                    {item.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-300 text-[13px] sm:text-[14px] font-poppins">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verification & Paper Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
                {item.certificateUrl && (
                  <a
                    href={item.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl brutalist-panel text-white font-mono font-bold text-[13px] hover:border-white/40 transition-colors">
                    <FaCertificate className="w-3.5 h-3.5" />
                    <span>ACCEPTANCE CERTIFICATE (PDF)</span>
                  </a>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md">
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    <span>{item.type.includes("Publication") ? "READ PUBLISHED PAPER (PDF)" : "VERIFY HARVARD CERTIFICATE"}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default CertificationsPage;
