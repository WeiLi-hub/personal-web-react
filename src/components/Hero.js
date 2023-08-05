import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <section id="hero" className='flex px-2 sm:px-4 h-screen'>
            <div className="container mx-auto flex-col flex px-2 py-12 items-center">
                <Typed
                    style={{ color: "rgb(14 116 144 / 1)", fontSize: "96px" }}
                    strings={['WELCOME!']}
                    typeSpeed={230}
                    backSpeed={100}
                    showCursor={false}
                />

                <h2 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white">Grow with data</h2>
                <div>
                    <p className='md:text-5xl sm:{text-4xl text-xl font-bold text-white'>fast, flexible</p>
                    <Typed
                        style={{ color: 'white' }}
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140} loop
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;