import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGraduationCap, FaAward, FaBook, FaCalendarAlt } from "react-icons/fa";
import { fetchPortfolioData } from "../services/dataService";
import { animate, stagger } from "animejs";

const fallbackEducations = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "United Institute of Technology, Prayagraj",
    period: "2023 - 2027 (Ongoing)",
    score: "7.47 CGPA",
    status: "In Progress",
    description: "Focusing on artificial intelligence, systems engineering, distributed computing, and advanced data structures.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems & Systems Programming",
      "Database Management Systems (DBMS)",
      "Machine Learning & Neural Networks",
      "Computer Networks & Security",
      "Theory of Computation & Compiler Design"
    ],
    highlights: [
      "Active member of Technical Societies & AI Innovation Clubs",
      "Led multiple university hackathon development teams",
      "Published peer-reviewed research during undergraduate studies"
    ]
  },
  {
    id: "edu-2",
    degree: "Senior Secondary (Class XII - Intermediate)",
    field: "Science Stream (Physics, Chemistry, Mathematics & CS)",
    institution: "Allahabad Public School, Prayagraj",
    period: "2021 - 2022",
    score: "85.8%",
    status: "Completed",
    description: "Core science education with foundation in advanced mathematics and computer science fundamentals.",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    highlights: ["Distinction in Mathematics and Computer Science"]
  },
  {
    id: "edu-3",
    degree: "Secondary School (Class X - Matriculation)",
    field: "General Science & Mathematics",
    institution: "Allahabad Public School, Prayagraj",
    period: "2019 - 2020",
    score: "88.3%",
    status: "Completed",
    description: "Comprehensive foundational secondary education.",
    coursework: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    highlights: ["Top percentile in Mathematics and Science subjects"]
  }
];

const EducationPage = () => {
  const [educations, setEducations] = useState(fallbackEducations);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Asynchronous AJAX Data Fetching
    fetchPortfolioData().then((data) => {
      if (data && data.educations) {
        setEducations(data.educations);
      }
      try {
        animate(".edu-card", {
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
          ACADEMIC QUALIFICATIONS
        </div>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-bold">
          ACADEMIC FOUNDATION
        </p>
        <h1 className="text-[36px] sm:text-[52px] font-extrabold font-poppins text-white tracking-tight mt-1">
          Education.
        </h1>
        <p className="text-zinc-400 text-[15px] sm:text-[17px] mt-3 max-w-3xl leading-relaxed">
          Rigorous academic training in computer science, software engineering, and computational mathematics.
        </p>
      </div>

      {/* Bespoke Brutalist Education Cards */}
      <div className="space-y-8">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="edu-card opacity-0 brutalist-panel rounded-3xl p-6 sm:p-9 border border-white/10 hover:border-white/40 transition-all duration-300">
            
            {/* Top row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/20 uppercase">
                    {edu.status}
                  </span>
                  <span className="text-[12px] font-mono font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-lg border border-white/15">
                    {edu.score}
                  </span>
                </div>

                <h2 className="text-white text-[22px] sm:text-[26px] font-extrabold font-poppins tracking-tight">
                  {edu.degree}
                </h2>
                <h3 className="text-zinc-300 text-[15px] sm:text-[17px] font-mono mt-1">
                  {edu.institution}
                </h3>
                <p className="text-[13px] font-mono text-zinc-400 mt-1">
                  {edu.field}
                </p>
              </div>

              <div className="font-mono text-[13px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <FaCalendarAlt className="w-3.5 h-3.5 text-zinc-400" /> {edu.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-zinc-300 text-[14px] sm:text-[15px] leading-relaxed font-poppins">
              {edu.description}
            </p>

            {/* Coursework */}
            {edu.coursework && (
              <div className="mt-6">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-3">
                  REPRESENTATIVE COURSEWORK
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {edu.highlights && (
              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  HIGHLIGHTS &amp; ACTIVITIES
                </h4>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-zinc-300 text-[13px] font-poppins">
                      <FaAward className="w-3 h-3 text-white shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
