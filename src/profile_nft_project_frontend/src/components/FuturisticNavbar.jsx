import React from "react";
import { Link } from "react-router-dom";
import "./FuturisticNavbar.scss";

const FuturisticNavbar = () => {
  return (
    <nav className="futuristic-navbar">
      <div className="logo">ProfileNFT</div>
      <ul className="nav-links">
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/courses" className="nav-link">Courses</Link></li>
        <li><Link to="/quiz" className="nav-link">Quiz</Link></li>
        <li><Link to="/profile" className="nav-link">Profile</Link></li>
        <li><Link to="/login" className="nav-link">Login</Link></li>
      </ul>
    </nav>
  );
};

export default FuturisticNavbar;
