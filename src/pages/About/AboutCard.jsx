import React from 'react';
import './About.css';

const AboutCard = ({ title, content }) => {
  return (
    <div className="about-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default AboutCard;
