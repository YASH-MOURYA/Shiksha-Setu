import { useParams } from "react-router-dom";
import { useState } from "react";

const tutorials = {
  html: {
    title: "HTML Basics",
    video: "https://www.youtube.com/embed/qz0aGYrrlhU",
    chapters: [
      "Introduction to HTML",
      "HTML Tags & Elements",
      "Lists & Tables",
      "Forms & Inputs",
    ],
    description: "HTML is the foundation of all websites.",
    theory: "HTML is used to structure web pages using elements like headings, paragraphs, images, and links."
  },

  css: {
    title: "CSS Fundamentals",
    video: "https://www.youtube.com/embed/yfoY53QXEnI",
    chapters: ["CSS Syntax", "Selectors", "Box Model", "Flexbox"],
    description: "CSS makes your website beautiful.",
    theory: "CSS is used to style HTML using colors, spacing, and layout."
  },

  js: {
    title: "JavaScript Basics",
    video: "https://www.youtube.com/embed/hdI2bqOjy3c",
    chapters: ["Variables", "Functions", "Loops", "DOM Manipulation"],
    description: "JavaScript adds logic to your website.",
    theory: "JavaScript is used to add interactivity and logic to web apps."
  },

  react: {
    title: "React for Beginners",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    chapters: ["Components", "Props", "State", "Hooks"],
    description: "React helps build fast UIs.",
    theory: "React is a JavaScript library for building UI using components."
  },

  python: {
    title: "Python Crash Course",
    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    chapters: ["Variables", "Loops", "Functions", "Files"],
    description: "Python is easy and powerful.",
    theory: "Python is a popular programming language used in AI, web, and automation."
  }
};

export default function TutorialDetail() {
  const { id } = useParams();   // ✅ THIS MUST BE `id`
  const tutorial = tutorials[id];

  const [completed, setCompleted] = useState([]);

  if (!tutorial) {
    return <h2 style={{ color: "white", padding: "40px" }}>Tutorial Not Found</h2>;
  }

  function toggleChapter(ch) {
    setCompleted(
      completed.includes(ch)
        ? completed.filter(c => c !== ch)
        : [...completed, ch]
    );
  }

  return (
    <div className="tutorial-detail-page">
      <h1>{tutorial.title}</h1>
      <p>{tutorial.description}</p>

      {/* ✅ VIDEO */}
      <div className="video-box">
  <a 
    href={tutorial.video} 
    target="_blank" 
    rel="noopener noreferrer"
    className="primary-btn"
  >
    ▶ Watch Video on YouTube
  </a>
</div>


      {/* ✅ THEORY */}
      <h2>Theory</h2>
      <p>{tutorial.theory}</p>

      {/* ✅ CHAPTERS */}
      <h2>Chapters</h2>
      <div className="chapters">
        {tutorial.chapters.map((ch, i) => (
          <div
            key={i}
            className={`chapter ${completed.includes(ch) ? "done" : ""}`}
            onClick={() => toggleChapter(ch)}
          >
            ✅ {ch}
          </div>
        ))}
      </div>

      <p className="progress">
        Progress: {completed.length}/{tutorial.chapters.length}
      </p>

      {/* ✅ LIVE CODE */}
      <h2>Live Code Example</h2>
      <pre className="code-box">
{`<h1>Hello Shiksha Setu</h1>
<p>You are learning ${tutorial.title}</p>`}
      </pre>
    </div>
  );
}
