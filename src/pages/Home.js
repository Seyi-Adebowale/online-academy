import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Heart } from "lucide-react";
import "./Home.css";
import heroImg from '../assets/hero-learning.jpg';


const Home = () => {
  return (
    <div className="home-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      
      {/* Hero Section */}
      <section className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1>
            Empowering Students Through <span>Digital Learning</span>
          </h1>
          <p>
            Access Science, Arts, and Commercial courses — including support for Special Needs learners. Learn anytime, anywhere, at your pace.
          </p>
          <div className="buttons">
            <button className="primary">Explore Courses</button>
            <button className="outline">Learn More</button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
           src={heroImg}
          alt="Learning Illustration"
        />
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <h2>Explore Our Course Categories</h2>
        <div className="course-grid">
          {[
            { title: "Science", icon: <GraduationCap className="course-icon" /> },
            { title: "Arts", icon: <BookOpen className="course-icon" /> },
            { title: "Commercial", icon: <Users className="course-icon" /> },
            { title: "Special Needs", icon: <Heart className="course-icon" /> },
          ].map(cat => (
            <motion.div key={cat.title} whileHover={{ scale: 1.05 }} className="course-card">
              <div>{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>Learn, grow, and excel in our curated {cat.title.toLowerCase()} courses.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Start Your Learning Journey Today</h2>
        <p>Join thousands of students who are shaping their future with Online Academy.</p>
        <button>Get Started</button>
      </section>


    </div>
  );
};

export default Home;
