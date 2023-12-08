import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Project_left = (props) => {
    return (
        <div className='flex justify-center m-8 text-white w-full px-20'>
            <div className='flex flex-1 justify-center items-center'>
                <img src={props.image} alt="website" className='rounded-3xl w-[500px] h-[300px] max-h-[80%] max-w-full border-white border-2 object-contain' />
            </div>
            <div className='flex flex-1 flex-col items-center'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
 
                <a href={props.href} target="_blank" rel='noreferrer' className='flex align-middle mt-auto bg-black border border-gray-500 hover:bg-opacity-20
                 text-gray-300 hover:bg-black py-3 px-10 transition ease-in-out duration-200'>
                    <BsGithub size = {25} className=' pr-2'/>
                    Repo
                </a>
            </div>
        </div>
    );
}

export default Project_left;