// src/components/Header.js
import {useState} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFan, faMusic, faGear, faWind, faUser, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'

import { ReactComponent as Logo } from "../assets/logo-02.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();


    const menuBtn = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='fixed z-50 lg:w-2/12 drop-shadow-xl '>
            <button
                onClick={menuBtn} 
                className={`
                fixed -right-4 top-4 aspect-square w-6 text-base rounded-full bg-purple text-white md:hidden transition-all drop-shadow
                ${isOpen ? "left-2":""}
            `}>
                {isOpen ?  <FontAwesomeIcon icon={faChevronRight}/> : <FontAwesomeIcon icon={faChevronLeft}/>}
            </button>
            <article 
                className={`
                 flex flex-col justify-between h-screen md:w-full bg-purple bg-opacity-100 md:bg-opacity-50 p-6  md:translate-x-0 transition-all 
                ${isOpen ? "-translate-x-full": ""}
                `} 
            >
                <div className={`flex flex-col items-center justify-center md:h-1/4 gap-y-4`}>
                    <div className='w-8'>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <h1 className={`font-head font-bold text-base md:text-xl`}>ZenBreath</h1>
                    <button className={`text-blue bg-white drop-shadow-xl rounded-full text-sm px-2 md:py-1 `}>60% OFF</button>
                </div>

                <nav className={`md:h-1/2 flex flex-col items-start justify-center`}>
                    <ul className={`w-full h-full flex flex-col justify-between uppercase gap-y-4  text-sm lg:text-xl`}>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faHouseChimney} /> 
                                Home
                            </Link>
                        </li>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/meditation" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/meditation" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faFan} /> 
                                Meditation
                            </Link>
                        </li>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/Music" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/Music" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faMusic} /> 
                                Music
                            </Link>
                        </li>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/breath" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/breath" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faWind} /> 
                                Breathe
                            </Link>
                        </li>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/profile" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/profile" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faUser} /> 
                                Profile
                            </Link>
                        </li>
                        <li className={` w-full h-full flex items-center`}>
                            <Link to="/setting" 
                                    className={`flex items-center gap-x-2 md:gap-x-4 hover:text-white ${location.pathname === "/setting" ? "text-white" : ""}`}>
                                <FontAwesomeIcon icon={faGear} /> 
                                Setting
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={`flex flex-col items-center justify-center text-footer md:gap-y-4`}>
                        <div className='flex md:gap-x-4 md:text-xl'>
                            <FontAwesomeIcon icon={faAndroid} />
                            <FontAwesomeIcon icon={faApple} />
                        </div>
                        <p>Mobile App</p>
                </div>
            </article>
        </header>
    );
};

export default Header;
