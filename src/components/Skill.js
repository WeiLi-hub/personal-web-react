import React from 'react'
import {
    BiLogoJava, BiLogoCPlusPlus, BiLogoJavascript, BiLogoPython, BiLogoHtml5, BiLogoCss3,
    BiLogoReact, BiLogoSpringBoot, BiLogoDjango, BiLogoTailwindCss, BiLogoGit, BiLogoGithub
} from 'react-icons/bi'
import { SiDocker, SiMysql, SiPostgresql, SiRedis, SiVisualstudiocode } from 'react-icons/si'

const Skill = () => {
    const iconSize = 60;
    const pl = [{ label: "Java", Icon: BiLogoJava }, { label: "C++", Icon: BiLogoCPlusPlus }, { label: "JavaScript", Icon: BiLogoJavascript },
    { label: "Python", Icon: BiLogoPython }, { label: "HTML", Icon: BiLogoHtml5 }, { label: "CSS", Icon: BiLogoCss3 }]
    const fl = [{ label: "React", Icon: BiLogoReact }, { label: "SpringBoot", Icon: BiLogoSpringBoot }, { label: "Django", Icon: BiLogoDjango },
    { label: "TailwindCSS", Icon: BiLogoTailwindCss }]
    const tb = [{ label: "Git", Icon: BiLogoGit }, { label: "Github", Icon: BiLogoGithub }, { label: "MySQL", Icon: SiMysql }, { label: "PostgreSQL", Icon: SiPostgresql },
    { label: "Vscode", Icon: SiVisualstudiocode }, { label: "Redis", Icon: SiRedis }, { label: "Docker", Icon: SiDocker }]

    return (
        <div className='flex flex-col px-4'>
            <div className='pb-4 drop-shadow-xl'><text className='font-semibold  bg-black text-white p-1'>Programming Language</text></div>
            <div className="flex space-x-4 pb-5">
                {pl.map(({ label, Icon }) => {
                    return (
                        <div className="flex flex-col transition ease-in-out hover:bg-gray-400 hover:scale-125 duration-200 cursor-pointer">
                            <Icon size={iconSize} />
                            <text className='text-center text-sm font-mono'>{label}</text>
                        </div>
                    );
                })}
            </div>

            <div className='pb-4 drop-shadow-xl'><text className='font-semibold bg-black text-white p-1'>Framework & Library</text></div>
            <div className="flex space-x-4 pb-5">
                {fl.map(({ label, Icon }) => {
                    return (
                        <div className="flex flex-col transition ease-in-out hover:bg-gray-400 hover:scale-125 duration-200 cursor-pointer">
                            <Icon size={iconSize} />
                            <text className='text-center text-sm font-mono'>{label}</text>
                        </div>
                    );
                })}
            </div>

            <div className='pb-4 drop-shadow-xl'><text className='font-semibold bg-black text-white p-1'>Tool & Database</text></div>
            <div className="flex space-x-4 pb-5">
                {tb.map(({ label, Icon }) => {
                    return (
                        <div className="flex flex-col transition ease-in-out hover:bg-gray-400 hover:scale-125 duration-200 cursor-pointer">
                            <Icon size={iconSize} />
                            <text className='text-center text-sm font-mono'>{label}</text>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skill;