import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MAPS_URL, INSTAGRAM_URL } from "../data/services";

const SERVICE_OPTIONS = [
  "EMS Training",
  "Maderotherapy",
  "Body Sculpting",
  "Cellulite & Fat Reduction",
  "Pressotherapy",
  "Physical Therapy",
  "Not sure yet — recommend something",
];

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });
  const [attempted, setAttempted] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const invalidName = attempted && !form.name.trim();
  const invalidPhone = attempted && !form.phone.trim();
  const errStyle = { borderColor: "#e07a8b" };

  const onSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (!form.name.trim() || !form.phone.trim()) return;
    // No backend yet — see README for wiring this to email / WhatsApp.
    setSent(true);
    setForm({ name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
    setAttempted(false);
  };

  return (
    <div className="page active">
      <section className="page-hero">
        <div className="b" aria-hidden="true" />
        <div className="wrap">
          <span className="eyebrow">Get in touch</span>
          <h1>
            Let's start your
            <br />
            <span className="glow-word">glow</span> up.
          </h1>
          <p className="lead">Book a session or ask us anything. We usually reply within a few hours.</p>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: "30px" }}>
        <div className="wrap contact-grid">
          <div className="reveal">
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="cf-name">Full name</label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  style={invalidName ? errStyle : undefined}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-phone">Phone / WhatsApp</label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="+961 ..."
                  value={form.phone}
                  onChange={update("phone")}
                  style={invalidPhone ? errStyle : undefined}
                />
              </div>
              <div className="field">
                <label htmlFor="cf-service">I'm interested in</label>
                <select id="cf-service" value={form.service} onChange={update("service")}>
                  {SERVICE_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Message</label>
                <textarea
                  id="cf-msg"
                  placeholder="Tell us a little about your goals..."
                  value={form.message}
                  onChange={update("message")}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send request <span className="arr">→</span>
              </button>
              <div className={`form-msg${sent ? " show" : ""}`}>
                Thanks! Your request has been noted. We'll be in touch shortly to confirm your session. ✦
              </div>
            </form>
          </div>

          <div className="reveal">
            <div className="contact-cards">
              <div className="ccard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Visit us</h4>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Open location in Google Maps →
                  </a>
                </div>
              </div>
              <div className="ccard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
                  </svg>
                </div>
                <div>
                  <h4>Call or WhatsApp</h4>
                  <a href="tel:+96176348117">+961 76 348 117</a>
                </div>
              </div>
              <div className="ccard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@shapenglow.lb">hello@shapenglow.lb</a>
                </div>
              </div>
              <div className="ccard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    @shapenglow.lb
                  </a>
                </div>
              </div>
              <div className="ccard">
                <div className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon–Sat · by appointment</p>
                </div>
              </div>
            </div>

            <div className="map-card">
              <div className="pin">
                <div className="dot" />
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Find us on the map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
