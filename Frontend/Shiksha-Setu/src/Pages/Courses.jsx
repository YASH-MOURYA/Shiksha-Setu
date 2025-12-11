import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const courses = [
  { id: 1, title: "Full Stack Web Development", subtitle: "From basics to deployment", duration: "6 Months", level: "Beginner → Advanced", reviews: "4.8", price: "₹4,999", isFree: false, tag: "Trending" },
  { id: 2, title: "Data Structures & Algorithms", subtitle: "Master DSA for interviews", duration: "3 Months", level: "Intermediate", reviews: "4.9", price: "Free", isFree: true, tag: "Free" },

  { id: 3, title: "Java Programming Masterclass", subtitle: "Learn Core & Advance Java", duration: "4 Months", level: "Beginner → Intermediate", reviews: "4.8", price: "₹2,999", isFree: false, tag: "Trending" },
  { id: 4, title: "Java With Spring Boot", subtitle: "Build backend APIs professionally", duration: "3 Months", level: "Intermediate", reviews: "4.6", price: "₹3,499", isFree: false, tag: "Industry Ready" },
  { id: 5, title: "React Frontend Bootcamp", subtitle: "Complete UI + State + Hooks", duration: "2 Months", level: "Beginner → Intermediate", reviews: "4.7", price: "₹1,999", isFree: false, tag: "Popular" },

  { id: 6, title: "Android App Development", subtitle: "Kotlin + Android Studio", duration: "3 Months", level: "Intermediate", reviews: "4.6", price: "₹3,499", isFree: false, tag: "Popular" },
  { id: 7, title: "iOS Swift App Development", subtitle: "Full app architecture", duration: "4 Months", level: "Advanced", reviews: "4.9", price: "₹6,499", isFree: false, tag: "Premium" },
  { id: 8, title: "DevOps With Docker & Kubernetes", subtitle: "Learn CI/CD Production Level", duration: "5 Months", level: "Advanced", reviews: "4.8", price: "₹8,999", isFree: false, tag: "Trending" },

  { id: 9, title: "System Design Mastery", subtitle: "High scalability interview prep", duration: "2 Months", level: "Advanced", reviews: "4.8", price: "₹4,999", isFree: false, tag: "Placement" },
  { id: 10, title: "AWS Cloud Practitioner", subtitle: "Deploy web apps over cloud", duration: "3 Months", level: "Advanced", reviews: "4.7", price: "₹5,999", isFree: false, tag: "Trending" },
  { id: 11, title: "Cyber Security & Hacking", subtitle: "Firewall & Ethical penetration", duration: "4 Months", level: "Intermediate", reviews: "4.8", price: "₹6,999", isFree: false, tag: "Enterprise" },

  { id: 12, title: "Artificial Intelligence Basics", subtitle: "Start AI ready foundation", duration: "2 Months", level: "Beginner", reviews: "4.6", price: "₹1,999", isFree: false, tag: "Popular" },
  { id: 13, title: "Machine Learning Engineer Track", subtitle: "Build ML models", duration: "5 Months", level: "Advanced", reviews: "4.9", price: "₹8,499", isFree: false, tag: "Premium" },
  { id: 14, title: "Deep Learning with TensorFlow", subtitle: "Build real neural networks", duration: "3 Months", level: "Advanced", reviews: "4.9", price: "₹7,999", isFree: false, tag: "Premium" },

  { id: 15, title: "SQL Database Fundamentals", subtitle: "Joins, triggers, advanced queries", duration: "1 Month", level: "Beginner", reviews: "4.5", price: "₹999", isFree: false, tag: "Beginner Friendly" },
  { id: 16, title: "MongoDB Crash Course", subtitle: "Documents, collections, aggregation", duration: "30 Days", level: "Beginner", reviews: "4.6", price: "Free", isFree: true, tag: "Free" },
  { id: 17, title: "Node.js Backend APIs", subtitle: "Auth, JWT, project level APIs", duration: "2 Months", level: "Intermediate", reviews: "4.8", price: "₹2,499", isFree: false, tag: "Trending" },

  { id: 18, title: "UI/UX With Figma", subtitle: "Wireframing to final UI", duration: "1.5 Months", level: "Beginner", reviews: "4.7", price: "₹1,999", isFree: false, tag: "Creative" },
  { id: 19, title: "Graphic Designing Bootcamp", subtitle: "Posters + Thumbnails", duration: "1 Month", level: "Beginner", reviews: "4.9", price: "₹1,499", isFree: false, tag: "Creative" },
  { id: 20, title: "3D Animation With Blender", subtitle: "Renders & Animations", duration: "6 Weeks", level: "Beginner", reviews: "4.8", price: "₹2,999", isFree: false, tag: "Creative" },

  { id: 21, title: "Unity Game Development", subtitle: "2D gameplay systems", duration: "3 Months", level: "Intermediate", reviews: "4.7", price: "₹4,499", isFree: false, tag: "Premium" },
  { id: 22, title: "Blockchain & Smart Contracts", subtitle: "Solidity + MetaMask", duration: "4 Months", level: "Advanced", reviews: "4.8", price: "₹9,999", isFree: false, tag: "Trending" },
  { id: 23, title: "Digital Forensics & Cybercrime", subtitle: "Crime solving techniques", duration: "4 Months", level: "Advanced", reviews: "4.7", price: "₹7,999", isFree: false, tag: "Enterprise" },

  { id: 24, title: "Automation Testing With Selenium", subtitle: "UI + API Automation", duration: "2 Months", level: "Intermediate", reviews: "4.6", price: "₹2,999", isFree: false, tag: "Professional" },
  { id: 25, title: "Communication Skills", subtitle: "Corporate speaking skills", duration: "1 Month", level: "Beginner", reviews: "4.8", price: "Free", isFree: true, tag: "Free" },
  { id: 26, title: "E-Commerce MERN Masterclass", subtitle: "Build full ecommerce system", duration: "2 Months", level: "Intermediate", reviews: "4.8", price: "₹3,999", isFree: false, tag: "Project" },

  { id: 27, title: "Digital Marketing Essentials", subtitle: "SEO, SEM, Funnel Creation", duration: "2 Months", level: "Beginner → Advanced", reviews: "4.6", price: "₹2,999", isFree: false, tag: "Business" },
  { id: 28, title: "Freelancing Success Program", subtitle: "Earn from Home easily", duration: "30 Days", level: "Beginner", reviews: "4.8", price: "Free", isFree: true, tag: "Free" },
  { id: 29, title: "DSA Interview Booster", subtitle: "Linked List / Tree / Graph patterns", duration: "1 Month", level: "Intermediate", reviews: "4.7", price: "₹799", isFree: false, tag: "Bonus" },
];

export default function Courses() {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelectorAll(".reveal").forEach(el => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <main className="courses-page">

      {/* TOP SECTION */}
      <section className="courses-hero reveal">
        <p className="hero-tag">✨ Trending Courses</p>

        <h1 className="hero-title">
          Choose Your <span className="hero-highlight">Learning Path</span>
        </h1>

        <p className="hero-subtitle">
          Industry-ready content, curated projects & placement-driven curriculum.
        </p>

        <button
          className="start-journey-btn rippleBtn"
          onClick={() => navigate("/register")}
        >
          Start Your Journey 🚀
        </button>
      </section>

      {/* COURSES GRID */}
      <section className="courses-section reveal">
        <div className="section-header">
          <h2>Courses curated for you</h2>
          <p>Pick a path and begin today 🚀</p>
        </div>

        <div className="courses-grid">
          {courses.map(course => (
            <article key={course.id} className="course-card reveal">

              <div className="course-pill">{course.tag}</div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">{course.subtitle}</p>

              <div className="course-meta">
                <span>{course.duration}</span> • <span>{course.level}</span>
              </div>

              <div className="course-meta secondary">
                ⭐ {course.reviews} / 5
              </div>

              <div className="course-footer">
                {course.isFree ?
                  <span className="price-free">FREE</span> :
                  <span className="price-paid">{course.price}</span>
                }

                <button
                  className="course-btn rippleBtn"
                  onClick={() => navigate(`/courses/details/${course.id}`)}
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
