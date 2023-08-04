import React from 'react'
import Typed from 'react-typed'
import Profile from '../image/profile.svg'
import Particle from './Particle'

const Hero = () => {
    return (
            <div>
            <Particle />
                <section id="hero" className='flex px-2 sm:px-4 h-screen'>
                    <div className="container mx-auto flex px-2 py-12">
                        <div className="flex-1 flex-col justify-center">
                            <h1 className="font-squada text-5xl xl:text-8xl 2xl:text-9xl text-cyan-700 uppercase">Welcome!</h1>
                            <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">Grow with data</h2>
                            <div>
                                <p className='md:text-5xl sm:{text-4xl text-xl font-bold text-white'>fast, flexible</p>
                                <Typed
                                    style={{color: 'white'}}
                                    strings={['BTB', 'BTC', 'SASS']}
                                    typeSpeed={120}
                                    backSpeed={140} loop
                                />
                            </div>
                        </div>
                        <div className="flex-1 hidden md:block">
                            <img src={Profile} alt="" />
                        </div>
                    </div>
                </section>
            </div>
    )
}

            export default Hero;