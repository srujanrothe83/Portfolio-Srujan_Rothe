import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { useEffect } from 'react'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  useEffect(() => {

    window.addEventListener("mousemove", (e) => {
      gsap.to(".cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, []);
  return (
    <>
    <div className="cursor z-[99.9] pointer-events-none h-5 w-5 fixed  rounded-full md:block hidden"></div>
    <div ref={homeRef}>
    <Homepage  refs={{homeRef,aboutRef,skillsRef}}/>
    </div>
    <div ref={aboutRef}>
      <About />
    </div>
    <div ref={skillsRef}>

    <Skills />
    </div>
    <div ref={projectsRef}>

    <Projects />
    </div>

    </>
  )
}

export default App