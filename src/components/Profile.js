import React from 'react'
import my_photo from '../image/male.svg'

const Profile = () => {
    return (
        <article className='rounded-lg overflow-hidden outline-2 bg-white drop-shadow-md'>
            <div className="bg-project md:p-8">
                <div className="drop-shadow-xl transition ease-in-out delay-150 hover:scale-125 duration-500 cursor: cursor-zoom-in">
                    <img className="rounded-full" src={my_photo} alt='' />
                </div>
            </div>

            <div className="p-4 flex flex-col">
                <h4 className="font-squada text-2xl text-gray-700 gap-2">Weiqiang Li</h4>
                <div className="flex flex-wrap justify-between items-center gap-2">
                    <ul className='flex flex-col gap-1'>
                        <li>Phone: (857)452-9414</li>
                        <li>Email: weiqli1023@gmail.com</li>
                        <li>Linekdin: </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Profile;