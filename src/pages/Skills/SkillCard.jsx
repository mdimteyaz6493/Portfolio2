import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';


const SkillCard = ({ title, skills,index }) => {
  return (
     <motion.div
                 key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </li>
        ))}
      </ul>
  </motion.div>
  );
};

export default SkillCard;
