import React from 'react'
import Typed from 'react-typed'
import Profile from '../image/profile.svg'

const Hero = () => {
    return (
        <section id="hero" className='flex px-2 sm:px-4'>

            <div className="container mx-auto flex border-gray-200 border-b-2 px-2 py-12">
                <div className="flex-1 flex-col justify-center">
                    <h1 className="font-squada text-5xl xl:text-8xl 2xl:text-9xl text-cyan-700 uppercase">Welcome!</h1>
                    <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h2>
                    <div>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>fast, flexible</p>
                        <Typed
                            strings={['BTB', 'BTC', 'SASS']}
                            typeSpeed={120}
                            backSpeed={140} loop
                        />
                    </div>
                </div>
                <div className="flex-1 hidden md:block">
                    <img src={Profile} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Hero;