import React from 'react'
import Profile from './Profile';
import Skill from './Skill';

const About = () => {
    return (
        <section id="about_me" className='flex py-20 sm:px-4 bg-slate-700 justify-center'>
            <div className='rounded-lg container mx-16 flex flex-col bg-white  justify-center h-1/2 w-2/3 border-black border-2'>
                <div className='text-center bg-black py-0.5'>
                    <text className='font-semibold text-white'>ABOUT ME</text>
                </div>
                <div className='flex mb-6 bg-gradient-to-b from-violet-500 '>
                    <div className="flex flex-grow">
                        <p>Place holder</p>
                        <p>Place holder</p>
                        <p>Place holder</p>
                        <p>Place holder</p>
                    </div>
                    <Profile />
                </div>

                <Skill />
            </div>


        </section>
    )
}

export default About;