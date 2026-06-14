import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ValueIcon } from "../components/Icons";
import portrait from "../assets/training-portrait.jpg";

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
    <div className="page active">
      <section className="page-hero">
        <div className="b" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h1>
            Where the body
            <br />
            learns to <span className="glow-word">glow</span>.
          </h1>
          <p className="lead">
            Shape N Glow is a physiotherapy and wellness center built on a simple belief: feeling good
            and looking good are the same journey.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: "30px" }}>
        <div className="wrap about-split">
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2
              style={{
                fontSize: "clamp(2rem,4.4vw,3rem)",
                margin: "18px 0 20px",
                fontWeight: 500,
              }}
            >
              A center for recovery <em style={{ fontFamily: "var(--display)" }}>and</em> radiance
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "18px" }}>
              We opened our doors to bridge two worlds that too often stay separate the clinic and the
              spa. On one side, real physiotherapy and intelligent EMS training that rebuild strength and
              relieve pain. On the other, advanced sculpting treatments that refine and renew.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Every plan is personal, every session is guided, and every result is built to last. No
              shortcuts, no empty promises — just care, technology and a team that's genuinely invested
              in how you feel.
            </p>
          </div>
          <div className="about-visual reveal">
            <img src={portrait} alt="Focused training at Shape N Glow" />
            <div className="visual-glow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
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

          <div className="stat-row reveal">
            {stats.map((s) => (
              <div className="stat" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="cta-band">
            <div className="b" aria-hidden="true" />
            <h2>Come see the space</h2>
            <p>Book a visit, meet the team, and feel the difference for yourself.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" to="/contact">
                Book a visit <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
