import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTerminal, FaTimes } from "react-icons/fa";

const COMMANDS = {
  "help": "Display all available terminal commands and system controls",
  "huzaifa": "Display HUZAIFA monochrome brutalist telemetry and host specs",
  "noirfetch": "Alias for HUZAIFA telemetry and system diagnostics",
  "neofetch": "Alias for HUZAIFA system telemetry",
  "whoami": "Display engineer dossier, academic credentials, and roles",
  "projects": "List all flagship production systems with live endpoints",
  "technologies": "Display core backend, ML, database, and system arsenal",
  "certifications": "View verified academic credentials and research papers",
  "research": "Inspect IJDDT protein homology research publication",
  "experience": "Inspect Sanfy (Orvanto AI) backend internship dossier",
  "resume": "Open official 1-page technical resume PDF",
  "anveshaksutra": "Inspect AnveshakSutra Zero-Knowledge OSINT architecture",
  "kavachg": "Inspect KavachG Edge-AI Industrial Safety CV architecture",
  "concept3d": "Inspect Concept-3D Prompt-to-3D Spatial Latent Generator",
  "aegis": "Inspect A.E.G.I.S. Real-Time Audio Edge Scam Defense",
  "sunmap": "Inspect SunMap 3D Spatial Solar Irradiance Engine",
  "github": "Open verified GitHub profile (GuruMachanica)",
  "linkedin": "Open verified LinkedIn profile (mohammad--huzaifa)",
  "email": "Initiate direct transmission to mdhuzaifa00786@gmail.com",
  "socials": "List all professional social channels and links",
  "clear": "Reverse word-by-word backspace purge of terminal screen",
  "exit": "Close Monolith System CLI terminal"
};

const SUGGESTED_CHIPS = ["help", "noirfetch", "projects", "certifications", "experience", "resume", "github", "linkedin", "clear"];

const HUZAIFA_ASCII = `  ██╗  ██╗██╗   ██╗███████╗ █████╗ ██╗███████╗ █████╗ 
  ██║  ██║██║   ██║╚══███╔╝██╔══██╗██║██╔════╝██╔══██╗
  ███████║██║   ██║  ███╔╝ ███████║██║█████╗  ███████║
  ██╔══██║██║   ██║ ███╔╝  ██╔══██║██║██╔══╝  ██╔══██║
  ██║  ██║╚██████╔╝███████╗██║  ██║██║██║     ██║  ██║
  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚═╝

  Host: Mohammad Huzaifa (Agentic AI & Backend Architect)
  Stack: FastAPI • PyTorch • Three.js • Docker • PostgreSQL
  Systems: 5 Production Deployments (/projects)
  Status: Available for Engineering Roles`;

// Typewriter message line renderer with realistic deliberate pacing
const TypewriterLine = ({ text, type, isStreaming, onComplete }) => {
  const [displayedText, setDisplayedText] = useState(isStreaming ? "" : text);
  const [isDone, setIsDone] = useState(!isStreaming);

  useEffect(() => {
    if (!isStreaming) {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }

    let currentIndex = 0;
    setDisplayedText("");
    setIsDone(false);

    // Realistic typewriter rhythm: visible character-by-character cadence
    const speed = text.length > 400 ? 6 : text.length > 150 ? 12 : 20;
    const interval = setInterval(() => {
      currentIndex += text.length > 500 ? 3 : text.length > 250 ? 2 : 1;
      if (currentIndex >= text.length) {
        setDisplayedText(text);
        setIsDone(true);
        clearInterval(interval);
        if (onComplete) onComplete();
      } else {
        setDisplayedText(text.slice(0, currentIndex));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, isStreaming]);

  return (
    <div
      className={`leading-relaxed whitespace-pre-wrap ${
        type === "user"
          ? "text-white font-bold"
          : type === "err"
          ? "text-zinc-400 font-bold"
          : type === "sys"
          ? "text-zinc-200 font-mono text-[11px] sm:text-[12px]"
          : "text-zinc-300 font-mono"
      }`}>
      {displayedText}
      {!isDone && (
        <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-pulse align-middle" />
      )}
    </div>
  );
};

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { id: 1, type: "sys", text: "Huzaifa Monolith System CLI [Version 3.0.0-PROD]", isStreaming: false },
    { id: 2, type: "sys", text: "Type 'help' or 'noirfetch' for system diagnostics. Press Tab for autocomplete.", isStreaming: false }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isClearing, setIsClearing] = useState(false);

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

  // Word-by-word backspacing erase on clear
  const triggerReverseWordErase = () => {
    if (history.length === 0) {
      setHistory([
        { id: Date.now(), type: "sys", text: "Huzaifa Monolith System CLI [Version 3.0.0-PROD] — Buffer Cleared", isStreaming: true }
      ]);
      return;
    }

    setIsClearing(true);

    // Deep copy current history
    let currentHistory = history.map((item) => ({ ...item, isStreaming: false }));

    const stepInterval = setInterval(() => {
      if (currentHistory.length === 0) {
        clearInterval(stepInterval);
        setIsClearing(false);
        setHistory([
          { id: Date.now(), type: "sys", text: "Huzaifa Monolith System CLI [Version 3.0.0-PROD] — Buffer Cleared", isStreaming: true }
        ]);
        return;
      }

      // Look at the last item
      const lastIndex = currentHistory.length - 1;
      let lastText = currentHistory[lastIndex].text.trimEnd();

      if (lastText.length === 0) {
        // Pop empty line
        currentHistory = currentHistory.slice(0, lastIndex);
      } else {
        // Find last space or newline to delete word-by-word
        const lastSpaceIdx = Math.max(lastText.lastIndexOf(" "), lastText.lastIndexOf("\n"));
        if (lastSpaceIdx > 0) {
          currentHistory[lastIndex].text = lastText.slice(0, lastSpaceIdx);
        } else {
          // Only one word left on this line, clear the line
          currentHistory = currentHistory.slice(0, lastIndex);
        }
      }

      setHistory([...currentHistory]);
    }, 40); // 40ms per word erase
  };

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear" || trimmed === "cls") {
      triggerReverseWordErase();
      setInput("");
      return;
    }

    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    const userEntry = { id: Date.now(), type: "user", text: `huzaifa@monolith:~$ ${cmdStr}`, isStreaming: false };
    let responseEntry = null;

    switch (trimmed) {
      case "help":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: Object.entries(COMMANDS)
            .map(([cmd, desc]) => `  ${cmd.padEnd(18)} - ${desc}`)
            .join("\n"),
          isStreaming: true
        };
        break;

      case "huzaifa":
      case "noirfetch":
      case "neofetch":
      case "sysinfo":
        responseEntry = {
          id: Date.now() + 1,
          type: "sys",
          text: HUZAIFA_ASCII,
          isStreaming: true
        };
        break;

      case "whoami":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `Name: Mohammad Huzaifa
Role: Agentic AI Engineer & Scalable Backend Architect
Education: B.Tech Computer Science & Engineering (2023 - 2027)
Specialization: Multi-Agent Swarms, Zero-Knowledge Privacy, Distributed Systems
GitHub: https://github.com/GuruMachanica
LinkedIn: https://linkedin.com/in/mohammad--huzaifa/`,
          isStreaming: true
        };
        break;

      case "github":
      case "gh":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[GITHUB] https://github.com/GuruMachanica\nOpening verified GitHub profile in new tab...`,
          isStreaming: true
        };
        setTimeout(() => window.open("https://github.com/GuruMachanica", "_blank"), 500);
        break;

      case "linkedin":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[LINKEDIN] https://linkedin.com/in/mohammad--huzaifa/\nOpening verified LinkedIn profile in new tab...`,
          isStreaming: true
        };
        setTimeout(() => window.open("https://linkedin.com/in/mohammad--huzaifa/", "_blank"), 500);
        break;

      case "socials":
      case "social":
      case "links":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[VERIFIED PROFESSIONAL CHANNELS]
- GitHub:    https://github.com/GuruMachanica
- LinkedIn:  https://linkedin.com/in/mohammad--huzaifa/
- Email:     mailto:mdhuzaifa00786@gmail.com`,
          isStreaming: true
        };
        break;

      case "email":
      case "mail":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[EMAIL] Initiating direct transmission to mdhuzaifa00786@gmail.com...`,
          isStreaming: true
        };
        setTimeout(() => {
          window.location.href = "mailto:mdhuzaifa00786@gmail.com?subject=Engineering%20Inquiry%20-%20Mohammad%20Huzaifa";
        }, 500);
        break;

      case "certifications":
      case "certs":
      case "research":
      case "paper":
      case "publications":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[ACADEMIC & PEER-REVIEWED CREDENTIALS]
- IJDDT Research Paper: DOI 10.25258/ijddt.16.43s.31 (PPF Protein Homology Detection)
- Harvard University: CS50 AI (Introduction to AI with Python, Jul 2026)
- GeeksforGeeks: Python Programming Self-Paced (Jul 2025)
Routing to /certifications interactive dossier viewer...`,
          isStreaming: true
        };
        setTimeout(() => {
          navigate("/certifications");
          setIsOpen(false);
        }, 1100);
        break;

      case "experience":
      case "internship":
      case "sanfy":
      case "orvanto":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[INDUSTRY EXPERIENCE]
- Role: Backend Developer Intern (Hybrid, India)
- Company: Sanfy Consultancy Services Pvt. Ltd. (Orvanto AI)
- Period: May 2026 - Jul 2026
- Focus: Asynchronous FastAPI microservices, ML pipelines, MongoDB/MySQL query optimization
Routing to /experience...`,
          isStreaming: true
        };
        setTimeout(() => {
          navigate("/experience");
          setIsOpen(false);
        }, 1100);
        break;

      case "resume":
      case "cv":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[RESUME] Routing to /resume master 1-page PDF dossier...`,
          isStreaming: true
        };
        setTimeout(() => {
          navigate("/resume");
          setIsOpen(false);
        }, 1000);
        break;

      case "projects":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[FLAGSHIP PRODUCTION PLATFORMS]
1. AnveshakSutra  -> Zero-Knowledge OSINT & 3D Graph ML (https://anveshak-sutra.vercel.app/)
2. Concept-3D     -> Prompt-to-3D Spatial Latent Generator (https://concept-3d.vercel.app/)
3. A.E.G.I.S.     -> Real-Time Audio Edge Scam Defense (https://aegis-anti-scam.netlify.app/)
4. SunMap         -> 3D Spatial Solar Irradiance Engine (https://sunmapsolar.netlify.app/)
5. KavachG        -> Autonomous Edge Industrial Safety CV by Team CodeGambit (https://kavach-g.vercel.app/)
Routing to /projects...`,
          isStreaming: true
        };
        setTimeout(() => {
          navigate("/projects");
          setIsOpen(false);
        }, 1200);
        break;

      case "anveshaksutra":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[SYSTEM] AnveshakSutra — Zero-Knowledge Breach OSINT & 3D Graph ML
- Stack: K-Anonymity (k=50), PyTorch Geometric, Three.js WebGL, Celery
- Live Preview: https://anveshak-sutra.vercel.app/
- Repo: https://github.com/GuruMachanica/AnveshakSutra`,
          isStreaming: true
        };
        break;

      case "kavachg":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[SYSTEM] KavachG — Autonomous Edge Industrial Safety CV (Team CodeGambit)
- Stack: YOLOv8 (98.4% mAP50), 17-Point Pose, Three.js Plant Digital Twin
- Live Preview: https://kavach-g.vercel.app/
- Repo: https://github.com/GuruMachanica/KavachG`,
          isStreaming: true
        };
        break;

      case "concept3d":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[SYSTEM] Concept-3D — Prompt-to-3D Spatial Latent Generator
- Stack: PyTorch, Generative 3D, ChromaDB Vector Memory, Three.js
- Live Preview: https://concept-3d.vercel.app/
- Repo: https://github.com/GuruMachanica/Concept-3D`,
          isStreaming: true
        };
        break;

      case "aegis":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[SYSTEM] A.E.G.I.S. — Real-Time Audio Edge Scam Defense
- Stack: FastAPI, AASIST Deepfake Audio, WebSockets, Sarvam STT
- Live Preview: https://aegis-anti-scam.netlify.app/
- Repo: https://github.com/GuruMachanica/A.E.G.I.S.`,
          isStreaming: true
        };
        break;

      case "sunmap":
        responseEntry = {
          id: Date.now() + 1,
          type: "out",
          text: `[SYSTEM] SunMap — 3D Spatial Solar Irradiance Engine
- Stack: Three.js, CityGML LOD2, Perez Transposition, PyTorch
- Live Preview: https://sunmapsolar.netlify.app/
- Repo: https://github.com/GuruMachanica/SunMap`,
          isStreaming: true
        };
        break;

      case "exit":
      case "quit":
        setIsOpen(false);
        setInput("");
        return;

      default:
        responseEntry = {
          id: Date.now() + 1,
          type: "err",
          text: `command not found: "${trimmed}". Type 'help' to inspect available system commands.`,
          isStreaming: true
        };
        break;
    }

    setHistory((prev) => [...prev, userEntry, ...(responseEntry ? [responseEntry] : [])]);
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
                  <span className="w-3 h-3 rounded-full bg-white/20 cursor-pointer hover:bg-white/40 transition-colors" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-white/40" />
                  <span className="w-3 h-3 rounded-full bg-white/60" />
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

              {/* Console Output Area with Paced Typewriter & Word-by-Word Backspace */}
              <div
                ref={scrollRef}
                className="p-4 flex-1 overflow-y-auto font-mono text-[13px] space-y-2 select-text min-h-[220px] max-h-[420px]">
                {history.map((h) => (
                  <TypewriterLine
                    key={h.id || h.text}
                    text={h.text}
                    type={h.type}
                    isStreaming={h.isStreaming}
                  />
                ))}
                {isClearing && (
                  <div className="text-zinc-500 font-mono text-[12px] flex items-center gap-1">
                    <span className="w-2 h-4 bg-white animate-pulse" />
                    <span>[PURGING BUFFER WORD-BY-WORD...]</span>
                  </div>
                )}
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

              {/* Console Input Bar with Blinking Monospace Prompt Cursor */}
              <form
                onSubmit={onSubmit}
                className="p-3 bg-[#0d0d0d] border-t border-white/10 flex items-center gap-2">
                <span className="text-white font-mono text-[13px] select-none font-bold">
                  huzaifa@monolith:~$
                </span>
                <div className="flex-1 relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onKeyDown={handleKeyDownInput}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="type help, noirfetch, projects, resume... (Tab to autocomplete)"
                    className="w-full bg-transparent text-white font-mono text-[13px] focus:outline-none placeholder:text-zinc-600"
                  />
                </div>
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
