import React from 'react'
import ProjectLeft from './Project_left';
import ProjectRight from './Project_right';
import Website from '../image/project_personalwebsite.png'

const Project = () => {
    return (
        <section id="project" className="py-20 relative flex flex-col font-sans">
            <div className='flex pb-8 justify-center'>
                <h1 className='header text-white text-center font-bold font-serif text-[54px]'>
                    Projects
                </h1>
            </div>
            <ProjectLeft image={Website} name="Personal Porfolio" description="This is description" href="https://github.com/WeiLi-hub" />

        </section>
    )
}

export default Project;