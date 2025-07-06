import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Fullpage from './pages/FullPage/Fullpage';
import Education from './pages/Educations/Education';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Fullpage />} />
         <Route path="/about" element={<About/>} />
         <Route path="/skills" element={<Skills/>} />
           <Route path="/projects" element={<Projects/>} />
            <Route path="/education" element={<Education/>} />
      </Routes>
    </Router>
  );
};

export default App;
