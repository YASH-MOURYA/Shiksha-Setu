import "../App.css";
import homepageImage from "../assets/homepage.png";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-text">
          <h1>Your Learning Destination</h1>
          <p>
            Sharpen your skills with structured courses designed for real-world growth.
            Learn from mentors and get ready for your future.
          </p>
          <button className="explore-btn">Explore Courses</button>
        </div>

        <div className="hero-image">
          <img src={homepageImage} alt="Learning" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2 data-aos="fade-up">Why Choose Shiksha Setu?</h2>

        <div className="why-cards">
          <div className="why-card" data-aos="zoom-in">
            <h3>Structured Learning</h3>
            <p>Clear roadmap and well-planned content for every learner.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Mentor Support</h3>
            <p>Guidance from experienced mentors throughout your journey.</p>
          </div>

          <div className="why-card" data-aos="zoom-in" data-aos-delay="400">
            <h3>Industry-grade Courses</h3>
            <p>Updated syllabus and real project experience.</p>
          </div>
        </div>
      </section>

      {/* TRENDING COURSES */}
      <section className="trending-section">
        <h2 data-aos="fade-up">Trending Courses</h2>

        <div className="trending-grid">
          <div className="course-card" data-aos="fade-right">Web Development Bootcamp</div>
          <div className="course-card" data-aos="fade-up">Python for Beginners</div>
          <div className="course-card" data-aos="fade-up">Machine Learning Basics</div>
          <div className="course-card" data-aos="fade-left">Data Science Projects</div>
        </div>
      </section>

      {/* MENTOR SECTION */}
      <section className="mentors-section">
        <h2 data-aos="fade-up">Meet Our Mentors</h2>

        <div className="mentors-grid">

          <div className="mentor-card" data-aos="flip-left">
            <div className="mentor-photo"></div>
            <h3>Yash Mourya</h3>
            <p>Project Lead</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="200">
            <div className="mentor-photo"></div>
            <h3>Harshit</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="400">
            <div className="mentor-photo"></div>
            <h3>Pranav</h3>
            <p>Support & Articles</p>
          </div>

          <div className="mentor-card" data-aos="flip-left" data-aos-delay="600">
            <div className="mentor-photo"></div>
            <h3>Shristi</h3>
            <p>Tutorials & Notes</p>
          </div>

        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="offer-banner" data-aos="zoom-in">
        <h2>🔥 Special Offer</h2>
        <p>Get 50% off on all premium courses for a limited time.</p>
        <button className="offer-btn">Grab Offer</button>
      </section>

    </div>
  );
}
