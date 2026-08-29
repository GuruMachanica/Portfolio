import React, { useState, useEffect } from "react";

const TypewriterLine = ({ text, type, isStreaming, isClearingLast, onComplete }) => {
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
    const speed = text.length > 400 ? 8 : text.length > 150 ? 14 : 22;
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
      {(!isDone || isClearingLast) && (
        <span className="inline-block w-2 h-4 bg-white ml-0.5 animate-pulse align-middle shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      )}
    </div>
  );
};

export default TypewriterLine;
