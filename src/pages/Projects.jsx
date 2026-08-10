import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Character from '../assets/ProjectsPNG.png'
import Ecommerce from '../assets/Projects/E-Commerce.png'
import Amazon from '../assets/Projects/Amazon_Clone.png'
import Chatbox from '../assets/Projects/AI_Chatbox.png'
import Weather from '../assets/Projects/Weather_App.png'
import TODO from '../assets/Projects/Todo_List.png'
import Calc from '../assets/Projects/Calculator.png'

const Projects = () => {
  const projectsPage = useRef()
  const heading = useRef()
  const character = useRef()


  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle absolute rounded-full pointer-events-none "
    />
  ));
  useGSAP(() => {
    const width = projectsPage.current.offsetWidth;
    const height = projectsPage.current.offsetHeight;

    gsap.utils.toArray(".particle").forEach((particle) => {
      function drift() {
        gsap.set(particle, {
          x: -50,
          y: gsap.utils.random(0, height),
        });
        gsap.to(particle, {
          x: width + 50,
          y: `+=${gsap.utils.random(-20, 20)}`,
          duration: gsap.utils.random(12, 20),
          ease: "none",
          onComplete: drift,
        });
      }
      gsap.set(particle, {
        x: gsap.utils.random(-50, width),
        y: gsap.utils.random(0, height),
      });
      gsap.to(particle, {
        x: width + 50,
        y: `+=${gsap.utils.random(-20, 20)}`,
        duration: gsap.utils.random(5, 15),
        ease: "none",
        onComplete: drift,
      });
      gsap.to(particle, {
        opacity: gsap.utils.random(0.15, 0.35),
        scale: gsap.utils.random(0.8, 1.4),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, { scope: projectsPage });



  return (
    <div id='cont-about' className='h-screen' ref={projectsPage}>
      <div className='hidden lg:block z-99'>
        {particles}
      </div>

      <div className='h-full flex justify-center items-center flex-col pt-2  w-full'>
        <div className='lg:mt-25 mt-15'>
          <h1 ref={heading} className='heading1 Big text-amber-200 lg:text-7xl text-6xl font-bold '>Projects</h1>
        </div>
        <div className='h-full w-full flex justify-center'>
          <div className='hidden lg:block relative bottom-15'>
            <img ref={character} src={Character} className='h-155' />
          </div>

          <div className='my-scroll lg:w-200 lg:h-120 w-90 h-auto mt-5 bg-white/2 backdrop-blur-lg  border-white/20 rounded-2xl shadow-lg pt-6 px-6 border flex  lg:justify-around flex-wrap gap-4 justify-center overflow-y-scroll overflow-x-hidden mb-20'>
            <div className='hidden lg:block absolute z-99'>
              {particles}
            </div>

            <div className='w-80 h-fit flex flex-col justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={Ecommerce} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>React E-Commerce Website</h2>
              </a>
            </div>

            <div className='w-80 h-fit flex flex-col justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={Chatbox} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>AI-Chatbox</h2>
              </a>
            </div>

            <div className='w-80 h-fit flex flex-col justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={Weather} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>Weather App</h2>
              </a>
            </div>

            <div className='w-80 h-fit flex flex-col justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={TODO} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>To-Do List App</h2>
              </a>
            </div>

            <div className='w-80 h-fit flex flex-col  justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={Calc} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>JS Calculator</h2>
              </a>
            </div>

            <div className='w-80 h-fit flex flex-col justify-center items-center'>
              <a href="" className='flex flex-col items-center justify-center'>
                <img src={Amazon} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>Amazon Clone</h2>
              </a>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Projects