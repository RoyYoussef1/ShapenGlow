import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { MAPS_URL, INSTAGRAM_URL } from "../data/services";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link to="/" className="brand" aria-label="Shape N Glow home">
          <img className="logo-badge" src={logo} alt="Shape N Glow logo" />
        </Link>

        <nav className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
          <Link className="btn btn-primary nav-cta nav-cta-mobile" to="/contact">
            Book a session
          </Link>
        </nav>

        <div className="nav-end">
          <div className="nav-actions">
            <a
              className="nav-social"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              className="nav-social"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
            <span className="nav-divider" aria-hidden="true" />
            <Link className="btn btn-primary nav-cta" to="/contact">
              Book a session
            </Link>
          </div>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
