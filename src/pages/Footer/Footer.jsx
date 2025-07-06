import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-brand">Md Imteyaz</h2>

        <ul className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="Education">Education</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/mdimteyaz6493" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/md-imteyaz" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:yourmail@example.com"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Md Imteyaz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
