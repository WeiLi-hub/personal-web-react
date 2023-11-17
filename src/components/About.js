import React from 'react'
import Profile from './Profile';
import Skill from './Skill';
import umass from '../image/umass_amherst.svg'
import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className=' bg-gradient-to-b from-black bg-slate-600 flex py-20 sm:px-4  justify-center font-serif'>
            <div className='rounded-xl container mx-16 flex flex-col bg-slate-200 justify-center w-[75%] h-1/2'>
                <div className='rounded-t-xl justify-center bg-violet-500 pb-1.5 flex'>
                    <div className='font-semibold rounded-b-xl text-white bg-black text-2xl py-1.5 px-4'>{"<>"}About Me{"</>"}</div>
                </div>

                <div className='p-4 flex bg-gradient-to-b from-violet-500 '>
                    <div className="flex-1 flex-col pr-6 ">
                        <div className='pb-6 flex flex-col flex-1'>
                            <div className='pb-4'>
                                <text className='shadow-lg shadow-gray-600 font-semibold bg-black text-white p-1'>Introduction</text>
                            </div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.25 }}
                            >
                                <p className='text-justify text-lg pb-3'>Hi! I'm Wei, a Computer Science recent graduate from Umass Amherst.
                                    Throughout my academic journey, I've developed a solid foundation in computation system and technologies, that includes
                                    the knowledge of operating system, data structure, networking, and data management, etc. Addtionally, the unwavering curiosity fuels
                                    my enthusiasm in the exploration of web-developemnt, serveral hands-on and team working experiences equipped me with a deep understanding of
                                    front-end an back-end technologies, as well as the art of crafting user-friendly and visually captivating websites.
                                </p>
                            </motion.div>
                            <p className='text-justify text-lg pb-3'>
                                I'm excited to leverage my prior web development experience and my fresh perspective as a recent graduate to
                                contribute effectively to forward-thinking projects. Whether it's refining the user experience, optimizing functionality,
                                or tackling new coding paradigms, I'm eager to embrace every opportunity to learn and grow.
                            </p>

                        </div>


                    </div>
                    <Profile />

                </div>
                <div className='px-4 pb-6 drop-shadow-2xl flex flex-col shrink'>
                    <div className='pb-4'>
                        <text className='shadow-lg shadow-gray-600 font-semibold bg-black text-white p-1'>Education</text>
                    </div>
                    <img src={umass} className='drop-shadow-xl w-[35%] pb-2' alt=''></img>
                    <p className='text-xl'><em>B.S. in Computer Science</em> • Jan. 2021 - May. 2023</p>
                </div>

                <Skill />
            </div>


        </section >
    )
}

export default About;