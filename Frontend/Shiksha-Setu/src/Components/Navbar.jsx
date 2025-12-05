import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to="/" className="nav-logo">Shiksha Setu</Link>
      </div>

      {/* CENTER - SEARCH BAR */}
      <div className="nav-search">
        <input 
          type="text" 
          placeholder="Search for courses..." 
        />
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/login" className="nav-item">Login</Link>
        <Link to="/register" className="nav-item">Register</Link>
        <Link to="/courses" className="nav-item">Courses</Link>
      </div>
    </nav>
  );
}
