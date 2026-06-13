import { useEffect } from "react";

// Adds the `in` class to `.reveal` elements as they enter the viewport.
// Call once per page; it scans after mount so freshly routed content animates.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
