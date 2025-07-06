import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import "./toggle.css";
import { useTheme } from "../../Context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth > 768) {
      setScrolled(window.scrollY > 10);
    } else {
      setScrolled(false); // Mobile devices par glass effect hata dena
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <nav className={`navbar ${darkMode ? "dark" : ""} ${scrolled ? "glass" : ""}`}>
       
        <div className="logo">
          <span>Md Imteyaz</span>
        </div>

        <ul className={`menu ${isOpen ? "open" : ""} ${darkMode ? "dark":""}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li ><Link to="/about"onClick={toggleMenu} >About</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
        </ul>

        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>

         <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
