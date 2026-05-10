"use client";
import { useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Drive API Gallery",
    description:
      "A media gallery web app that fetches and displays images directly from Google Drive using the Drive API. Integrated with Sanity CMS for automated data management.",
    tech: ["Next.js", "Sanity", "Google Drive API"],
    highlights: [
      "Real-time image fetching from Google Drive",
      "Automated data management with Sanity CMS",
      "Smooth image loading & folder-based browsing",
    ],
    gradient: "linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)",
    icon: "🖼️",
  },
  {
    title: "RedChilli Restaurant",
    description:
      "A visually appealing and fully responsive website for a local restaurant, demonstrating applied front-end skills with modern design techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Fully responsive mobile-first design",
      "Interactive menu display system",
      "Modern UI with smooth animations",
    ],
    gradient: "linear-gradient(135deg, #fb7185 0%, #e11d48 100%)",
    icon: "🌶️",
  },
  {
    title: "Memory Game",
    description:
      "A fun and interactive card-matching memory game built in Python with a graphical interface, featuring match detection and win-state handling.",
    tech: ["Python", "Tkinter", "Game Logic"],
    highlights: [
      "Card flipping & match detection logic",
      "Move counting & win-state handling",
      "Graphical user interface",
    ],
    gradient: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
    icon: "🧩",
  },
  {
    title: "Portfolio Website",
    description:
      "A multi-page college portfolio/informational website built from scratch with pre-made responsive layouts and smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Multi-page responsive layout",
      "Clean UI design & smooth navigation",
      "Built entirely from scratch",
    ],
    gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
    icon: "💼",
  },
];

export default function Projects() {
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
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Real-world projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="projects__grid animate-on-scroll">
          {projects.map((project, index) => (
            <div className="projects__card" key={index}>
              <div className="projects__card-header" style={{ background: project.gradient }}>
                <span className="projects__card-icon">{project.icon}</span>
                <h3 className="projects__card-title">{project.title}</h3>
              </div>
              <div className="projects__card-body">
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-highlights">
                  {project.highlights.map((h, i) => (
                    <div className="projects__highlight" key={i}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3 4.3L6 11.6 2.7 8.3" stroke="var(--accent-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <div className="projects__card-tech">
                  {project.tech.map((t) => (
                    <span className="projects__tech-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
