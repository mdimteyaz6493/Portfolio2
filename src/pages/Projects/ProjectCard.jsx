import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';


const ProjectCard = ({ title, description, image, technologies, demoLink, githubLink ,index}) => {
  return (
     <motion.div
                 key={index}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
  <div className="project-img-container">
        <img src={image} alt={title} className="project-img" />
        <div className="project-overlay">
          <a href={demoLink} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="icon" />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>

      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

</motion.div>

  );
};

export default ProjectCard;
