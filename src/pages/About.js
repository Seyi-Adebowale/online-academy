import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import heroImg from "../assets/hero-learning.jpg";

const About = () => {
  return (
    <main className="about-container">
      {/* Hero Section */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Online Academy</h1>
          <p>Empowering learners through inclusive and flexible digital education.</p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="about-info">
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Mission</h2>
          <p>Deliver high-quality online courses accessible to all learners, including those with special needs.</p>
        </motion.div>

        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Vision</h2>
          <p>Be a global leader in digital learning, fostering growth and achievement for every student.</p>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
