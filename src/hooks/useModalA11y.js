import { useEffect, useRef } from "react";

/**
 * useModalA11y — accessible modal behavior in one hook.
 *
 * - Escape closes (via onClose)
 * - Focus is trapped inside the dialog while open (Tab / Shift+Tab cycle)
 * - Focus is restored to the previously focused element on close
 * - Body scroll is locked while open
 *
 * Usage: const ref = useModalA11y(open, onClose); <div ref={ref} role="dialog" aria-modal="true">...
 */
export default function useModalA11y(isOpen, onClose) {
  const containerRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;

    // Move focus into the dialog (first focusable, else the container)
    const container = containerRef.current;
    const focusablesSel =
      'a[href], button:not([disabled]), textarea, input, select, iframe, [tabindex]:not([tabindex="-1"])';
    const first = container?.querySelector(focusablesSel);
    (first || container)?.focus?.({ preventScroll: true });

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose?.();
        return;
      }

      if (e.key === "Tab" && container) {
        const focusables = Array.from(
          container.querySelectorAll(focusablesSel)
        ).filter((el) => el.offsetParent !== null || el === container);
        if (focusables.length === 0) return;

        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      document.body.style.overflow = prevOverflow;
      // Restore focus to the trigger element
      if (previouslyFocused.current?.focus) {
        previouslyFocused.current.focus({ preventScroll: true });
      }
    };
  }, [isOpen, onClose]);

  return containerRef;
}
