import React from 'react'
import my_photo from '../image/memoji_3.png'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Profile = () => {
    return (
        <article className='outline-2 drop-shadow-md flex place-content-stretch'>
            <div className='px-4 flex-col flex-1'>
                <div className="p-2">
                    <div className="drop-shadow-xl cursor: cursor-zoom-in">
                        <img className="rounded-full transition ease-in-out hover:bg-blue-400 hover:scale-110 duration-500 bg-blue-300/50 w-[200px] h-auto" src={my_photo} alt='' />
                    </div> 
                </div>

                <div className="p-5 flex flex-col">
                    <h4 className="font-squada text-2xl text-gray-700 gap-2 text-center pb-1">Weiqiang Li</h4>
                    <p className='pb-4 text-center'>Boston, MA</p>
                    <div className='just_a_line border-t-2 border-black pb-5'></div>
                    <ul className='flex space-x-4 justify-center pb-5'>
                        <li>
                            <a href="https://www.instagram.com/weiqiang.li.777/" target="_blank" rel='noreferrer'>
                                <BsInstagram size={30} className={"transition ease-in-out hover:scale-150 duration-200"}/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:weiqli1023@gmail.com" target="_blank" rel='noreferrer'>
                                <AiOutlineMail size={30} className={"transition ease-in-out hover:scale-150 duration-200"}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/weiqiang-li-44a85a1ab/" target="_blank" rel='noreferrer'>
                                <BsLinkedin size={30} className={"transition ease-in-out hover:scale-150 duration-200"}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/WeiLi-hub?tab=repositories" target="_blank" rel='noreferrer'>
                                <BsGithub size={30} className={"transition ease-in-out hover:scale-150 duration-200"}/>
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