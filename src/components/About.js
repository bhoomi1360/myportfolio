"use client";
import { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
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
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="animate-on-scroll">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Turning Ideas into <span className="gradient-text">Digital Reality</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text animate-on-scroll">
            <p>
              I&apos;m a motivated and detail-oriented <strong>BCA student</strong> specializing in{" "}
              <strong>Artificial Intelligence and Machine Learning</strong> at Bharati Vidyapeeth Institute of
              Management and Research (BVIMR), New Delhi.
            </p>
            <p>
              With hands-on experience in web development, AI tools, and full-stack projects, I thrive on building
              scalable solutions that make a difference. I&apos;m skilled in{" "}
              <strong>Python, JavaScript, React, Next.js</strong>, and love exploring the intersection of AI and modern
              web technologies.
            </p>
            <p>
              Beyond coding, I&apos;m passionate about cybersecurity, content creation, and contributing to innovative
              tech communities. I believe in continuous learning and collaborative problem-solving.
            </p>
          </div>

          <div className="about__cards animate-on-scroll">
            <div className="about__card">
              <div className="about__card-icon">🎯</div>
              <div className="about__card-content">
                <h3>Focus Area</h3>
                <p>AI & Machine Learning, Full-Stack Web Development</p>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">📍</div>
              <div className="about__card-content">
                <h3>Location</h3>
                <p>Bahadurgarh, Haryana, India</p>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">🎓</div>
              <div className="about__card-content">
                <h3>Education</h3>
                <p>BCA (AI & ML) — BVIMR, 2024-2027</p>
              </div>
            </div>
            <div className="about__card">
              <div className="about__card-icon">💡</div>
              <div className="about__card-content">
                <h3>Interests</h3>
                <p>Generative AI, Cybersecurity, Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
