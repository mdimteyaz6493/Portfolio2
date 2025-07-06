import React from "react";
import "./About.css";
import AboutCard from "../About/AboutCard";
import { useTheme } from "../../Context/ThemeContext";

const About = () => {

    const { darkMode } = useTheme(); // ✅ Get darkMode

  return (
    <div className={`about-container ${darkMode ? "dark" : ""}`}>
      {/* Left: Image */}
      <div className="about-left">
        <img src="./hero.png" alt="profile" className="about-img" />
      </div>

      {/* Right: Text and Cards */}
      <div className="about-right">
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
      </div>
    </div>
  );
};

export default About;
