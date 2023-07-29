import React from 'react'
import my_photo from '../image/male.svg'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Profile = () => {
    return (
        <article className='overflow-hidden outline-2 drop-shadow-md bg-slate-200 border-gray-300 border-r-2 flex place-content-stretch'>
            <div className='flex-col flex-none'>
                <div className="px-8 pt-8 bg-gradient-to-b from-violet-500 ">
                    <div className="drop-shadow-xl transition ease-in-out delay-150 hover:scale-125 duration-500 cursor: cursor-zoom-in">
                        <img className="rounded-full border-red-500 border-2 bg-white" src={my_photo} alt='' />
                    </div>
                </div>

                <div className="p-4 flex flex-col">
                    <h4 className="font-squada text-2xl text-gray-700 gap-2 text-center pb-1">Weiqiang Li</h4>
                    <p className='pb-4 text-center'>Boston, MA</p>
                    <div className='just_a_line border-t-2 border-black pb-5'></div>
                    <ul className='flex space-x-4 justify-center pb-5'>
                        <li>
                            <a href="google.com">
                                <BsInstagram size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"}/>
                            </a>
                        </li>
                        <li>
                            <a href="google.com">
                                <AiOutlineMail size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"}/>
                            </a>
                        </li>
                        <li>
                            <a href="google.com">
                                <BsLinkedin size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"}/>
                            </a>
                        </li>
                        <li>
                            <a href="google.com">
                                <BsGithub size={30} className={"transition ease-in-out delay-150 hover:-translate-y-2 duration-300"}/>
                            </a>
                        </li>
                    </ul>
                    <div className='just_a_line border-t-2 border-black'></div>
                </div>
            </div>
        </article>
    )
}

export default Profile;