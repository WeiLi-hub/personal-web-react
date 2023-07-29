import React from 'react'
import Profile from './Profile';

const About = () => {
    return (
        <section id="about_me" className='flex py-20 sm:px-4 bg-neutral-700  border-gray-200 border-b-2 justify-center'>
            <div className='rounded-lg container mx-16 flex flex-col bg-white justify-center h-1/2 w-2/3'>
                <h4 className='text-center bg-gradient-to-br from-gray-300 to-gray-100 rounded-t-lg border-gray-300 border-b-2'>About Me</h4>

                <div className='flex'>
                    <Profile />
                    <div className="bg-slate-100 flex flex-grow">
                        <p>Place holder</p>
                        <p>Place holder</p>
                        <p>Place holder</p>
                        <p>Place holder</p>
                    </div>
                </div>
                <div>
                    <p>Skill</p>
                </div>
            </div>


        </section>
    )
}

export default About;