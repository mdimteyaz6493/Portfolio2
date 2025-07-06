import React from "react";
import "./About.css";
import AboutCard from "../About/AboutCard";
import { useTheme } from "../../Context/ThemeContext";
import { motion } from "framer-motion";


const About = () => {

    const { darkMode } = useTheme(); // ✅ Get darkMode

  return (
    <div className={`about-container ${darkMode ? "dark" : ""}`}>
      {/* Left: Image */}
      <motion.div
                className="about-left"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
          <img src="./hero2.png" alt="profile" className="about-img" />
        </motion.div>

      {/* Right: Text and Cards */}
      
        <motion.div
                className="about-right"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                 <h2 className="about-title">Web Developer & UI Designer</h2>
        <p className="about-desc">
          I’m a passionate web developer focused on crafting clean, creative,
          and user-friendly websites. I enjoy turning ideas into interactive
          digital experiences with a strong focus on performance and
          responsiveness.
        </p>
        <p className="about-desc">
          My core skills include HTML, CSS, JavaScript, React.js, and UI design.
          I also have hands-on experience with backend tools like Node.js and
          Express.js, allowing me to build full-stack applications. I’m always
          eager to learn new technologies, collaborate on meaningful projects,
          and solve real-world problems through code.
        </p>
        <div className="card-wrapper">
          <AboutCard title="Name" content="Md. Imteyaz Alam" />
          <AboutCard title="Email" content="mdimteyaz6493@gmail.com" />
        </div>
              </motion.div>
       
    </div>
  );
};

export default About;
