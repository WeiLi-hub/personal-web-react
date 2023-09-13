import React, { useState, useEffect } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlinePhone } from 'react-icons/ai'
const Nav = () => {
    const [scrolling, setScrolling] = useState(false);
    const listenScrollEvent = () => {
        if (window.scrollY >= 500) {
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
        <div className={scrolling? "scrolling": "unScroll"}>
            <nav className="navbar px-2 sm:px-4 py-4 items-center text-gray-200 transition-[0.4]">
                <div className="container flex justify-center flex-wrap mx-auto">
                    <ul className="flex rounded-full hover:opacity-100 px-16">
                        <li className="navlink flex items-center py-4">
                            <AiOutlineHome size={20}/>
                            <a
                                href="#home"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                            >
                                Home
                            </a>
                        </li>
                        <li className="navlink flex items-center py-4">
                            <AiOutlineUser size={20}/>
                            <a
                                href="#about"
                                className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li className="navlink flex items-center py-4">
                            <AiOutlineTool size={20}/>
                            <a
                                href="#project"
                                className="block py-2 pr-4 pl-3 uppercase font-bold rounded md:p-0"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="navlink flex items-center py-4">
                            <AiOutlinePhone size={20}/>
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
        </div>
    )
}

export default Nav;