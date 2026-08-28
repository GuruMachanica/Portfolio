import React, { useState, useEffect } from "react";

const AmbientGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[999] transition-opacity duration-300 mix-blend-screen"
      style={{
        opacity,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255, 255, 255, 0.055), transparent 75%)`
      }}
    />
  );
};

export default AmbientGlow;
