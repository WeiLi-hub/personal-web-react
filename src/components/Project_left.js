import React from 'react';

const Project_left = (props) => {
    return (
        <div className='flex flex-1 w-[60%] my-8 text-white backdrop-blur-sm bg-gray-300/30'>
            <div className=''>
                <img src={props.image} alt="website" className=' max-w-[50%] h-auto m-8' />
            </div>
            <div className='flexflex-col grow my-8 items-center'>
                <h2>{props.name}</h2>
                <p>{props.description}</p>

            </div>
        </div>
    );
}

export default Project_left;