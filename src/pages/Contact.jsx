import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { MAPS_URL, INSTAGRAM_URL } from "../data/services";
import { img } from "../data/images";

const SERVICE_OPTIONS = [
  "EMS Training",
  "Maderotherapy",
  "Body Sculpting",
  "Cellulite and Fat Reduction",
  "Pressotherapy",
  "Physical Therapy",
  "Other",
];

const BOOKING_URL =
  "https://shapenglow6frq.setmore.com?utm_source=in-app&utm_medium=iosapp&utm_campaign=settsharebp";

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
  const [bookingLoaded, setBookingLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const invalidName = attempted && !form.name.trim();
  const invalidPhone = attempted && !form.phone.trim();
  const errStyle = { borderColor: "#e07a8b" };

  const onSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (!form.name.trim() || !form.phone.trim()) return;
    setSent(true);
    setForm({ name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
    setAttempted(false);
  };

  return (
    <div className="page">
      <section className="page-hero theme-dark">
        <div className="glowbg" aria-hidden="true" />
        <div className="wrap page-hero-grid">
          <div className="page-hero-copy">
            <span className="eyebrow">Get in touch</span>
            <h1>
              Let's start your <span className="glow-word">glow</span> up.
            </h1>
            <p className="lead">Book a session or ask us anything.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#book">
                Book online <span className="arr">→</span>
              </a>
              <a className="btn btn-ghost" href="https://wa.me/96181588171" target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
          <figure className="media">
            <img src={img.maderoDark.src} alt={img.maderoDark.alt} />
          </figure>
        </div>
      </section>

      <section className="sec theme-light" id="book">
        <div className="wrap reveal">
          <div className="booking-card">
            <div className="booking-card-head">
              <div>
                <span className="eyebrow">Skip the back-and-forth</span>
                <h2>Book your session instantly</h2>
                <p>
                  Pick a service, choose a time, done. Confirmed straight to your inbox.
                </p>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open full booking page
              </a>
            </div>

            <div className="booking-frame-wrap">
              {!bookingLoaded && (
                <div className="booking-frame-loading">
                  <div className="spinner" aria-hidden="true" />
                  <span>Loading availability…</span>
                </div>
              )}
              {mounted && (
                <iframe
                  src={BOOKING_URL}
                  title="Book an appointment with ShapenGlow"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  scrolling="yes"
                  allow="web-share; payment"
                  onLoad={() => setBookingLoaded(true)}
                  style={{
                    opacity: bookingLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    display: "block",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sec theme-dark">
        <div className="wrap contact-grid">
          <div className="form-card reveal">
            <span className="eyebrow">Prefer a call back?</span>
            <h2>Send us a request</h2>
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
                Send request
              </button>
              <div className={`form-msg${sent ? " show" : ""}`}>
                Thanks! Your request has been noted. We'll be in touch shortly to confirm your session.
              </div>
            </form>
          </div>

          <div className="contact-side reveal">
            <figure className="media media-wide media-shade">
              <img src={img.plank.src} alt={img.plank.alt} loading="lazy" />
              <figcaption className="media-cap">Mon–Sat · by appointment</figcaption>
            </figure>
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
                    Open location in Google Maps
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
                  <a href="https://wa.me/96181588171" target="_blank" rel="noopener noreferrer">+961 81 588 171</a>
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
          </div>
        </div>
      </section>
    </div>
  );
}
