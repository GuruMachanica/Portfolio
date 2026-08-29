import React, { useState, useEffect, useRef } from "react";
import { 
  FaDownload, 
  FaExternalLinkAlt, 
  FaSearchPlus, 
  FaSearchMinus, 
  FaUndo, 
  FaChevronLeft, 
  FaChevronRight, 
  FaCopy, 
  FaCheck, 
  FaCheckCircle 
} from "react-icons/fa";

const DocumentViewer = ({ activeDoc }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeDoc.id]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentPage, activeDoc.id]);

  const handleCopyDoi = (doiText) => {
    navigator.clipboard.writeText(doiText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 20, 200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 20, 60));
  const handleResetZoom = () => setZoomLevel(100);

  const nextPage = () => {
    if (currentPage < activeDoc.totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="space-y-8">
      {/* Document Reader Container */}
      <div className="brutalist-panel rounded-3xl p-4 sm:p-8 border border-white/15 shadow-2xl relative">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold uppercase">{activeDoc.title}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/20">
              {activeDoc.date}
            </span>
          </div>

          {/* Viewer Tools: Zoom & Pagination */}
          <div className="flex items-center gap-2">
            {activeDoc.totalPages > 1 && (
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 mr-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="p-1 text-zinc-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title="Previous Page">
                  <FaChevronLeft className="w-3 h-3" />
                </button>
                <span className="text-white font-bold min-w-[70px] text-center">
                  Page {currentPage} of {activeDoc.totalPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={currentPage === activeDoc.totalPages}
                  className="p-1 text-zinc-400 hover:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  title="Next Page">
                  <FaChevronRight className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
              <button
                onClick={handleZoomOut}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/10"
                title="Zoom Out">
                <FaSearchMinus className="w-3 h-3" />
              </button>
              <span className="text-[11px] font-bold text-white px-1.5 min-w-[40px] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/10"
                title="Zoom In">
                <FaSearchPlus className="w-3 h-3" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/10 ml-1 border-l border-white/10"
                title="Reset Zoom">
                <FaUndo className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>

        {/* High-Resolution Document Canvas */}
        <div 
          ref={scrollContainerRef}
          className="relative w-full overflow-y-auto overflow-x-auto bg-[#070707] rounded-2xl border border-white/10 p-2 sm:p-6 min-h-[480px] max-h-[75vh] flex flex-col items-center justify-start scroll-smooth">
          {activeDoc.previewIframeUrl ? (
            <div 
              style={{ width: `${zoomLevel}%`, maxWidth: "850px" }}
              className="w-full h-[580px] my-2 rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <iframe
                src={activeDoc.previewIframeUrl}
                title={activeDoc.title}
                className="w-full h-full border-0 bg-white"
                allow="autoplay"
              />
            </div>
          ) : (
            <div
              style={{ width: `${zoomLevel}%`, maxWidth: "850px", transition: "width 0.2s ease" }}
              className="flex flex-col items-center my-2">
              <img
                src={activeDoc.images && (activeDoc.images[currentPage - 1] || activeDoc.images[0])}
                alt={`${activeDoc.title} Page ${currentPage}`}
                className="w-full h-auto rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.9)] border border-white/15 select-none"
                loading="eager"
              />
            </div>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <a
              href={activeDoc.officialVerifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all shadow-lg hover:scale-105">
              <FaExternalLinkAlt className="w-3 h-3" />
              <span>{activeDoc.officialVerifyLabel}</span>
            </a>

            <a
              href={activeDoc.pdfUrl}
              download={activeDoc.downloadName}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl brutalist-panel text-white font-bold hover:border-white/40 transition-colors">
              <FaDownload className="w-3 h-3" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>

          {/* Citation / DOI Copier */}
          {activeDoc.doi && (
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-2 rounded-xl">
              <span className="text-zinc-400 text-[11px]">{activeDoc.citation || activeDoc.doi}</span>
              <button
                onClick={() => handleCopyDoi(activeDoc.doi)}
                className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy DOI / ID">
                {copied ? <FaCheck className="w-3 h-3 text-white" /> : <FaCopy className="w-3 h-3" />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Metadata & Key Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10">
          <h3 className="text-white font-bold font-poppins text-[20px] mb-3">
            Abstract & Engineering Significance
          </h3>
          <p className="text-zinc-300 text-[14px] leading-relaxed mb-6">
            {activeDoc.abstract}
          </p>

          <h4 className="text-[12px] font-mono uppercase tracking-wider text-zinc-400 mb-3 font-bold">
            Key Highlights & Innovations
          </h4>
          <ul className="space-y-2.5">
            {activeDoc.keyInsights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-zinc-300 text-[13px]">
                <FaCheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="brutalist-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-white font-bold font-poppins text-[18px] mb-4">
              Credential Metadata
            </h3>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-zinc-500 block">ISSUING INSTITUTION</span>
                <span className="text-white font-bold">{activeDoc.issuer}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">DATE OF ISSUANCE</span>
                <span className="text-white font-bold">{activeDoc.date}</span>
              </div>
              <div>
                <span className="text-zinc-500 block">AUTHORS / RECIPIENT</span>
                <span className="text-zinc-300 text-[11px] leading-relaxed block mt-0.5">
                  {activeDoc.authors}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block">AUTHENTICATION STATUS</span>
                <span className="text-white font-bold flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  VERIFIED & PEER-REVIEWED
                </span>
              </div>
            </div>
          </div>

          <a
            href={activeDoc.officialVerifyUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-3 rounded-xl bg-white text-black font-mono font-bold text-xs hover:bg-zinc-200 transition-colors shadow-lg">
            INSPECT OFFICIAL RECORD
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
