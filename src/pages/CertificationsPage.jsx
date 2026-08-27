import PageTransition from "../components/PageTransition";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileAlt, FaExternalLinkAlt, FaCheckCircle, FaAward, FaUniversity } from "react-icons/fa";
import { fetchPortfolioData } from "../services/dataService";
import { animate, stagger } from "animejs";

const fallbackCerts = [
  {
    id: "cert-1",
    title: "Physiochemical Pattern Fingerprinting (PPF)",
    subtitle: "A Memory-Efficient Approach to Structurally-Sensitive Protein Homology Detection",
    type: "Peer-Reviewed Research Publication",
    issuer: "International Journal of Drug Delivery Technology (IJDDT)",
    citation: "IJDDT, Vol 16, Issue 4",
    authors: "Rohit Mishra, Mohammad Huzaifa, et al.",
    date: "2026",
    abstract: "Novel computational methodology leveraging physiochemical residue properties to construct memory-efficient fingerprint vectors for detecting structural protein homology with ultra-low compute overhead.",
    link: "https://impactfactor.org/PDF/IJDDT/16/IJDDT,Vol16,Issue43s,Article31.pdf",
    keyInsights: [
      "Memory-efficient vectorization of complex protein structural residue patterns",
      "High sensitivity for detecting remote homologues across sparse sequence alignments",
      "Validated across benchmark structural databases with low computational footprint"
    ],
    verified: true
  },
  {
    id: "cert-2",
    title: "CS50 Introduction to Artificial Intelligence with Python",
    subtitle: "Harvard University Verified Online Credential",
    type: "Verified Professional Certification",
    issuer: "Harvard University (CS50)",
    date: "2024",
    abstract: "Rigorous coursework exploring the core concepts and algorithms underpinning modern artificial intelligence and machine learning in Python.",
    link: "https://cs50.harvard.edu/certificates/110613e9-87d7-4464-9897-63780847a793",
    keyInsights: [
      "Graph Search Algorithms, Minimax, Alpha-Beta Pruning, Constraint Satisfaction",
      "Markov Models, Bayesian Networks, Uncertainty Estimation",
      "Supervised Learning, Neural Networks, Convolutional Networks, NLP with Transformers"
    ],
    verified: true
  }
];

const CertificationsPage = () => {
  const [certs, setCerts] = useState(fallbackCerts);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Asynchronous AJAX Data Fetching
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
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl brutalist-panel text-white font-mono text-[13px] hover:border-white/40 transition-colors w-fit">
          <FaArrowLeft className="w-3.5 h-3.5" /> BACK TO HOME
        </Link>
        <div className="flex items-center gap-2 text-[12px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          PUBLICATIONS &amp; VERIFIED CREDENTIALS
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
          PEER-REVIEWED RESEARCH &amp; CERTIFICATIONS
        </p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
          Publications &amp; Certifications.
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          Verifiable scholarly contributions, journal publications, and professional artificial intelligence credentials.
        </p>
      </div>

      {/* Bespoke Brutalist Research & Certification Cards */}
      <div className="space-y-8">
        {certs.map((item) => (
          <div
            key={item.id}
            className="cert-card opacity-100 brutalist-panel rounded-3xl p-6 sm:p-9 border border-white/10 hover:border-white/40 transition-all duration-300">
            
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20 uppercase">
                    {item.type}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <FaCheckCircle className="text-white w-3 h-3" /> VERIFIED CREDENTIAL
                  </span>
                </div>

                <h2 className="text-white text-[22px] sm:text-[26px] font-extrabold font-poppins tracking-tight">
                  {item.title}
                </h2>
                <h3 className="text-zinc-300 text-[15px] sm:text-[16px] font-mono mt-1">
                  {item.subtitle}
                </h3>
              </div>

              <div className="font-mono text-[13px] text-zinc-400 lg:text-right">
                <span className="block text-white font-bold">{item.issuer}</span>
                <span className="block text-[12px]">{item.date}</span>
                {item.citation && <span className="block text-[11px] text-zinc-400">{item.citation}</span>}
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

            {/* Verification Button */}
            {item.link && (
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono font-bold text-[13px] hover:bg-zinc-200 transition-colors shadow-md">
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  {item.type.includes("Publication") ? "READ PUBLISHED PAPER (PDF)" : "VERIFY HARVARD CERTIFICATE"}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </PageTransition>
  );
};

export default CertificationsPage;
