import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Character from '../assets/ProjectsPNG.png'
import AI_Virtual_Assistant from '../assets/AI_Virtual_Assistant.png'
import Ecommerce from '../assets/Projects/E-Commerce.png'
import SmartHealth from '../assets/Projects/SmartHealth.png'
import Chatbox from '../assets/Projects/AI_Chatbox.png'
import Weather from '../assets/Projects/Weather_App.png'
import TODO from '../assets/Projects/Todo_List.png'
import Calc from '../assets/Projects/Calculator.png'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projectsPage = useRef()
  const heading = useRef()
  const character = useRef()
  const cont = useRef()


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

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsPage.current,
        start: "top 70%",
      },
    });

    tl.from(heading.current, {
      opacity: 0,
      duration: 0.6,
      x: 90
    })
      .from(character.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        delay: 0.1
      })
      .from(cont.current, {
        opacity: 0,
        duration: 0.8
      })
      .from('.box', {
        opacity: 0,
        duration: 1,
        stagger: 0.1
      });
    gsap.to(character.current, {
      x: 10,
      rotation: 2,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })
  }, { scope: projectsPage })



  return (
    <div id='cont-about' className='h-auto w-full'>
    <div  className='lg:h-screen' ref={projectsPage}>
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

          <div ref={cont} className='my-scroll lg:w-200 lg:h-120 w-90 h-auto mt-5 bg-white/2 backdrop-blur-lg  border-white/20 rounded-2xl shadow-lg pt-6 px-6 border flex  lg:justify-around flex-wrap gap-4 justify-center overflow-y-scroll overflow-x-hidden mb-20'>
            <div className='hidden lg:block absolute z-99'>
              {particles}
            </div>

            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://ai-virtual-assistant-frontend-8168.onrender.com/" className='flex flex-col items-center justify-center'>
                <img src={AI_Virtual_Assistant} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>AI_Virtual Assistant | MERN</h2>
              </a>
            </div>
            
            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://e-commerce-website-srujan-rothe.vercel.app/" className='flex flex-col items-center justify-center'>
                <img src={Ecommerce} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>React E-Commerce Website</h2>
              </a>
            </div>

            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://srujanrothe83.github.io/AI_Chatbox-Srujan_Rothe/" className='flex flex-col items-center justify-center'>
                <img src={Chatbox} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>AI-Chatbox</h2>
              </a>
            </div>

            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://srujanrothe83.github.io/Weather_App/" className='flex flex-col items-center justify-center'>
                <img src={Weather} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>Weather App</h2>
              </a>
            </div>

            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://srujanrothe83.github.io/To-Do-List/" className='flex flex-col items-center justify-center'>
                <img src={TODO} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>To-Do List App</h2>
              </a>
            </div>

            <div className='box w-80 h-fit flex flex-col  justify-center items-center'>
              <a href="https://srujanrothe83.github.io/Calculator/" className='flex flex-col items-center justify-center'>
                <img src={Calc} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>JS Calculator</h2>
              </a>
            </div>

            <div className='box w-80 h-fit flex flex-col justify-center items-center'>
              <a href="https://srujanrothe83.github.io/Smart_health_care/" className='flex flex-col items-center justify-center'>
                <img src={SmartHealth} className='w-50 rounded-3xl' />
                <h2 className='small my-1'>Smart Health Care System</h2>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center w-full flex-col mb-4 lg:mt-3'>
        <h2>Made with ❤ by <Link className='text-xl underline hover:text-blue-800 hover:dotted' to='https://www.linkedin.com/in/srujan-rothe-59301a350/' target='_blank'>Srujan Rothe</Link></h2>
        <Link to='https://github.com/srujanrothe83' target='_blank'>
        <img className='h-9 w-9' src="https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Transparent-Image.png" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Projects
