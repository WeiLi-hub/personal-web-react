import React, { useState, useEffect } from 'react'

const Nav = () => {
    const [scrolling, setScrolling] = useState(false);
    const listenScrollEvent = () => {
        if (window.scrollY >= 90) {
            setScrolling(true);
            console.log("scrolling");
        }
        else {
            setScrolling(false);
            console.log("didnt scroll");
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <nav className="navbar px-2 sm:px-4 py-2 items-center sticky top-0 bg-black/[0.7] z-10 text-gray-200 transition-[0.4]">
            <div className="container flex flex-wrap justify-center mx-auto">
                <ul className="flex flex-col rounded-full bg-white border transition-[0.3] px-8 py-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-bold md:border-0"> 
                    <li className="navlink">
                        <a
                            href="#home"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                        >
                            Home
                        </a>
                    </li>
                    <li className="navlink">
                        <a
                            href="#about"
                            className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                        >
                            About
                        </a>
                    </li>
                    <li className="navlink">
                        <a
                            href="#project"
                            className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                        >
                            Projects
                        </a>
                    </li>
                    <li className="navlink">
                        <a
                            href="#contact"
                            className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;