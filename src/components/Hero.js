import React from 'react'
import Typed from 'react-typed'
import { BsArrowDownCircle } from 'react-icons/bs'
import Particle from './Particle'

const Hero = () => {
    return (
        <section id="hero" className='flex px-2 sm:px-4 h-screen'>
            <Particle />
            <div className="flex-col container mx-auto flex relative px-2 pb-12 items-center space-y-6">
                <h1 className='capitalize text-[86px] text-cyan-600 text-stroke-3'>welcome!</h1>

                <h2 className="flex text-4xl text-white justify-center items-center">
                    <span className="wave text-[50px] pr-2">👋</span>
                    Hi, I'm
                    <div className='contact ml-2 px-2 py-6 rounded-lg'>
                        <text className=' bg-slate-900 text-white p-4 rounded-md font-serif'>Weiqiang Li</text>
                    </div>
                </h2>
                <Typed
                    style={{ fontSize: "48px", color: 'transparent', WebkitTextStroke: "2px #e73c7e" }}
                    strings={['Software Engineer', 'Web Developer', 'Front-End', 'Back-End', 'Full-Stack']}
                    typeSpeed={100}
                    backSpeed={80}
                    cursorChar="_"
                    loop
                />

                <a href="#about" className="text-white">
                    <BsArrowDownCircle size={50} className='floating_down' />
                </a>
            </div>
        </section>
    )
}

export default Hero;