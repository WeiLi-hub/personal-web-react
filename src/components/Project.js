import React from 'react'
import ProjectLeft from './Project_left';
import Website from '../image/project_personalwebsite.png'

const Project = () => {
    return (
        <section id="project" className = "py-20 relative justify-center items-center flex flex-col">
            <div className='flex pb-8'>
                    <hr color = "white"></hr>
                <h1 className='text-white font-extrabold font-serif text-[54px]'>
                    Projects
                </h1>
                    <hr></hr>
            </div>
            <ProjectLeft image = {Website} name ="Personal Porfolio" description = "This is description" />
            <ProjectLeft image = {Website} name ="Personal Porfolio" description = "This is description" />
        </section>
    )
}

export default Project;