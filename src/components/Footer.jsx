import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { MAPS_URL, INSTAGRAM_URL } from "../data/services";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link to="/" className="brand" style={{ marginBottom: "18px" }}>
              <img className="logo-badge" src={logo} alt="Shape N Glow logo" />
            </Link>
            <p style={{ color: "var(--muted)" }}>
              Your all-in-one destination for recovery &amp; beauty. Physiotherapy &amp; wellness, Lebanon.
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Treatments</h4>
            <Link to="/services">EMS Training</Link>
            <Link to="/services">Maderotherapy</Link>
            <Link to="/services">Body Sculpting</Link>
            <Link to="/services">Pressotherapy</Link>
          </div>

          <div>
            <h4>Connect</h4>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              Location
            </a>
            <Link to="/contact">Book a session</Link>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Shape N Glow. All rights reserved.</span>
          <div className="socials">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Location">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
