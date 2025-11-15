import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Online Academy</h1>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/programs">Programs</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <button className="signin-btn" onClick={handleSignIn}>Sign In</button>
    </nav>
  );
};

export default Navbar;
