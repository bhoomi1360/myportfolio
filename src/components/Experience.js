"use client";
import { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Development & Team Member",
    company: "Layout — Tech Society, BVIMR",
    period: "2025 — Present",
    type: "Team Role",
    color: "#a78bfa",
    points: [
      "Collaborated with the development team on the design and maintenance of the official society website using Next.js, React.js, and Sanity",
      "Contributed to Git-based workflows including code reviews, feature branches, and sprint planning",
      "Assisted in monitoring site responsiveness and performance, and supported production deployment activities",
      "Coordinated on design and content teams to ensure smooth cross-functional delivery",
    ],
  },
  {
    role: "Content Creation Intern",
    company: "Nextgen Info",
    period: "2025 · 3-4 Months",
    type: "Internship",
    color: "#e879f9",
    points: [
      "Produced engaging digital content including posts, articles, and reels aligned with the company's brand voice",
      "Collaborated with the marketing team to plan and execute content strategies across social platforms",
      "Enhanced engagement metrics by delivering consistently creative and on-brand content",
    ],
  },
  {
    role: "Cyber Security Virtual Intern",
    company: "Deloitte (Virtual)",
    period: "2025",
    type: "Virtual Internship",
    color: "#22d3ee",
    points: [
      "Completed a virtual internship focused on cyber security fundamentals, threat analysis, and risk management practices",
      "Explored real-world cyber security scenarios and industry-standard tools through structured online modules",
    ],
  },
  {
    role: "Website Coordinator",
    company: "College Fest — BVIMR",
    period: "2024",
    type: "Event Role",
    color: "#fbbf24",
    points: [
      "Served as Website Coordinator for the annual college fest, helping build and manage the event's official website",
      "Coordinated between tech and non-tech teams to ensure timely updates, smooth navigation, and accurate event information",
      "Assisted in testing and deploying the fest website, ensuring it was accessible and functional throughout the event",
    ],
  },
];

export default function Experience() {
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
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I&apos;ve <span className="gradient-text">Contributed</span>
          </h2>
          <p className="section-subtitle">
            My journey through internships, team roles, and real-world projects.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className="experience__item animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="experience__line">
                <div className="experience__dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}40` }} />
                {index < experiences.length - 1 && <div className="experience__connector" />}
              </div>
              <div className="experience__card glass-card">
                <div className="experience__card-top">
                  <div>
                    <span className="experience__type" style={{ color: exp.color, background: `${exp.color}12`, borderColor: `${exp.color}25` }}>
                      {exp.type}
                    </span>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__points">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      <span className="experience__bullet" style={{ background: exp.color }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
