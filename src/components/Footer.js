import React from "react";
import { NavLink } from "react-router-dom";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Online Academy</h3>
          <p>Accessible, inclusive, and flexible digital learning for all.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Email: info@onlineacademy.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>
      </div>
      <p className="footer-copy">©️ 2025 Online Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
