import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ServicesCarousel from "../components/ServicesCarousel";
import CtaBand from "../components/CtaBand";
import { StepIcon } from "../components/Icons";
import { img } from "../data/images";
import { faqs } from "../data/faq";

const modalities = [
  "EMS Training",
  "Maderotherapy",
  "Body Sculpting",
  "Cellulite and Fat Reduction",
  "Pressotherapy",
  "Physical Therapy",
];

const steps = [
  { n: "Step 01", icon: "assess", t: "Assess", d: "A one-on-one consultation to understand your body, history and goals." },
  { n: "Step 02", icon: "plan", t: "Plan", d: "A personalised treatment plan blending recovery and sculpting services." },
  { n: "Step 03", icon: "treat", t: "Treat", d: "Guided sessions with our therapists using advanced, proven technology." },
  { n: "Step 04", icon: "glow", t: "Glow", d: "Track your progress as you move better, feel lighter and look radiant." },
];

const gallery = [
  { ...img.trx, cap: "Suspension training" },
  { ...img.maderoDark, cap: "Maderotherapy" },
  { ...img.tablet, cap: "Intelligent EMS" },
];

export default function Home() {
  useScrollReveal();

  return (
    <div className="page">
      <section className="hero theme-dark">
        <div className="hero-bloom" aria-hidden="true">
          <div className="hero-core" />
          <div className="ring r1" />
          <div className="ring r2" />
          <div className="ring r3" />
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Physiotherapy and Wellness · Lebanon</span>
            <h1>
              Recover stronger.
              <span className="l2">
                Then <span className="glow-word">glow</span>.
              </span>
            </h1>
            <p className="lead">Your all-in-one destination for recovery and beauty.</p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Book your first session <span className="arr">→</span>
              </Link>
              <Link className="btn btn-ghost" to="/services">
                Explore treatments
              </Link>
            </div>
            <ul className="hero-meta">
              <li>Physiotherapy</li>
              <li>EMS training</li>
              <li>Maderotherapy</li>
              <li>Body sculpting</li>
            </ul>
          </div>

          <div className="hero-visual">
            <figure className="media hv-main">
              <img src={img.kettlebell.src} alt={img.kettlebell.alt} fetchpriority="high" />
            </figure>
            <figure className="media hv-inset">
              <img src={img.maderoLegs.src} alt={img.maderoLegs.alt} />
            </figure>
          </div>
        </div>
      </section>

      <div className="strip theme-teal" aria-hidden="true">
        <div className="strip-track">
          {[...modalities, ...modalities].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section className="sec theme-light">
        <div className="wrap split">
          <div className="split-media reveal">
            <figure className="media media-tall">
              <img src={img.sculpt.src} alt={img.sculpt.alt} loading="lazy" />
            </figure>
            <div className="badge-float">
              <strong>6</strong>
              <span>Core treatments under one roof</span>
            </div>
          </div>
          <div className="split-copy reveal">
            <span className="eyebrow">The Shape N Glow method</span>
            <h2>Two sides of one transformation</h2>
            <p>
              We treat the body as a whole, restoring how it moves and refining how it looks. Science
              and beauty, working together.
            </p>
            <div className="points">
              <div className="point">
                <span className="tag">Recover</span>
                <h3>Clinical physiotherapy and EMS</h3>
                <p>
                  Targeted rehabilitation, pain relief and intelligent EMS training that activates deep
                  muscle in a fraction of the time.
                </p>
              </div>
              <div className="point alt">
                <span className="tag">Glow</span>
                <h3>Sculpting and body contouring</h3>
                <p>
                  Maderotherapy, pressotherapy and contouring treatments that smooth, firm and refine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec theme-dark">
        <div className="wrap">
          <div className="head-row reveal">
            <div className="head">
              <span className="eyebrow">What we do</span>
              <h2>Our services</h2>
              <p>
                Six services, combined into plans that match your goals, from recovery to full body
                transformation.
              </p>
            </div>
            <Link className="btn btn-ghost" to="/services">
              See all services <span className="arr">→</span>
            </Link>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      <section className="sec theme-sea">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Inside the studio</span>
            <h2>Recovery and beauty, under one roof</h2>
          </div>
          <div className="gallery reveal">
            {gallery.map((g) => (
              <figure className="media media-shade" key={g.cap}>
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption className="media-cap">{g.cap}</figcaption>
              </figure>
            ))}
            <div className="media gallery-tile">
              <span className="eyebrow">Six treatments</span>
              <h3>Physiotherapy, EMS, sculpting, pressotherapy and more</h3>
              <Link className="link-arrow" to="/about">
                Meet the center →
              </Link>
            </div>
          </div>
          <p className="gallery-note">Swipe to see more →</p>
        </div>
      </section>

      <section className="sec theme-white">
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

      <section className="sec theme-light" id="faq" aria-labelledby="faq-title">
        <div className="wrap faq-wrap">
          <div className="head reveal">
            <span className="eyebrow">FAQ</span>
            <h2 id="faq-title">Questions, answered</h2>
            <p>Everything you need to know before your first visit.</p>
          </div>
          <div className="faq reveal">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  <h3>{f.q}</h3>
                  <span className="faq-ic" aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        theme="theme-light"
        image={img.coach}
        eyebrow="Your first step"
        title="Ready to reset your body?"
        text="Book your first session and let's build the plan that gets you there."
        primary={{ to: "/contact", label: "Book a session" }}
        secondary={{ to: "/about", label: "Meet the center" }}
      />
    </div>
  );
}
