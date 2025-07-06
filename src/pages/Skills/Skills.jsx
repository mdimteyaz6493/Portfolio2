import React from 'react';
import SkillCard from '../Skills/SkillCard'
import './Skills.css';
import { useTheme } from "../../Context/ThemeContext"; // ✅ Add this


const Skills = () => {

      const { darkMode } = useTheme(); // ✅ Get darkMode
    
  const frontendSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Tailwind', level: 75 },
    { name: 'Bootstrap', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'REST APIs', level: 85 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Figma/UI Design', level: 80 },
    { name: 'Responsive Design', level: 95 },
  ];

  return (
    <div className={`skills-section ${darkMode ? "dark" : ""}`}>
      <div className="skills-title">
        <h2>My Skills</h2>
      <span>Here are my skills and technologies I've been working with recently</span>
      </div>
      <div className="skills-grid">
        <SkillCard title="Frontend" skills={frontendSkills} />
        <SkillCard title="Backend" skills={backendSkills} />
        <SkillCard title="Other Skills" skills={otherSkills} />
      </div>
    </div>
  );
};

export default Skills;
