import React from "react";
import "./CourseDetail.css";

export default function CourseDetail() {
  return (
    <main className="detail-page">
      <div className="detail-bg" />

      <section className="detail-hero">
        <p className="hero-tag">Course • Full Stack Web Development</p>
        <h1 className="detail-title">Full Stack Web Development</h1>
        <p className="detail-subtitle">
          Learn front-end and back-end from scratch. Build and deploy complete
          web applications, just like real production projects.
        </p>

        <div className="detail-meta-row">
          <div className="detail-pill">Duration: 6 Months</div>
          <div className="detail-pill">Level: Beginner → Advanced</div>
          <div className="detail-pill">Language: English / Hindi</div>
        </div>
      </section>

      <section className="detail-layout">
        <article className="detail-main-card">
          <h2>What you will learn</h2>
          <ul className="detail-list">
            <li>HTML, CSS, responsive layouts, and modern UI design</li>
            <li>JavaScript fundamentals, DOM, ES6+, and async programming</li>
            <li>React basics, hooks, routing, and state management</li>
            <li>Node.js, Express, REST APIs, authentication</li>
            <li>MongoDB, Mongoose, and deployment best practices</li>
          </ul>

          <h2>Course curriculum overview</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="dot" />
              <div>
                <h3>Module 1 • Web Basics</h3>
                <p>HTML, CSS, layouts, and components</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot" />
              <div>
                <h3>Module 2 • JavaScript Deep Dive</h3>
                <p>ES6+, DOM, events, and mini-projects</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot" />
              <div>
                <h3>Module 3 • React & SPA</h3>
                <p>Routing, hooks, and state management</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="dot" />
              <div>
                <h3>Module 4 • Back-end & DB</h3>
                <p>Node.js, Express, MongoDB, and API building</p>
              </div>
            </div>
          </div>
        </article>

        <aside className="detail-side-card">
          <div className="side-price">
            <span className="current-price">₹4,999</span>
            <span className="strike-price">₹7,999</span>
          </div>
          <p className="discount-text">Limited time launch offer</p>

          <button className="enroll-btn">Enroll Now</button>

          <ul className="side-list">
            <li>✅ Lifetime access</li>
            <li>✅ Doubt support</li>
            <li>✅ Certificate of completion</li>
            <li>✅ Projects + assignments</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
