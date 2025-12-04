import homepageImage from "../assets/homepage.png";
import "../App.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Learning that gets you</h1>
          <p>Skills for your future. Start your learning journey with Shiksha Setu.</p>
          <button className="explore-btn">Explore Courses</button>
        </div>

        <div className="hero-image">
          <img src={homepageImage} alt="Learning" />
        </div>
      </section>
    </div>
  );
}
