import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../data/services";
import { ServiceIcon } from "../components/Icons";

const packages = [
  {
    name: "Maderotherapy Course",
    desc: "10 sculpting Maderotherapy sessions for smoother, firmer skin.",
    now: "$250",
    was: "$350",
    save: "Save $100",
    cta: "Book",
    primary: false,
  },
  {
    name: "Summer Body Combo",
    desc: "4 EMS + 4 Maderotherapy sessions — recovery and contouring in one.",
    now: "$140",
    was: "$220",
    save: "Save $80 + 10 free pressotherapy sessions",
    cta: "Claim offer",
    primary: true,
    ribbon: "Best value",
  },
  {
    name: "Custom Plan",
    desc: "Built around your assessment — physiotherapy, EMS, sculpting and more.",
    now: "Tailored",
    was: null,
    save: "Priced after your free consultation",
    cta: "Enquire",
    primary: false,
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <div className="page active">
      <section className="page-hero">
        <div className="b" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">Our services</span>
          <h1>
            Recovery &amp; beauty,
            <br />
            <span className="glow-word">refined</span>.
          </h1>
          <p className="lead">
            Every treatment is delivered by trained therapists and tailored to your goals. Mix and
            match, or follow a guided plan.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: "30px" }}>
        <div className="wrap">
          <div className="svc-detail">
            {services.map((s) => (
              <div className="item reveal" key={s.k}>
                <ServiceIcon name={s.k} />
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <ul>
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head center reveal">
            <span className="eyebrow center">Packages &amp; pricing</span>
            <h2>Bundles that go further</h2>
            <p>Save more when you commit to a plan. All prices in USD.</p>
          </div>
          <div className="pkgs">
            {packages.map((p) => (
              <div className={`pkg reveal${p.primary ? " featured" : ""}`} key={p.name}>
                {p.ribbon && <div className="ribbon">{p.ribbon}</div>}
                <h3>{p.name}</h3>
                <p className="desc">{p.desc}</p>
                <div className="p">
                  <span className="now">{p.now}</span>
                  {p.was && <span className="was">{p.was}</span>}
                </div>
                <p className="save">{p.save}</p>
                <Link
                  className={`btn ${p.primary ? "btn-primary" : "btn-ghost"}`}
                  to="/contact"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="wrap reveal">
          <div className="cta-band">
            <div className="b" aria-hidden="true" />
            <h2>Not sure where to start?</h2>
            <p>Tell us your goal and we'll recommend the right treatment plan for you.</p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" to="/contact">
                Get a recommendation <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
