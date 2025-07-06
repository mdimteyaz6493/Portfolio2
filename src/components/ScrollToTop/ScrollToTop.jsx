import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';
import { FaArrowUpLong } from "react-icons/fa6";


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
      <FaArrowUpLong />

      </button>
    )
  );
};

export default ScrollToTop;
