import { useScrollReveal } from "../hooks/useScrollReveal";
import { ValueIcon } from "../components/Icons";
import CtaBand from "../components/CtaBand";
import { img } from "../data/images";

const values = [
  { icon: "care", t: "Care first", d: "You're a person, not a session. We listen before we treat and adapt as you progress." },
  { icon: "results", t: "Real results", d: "Proven technology and honest expectations. We track progress so you can see it." },
  { icon: "glow", t: "Always glowing", d: "From your first visit to your last, we want you leaving lighter, stronger and brighter." },
];

const stats = [
  { num: "6", lbl: "Core treatments under one roof" },
  { num: "1:1", lbl: "Therapist-guided sessions" },
  { num: "100%", lbl: "Personalised plans" },
];

export default function About() {
  useScrollReveal();

  return (
    <div className="page">
      <section className="page-hero theme-dark">
        <div className="glowbg" aria-hidden="true" />
        <div className="wrap page-hero-grid">
          <div className="page-hero-copy">
            <span className="eyebrow">About us</span>
            <h1>
              Where the body learns to <span className="glow-word">glow</span>.
            </h1>
            <p className="lead">
              Shape N Glow is a physiotherapy and wellness center built on a simple belief: feeling good
              and looking good are the same journey.
            </p>
          </div>
          <div className="collage">
            <figure className="media">
              <img src={img.sculpt.src} alt={img.sculpt.alt} />
            </figure>
            <figure className="media small">
              <img src={img.coach.src} alt={img.coach.alt} />
            </figure>
          </div>
        </div>
      </section>

      <section className="sec theme-light">
        <div className="wrap split flip">
          <div className="split-media reveal">
            <figure className="media media-tall">
              <img src={img.emsSuit.src} alt={img.emsSuit.alt} loading="lazy" />
            </figure>
          </div>
          <div className="split-copy reveal">
            <span className="eyebrow">Our story</span>
            <h2>A center for recovery and radiance</h2>
            <p>
              We opened our doors to bridge two worlds that too often stay separate: the clinic and the
              spa. On one side, real physiotherapy and intelligent EMS training that rebuild strength and
              relieve pain. On the other, advanced sculpting treatments that refine and renew.
            </p>
            <p>
              Every plan is personal, every session is guided, and every result is built to last. No
              shortcuts, no empty promises, just care, technology and a team that's genuinely invested
              in how you feel.
            </p>
          </div>
        </div>
      </section>

      <section className="strip-stats theme-teal">
        <div className="wrap stat-row reveal">
          {stats.map((s) => (
            <div className="stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec theme-dark">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What we stand for</span>
            <h2>Our values</h2>
          </div>
          <div className="values">
            {values.map((v) => (
              <div className="value reveal" key={v.t}>
                <ValueIcon name={v.icon} />
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        image={img.trx}
        eyebrow="Visit us"
        title="Come see the space"
        primary={{ to: "/contact", label: "Book a visit" }}
      />
    </div>
  );
}
