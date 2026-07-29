import React, { useEffect, useRef, useState } from 'react'
import CharacterIMG from '../assets/Character.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ChevronsDown, Tally2, X } from 'lucide-react'
import { BrowserRouter, Link } from 'react-router-dom'

const Homepage = () => {

  const [menu, setmenu] = useState(false)
  const tl1 = useRef()
  const homePage = useRef()

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="particle absolute rounded-full pointer-events-none"
    />
  ));

  useGSAP(() => {

    gsap.utils.toArray(".particle").forEach((particle) => {

      const width = homePage.current.offsetWidth;
      const height = homePage.current.offsetHeight;

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

  }, []);

  useGSAP(() => {
    tl1.current = gsap.timeline({
      paused: true
    })

    tl1.current.from('#menu', {
      x: -100,
      opacity: 0,
      duration: 0.4,
      ease: "back.out"
    })
    tl1.current.fromTo(
      ".Link",
      {
        y: -40,
        opacity: 0,
        rotation: -6,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.55,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.08,
          from: "start",
        },
      },
      "-=0.15"
    );
  }, [])

  function menuAnimation() {
    setmenu(!menu)

  }
  useEffect(() => {

    if (!tl1.current) return;

    menu ? tl1.current.play() : tl1.current.reverse();

  }, [menu]);

  useGSAP(() => {
    var tl = gsap.timeline()

    tl.from("#temp-cont", {
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    })
      .from(".span1", {
        opacity: 0,
        duration: 0.5,
        x: -20,
        stagger: 0.3,
        ease: "elastic.out(1,0.3)"
      })
      .from(".span2", {
        opacity: 0,
        duration: 0.5,
        x: 20,
        stagger: 0.3,
        ease: "elastic.out(1,0.3)"
      })
      .from(".image", {
        y: -200,
        scale: 1.2,
        opacity: 0,
        duration: 0.7,
        ease: "expo.out",
      })
      .from(".menu", {
        opacity: 0,
        duration: 0.2,
      })
      .to(".scroll", {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.6,
        ease: "power4.out"
      })
    tl.to(".image", {
      y: 10,
      rotation: 2,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })
    gsap.to(".scroll", {
      y: 10,
      scale: 1.03,
      duration: 1.3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, [])


  return (
    <>
      <div className='max-h-[100vh] overflow-x-hidden overflow-y-hidden' ref={homePage}>
        <div id='temp-cont'>
          <div className='hidden lg:block'>
            {particles}
          </div>
          <div className="menu fixed lg:top-6 top-3 left-3 lg:left-6 z-[99999]">
            <button className='cursor-pointer z-[9999999]' onClick={menuAnimation}>
              {menu ? <X size={32} color="#978c44" /> : <Tally2 size={32} color="#978c44" />}
            </button>
          </div>

          <div id="menu" className='menu-div lg:h-120 h-90 fixed lg:w-100 w-[70%] z-[99999] lg:top-18 top-11 left-10 rounded-2xl flex justify-start items-center flex-col py-10 px-5 gap-4'>
            <Link to={"/"} className='Link h-fit w-full px-10 py-4 rounded-4xl text-xl'>Home</Link>
            <Link to={"/"} className='Link h-fit w-full px-10 py-4 rounded-4xl text-xl'>Who Am I? </Link>
            <Link to={"/"} className='Link h-fit w-full px-10 py-4 rounded-4xl text-xl'>Projects</Link>
            <Link to={"/"} className='Link h-fit w-full px-10 py-4 rounded-4xl text-xl'>Contact</Link>
          </div>
          

          <div className='h-full flex flex-col justify-center items-center pt-10 lg:pt-0'>
            <div className='headings heading1  flex justify-between gap-1 lg:w-216 lg:ml-10'>
              <span className='span1 lg:text-9xl text-5xl font-semibold text-amber-200'>PORT</span>
              <span className='span2 lg:text-9xl text-5xl font-semibold text-amber-200'>FOLIO</span>
            </div>
            <div className='headings lg:tracking-[24px] tracking-[16px] ml-3 lg:ml-3 
                flex lg:gap-32 gap-3 text-amber-50'>
              <span className='span1'>SRUJAN</span>
              <span className='span2'>ROTHE</span>
            </div>
            <div className='lg:absolute'>
              <img src={CharacterIMG} alt="CharacterIMG" className='z-[9999999] image w-70 mt-2 drop-shadow-2xl' />
            </div>
          </div>

          <div className='scroll-div w-full flex justify-center absolute bottom-5'>
            <p className='scroll border px-2 py-1 rounded-2xl flex flex-col justify-center items-center text-white border-gray-600'>Scroll Down <span id='icon'><ChevronsDown /></span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage