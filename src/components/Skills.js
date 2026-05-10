"use client";
import { useEffect, useRef } from "react";
import "./Skills.css";

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    color: "#a78bfa",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "#e879f9",
    skills: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
    ],
  },
  {
    title: "Backend & DB",
    icon: "🗄️",
    color: "#22d3ee",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "REST APIs", level: 75 },
      { name: "SQL Databases", level: 75 },
      { name: "Sanity CMS", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "#fbbf24",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 60 },
      { name: "Vercel", level: 70 },
    ],
  },
  {
    title: "Core CS",
    icon: "🧠",
    color: "#34d399",
    skills: [
      { name: "OOP", level: 80 },
      { name: "DBMS", level: 75 },
      { name: "Operating Systems", level: 70 },
      { name: "Computer Networks", level: 70 },
    ],
  },
  {
    title: "AI & ML",
    icon: "🤖",
    color: "#fb7185",
    skills: [
      { name: "Machine Learning", level: 65 },
      { name: "Generative AI", level: 70 },
      { name: "Data Analysis", level: 65 },
      { name: "AI Tools", level: 75 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Animate skill bars
            const bars = entry.target.querySelectorAll(".skills__bar-fill");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.level + "%";
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
        </div>

        <div className="skills__grid animate-on-scroll">
          {skillCategories.map((category) => (
            <div className="skills__category glass-card" key={category.title}>
              <div className="skills__category-header">
                <span className="skills__category-icon" style={{ background: `${category.color}15`, color: category.color }}>
                  {category.icon}
                </span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>
              <div className="skills__list">
                {category.skills.map((skill) => (
                  <div className="skills__item" key={skill.name}>
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level" style={{ color: category.color }}>{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        data-level={skill.level}
                        style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`, width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
