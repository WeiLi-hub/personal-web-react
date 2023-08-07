import React from 'react';
import Website from '../image/project_personalwebsite.png'

const Project_left = () => {
    return (
        <div className='flex flex-1 justify-center w-[60%] bg-white rounded-lg border-4 border-red-400 my-8'>
            <img src ={Website} alt ="website" className='w-[300px] h-[300px] m-4' />
            <div className='flex flex-col'>
                <h2>Personal_website</h2>
                <p>Description</p>

            </div>
        </div>
    );
}

export default Project_left;