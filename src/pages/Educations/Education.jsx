import React, { useEffect } from "react";
import "./Education.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";


const educationData = [
  {
    title: "10th Standard",
    institution: "Ram mohan Roy seminary",
    year: "2015 - 2016",
    marks: "71%",
    description: "I am completed my matriculation from Ram mohan Roy seminary .",
  },
  {
    title: "12th Standard",
    institution: "Ram mohan Roy seminary",
    year: "2016 - 2018",
    marks: "60%",
    description: "I am completed my High school education from Ram mohan Roy seminary .",
  },
  {
    title: "Graduation (BCA)",
    institution: "Indra gandhi national open university",
    year: "2018 - 2022",
    marks: "66.8%",
    description: "I am completed my Bachelor Degree from IGNOU , where I learn about Computer application , Programming languages,Web development.",
  },
  {
    title: "Web Development Course",
    institution: "Online Platforms (Udemy & Projects)",
    year: "2022 - 2023",
    marks: "N/A",
    description: "Gained hands-on experience in HTML, CSS, JavaScript, React.js, Node.js and full-stack development.",
  },
];

const Education = () => {
        const { pathname } = useLocation();
  useEffect(() => {
    // Scrolls to top whenever route changes
    window.scrollTo(0, 0);
  }, [pathname]);

 const { darkMode } = useTheme(); // ✅ Get darkMode

  return (
    <section className={`education-section ${darkMode ? "dark" : ""}`}>
      <h2 className="edu-title">🎓 My Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <span className="edu-institution">{edu.institution}</span>
              <span className="edu-year">{edu.year}</span>
              <p className="edu-marks">Marks: {edu.marks}</p>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
