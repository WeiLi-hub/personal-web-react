import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Project_right = (props) => {
    return (
        <div className='flex justify-center w-[60%] my-8 text-white backdrop-blur-sm bg-gray-300/30 self-end mr-20'>
            <div className='flex-1 flex flex-col my-8 items-center px-8'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
 
                <a href={props.href} target="_blank" rel='noreferrer' className='flex align-middle mt-auto bg-black border border-gray-500 hover:bg-opacity-20
                 text-gray-300 hover:bg-black py-3 px-10 transition ease-in-out duration-200'>
                    <BsGithub size = {25} className=' pr-2'/>
                    Repo
                </a>
            </div>
            <div className='flex-1 bg-gray-300/20'>
                <img src={props.image} alt="website" className='max-w-[100%] h-auto my-8 ml-[-40px]' />
            </div>
        </div>
    );
}

export default Project_right;