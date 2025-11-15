import React from "react";
import { motion } from "framer-motion";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <motion.div
        className="signin-card"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Sign In to Online Academy</h2>

        <div className="signin-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </div>

        <p className="signin-footer">
          Don't have an account?
          <button className="link-button">Sign Up</button>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
