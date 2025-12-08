import React, { useEffect } from "react";
import "./Courses.css";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    subtitle: "From basics to deployment",
    duration: "6 Months",
    level: "Beginner → Advanced",
    reviews: "4.8",
    price: "₹4,999",
    isFree: false,
    tag: "Trending",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    subtitle: "Master DSA for interviews",
    duration: "3 Months",
    level: "Intermediate",
    reviews: "4.9",
    price: "Free",
    isFree: true,
    tag: "Free",
  },
  {
    id: 3,
    title: "Python For Everybody",
    subtitle: "Learn Python with projects",
    duration: "2 Months",
    level: "Beginner",
    reviews: "4.7",
    price: "₹1,499",
    isFree: false,
    tag: "Beginner Friendly",
  },
];

export default function Courses() {

  // Scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const obs = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    revealElements.forEach(el => obs.observe(el));
  }, []);

  return (
    <main className="courses-page">

      {/* Floating glowing background elements */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>
      <div className="bg-circle circle3"></div>

      {/* Moving gradient line */}
      <div className="gradient-strip"></div>

      <section className="courses-hero reveal">
        <p className="hero-tag">✨ Trending Courses</p>
        <h1 className="hero-title">
          Choose Your <span className="hero-highlight">Learning Path</span>
        </h1>
        <p className="hero-subtitle">
          Industry-ready content, curated projects & placement-driven curriculum.
        </p>

        <div className="hero-stats">
          <div className="stat-card reveal"><span className="stat-number">10+</span><span className="stat-label">Mentors</span></div>
          <div className="stat-card reveal"><span className="stat-number">25+</span><span className="stat-label">Courses</span></div>
          <div className="stat-card reveal"><span className="stat-number">4.8★</span><span className="stat-label">Avg Rating</span></div>
        </div>

        <button
          className="explore-cta rippleBtn"
          onClick={() => (window.location.href = "/courses")}
        >
          Start Learning
        </button>
      </section>

      <section className="courses-section reveal">
        <div className="section-header">
          <h2>Courses curated for you</h2>
          <p>Pick a path and begin today 🚀</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="course-card reveal"
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="course-pill">{course.tag}</div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>

              <div className="course-meta">
                <span>{course.duration}</span>•<span>{course.level}</span>
              </div>

              <div className="course-meta secondary">
                ⭐ {course.reviews} / 5
              </div>

              <div className="course-footer">
                {course.isFree ? (
                  <span className="price-free">FREE</span>
                ) : (
                  <span className="price-paid">{course.price}</span>
                )}

                <button
                  className="course-btn rippleBtn"
                  onClick={() => (window.location.href = "/courses/details")}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
