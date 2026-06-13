import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (!finePointer || reduced) return;

    const el = ref.current;
    const onMove = (e) => {
      el.style.opacity = "1";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div id="cursorGlow" ref={ref} aria-hidden="true" />;
}
