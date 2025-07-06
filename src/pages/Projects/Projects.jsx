import React, { useEffect, useState } from 'react';
import ProjectCard from '../Projects/ProjectCard';
import './Projects.css';
import projectData from './ProjectData';
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const filterOptions = ['All', 'Frontend', 'Mern'];

const Projects = () => {
  const [selected, setSelected] = useState('All');
    const { pathname } = useLocation();
  useEffect(() => {
    // Scrolls to top whenever route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const { darkMode } = useTheme(); // ✅ Get darkMode

  const filteredProjects =
    selected === 'All'
      ? projectData
      : projectData.filter((p) => p.category === selected);

  return (
    <section className={`projects-section ${darkMode ? "dark" : ""}`}>
     <motion.h2
  className="projects-title"
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  My Projects
</motion.h2>
      <span className="projects-subtitle">
        Here are some of the works I’ve recently completed.
      </span>

      <div className="filter-bar" >
        {filterOptions.map((opt) => (
          <button
            key={opt}
            className={`filter-btn ${selected === opt ? 'active' : ''}`}
            onClick={() => setSelected(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
