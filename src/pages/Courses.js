import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Heart } from "lucide-react";
import "./Courses.css";

const Courses = () => {
  const courses = [
    { title: "Science", icon: <GraduationCap /> },
    { title: "Arts", icon: <BookOpen /> },
    { title: "Commercial", icon: <Users /> },
    { title: "Special Needs", icon: <Heart /> },
  ];

  return (
    <main className="courses-container">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Courses
      </motion.h1>

      <div className="courses-grid">
        {courses.map(course => (
          <motion.div
            key={course.title}
            className="course-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="icon">{course.icon}</div>
            <h3>{course.title}</h3>
            <p>Curated {course.title.toLowerCase()} courses to grow your skills and knowledge.</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Courses;
