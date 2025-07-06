import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Home from "../Home/Home"
import Education from '../Educations/Education'
import Footer from "../Footer/Footer"

const Fullpage = () => {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    <Education/>
    <Footer/>
    </>
  )
}

export default Fullpage
