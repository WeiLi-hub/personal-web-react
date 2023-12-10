import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Project_left = (props) => {
    return (
        <div className='flex justify-center mt-8 mb-10 text-gray-300 w-full px-20 font-semibold'>
            <div className='flex flex-1 justify-center items-center pr-12'>
                <img src={props.image} alt="website" className='rounded-3xl max-h-[80%] object-contain' />
            </div>
            <div className='flex flex-1 flex-col pl-12'>
                <h2 className = "font-bold text-3xl mb-2">{props.name}</h2>
                <div className='flex flex-wrap gap-2'>
                    {(props.tech).map(element => {
                        return (
                            <div className='bg-slate-400 text-black px-2 py-1'>{element}</div>
                        );
                    })}
                </div>
                <p className='mt-4 my-8 text-justify'>{props.description}</p>

                <div className='flex mt-auto'>
                    <a href={props.href} target="_blank" rel='noreferrer' className='flex bg-black border border-gray-300 
                 text-gray-300 hover:bg-gray-300 py-3 px-10 transition ease-in-out duration-700 hover:text-black'>
                        <BsGithub size={25} className='pr-2' />
                        Repo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project_left;