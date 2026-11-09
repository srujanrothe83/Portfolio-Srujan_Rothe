import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import ReactIMG from '../assets/react.png'
import JS from '../assets/js.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import vsCode from '../assets/vsCode.png'
import gsapIMG from '../assets/gsap.png'
import NPM from '../assets/NPM.png'
import Vercel from '../assets/Vercel.png'
import Vite from '../assets/Vite.png'
import Express from '../assets/Express.png'
import MongoDB from '../assets/MongoDB.png'
import Node from '../assets/Node.png'
import TS from '../assets/TypeScript.png'


const Skills = () => {
    const skillPage = useRef()

    const particles = Array.from({ length: 20 }, (_, i) => (
        <div
            key={i}
            className="particle absolute rounded-full pointer-events-none "
        />
    ));
    useGSAP(() => {
        const width = skillPage.current.offsetWidth;
        const height = skillPage.current.offsetHeight;

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
    }, { scope: skillPage });

    const skills1 = [
        { name: "JavaScript", icon: JS },
        { name: "TypeScript", icon: TS },
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "python", icon: python },
    ]
    const skills2 = [
        { name: "React", icon: ReactIMG },
        { name: 'tailwind', icon: tailwind },
        { name: 'gsap', icon: gsapIMG },
    ]
    const skills3 = [
        { name: "git", icon: git },
        { name: "vsCode", icon: vsCode },
        { name: "github", icon: github },
        { name: "vite", icon: Vite },
        { name: "vercel", icon: Vercel },
        { name: "NPM", icon: NPM },
    ]
    const skills4 = [
        { name: "Express", icon: Express },
        { name: "MongoDB", icon: MongoDB },
        { name: "Node", icon: Node },
    ]

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skillPage.current,
                start: "top 70%",
            },
        });

        tl.from(".Skills",{
            opacity:0,
            duration:0.8,
            x:90
        })
        .from(".small1",{
            opacity:0,
            duration:1,
            stagger:0.3,
            y:40
        })
        .from(".icon",{
            opacity:0,
            duration:3,
            stagger:0.3,
        })
        .to(".icon", {
        y: 10,
        rotation: 1,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
      gsap.to(".small1",{
        x:10,
        duration:2,
        rotation:2,
        ease:"sine.inOut",
        yoyo:true,
        repeat:-1

      })
    })

    return (
        <div id='cont-skills' ref={skillPage}>
            <div className='hidden lg:block'>
                {particles}
            </div>
           
            <div className='w-full h-full  lg:py-25 py-15 px-20 flex justify-start flex-col items-center'>
                <h1 className='heading1 Skills Big text-amber-200 lg:text-7xl text-6xl font-bold mb-10'>Skills</h1>
                <div className='w-full flex gap-5 lg:gap-0 flex-wrap items-center '>
                    <div className='lg:w-1/2  flex justify-center flex-col items-center  '>
                        <h2 className='small1 mb-5'>Languages</h2>
                        <div className='flex gap-4 flex-wrap justify-center lg:mx-10 z-999'>
                            {skills1.map((skill) => (
                                <button
                                    key={skill.name}
                                    className="icon group relative rounded-full bg-zinc-900 p-4"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />

                                    <span
                                        className="absolute left-1/2 -translate-x-1/2 -top-10 bg-zinc-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition
                                        "
                                    >
                                        {skill.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='lg:w-1/2 w-screen  flex justify-center flex-col items-center '>
                        <h2 className='small1 mb-5'>FrontEnd</h2>
                        <div className='flex gap-4 flex-wrap justify-center lg:mx-10 z-999'>
                            {skills2.map((skill) => (
                                <button
                                    key={skill.name}
                                    className="icon group relative rounded-full bg-zinc-900 p-4"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />

                                    <span
                                        className="absolute left-1/2 -translate-x-1/2 -top-10 bg-zinc-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition
                                        "
                                    >
                                        {skill.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    
                    <div className='lg:w-1/2  flex justify-center flex-col items-center lg:mt-12'>
                        <h2 className='small1 mb-5'>Backend</h2>
                        <div className='flex gap-4 flex-wrap justify-center lg:mx-10 z-999'>
                            {skills4.map((skill) => (
                                <button
                                    key={skill.name}
                                    className="icon group relative rounded-full bg-zinc-900 p-4"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />

                                    <span
                                        className="absolute left-1/2 -translate-x-1/2 -top-10 bg-zinc-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition
                                        "
                                    >
                                        {skill.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='lg:w-1/2  flex justify-center flex-col items-center lg:mt-12'>
                        <h2 className='small1 mb-5'>Tools</h2>
                        <div className='flex gap-4 flex-wrap justify-center lg:mx-10 z-999'>
                            {skills3.map((skill) => (
                                <button
                                    key={skill.name}
                                    className="icon group relative rounded-full bg-zinc-900 p-4"
                                >
                                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />

                                    <span
                                        className="absolute left-1/2 -translate-x-1/2 -top-10 bg-zinc-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition
                                        "
                                    >
                                        {skill.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default Skills
