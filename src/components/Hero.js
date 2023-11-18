import React from 'react'
import Typed from 'react-typed'
import {BsArrowDownCircle} from 'react-icons/bs'
import Particle from './Particle'
const Hero = () => {
    return (
        <section id="hero" className='flex px-2 sm:px-4 h-screen'>
            <Particle />
            <div className="container mx-auto flex-col flex px-2 pb-12 pt-8 items-center relative space-y-8">
                <h1 className='capitalize text-[96px] text-cyan-600 text-stroke-3'>welcome!</h1>
          
                <h2 className="text-5xl pb-6 text-white">
                    <span className="wave text-[50px] pr-2">👋</span>
                    Hi, I'm 
                    <text className=' bg-gray-400 text-black ml-2 my-4 px-2'>Weiqiang Li</text>
                </h2>
                <div className=''>
                    <Typed
                        style={{ fontSize: "48px", color: 'transparent', WebkitTextStroke: "2px #e73c7e"}}
                        strings={['Software Engineer', 'Web Developer', 'Front-End', 'Back-End', 'Full-Stack']}
                        typeSpeed={100}
                        backSpeed={80}
                        cursorChar= "_" 
                        loop
                    />
                </div>
 
                <a href="#about" className= "text-white absolute bottom-1/4">
                    <BsArrowDownCircle size={50} className='arrow-down'/>
                </a>
            </div>
        </section>
    )
}

export default Hero;