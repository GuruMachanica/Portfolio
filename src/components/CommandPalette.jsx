import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTerminal, FaTimes } from "react-icons/fa";
import { COMMANDS, SUGGESTED_CHIPS } from "../constants/cliCommands";
import TypewriterLine from "./cli/TypewriterLine";
import { executeCliCommand } from "./cli/commandHandlers";

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
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
      const isTyping = activeTag === "input" || activeTag === "textarea" || document.activeElement?.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "/" && !isOpen && !isTyping) {
        e.preventDefault();
        setIsOpen(true);
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
      if (match) setInput(match);
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

  const triggerReverseWordErase = () => {
    if (history.length === 0) {
      setHistory([
        { id: Date.now(), type: "sys", text: "Huzaifa Monolith System CLI [Version 3.0.0-PROD] — Buffer Cleared", isStreaming: true }
      ]);
      return;
    }

    setIsClearing(true);
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

      const lastIndex = currentHistory.length - 1;
      let lastText = currentHistory[lastIndex].text.trimEnd();

      if (lastText.length === 0) {
        currentHistory = currentHistory.slice(0, lastIndex);
      } else {
        const lastSpaceIdx = Math.max(lastText.lastIndexOf(" "), lastText.lastIndexOf("\n"));
        if (lastSpaceIdx > 0) {
          currentHistory[lastIndex].text = lastText.slice(0, lastSpaceIdx);
        } else {
          currentHistory = currentHistory.slice(0, lastIndex);
        }
      }

      setHistory([...currentHistory]);
    }, 32);
  };

  const handleCommand = (cmdStr) => {
    const result = executeCliCommand(cmdStr, {
      navigate,
      setIsOpen,
      triggerReverseWordErase
    });

    if (!result) return;
    if (result.isClear || result.isExit) {
      setInput("");
      return;
    }

    setCmdHistory((prev) => [...prev, cmdStr]);
    setHistoryIndex(-1);

    setHistory((prev) => [
      ...prev,
      result.userEntry,
      ...(result.responseEntry ? [result.responseEntry] : [])
    ]);
    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open CLI Terminal (Ctrl+K or /)"
        className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-[9998] flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black font-mono text-[12px] shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-105">
        <FaTerminal className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black" />
        <span className="hidden sm:inline font-bold">CLI</span>
        <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-mono">
          ^K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-[#090909] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[85vh]">
              
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

              <div
                ref={scrollRef}
                className="p-4 flex-1 overflow-y-auto font-mono text-[13px] space-y-2 select-text min-h-[220px] max-h-[420px]">
                {history.map((h, idx) => (
                  <TypewriterLine
                    key={h.id || idx}
                    text={h.text}
                    type={h.type}
                    isStreaming={h.isStreaming}
                    isClearingLast={isClearing && idx === history.length - 1}
                  />
                ))}
              </div>

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
