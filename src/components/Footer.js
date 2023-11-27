import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BsArrowUpCircle } from "react-icons/bs";

export default function Footer() {
    return (
        <section className='flex flex-col items-center relative space-y-3 justify-center p-12 bg-black font-mono text-white'>

            <BsArrowUpCircle size={50} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='floating_up cursor-pointer'/>
            <ul className='flex flex-1 gap-10 justify-end pb-6'>
                <li>
                    <a href="https://www.instagram.com/weiqiang.li.777/" target="_blank" rel='noreferrer'>
                        <BsInstagram size={40} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="mailto:weiqli1023@gmail.com" target="_blank" rel='noreferrer'>
                        <AiOutlineMail size={40} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/weiqiang-li-44a85a1ab/" target="_blank" rel='noreferrer'>
                        <BsLinkedin size={40} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/WeiLi-hub?tab=repositories" target="_blank" rel='noreferrer'>
                        <BsGithub size={40} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"} />
                    </a>
                </li>
            </ul>
            <text className=' text-lg'>© 2023 | Built by Weiqiang Li</text>

        </section>
    )
}