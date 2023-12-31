import React from 'react'
import Typed from 'react-typed'
import { BsArrowDownCircle } from 'react-icons/bs'
import Particle from './Particle'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="hero" className='flex px-2 sm:px-4 h-screen'>
            <Particle />
            <div className="flex-col container mx-auto flex relative px-2 pb-12 items-center space-y-6">
                <motion.div
                    className=""
                    initial={{
                        opacity: 0,
                        x: -200,
                        y: -200,
                        // if odd index card,slide from right instead of left
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            duration: 0.7 // Animation duration
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <h1 className='capitalize text-[86px] text-cyan-600'>welcome!</h1>
                </motion.div>

                <motion.div
                    className=""
                    initial={{
                        opacity: 0,
                        x: 200,
                        y: 200,
                        // if odd index card,slide from right instead of left
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            duration: 0.7,
                            delay: 0.5, // Animation duration
                        }
                    }}
                    viewport={{ once: false }}
                >

                    <h2 className="flex text-4xl text-gray-300 justify-center items-center">
                        <span className="wave text-[50px] pr-2">👋</span>
                        Hi, I'm
                        <div className='contact ml-2 px-2 py-6 rounded-lg'>
                            <motion.div
                                className=""
                                initial={{
                                    opacity: 0,
                                    // if odd index card,slide from right instead of left
                                }}
                                whileInView={{
                                    opacity: 1,
                                    transition: {
                                        duration: 1.3,
                                        delay: 1.1, // Animation duration
                                    }
                                }}
                                viewport={{ once: false }}
                            >
                                <text className=' bg-slate-900 text-white p-4 rounded-md font-serif'>Weiqiang Li</text>
                            </motion.div>
                        </div>
                    </h2>
                </motion.div>

                <motion.div
                    className=""
                    initial={{
                        opacity: 0,
                        // if odd index card,slide from right instead of left
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 1.1,
                            delay: 1.3, // Animation duration
                        }
                    }}
                    viewport={{ once: false }}
                >
                    <Typed
                        style={{ fontSize: "48px", color: 'transparent', WebkitTextStroke: "2px #e73c7e" }}
                        strings={['Software Engineer', 'Web Developer', 'Front-End', 'Back-End', 'Full-Stack']}
                        typeSpeed={100}
                        backSpeed={80}
                        cursorChar="_"
                        loop
                    />
                </motion.div>
                <a href="#about" className="text-white">
                    <BsArrowDownCircle size={50} className='floating_down' />
                </a>
            </div>
        </section>
    )
}

export default Hero;