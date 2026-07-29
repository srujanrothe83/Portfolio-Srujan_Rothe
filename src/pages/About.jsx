import React, { useRef } from 'react'
import Character from '../assets/AboutCharacter.png'
import CV from '../assets/cv.png'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger)
const About = () => {

  const aboutPage = useRef()
  const heading1Ref = useRef()
  const heading2Ref = useRef()
  const heading3Ref = useRef()
  const Para1Ref = useRef()
  const Para2Ref = useRef()
  const Para3Ref = useRef()
  const Para4Ref = useRef()

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle absolute rounded-full pointer-events-none"
    />
  ));
  useGSAP(() => {

    gsap.utils.toArray(".particle").forEach((particle) => {

      const width = aboutPage.current.offsetWidth;
      const height = aboutPage.current.offsetHeight;

      gsap.set(particle, {
        x: gsap.utils.random(-100, width),
        y: gsap.utils.random(0, height),
      });

      function drift() {
        gsap.to(particle, {
          x: width + 50,
          y: `+=${gsap.utils.random(-15, 15)}`,
          duration: gsap.utils.random(12, 20),
          ease: "none",

          onComplete: () => {
            gsap.set(particle, {
              x: -50,
              y: gsap.utils.random(0, height),
            });

            drift();
          },
        });
      }

      drift();

      gsap.to(particle, {
        opacity: gsap.utils.random(0.1, 0.35),
        scale: gsap.utils.random(0.8, 1.4),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    });

  },[]);



  useGSAP(() => {

    const split1 = new SplitType(Para1Ref.current, {
      types: "words"
    });

    const split2 = new SplitType(Para2Ref.current, {
      types: "words"
    });
    const split3 = new SplitType(Para3Ref.current, {
      types: "words"
    });
    const split4 = new SplitType(Para4Ref.current, {
      types: "words"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutPage.current,
        start: "top 70%",
      },
    });
    gsap.from('.image2', {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutPage.current,
        start: "top 70%",
      },
    })
    gsap.to(".image2", {
      x: 10,
      rotation: 2,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })

    tl.from(heading1Ref.current, {
      x: 300,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

    })

      .from(split1.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03,

      })

      .from(split2.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03,

      })

      .from(heading2Ref.current, {
        x: 300,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(split3.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03,

      })
      .from(heading3Ref.current, {
        x: 300,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(split4.words, {
        opacity: 0,
        y: 20,
        stagger: 0.03,

      })
      .from(".btn", {
        opacity: 0,
        scale: 0,
        ease: "bounce.in",
        stagger: 0.3
      })
      .to(".btn", {
        y: 3,
        rotation: 1,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });


    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      split1.revert();
      split2.revert();
    };

  }, { scope: aboutPage });




  return (

    <>
      <div id='cont-about' ref={aboutPage} className='overflow-x-hidden overflow-y-hidden'>

        <img src={Character} alt="Character Image" className='z-[99999] image2 h-160 lg:block hidden absolute right-10' />
        <div className='hidden lg:block'>
            {particles}
          </div>
        <div className='lg:w-[70vw] w-full flex justify-start flex-col lg:pl-20 items-center h-screen lg:pt-13 pt-20'>
          <h1 ref={heading1Ref} className='heading1 Big text-amber-200 lg:text-7xl text-6xl font-bold lg:mr-50 mb-4'>WHO AM I</h1>
          
          <div className='px-10'>
            <h2 className='text-white Poppins' ref={Para1Ref}>Hi, I'm Srujan Rothe.</h2>
            <p className='small' ref={Para2Ref}>A third-year Information Technology student and a self-taught Frontend Developer from India. I'm passionate about turning ideas into clean, responsive, and interactive web experiences.</p>
            
            <h1 ref={heading2Ref} className='heading1  text-amber-200 lg:text-5xl text-4xl font-bold mt-10 lg:ml-27 ml-13 mb-3'>What I Do</h1>
            <p ref={Para3Ref} className='small'>I build modern websites using technologies like React, JavaScript, Tailwind CSS, and GSAP, with a strong focus on smooth animations, intuitive user experiences, and clean design.</p>

            <h1 ref={heading3Ref} className='heading1  text-amber-200 lg:text-5xl text-4xl font-bold mt-10 lg:ml-27 ml-13 mb-3 hidden lg:block'>Beyond the Code</h1>
            <p ref={Para4Ref} className='small hidden lg:block'>I'm constantly learning, experimenting, and refining my skills through personal projects. Every project is an opportunity to create something better than the last, blending creativity with functionality to build experiences that leave a lasting impression.</p>
            
            <div className='flex gap-3 pt-6 lg:pl-30'>
              <button className='cursor-pointer btn py-2 flex gap-2 items-center px-4 border rounded-2xl text-[#93d9fa]'>Resume <img className='hidden lg:block h-7 w-fit' src={CV} alt="" /></button>

              <button className='cursor-pointer btn py-2 flex gap-2 items-center px-4 border rounded-2xl text-[#93d9fa]'>Linked In <img className='hidden lg:block h-7 w-fit' src={LinkedIn} alt="" /></button>
              <button className='cursor-pointer btn py-2 flex gap-2 items-center px-4 border rounded-2xl text-[#93d9fa]'>GitHub <img className='hidden lg:block h-7 w-fit' src={Github} alt="" /></button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default About