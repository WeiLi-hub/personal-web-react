import React from 'react';
import Website from '../image/project_personalwebsite.png'

const Project_left = () => {
    return (
        <div className='flex flex-1 w-[70%] bg-white rounded-lg border-4 border-red-400 my-8'>
            <div>
                <img src={Website} alt="website" className='w-[500px] h-[400px] m-8' />
            </div>
            <div className='flex flex-col grow m-8 items-center'>
                <h2>Personal_website</h2>
                <p>Description</p>

            </div>
        </div>
    );
}

export default Project_left;