import { useEffect } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useScrollReveal({ root, selector = "[data-reveal]", amount = 0.18 } = {}) {
  useEffect(() => {
    const scope = root?.current || document;
    const targets = Array.from(scope.querySelectorAll(selector));
    if (targets.length === 0) return undefined;

    if (reducedMotion() || typeof IntersectionObserver === "undefined") {
      targets.forEach((node) => node.setAttribute("data-revealed", ""));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        });
      },
      { threshold: amount, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [root, selector, amount]);
}

export function useScrollVelocity({ target, sensitivity = 42 } = {}) {
  useEffect(() => {
    const node = target?.current || document.documentElement;
    if (reducedMotion()) return undefined;
    if (window.matchMedia("(hover: none)").matches) return undefined;

    let frame = 0;
    let lastY = window.scrollY;
    let impulse = 0;
    let eased = 0;

    const tick = () => {
      eased += (impulse - eased) * 0.14;
      impulse *= 0.86;
      node.style.setProperty("--sv", eased.toFixed(4));

      if (Math.abs(impulse) > 0.002 || Math.abs(eased) > 0.002) {
        frame = requestAnimationFrame(tick);
        return;
      }
      frame = 0;
      impulse = 0;
      eased = 0;
      node.style.setProperty("--sv", "0");
    };

    const onScroll = () => {
      const y = window.scrollY;
      impulse = clamp((y - lastY) / sensitivity, -1, 1);
      lastY = y;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      node.style.removeProperty("--sv");
    };
  }, [target, sensitivity]);
}
