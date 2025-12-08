import { useState, useEffect } from "react";
import homepageImage from "../assets/homepage.png";
import Mousumi from "../assets/Mousumi.jpg";
import "../App.css";
import Harshit from "../assets/Harshit.jpg";
import Shristi from "../assets/Shristi.jpg";
import Pranav from "../assets/Pranav.png";
import Yash from "../assets/Yash.jpg";



export default function Home() {
  const [zoomImg, setZoomImg] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowIntro(false);
  }, 2000); // 2 seconds

  return () => clearTimeout(timer);
}, []);


  return (
    
    <div className="home-container">
      {showIntro && (
  <div className="intro-overlay">
    <h1 className="intro-logo">Shiksha Setu</h1>
    <p className="intro-tagline">Your Learning Destination</p>
  </div>
)}

      {/* HERO – dark like CodeHelp, full width */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-left">
          <p className="hero-badge">New • Shiksha Setu Learning Platform</p>
          <h1>Your Learning Destination</h1>
          <p className="hero-sub">
            Sharpen your skills with structured courses designed for real-world growth.
            Learn from mentors and get ready for your future.
          </p>
          <div className="hero-actions">
            <a href="/courses" className="primary-btn">Explore Courses</a>
            <a href="/tutorials" className="secondary-btn">View Tutorials</a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in" data-aos-delay="200">
          <div className="hero-image-wrapper">
            <img src={homepageImage} alt="Learning" />
            <div className="hero-floating-card" onClick={()=>{
              setZoomImg(homepageImage)
            }}>
              <p>🎓 100+ learners</p>
              <span>Joining Shiksha Setu</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION – light like Udemy */}
      <section className="why-section">
        <h2 data-aos="fade-up">Why Choose Shiksha Setu?</h2>

        <div className="why-cards">
          <div className="why-card" data-aos="zoom-in">
            <h3>Structured Learning</h3>
            <p>Clear roadmap and well-planned content for every learner.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Mentor Support</h3>
            <p>Guidance from mentors </p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Real-World Skills</h3>
            <p>Projects and practice to prepare you for internships & jobs.</p>
          </div>
        </div>
      </section>

      {/* TRENDING COURSES */}
      <section className="trending-section">
        <div className="section-header" data-aos="fade-up">
          <h2>Trending Courses</h2>
          <p>Popular picks inspired by Udemy course layout.</p>
        </div>

        <div className="trending-grid">
          <div className="course-card" data-aos="fade-right">
            <h3>Web Development Bootcamp</h3>
            <p>HTML, CSS, JS, React – from basics to projects.</p>
            <span className="course-tag">Beginner • Free</span>
          </div>

          <div className="course-card" data-aos="fade-up">
            <h3>Python for Everyone</h3>
            <p>Easy Python with hands-on coding practice.</p>
            <span className="course-tag">Beginner • Free</span>
          </div>

          <div className="course-card" data-aos="fade-left">
            <h3>Machine Learning Basics</h3>
            <p>ML concepts with simple examples and intuition.</p>
            <span className="course-tag">Intermediate • Premium</span>
          </div>
        </div>
      </section>

      {/* MENTORS – team intro section */}
      <section className="mentors-section">
        <h2 data-aos="fade-up">Mentors & Contributors</h2>
        <p className="mentors-sub" data-aos="fade-up" data-aos-delay="150">
          The Shiksha Setu project is built by our team
        </p>

        <div className="mentors-grid">
          <div className="mentor-card" data-aos="flip-left">
            <div className="mentor-photo" onClick={()=>{
              setZoomImg(Yash)
            }}>
              <img src={Yash} alt ="Yash"/></div>
            <h3>Yash</h3>
            <p>Project Lead</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="150">
            <div className="mentor-photo" onClick={()=>{
              setZoomImg(Harshit)
            }}>
            <img src={Harshit} alt="Harshit" /></div>
            <h3>Harshit</h3>
            <p>Homepage & UI/UX</p>
          </div>


          <div className="mentor-card" data-aos="flip-left" data-aos-delay="300">
            <div className="mentor-photo" onClick={()=>{
              setZoomImg(Mousumi)
            }}>
              <img src={Mousumi} alt="Mousumi" />
            </div>
            <h3>Mousumi</h3>
            <p>Course</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="450">
            <div className="mentor-photo" onClick={()=>{
              setZoomImg(Pranav)
            }}>
              <img src={Pranav} alt="Pranav"/>
            </div>
            <h3>Pranav</h3>
            <p>Contact & Articles</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="600">
            <div className="mentor-photo" onClick={()=>{
              setZoomImg(Shristi)
            }}>
              <img src={Shristi} alt="Shristi" />
            </div>
            <h3>Shristi</h3>
            <p>Tutorials & Notes</p>
          </div>
        </div>
      </section>

      {/* OFFER BANNER – CTA like CodeHelp strip */}
      <section className="offer-banner" data-aos="zoom-in">
        <div>
          <h2>Ready to Start Your Journey?</h2>
          <p>Login or register to access courses, tutorials, articles, and more.</p>
        </div>
        <div className="offer-actions">
          <a href="/login" className="outline-btn">Login</a>
          <a href="/register" className="primary-btn">Register</a>
        </div>
      </section>
      {zoomImg && (
  <div className="zoom-overlay" onClick={() => setZoomImg(null)}>
    <img src={zoomImg} alt="Zoomed" className="zoom-img" />
  </div>
)}
<a href="/register" className="floating-cta">
  Join Now 🚀
  <span className="cta-tooltip">Create your free account</span>
</a>

    </div>
  );
}
