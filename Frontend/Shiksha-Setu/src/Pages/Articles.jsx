import "../App.css";
import "../styles/article.css";



const updates = [
  {
    title: "🚀 Platform Launched!",
    date: "December 2025",
    text: "Shiksha Setu platform is now live with courses, tutorials & mentor support.",
  },
  {
    title: "📘 New Tutorials Added",
    date: "December 2025",
    text: "HTML, CSS, and Python tutorials have been published.",
  },
  {
    title: "👥 Team Section Updated",
    date: "November 2025",
    text: "Meet our mentors and contributors on the homepage.",
  },
];

const articles = [
  {
    title: "How to Start Web Development",
    desc: "Beginner-friendly guide for HTML, CSS, JS, and projects.",
  },
  {
    title: "Why Learn Python?",
    desc: "Python is the easiest language to start your coding journey.",
  },
  {
    title: "Top 5 Skills for 2026",
    desc: "AI, Cloud, Web, Data — learn what matters the most.",
  },
];

export default function Articles() {
  return (
    <div className="articles-container">

    <div className="particle" style={{left: "20%", top: "60%"}}></div>
    <div className="particle" style={{left: "70%", top: "80%"}}></div>
    <div className="particle" style={{left: "40%", top: "20%"}}></div>

      <h1 className="page-title">Articles & Updates</h1>

      {/* UPDATES SECTION */}
      <section className="updates-section">
        <h2>Latest Updates</h2>

        <div className="updates-grid">
          {updates.map((u, i) => (
            <div className="update-card" key={i}>
              <h3>{u.title}</h3>
              <small>{u.date}</small>
              <p>{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="articles-section">
        <h2>Featured Articles</h2>

        <div className="articles-grid">
          {articles.map((a, i) => (
            <div className="article-card" key={i}>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
              <button className="secondary-btn">Read More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
