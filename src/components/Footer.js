import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import ReactiveButton from 'reactive-button'

export default function Footer() {
    return (
        <div className='flex p-4 bg-black font-mono text-white justify-between'>
            <div className='pl-8 flex flex-1 items-center'>© 2023 | Built by Weiqiang Li</div>

            <div className='flex-1 flex items-center justify-center'>
                <ReactiveButton color = "light" idleText ="TOP" outline shadow onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
            </div>

            <ul className='flex flex-1 gap-4 pr-8 justify-end'>
                <li>
                    <a href="https://www.instagram.com/weiqiang.li.777/" target="_blank" rel='noreferrer'>
                        <BsInstagram size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="mailto:weiqli1023@gmail.com" target="_blank" rel='noreferrer'>
                        <AiOutlineMail size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/weiqiang-li-44a85a1ab/" target="_blank" rel='noreferrer'>
                        <BsLinkedin size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/WeiLi-hub?tab=repositories" target="_blank" rel='noreferrer'>
                        <BsGithub size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
            </ul>
        </div>
    )
}