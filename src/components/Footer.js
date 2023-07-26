import React from 'react'
export default function Footer(){
    return (
        <div className='flex py-3 border-gray-200 border-t-2 items-center mt-8'>
            <div className='flex-1 items-start pl-8 font-mono'>© 2023 | Designed & Built by Weiqiang Li</div>
            <ul className='flex gap-4 pr-8'>
                <li>
                    github
                </li>
                <li>
                    instagram
                </li>
                <li>
                    linkedin
                </li>
                <li>
                    gmail
                </li>
            </ul>
        </div>
    )
}