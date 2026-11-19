import { Link } from "react-router-dom";

export default function CtaBand({ image, eyebrow, title, text, primary, secondary, theme = "theme-dark" }) {
  return (
    <section className={`sec ${theme}`} style={{ paddingTop: 0 }}>
      <div className="wrap reveal">
        <div className="cta-img">
          <img src={image.src} alt="" aria-hidden="true" loading="lazy" />
          <div className="inner">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {text && <p>{text}</p>}
            <div className="actions">
              <Link className="btn btn-primary" to={primary.to}>
                {primary.label} <span className="arr">→</span>
              </Link>
              {secondary && (
                <Link className="btn btn-ghost" to={secondary.to}>
                  {secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
