import React from 'react';
import {
    BiLogoJava, BiLogoCPlusPlus, BiLogoJavascript, BiLogoPython, BiLogoHtml5, BiLogoCss3,
    BiLogoReact, BiLogoSpringBoot, BiLogoDjango, BiLogoTailwindCss, BiLogoGit, BiLogoGithub
} from 'react-icons/bi'
import { SiDocker, SiMysql, SiPostgresql, SiRedis, SiVisualstudiocode } from 'react-icons/si'
import {motion} from 'framer-motion'

const Skills = () => {

    const iconSize = 60;
    const pl = [{ label: "Java", Icon: BiLogoJava }, { label: "C++", Icon: BiLogoCPlusPlus }, { label: "JavaScript", Icon: BiLogoJavascript },
    { label: "Python", Icon: BiLogoPython }, { label: "HTML", Icon: BiLogoHtml5 }, { label: "CSS", Icon: BiLogoCss3 }]
    const fl = [{ label: "React.JS", Icon: BiLogoReact }, { label: "SpringBoot", Icon: BiLogoSpringBoot }, { label: "Django", Icon: BiLogoDjango },
    { label: "TailwindCSS", Icon: BiLogoTailwindCss }]
    const tb = [{ label: "Git", Icon: BiLogoGit }, { label: "Github", Icon: BiLogoGithub }, { label: "MySQL", Icon: SiMysql }, { label: "PostgreSQL", Icon: SiPostgresql },
    { label: "Vscode", Icon: SiVisualstudiocode }, { label: "Redis", Icon: SiRedis }, { label: "Docker", Icon: SiDocker }]

    return (
        <section className='z-[1] relative p-[25px] my-[25px] flex flex-col items-center w-screen'>

            <h1 className='header text-white text-center font-bold text-[54px]'>
                Skills
            </h1>

            <div className='skill flex flex-wrap justify-evenly w-full mt-[50px] my-8'>
                <div id="skills" className='flex flex-col flex-1 items-center mx-8'>
                    <div className='mb-6'><text className='border-b-2 border-white font-semibold bg-black text-lg text-white pb-2'>Programming Language</text></div>
                    <motion.div
                        className="flex flex-1"
                        initial={{
                            opacity: 0,
                            x: -100,
                            // if odd index card,slide from right instead of left
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.7 // Animation duration
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        <div className="flex flex-1 flex-wrap px-4 py-6 w-full rounded-lg items-center bg-gray-200/90">
                            {pl.map(({ label, Icon }) => {
                                return (
                                    <div key={pl.label} className="flex p-4 box-border w-1/2 flex-col items-center">
                                        <Icon size={iconSize} className='transition ease-in-out hover:scale-150 duration-200 cursor-pointer' />
                                        <text className='text-center text-sm font-mono'>{label}</text>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
                <div className='flex flex-col flex-1 items-center mx-8'>
                    <div className='mb-6'><text className='border-b-2 border-white font-semibold bg-black text-lg text-white pb-2'>Framework & Library</text></div>
                    <motion.div
                        className="flex flex-1"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            // if odd index card,slide from right instead of left
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.7 // Animation duration
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        <div className="flex flex-wrap px-4 py-6 w-full rounded-lg items-center bg-gray-200/90">
                            {fl.map(({ label, Icon }) => {
                                return (
                                    <div key={fl.label} className="flex p-4 box-border w-1/2 flex-col items-center">
                                        <Icon size={iconSize} className='transition ease-in-out hover:scale-150 duration-200 cursor-pointer' />
                                        <text className='text-center text-sm font-mono'>{label}</text>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                <div className='flex flex-col flex-1 items-center mx-8'>
                    <div className='mb-6'><text className='border-b-2 border-white font-semibold bg-black text-lg text-white pb-2'>Tool & Database</text></div>
                    <motion.div
                        className="flex flex-1"
                        initial={{
                            opacity: 0,
                            x: 100,
                            // if odd index card,slide from right instead of left
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.7 // Animation duration
                            }
                        }}
                        viewport={{ once: false }}
                    >

                        <div className="flex flex-1 flex-wrap px-4 py-6 w-full rounded-lg items-center bg-gray-200/90">
                            {tb.map(({ label, Icon }) => {
                                return (
                                    <div key={tb.label} className="flex p-4 box-border w-1/2 flex-col items-center">
                                        <Icon size={iconSize} className='transition ease-in-out hover:scale-150 duration-200 cursor-pointer' />
                                        <text className='text-center text-sm font-mono'>{label}</text>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className='language flex justify-center rounded-md bg-gray-200/90 mt-4'>
                <text className='px-[26px] py-[18px] font-semibold text-xl'>I speak <b>English & Chinese</b> </text>
            </div>
        </section>
    );

}

export default Skills;