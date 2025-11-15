import React from "react";
import { motion } from "framer-motion";
import "./Programs.css";

const programs = [
  { title: "Special Needs Directory & Matching", description: "Connect learners with tailored special needs programs." },
  { title: "Bootcamps", description: "Short-term intensive skill-building programs." },
  { title: "Counselling", description: "Guidance and support for your learning journey." },
];

const Programs = () => {
  return (
    <main className="programs-container">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Programs & Initiatives
      </motion.h1>

      <div className="programs-grid">
        {programs.map(prog => (
          <motion.div
            key={prog.title}
            className="program-card"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h3>{prog.title}</h3>
            <p>{prog.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Programs;
