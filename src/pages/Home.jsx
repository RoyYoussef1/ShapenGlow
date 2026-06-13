import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ServicesCarousel from "../components/ServicesCarousel";
import { StepIcon } from "../components/Icons";
import emsTraining from "../assets/ems-training.jpg";

const modalities = [
  "EMS Training",
  "Maderotherapy",
  "Body Sculpting",
  "Cellulite & Fat Reduction",
  "Pressotherapy",
  "Physical Therapy",
];

const steps = [
  { n: "Step 01", icon: "assess", t: "Assess", d: "A one-on-one consultation to understand your body, history and goals." },
  { n: "Step 02", icon: "plan", t: "Plan", d: "A personalised treatment plan blending recovery and sculpting services." },
  { n: "Step 03", icon: "treat", t: "Treat", d: "Guided sessions with our therapists using advanced, proven technology." },
  { n: "Step 04", icon: "glow", t: "Glow", d: "Track your progress as you move better, feel lighter and look radiant." },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="page active">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bloom" aria-hidden="true">
          <div className="hero-core" />
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow center">Physiotherapy &amp; Wellness · Lebanon</span>
          <h1 style={{ marginTop: "22px" }}>
            Recover stronger.
            <span className="l2">
              Then <span className="glow-word">glow</span>.
            </span>
          </h1>
          <p className="lead">
            Your all-in-one destination for recovery and beauty — where clinical physiotherapy meets
            advanced body sculpting, all under one luminous roof.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">
              Book your first session <span className="arr">→</span>
            </Link>
            <Link className="btn btn-ghost" to="/services">
              Explore treatments
            </Link>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          <span className="line" />
          Scroll
        </div>
      </section>

      {/* MODALITY STRIP */}
      <div className="strip" aria-hidden="true">
        <div className="strip-track">
          {[...modalities, ...modalities].map((m, i) => (
            <span key={i}>
              {m}
              <span />
            </span>
          ))}
        </div>
      </div>

      {/* METHOD */}
      <section className="section-pad">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">The Shape N Glow method</span>
            <h2>Two sides of one transformation</h2>
            <p>
              We treat the body as a whole — restoring how it moves and refining how it looks. Science
              and beauty, working together.
            </p>
          </div>
          <div className="method-split">
            <div className="method-figure reveal">
              <img src={emsTraining} alt="Intelligent EMS training session at Shape N Glow" />
              <div className="figure-edge" aria-hidden="true" />
            </div>
            <div className="method-points reveal">
              <div className="mpoint">
                <span className="tag">Recover</span>
                <h3>Clinical physiotherapy &amp; EMS</h3>
                <p>
                  Targeted rehabilitation, pain relief, and intelligent EMS training that activates deep
                  muscle in a fraction of the time. Guided by therapists, grounded in technique.
                </p>
              </div>
              <div className="mpoint beauty">
                <span className="tag">Glow</span>
                <h3>Sculpting &amp; body contouring</h3>
                <p>
                  Maderotherapy, pressotherapy and contouring treatments that smooth, firm and refine —
                  helping you feel as confident on the outside as you do strong within.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">What we do</span>
            <h2>Treatments designed around you</h2>
            <p>
              Six core services, combined into plans that match your goals — from recovery to full body
              transformation.
            </p>
          </div>
          <ServicesCarousel />
          <div style={{ marginTop: "40px" }} className="reveal">
            <Link className="btn btn-ghost" to="/services">
              See all services &amp; pricing <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="offer">
            <div className="glowbg" aria-hidden="true" />
            <div className="left">
              <span className="badge">Limited summer deal</span>
              <h2>Your summer body is one decision away</h2>
              <p>
                Combine the power of EMS training with the contouring effect of Maderotherapy in one
                results-driven package — for a limited time only.
              </p>
              <div style={{ marginTop: "30px" }}>
                <Link className="btn btn-primary" to="/contact">
                  Claim this offer <span className="arr">→</span>
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="price-row">
                <span className="now">$140</span>
                <span className="was">$220</span>
              </div>
              <p className="lbl">4 EMS sessions + 4 Maderotherapy sessions</p>
              <div style={{ height: "1px", background: "var(--line)" }} />
              <p className="lbl" style={{ color: "var(--champagne)" }}>
                + 10 free pressotherapy sessions after each treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">How it works</span>
            <h2>From first visit to lasting results</h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step reveal" key={s.n}>
                <div className="step-ic">
                  <StepIcon name={s.icon} />
                </div>
                <div className="n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="cta-band">
            <div className="b" aria-hidden="true" />
            <h2>Ready to reset your body?</h2>
            <p>Book your first session and let's build the plan that gets you there.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" to="/contact">
                Book a session <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" to="/about">
                Meet the center
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
