import { Link } from "react-router-dom";

export default function Tutorials() {
  const tutorials = {
    html: {
      title: "HTML Basics",
      video: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
      description: "HTML is the foundation of all websites.",
      theory: `HTML stands for HyperText Markup Language.`,
      chapters: [
        "Introduction to HTML",
        "HTML Tags & Elements",
        "Lists & Tables",
        "Forms & Inputs",
      ],
      level: "Beginner"
    },

    css: {
      title: "CSS Fundamentals",
      video: "https://www.youtube.com/watch?v=yfoY53QXEnI",
      description: "CSS makes your website beautiful.",
      theory: `CSS is used for styling websites.`,
      chapters: ["CSS Syntax", "Selectors", "Box Model", "Flexbox"],
      level: "Beginner"
    },

    js: {
      title: "JavaScript Basics",
      video: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
      description: "JavaScript adds logic to your website.",
      theory: `JavaScript is a programming language.`,
      chapters: ["Variables", "Functions", "Loops", "DOM Manipulation"],
      level: "Beginner"
    },

    react: {
      title: "React for Beginners",
      video: "https://www.youtube.com/watch?v=bMknfKXIFA8",
      description: "React helps build fast UIs.",
      theory: `React is a JavaScript library.`,
      chapters: ["Components", "Props", "State", "Hooks"],
      level: "Intermediate"
    },

    python: {
      title: "Python Crash Course",
      video: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      description: "Python is easy and powerful.",
      theory: `Python is used in AI, Web & Automation.`,
      chapters: ["Variables", "Loops", "Functions", "Files"],
      level: "Beginner"
    }
  };

  return (
    
    <div className="tutorials-page">
      <div className="tutorials-header">
        <h1>Tutorials</h1>
        <p>Click on any tutorial to start learning</p>
      </div>
      <div className="tutorials-feature">
  <h2>🔥 Most Popular</h2>
  <p>Start with the most in-demand skills today</p>
</div>


      <div className="tutorials-grid">

        {/* THIS IS THE ONLY IMPORTANT CHANGE */}
        {Object.entries(tutorials).map(([id, tut]) => (
          <Link
            to={`/tutorials/${id}`}
            className="tutorial-card"
            key={id}
          >
            <span className={`tutorial-badge ${tut.level.toLowerCase()}`}>
              {tut.level}
            </span>

            <h3>{tut.title}</h3>
            <p>{tut.description}</p>
            <span className="primary-btn">Start Learning</span>
          </Link>
        ))}

      </div>
      <div className="tutorials-stats">
  <div>📘 50+ Lessons</div>
  <div>🎯 Beginner to Advanced</div>
  <div>👨‍🎓 1000+ Learners</div>
</div>

    </div>
  );
}
