import React from 'react'
import Profile from './Profile';
import Skill from './Skill';
import umass from '../image/umass_amherst.svg'


const About = () => {
    return (
        <section id="about" className=' bg-gradient-to-b from-black bg-slate-700 flex py-20 sm:px-4  justify-center font-mono'>
            <div className='rounded-xl container mx-16 flex flex-col bg-slate-200 justify-center w-2/3 h-1/2'>
                <div className='rounded-t-xl text-center bg-violet-500 p-1.5'>
                    <text className='font-semibold text-white bg-black text-2xl px-4'>{"<>"}About Me{"</>"}</text>
                </div>

                <div className='p-4 flex flex-1 mb-6 bg-gradient-to-b from-violet-500 '>
                    <div className="flex flex-col pr-6 ">
                        <div className='pb-6 flex flex-col flex-1'>
                            <div className='pb-4 drop-shadow-xl'>
                                <text className='font-semibold bg-black text-white p-1'>Introduction</text>
                            </div>
                            <p className='text-justify text-lg'>Hi there! I'm Weiqiang Li, a computer science fresh graduate.
                                Curious to explore the web and work as Full-stack developer. I am a quick learner and hope to
                                achieve my goals through sheer hard work. I'm curious by nature and have a thirst for knowledge
                                and like to learn more and more at any point in time.
                                I also keep upgrading my skill-set, which I leverage to take myself to newer heights.</p>
                        </div>


                        <div className='drop-shadow-xl flex  flex-col shrink'>
                            <div className='drop-shadow-xl pb-4'>
                                <text className='font-semibold bg-black text-white p-1'>Education</text>
                            </div>
                            <img src={umass} className='drop-shadow-xl w-[35%] pb-2' alt=''></img>
                            <p className='text-xl'><em>B.S. in Computer Science</em> • Feb. 2021 - May. 2023</p>
                        </div>

                    </div>
                    <Profile />
                </div>

                <Skill />
            </div>


        </section >
    )
}

export default About;