import { useEffect, useRef } from "react";

/**
 * AmbientGlow - cursor-following radial glow.
 * Writes directly to the DOM node via refs (no per-move React re-render),
 * and throttles work to animation frames for smooth, cheap tracking.
 */
const AmbientGlow = () => {
  const glowRef = useRef(null);
  const pos = useRef({ x: -1000, y: -1000 });
  const rafId = useRef(null);
  const framePending = useRef(false);

  useEffect(() => {
    const paint = () => {
      framePending.current = false;
      const el = glowRef.current;
      if (!el) return;
      el.style.opacity = "1";
      el.style.background = `radial-gradient(600px circle at ${pos.current.x}px ${pos.current.y}px, rgba(255, 255, 255, 0.055), transparent 75%)`;
    };

    const schedulePaint = () => {
      if (framePending.current) return;
      framePending.current = true;
      rafId.current = requestAnimationFrame(paint);
    };

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      schedulePaint();
    };

    const handleMouseLeave = () => {
      const el = glowRef.current;
      if (el) el.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[999] transition-opacity duration-300 mix-blend-screen"
      style={{ opacity: 0 }}
    />
  );
};

export default AmbientGlow;
