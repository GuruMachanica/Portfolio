import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaTimes, FaArrowRight, FaKeyboard } from "react-icons/fa";

const COMMANDS = {
  help: "Display list of available system commands",
  overview: "Navigate to System Overview & Engineering Pillars (/overview)",
  tech: "Launch 3D WebGL Technology Stack (/technologies)",
  projects: "Explore Production Systems & Repositories (/projects)",
  experience: "Review Industry Career Experience (/experience)",
  education: "Inspect Academic Foundations & Coursework (/education)",
  publications: "View IJDDT Research Paper & Harvard CS50 Credential (/certifications)",
  achievements: "View Hackathons & Innovation Awards (/achievements)",
  contact: "Open Direct Communication Channel (/contact)",
  resume: "Download / View Mohammad Huzaifa Resume (PDF)",
  skills: "Print active engineering skills matrix",
  "sudo hire-huzaifa": "Initiate priority hiring handshake protocol",
  clear: "Clear terminal console output",
  exit: "Close command palette"
};

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "sys", text: "Huzaifa Monolith System CLI [Version 2.6.0]" },
    { type: "sys", text: "Type 'help' to view available commands, or navigate via keywords." }
  ]);
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

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

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
        window.location.href = "mailto:mdhuzaifa00786@gmail.com?subject=Engineering%20Opportunity";
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
          text: `command not found: ${trimmed}. Type 'help' for available commands.`
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
        className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-[9998] flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black font-mono text-[12px] shadow-2xl transition-all duration-300">
        <FaTerminal className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black" />
        <span className="hidden sm:inline font-bold">CLI</span>
        <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
          ^K
        </kbd>
      </button>

      {/* Terminal Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-[#090909] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[80vh]">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#111111] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="text-[12px] font-mono text-zinc-400 ml-2">
                    huzaifa@monolith: ~ (bash)
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white p-1 transition-colors">
                  <FaTimes className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Console Output Area */}
              <div
                ref={scrollRef}
                className="p-4 flex-1 overflow-y-auto font-mono text-[13px] space-y-2 select-text">
                {history.map((h, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed whitespace-pre-wrap ${
                      h.type === "user"
                        ? "text-white font-bold"
                        : h.type === "err"
                        ? "text-zinc-400 font-bold"
                        : h.type === "sys"
                        ? "text-zinc-500"
                        : "text-zinc-300"
                    }`}>
                    {h.text}
                  </div>
                ))}
              </div>

              {/* Console Input Bar */}
              <form
                onSubmit={onSubmit}
                className="p-3 bg-[#0d0d0d] border-t border-white/10 flex items-center gap-2">
                <span className="text-zinc-400 font-mono text-[13px] select-none">
                  huzaifa@monolith:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="type help, projects, tech, resume..."
                  className="flex-1 bg-transparent text-white font-mono text-[13px] focus:outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white hover:text-black text-white text-[11px] font-mono font-bold transition-colors">
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
