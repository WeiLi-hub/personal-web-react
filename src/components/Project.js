import React from 'react'
import ProjectLeft from './Project_left';
// import Website from '../image/project_personalwebsite.png'
import example from '../image/bg_about.jpg'
import ProjectRight from './Project_right';

const Project = () => {
    return (
        <section id="project" className="py-20 relative flex flex-col font-sans items-center">
            <div className='flex pb-8 justify-center'>
                <h1 className='header text-gray-300 text-center font-bold font-serif text-[54px]'>
                    Projects
                </h1>
            </div>
            <ProjectLeft image={example} name="Personal Porfolio" tech={["React.js", "TailwindCSS", "TailwindCSS", "TailwindCSS", "TailwindCSS"]}
                description=" Designed and developed a mobile and desktop-responsive portfolio website with a dynamic and interactive
            user interface.
            Created custom, reusable, and responsive UI components using React.js and Tailwind CSS.
            Implemented smooth, parallax scrolling effects and leveraged Framer Motion for scroll-driven animations.
            Optimized the web application performance and maintainability by applying modern React design patterns
            and integrating third-party libraries" href="https://github.com/WeiLi-hub" />

            <ProjectRight image={example} name="Personal Porfolio" tech={["React.js", "TailwindCSS", "TailwindCSS", "TailwindCSS", "TailwindCSS"]}
                description=" Designed and developed a mobile and desktop-responsive portfolio website with a dynamic and interactive
            user interface.
            Created custom, reusable, and responsive UI components using React.js and Tailwind CSS.
            Implemented smooth, parallax scrolling effects and leveraged Framer Motion for scroll-driven animations.
            Optimized the web application performance and maintainability by applying modern React design patterns
            and integrating third-party libraries" href="https://github.com/WeiLi-hub" />

        </section>
    )
}

export default Project;