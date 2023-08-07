import React from 'react'
import ProjectLeft from './Project_left';

const Project = () => {
    return (
        <section id="project" className = "py-20 bg-gradient-to-b from-black from-10% via-slate-600 via-30% to-slate-400 to-90% relative justify-center items-center flex flex-col">
            <ProjectLeft />
            <ProjectLeft />
        </section>
    )
}

export default Project;