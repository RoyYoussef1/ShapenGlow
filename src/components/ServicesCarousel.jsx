import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/services";
import { ServiceIcon } from "./Icons";

export default function ServicesCarousel() {
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);
  const items = services.slice(0, 6);

  // track viewport <=680px
  useEffect(() => {
    const mq = window.matchMedia("(max-width:680px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
    return () =>
      mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply);
  }, []);

  // sync active dot with scroll position (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cards = track.querySelectorAll(".svc");
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let min = Infinity;
        cards.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
          if (d < min) {
            min = d;
            best = i;
          }
        });
        setActive(best);
        ticking = false;
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const goTo = (i) => {
    const track = trackRef.current;
    const c = track && track.querySelectorAll(".svc")[i];
    if (c) {
      track.scrollTo({
        left: c.offsetLeft - (track.clientWidth - c.clientWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="svc-grid" ref={trackRef}>
        {items.map((s) => (
          <Link to="/services" className={`svc reveal${isMobile ? " in" : ""}`} key={s.k}>
            <div className="bloom" />
            <ServiceIcon name={s.k} />
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <span className="go">Learn more →</span>
          </Link>
        ))}
      </div>
      <div className="svc-dots" role="tablist" aria-label="Services carousel">
        {isMobile &&
          items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Show service ${i + 1}`}
              className={i === active ? "active" : ""}
              onClick={() => goTo(i)}
            />
          ))}
      </div>
    </>
  );
}
