import React from 'react'

const Nav = () => {
    return ( 
        <nav className="px-2 sm:px-4 py-1 items-center sticky top-0 bg-black z-10 opacity-70 text-gray-200 backdrop-blur-lg">
            <div className="container flex flex-wrap justify-center mx-auto">
                <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-bold md:border-0">
                    <li className="navlink">
                        <a
                            href="#home"
                            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
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