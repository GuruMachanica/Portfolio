import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaTimes, FaArrowRight, FaKeyboard, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const COMMANDS = {
  help: "Display list of available system commands",
  neofetch: "Render system architecture telemetry & ASCII banner",
  whoami: "Inspect engineer profile, bio & verified credentials",
  projects: "Explore production systems & repositories (/projects)",
  anveshaksutra: "Inspect AnveshakSutra Zero-Knowledge & Graph ML telemetry",
  kavachg: "Inspect KavachG Industrial Safety CV Command Center",
  concept3d: "Inspect Concept-3D Spatial Latent Generator",
  aegis: "Inspect A.E.G.I.S. Audio Edge Scam Defense",
  sunmap: "Inspect SunMap 3D Solar Irradiance Engine",
  giyubot: "Inspect Giyu-Bot Telegram AI Agent (@TomiokaGiyu98_bot)",
  tech: "Launch 3D WebGL Technology Stack (/technologies)",
  resume: "Open verified 1-Page Master Resume (/resume)",
  experience: "Review industry career experience (/experience)",
  education: "Inspect academic foundations & coursework (/education)",
  certifications: "View Harvard CS50 credential & research paper (/certifications)",
  achievements: "View Hackathons & innovation awards (/achievements)",
  contact: "Open direct communication channel (/contact)",
  "sudo hire-huzaifa": "Initiate priority hiring handshake protocol",
  clear: "Clear terminal console output",
  exit: "Close command palette"
};

const SUGGESTED_CHIPS = ["help", "neofetch", "projects", "resume", "whoami", "tech", "sudo hire-huzaifa"];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Huzaifa Monolith System CLI [Version 3.0.0-PROD]" },
    { type: "sys", text: "Type 'help' or 'neofetch' for system diagnostics. Press Tab for autocomplete." }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDownInput = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const current = input.trim().toLowerCase();
      if (!current) return;
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(current));
      if (match) {
        setInput(match);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < cmdHistory.length) {
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: "user", text: `huzaifa@monolith:~$ ${cmdStr}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "out",
          text: Object.entries(COMMANDS)
            .map(([cmd, desc]) => `  ${cmd.padEnd(20)} - ${desc}`)
            .join("\n")
        });
        break;

      case "neofetch":
      case "sysinfo":
        newHistory.push({
          type: "sys",
          text: `
 ██╗  ██╗██╗   ██╗███████╗ █████╗ ██╗███████╗ █████╗ 
 ██║  ██║██║   ██║╚══███╔╝██╔══██╗██║██╔════╝██╔══██╗
 ███████║██║   ██║  ███╔╝ ███████║██║█████╗  ███████║
 ██╔══██║██║   ██║ ███╔╝  ██╔══██║██║██╔══╝  ██╔══██║
 ██║  ██║╚██████╔╝███████╗██║  ██║██║██║     ██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚═╝

 OS: Monolith Linux x86_64 / WebGL Engine
 Host: Mohammad Huzaifa (Agentic AI & Backend Architect)
 Kernel: 6.12.0-monolith-opt
 Core: FastAPI • PyTorch • Three.js • Docker • pgvector
 Systems: AnveshakSutra, Concept3D, AEGIS, SunMap, KavachG
 Latency: < 0.001ms (FastCache L1 Memory Stream)
 Status: Available for High-Impact Engineering Roles
`
        });
        break;

      case "whoami":
        newHistory.push({
          type: "out",
          text: `
Name: Mohammad Huzaifa
Role: Agentic AI Engineer & Scalable Backend Architect
Education: B.Tech Computer Science & Engineering (2023 - 2027)
Specialization: Multi-Agent Swarms, Zero-Knowledge Privacy, Distributed Systems
GitHub: https://github.com/GuruMachanica
LinkedIn: https://linkedin.com/in/mohammad--huzaifa/
`
        });
        break;

      case "anveshaksutra":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] AnveshakSutra — Zero-Knowledge Breach OSINT & 3D Graph ML
- Stack: K-Anonymity (k=50), PyTorch Geometric, Three.js WebGL, Celery
- Live Preview: https://anveshak-sutra.vercel.app/
- Repo: https://github.com/GuruMachanica/AnveshakSutra`
        });
        break;

      case "kavachg":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] KavachG — Autonomous Edge Industrial Safety CV Command Center
- Stack: YOLOv8 (98.4% mAP50), 17-Point Pose, Three.js Plant Digital Twin
- Live Preview: https://kavach-g.vercel.app/
- Repo: https://github.com/GuruMachanica/KavachG`
        });
        break;

      case "concept3d":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] Concept-3D — Prompt-to-3D Spatial Latent Generator
- Stack: PyTorch, Generative 3D, ChromaDB Vector Memory, Three.js
- Live Preview: https://concept-3d.vercel.app/
- Repo: https://github.com/GuruMachanica/Concept-3D`
        });
        break;

      case "aegis":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] A.E.G.I.S. — Real-Time Audio Edge Scam Defense
- Stack: FastAPI, AASIST Deepfake Audio, WebSockets, Sarvam STT
- Live Preview: https://aegis-anti-scam.netlify.app/
- Repo: https://github.com/GuruMachanica/A.E.G.I.S.`
        });
        break;

      case "sunmap":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] SunMap — 3D Spatial Solar Irradiance Engine
- Stack: Three.js, CityGML LOD2, Perez Transposition, PyTorch
- Live Preview: https://sunmapsolar.netlify.app/
- Repo: https://github.com/GuruMachanica/SunMap`
        });
        break;

      case "giyubot":
        newHistory.push({
          type: "out",
          text: `[SYSTEM] Giyu-Bot (冨岡 義勇) — Multi-Modal Telegram AI Agent
- Stack: Python 3.11, Mistral AI, Supabase pgvector HNSW, Edge TTS
- Telegram Handle: @TomiokaGiyu98_bot (https://t.me/TomiokaGiyu98_bot)
- Repo: https://github.com/GuruMachanica/Giyu-Bot`
        });
        break;

      case "overview":
      case "about":
        newHistory.push({ type: "out", text: "Routing to /overview..." });
        navigate("/overview");
        setIsOpen(false);
        break;

      case "tech":
      case "technologies":
      case "skills":
        newHistory.push({
          type: "out",
          text: "Core Stack: Python, C++, FastAPI, PyTorch, Docker, MongoDB, MySQL, OpenCV, WebSockets, Three.js"
        });
        if (trimmed !== "skills") {
          navigate("/technologies");
          setIsOpen(false);
        }
        break;

      case "projects":
        newHistory.push({ type: "out", text: "Routing to /projects..." });
        navigate("/projects");
        setIsOpen(false);
        break;

      case "experience":
        newHistory.push({ type: "out", text: "Routing to /experience..." });
        navigate("/experience");
        setIsOpen(false);
        break;

      case "education":
        newHistory.push({ type: "out", text: "Routing to /education..." });
        navigate("/education");
        setIsOpen(false);
        break;

      case "publications":
      case "certifications":
      case "certs":
        newHistory.push({ type: "out", text: "Routing to /certifications..." });
        navigate("/certifications");
        setIsOpen(false);
        break;

      case "achievements":
      case "awards":
        newHistory.push({ type: "out", text: "Routing to /achievements..." });
        navigate("/achievements");
        setIsOpen(false);
        break;

      case "contact":
        newHistory.push({ type: "out", text: "Routing to /contact..." });
        navigate("/contact");
        setIsOpen(false);
        break;

      case "resume":
      case "cv":
        newHistory.push({ type: "out", text: "Routing to /resume..." });
        navigate("/resume");
        setIsOpen(false);
        break;

      case "sudo hire-huzaifa":
      case "hire":
        newHistory.push({
          type: "out",
          text: "[ACCESS GRANTED] Initiating direct transmission to mdhuzaifa00786@gmail.com..."
        });
        window.location.href = "mailto:mdhuzaifa00786@gmail.com?subject=Engineering%20Opportunity%20-%20Mohammad%20Huzaifa";
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        setIsOpen(false);
        break;

      default:
        newHistory.push({
          type: "err",
          text: `command not found: '${trimmed}'. Type 'help' or click a shortcut below.`
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <>
      {/* Floating CLI Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open CLI Terminal (Ctrl+K)"
        className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-[9998] flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black font-mono text-[12px] shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105">
        <FaTerminal className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black" />
        <span className="hidden sm:inline font-bold">CLI</span>
        <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
          ^K
        </kbd>
      </button>

      {/* Terminal Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-[#090909] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[85vh]">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#111111] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[12px] font-mono text-zinc-400 ml-2">
                    huzaifa@monolith: ~ (bash/zsh)
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white p-1 transition-colors cursor-pointer"
                  title="Close Terminal">
                  <FaTimes className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Console Output Area */}
              <div
                ref={scrollRef}
                className="p-4 flex-1 overflow-y-auto font-mono text-[13px] space-y-2 select-text min-h-[220px] max-h-[420px]">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed whitespace-pre-wrap ${
                      h.type === "user"
                        ? "text-white font-bold"
                        : h.type === "err"
                        ? "text-red-400 font-bold"
                        : h.type === "sys"
                        ? "text-cyan-400 font-mono text-[11px] sm:text-[12px]"
                        : "text-zinc-300"
                    }`}>
                    {h.text}
                  </div>
                ))}
              </div>

              {/* Suggested Quick-Pill Command Chips */}
              <div className="px-3 py-2 bg-[#0c0c0c] border-t border-white/5 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mr-1">Chips:</span>
                {SUGGESTED_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleCommand(chip)}
                    className="px-2 py-0.5 rounded-md bg-white/5 hover:bg-white hover:text-black text-zinc-400 text-[11px] font-mono transition-all cursor-pointer">
                    {chip}
                  </button>
                ))}
              </div>

              {/* Console Input Bar */}
              <form
                onSubmit={onSubmit}
                className="p-3 bg-[#0d0d0d] border-t border-white/10 flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-[13px] select-none font-bold">
                  huzaifa@monolith:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onKeyDown={handleKeyDownInput}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type help, neofetch, projects, resume... (Tab to autocomplete)"
                  className="flex-1 bg-transparent text-white font-mono text-[13px] focus:outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-white text-black font-mono font-bold text-[11px] hover:bg-zinc-200 transition-colors cursor-pointer">
                  EXEC
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
