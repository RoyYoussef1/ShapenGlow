import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../data/services";
import { ServiceIcon } from "../components/Icons";
import CtaBand from "../components/CtaBand";
import { img } from "../data/images";

export default function Services() {
  useScrollReveal();

  return (
    <div className="page">
      <section className="page-hero theme-dark">
        <div className="glowbg" aria-hidden="true" />
        <div className="wrap page-hero-grid">
          <div className="page-hero-copy">
            <span className="eyebrow">Our services</span>
            <h1>
              Recovery and beauty, <span className="glow-word">refined</span>.
            </h1>
            <p className="lead">
              Every treatment is delivered by trained therapists and tailored to your goals. Mix and
              match, or follow a guided plan.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Book a session <span className="arr">→</span>
              </Link>
            </div>
          </div>
          <figure className="media">
            <img src={img.maderoLegs.src} alt={img.maderoLegs.alt} />
          </figure>
        </div>
      </section>

      <section className="sec theme-light">
        <div className="wrap">
          <div className="head reveal">
            <span className="eyebrow">Treatments</span>
            <h2>Six ways to move better and feel lighter</h2>
          </div>
          <div className="svc-list">
            {services.map((s, i) => (
              <div className="svc-item reveal" key={s.k}>
                <div className="top">
                  <ServiceIcon name={s.k} />
                  <span className="num">0{i + 1}</span>
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <ul className="tags">
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec theme-sea">
        <div className="wrap split">
          <div className="split-media reveal">
            <figure className="media media-tall">
              <img src={img.maderoDark.src} alt={img.maderoDark.alt} loading="lazy" />
            </figure>
          </div>
          <div className="split-copy reveal">
            <span className="eyebrow">Spotlight</span>
            <h2>Maderotherapy</h2>
            <p>
              A sculpting wooden-roller massage that stimulates circulation, helps smooth the skin and
              refines the body's contours.
            </p>
            <ul className="checks">
              <li>Stimulates circulation</li>
              <li>Helps smooth the look of the skin</li>
              <li>Refines the body's contours</li>
            </ul>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Book Maderotherapy <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec theme-white">
        <div className="wrap split flip">
          <div className="split-media reveal">
            <figure className="media media-tall">
              <img src={img.tablet.src} alt={img.tablet.alt} loading="lazy" />
            </figure>
          </div>
          <div className="split-copy reveal">
            <span className="eyebrow">Spotlight</span>
            <h2>Intelligent EMS training</h2>
            <p>
              Electrical muscle stimulation activates deep muscle layers, giving you an efficient
              full-body workout in a fraction of the time.
            </p>
            <ul className="checks">
              <li>Builds strength and tone where regular training struggles to reach</li>
              <li>Settings adjusted to you, session by session</li>
              <li>Guided by a therapist from warm-up to finish</li>
            </ul>
            <div className="actions">
              <Link className="btn btn-primary" to="/contact">
                Try an EMS session <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        theme="theme-white"
        image={img.sculpt}
        eyebrow="Not sure where to start?"
        title="Tell us your goal"
        text="We'll recommend the right treatment plan for you."
        primary={{ to: "/contact", label: "Get a recommendation" }}
      />
    </div>
  );
}
