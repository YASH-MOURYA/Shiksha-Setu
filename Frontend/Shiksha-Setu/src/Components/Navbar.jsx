import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* --- YOUR OLD NAVBAR (simple links) --- */}
      <nav style={{ padding: "10px", background: "#eee", marginBottom: "10px" }}>
        <a href="/">Home</a> |
        <a href="/login"> Login </a> |
        <a href="/register"> Register </a> |
        <a href="/courses"> Courses </a> |
        <a href="/contact">Contact </a> | 
        <a href="/articles">Articles</a>
      </nav>

      {/* --- NEW NAVBAR FROM main BRANCH --- */}
      <nav className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          <Link to="/" className="nav-logo brand-text">
            Shiksha Setu
          </Link>
        </div>

        {/* CENTER - SEARCH BAR */}
        <div className="nav-search">
          <input type="text" placeholder="Search for courses..." />
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item">Register</Link>
          <Link to="/courses" className="nav-item">Courses</Link>
        </div>
      </nav>
    </>
  );
}
