"use client";
import { useEffect, useRef } from "react";
import "./Education.css";

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    specialization: "Specialization in AI & ML",
    institution: "Bharati Vidyapeeth Institute of Management and Research (BVIMR)",
    location: "New Delhi",
    period: "2024 — 2027",
    icon: "🎓",
    color: "#a78bfa",
    current: true,
  },
  {
    degree: "12th — PCME",
    specialization: "Physics, Chemistry, Math, English",
    institution: "Vijeya Senior Secondary School",
    location: "Haryana",
    period: "2024",
    score: "77%",
    icon: "📚",
    color: "#22d3ee",
  },
  {
    degree: "10th",
    specialization: "All Subjects",
    institution: "St. Thomas School",
    location: "Haryana",
    period: "2021 — 2022",
    score: "91.2%",
    icon: "🏆",
    color: "#fbbf24",
  },
];

const certifications = [
  { name: "Programming with C++ — Internshala", year: "2024", icon: "📜" },
  { name: "AI for Beginners — HP Life", year: "2025", icon: "🤖" },
  { name: "MERN Stack — Simplilearn", year: "2025", icon: "⚛️" },
  { name: "Cyber Security (10 Certificates) — Deloitte", year: "2025", icon: "🔐" },
  { name: "Cybersecurity Certificate — Accenture India", year: "2024", icon: "🛡️" },
  { name: "Generative AI Workshop — Vodafone Society", year: "2025", icon: "✨" },
];

const achievements = [
  "Member, Game Development Team — Arcade Tech Society, BVIMR",
  "Selected for Smart India Hackathon (SIH) University Level under competitive conditions",
  "Website Coordinator, College Fest — BVIMR 2024",
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education section" id="education" ref={sectionRef}>
      <div className="container">
        {/* Education */}
        <div className="animate-on-scroll">
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="education__cards animate-on-scroll">
          {education.map((edu, index) => (
            <div className="education__card glass-card" key={index}>
              {edu.current && <div className="education__current-badge">Currently Pursuing</div>}
              <div className="education__card-top">
                <span className="education__icon" style={{ background: `${edu.color}15`, color: edu.color }}>
                  {edu.icon}
                </span>
                <span className="education__period">{edu.period}</span>
              </div>
              <h3 className="education__degree">{edu.degree}</h3>
              <p className="education__spec">{edu.specialization}</p>
              <div className="education__meta">
                <span className="education__institution">{edu.institution}</span>
                <span className="education__location">📍 {edu.location}</span>
              </div>
              {edu.score && (
                <div className="education__score" style={{ color: edu.color }}>
                  Score: <strong>{edu.score}</strong>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="education__section animate-on-scroll">
          <h2 className="section-title" style={{ fontSize: "1.75rem" }}>
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>

          <div className="education__certs-grid">
            {certifications.map((cert, index) => (
              <div className="education__cert" key={index}>
                <span className="education__cert-icon">{cert.icon}</span>
                <div>
                  <p className="education__cert-name">{cert.name}</p>
                  <span className="education__cert-year">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="education__achievements animate-on-scroll">
          <h3 className="education__achievements-title">🏅 Notable Achievements</h3>
          <div className="education__achievements-list">
            {achievements.map((a, i) => (
              <div className="education__achievement" key={i}>
                <div className="education__achievement-dot" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
