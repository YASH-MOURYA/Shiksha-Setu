import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetail.css";

const courseData = {
  1: {
    title: "Full Stack Web Development",
    subtitle: "From basics to deployment",
    duration: "6 Months",
    level: "Beginner → Advanced",
    price: "₹4,999",
    oldPrice: "₹7,999",
    language: "English / Hindi",
    learn: [
      "HTML, CSS & Responsive Layouts",
      "JavaScript ES6+ & DOM",
      "React JS with Hooks & Router",
      "Node.js, Express, REST APIs",
      "MongoDB, Mongoose & Full Deployment",
    ],
    brochure: "/brochures/fullstack.pdf",
  },
  2: {
    title: "Data Structures & Algorithms",
    subtitle: "Master DSA for interviews",
    duration: "3 Months",
    level: "Intermediate",
    price: "FREE",
    oldPrice: "₹3,000",
    language: "English",
    learn: [
      "Arrays & Recursion",
      "Trees & Graphs",
      "Stacks, Queues & LinkedList",
      "Dynamic Programming Patterns",
    ],
    brochure: "/brochures/dsa.pdf",
  },
  3: {
    title: "Java Programming Masterclass",
    subtitle: "From core to advanced concepts",
    duration: "4 Months",
    level: "Beginner → Intermediate",
    price: "₹2,999",
    oldPrice: "₹4,999",
    language: "English",
    learn: [
      "Java Core Programming",
      "Classes, OOP & Exceptions",
      "File Handling & JDBC",
      "Threading & Mini Projects",
    ],
    brochure: "/brochures/java.pdf",
  },
};

// ⭐ Auto-fill remaining courses
for (let i = 4; i <= 29; i++) {
  if (!courseData[i]) {
    courseData[i] = {
      title: "Course Coming Soon",
      subtitle: "Details updated soon",
      duration: "2 Months",
      level: "Beginner",
      price: "₹1,999",
      oldPrice: "₹3,999",
      language: "English",
      learn: ["Basics", "Hands-on Activities", "Real Projects"],
      brochure: "/brochures/default.pdf",
    };
  }
}

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [paymentOpen, setPaymentOpen] = useState(false);

  const course = courseData[id];

  // Check if user is registered
  const isRegistered = localStorage.getItem("isRegistered");

  const handleEnrollClick = () => {
    if (!isRegistered) {
      alert("Please register first!");
      navigate("/register");
    } else {
      setPaymentOpen(true);
    }
  };

  const handleBuyNowClick = () => {
    if (!isRegistered) {
      alert("Please register first!");
      navigate("/register");
    } else {
      setPaymentOpen(true);
    }
  };

  return (
    <>
      <main className="detail-page">
        <section className="detail-hero">
          <p className="hero-tag">Course • {course.title}</p>
          <h1 className="detail-title">{course.title}</h1>
          <p className="detail-subtitle">{course.subtitle}</p>

          <div className="detail-meta-row">
            <div className="detail-pill">Duration: {course.duration}</div>
            <div className="detail-pill">Level: {course.level}</div>
            <div className="detail-pill">Language: {course.language}</div>
          </div>
        </section>

        <section className="detail-layout">
          <article className="detail-main-card">
            <h2>What You Will Learn</h2>
            <ul className="detail-list">
              {course.learn.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>Course Modules</h2>
            <div className="timeline">
              {course.learn.map((item, i) => (
                <div className="timeline-item" key={i}>
                  <div className="dot" />
                  <div>
                    <h3>Module {i + 1}</h3>
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="detail-side-card">
            <div className="side-price">
              <span className="current-price">{course.price}</span>
              <span className="strike-price">{course.oldPrice}</span>
            </div>

            <p className="discount-text">Limited Time Offer 🚀</p>

            {/* ⭐ Enroll Button */}
            <button className="enroll-btn" onClick={handleEnrollClick}>
              Enroll Now
            </button>

            {/* ⭐ Buy Now Button */}
            <button className="buy-btn" onClick={handleBuyNowClick}>
              Buy Now 💳
            </button>

            <a className="brochure-btn" href={course.brochure} download>
              📄 Download Brochure
            </a>

            <ul className="side-list">
              <li>✔ Doubt Support</li>
              <li>✔ Certificate</li>
              <li>✔ Lifetime Access</li>
              <li>✔ Real Industry Projects</li>
            </ul>
          </aside>
        </section>
      </main>

      {/* ⭐ PAYMENT MODAL ⭐ */}
      {paymentOpen && (
        <div className="payment-modal-overlay">
          <div className="payment-modal-box">
            <h3>You are enrolling in:</h3>
            <h2>{course.title}</h2>

            <p className="modal-sub">Proceed with payment</p>

            <button className="pay-btn">
              Pay Now 💳
            </button>

            <button className="close-btn" onClick={() => setPaymentOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
