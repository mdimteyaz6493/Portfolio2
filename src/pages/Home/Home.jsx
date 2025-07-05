import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../../Context/ThemeContext"; // ✅ Add this
import "./home.css";

function App() {
  const { darkMode } = useTheme(); // ✅ Get darkMode

  return (
    <>
      <section className={`hero ${darkMode ? "dark" : ""}`}> {/* ✅ Dynamic class */}
        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Hi, I'm <span>Md Imteyaz</span>
          </h2>
          <h3 style={{ color: "red" }}>
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER . ",
                1000,
                "WEB DESIGNER .",
                1000,
                "CODER .",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="animated_text"
            />
          </h3>
          <p>
            A passionate Web Developer crafting modern, responsive, and user-friendly web experiences with a focus on performance, accessibility, and clean design. Dedicated to turning ideas into innovative, functional, and visually appealing digital solutions.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
            <a href="#projects" className="btn btn-outline">
              My Work
            </a>
          </div>

          <motion.div
            className="socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/mdimteyaz6493"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-img"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
        <img src="./hero.png" alt="developer" />
        </motion.div>
      </section>
    </>
  );
}

export default App;
