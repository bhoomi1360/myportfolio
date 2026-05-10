"use client";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo" onClick={scrollToTop}>
              <span className="footer__logo-icon">B</span>
              <span className="footer__logo-text">Bhoomi</span>
            </a>
            <p className="footer__tagline">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__links-col">
              <h4>Navigate</h4>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
            </div>
            <div className="footer__links-col">
              <h4>More</h4>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top" id="back-to-top">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Bhoomi. Crafted with 💜 and lots of ☕</p>
          <p className="footer__soft-skills">
            Communication • Team Collaboration • Coordination • Adaptability • Time Management
          </p>
        </div>
      </div>
    </footer>
  );
}
