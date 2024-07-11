// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faFan, faMusic, faClover, faGear, faWind, faUser } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faApple} from '@fortawesome/free-brands-svg-icons'

import { ReactComponent as Logo } from "../assets/logo-02.svg"

const Header = () => {
    return (
        <header className='w-full h-dvh bg-purple flex flex-col justify-between drop-shadow-xl'>
            <div className={`flex flex-col items-center justify-center md:h-1/4 md:gap-y-4`}>
                <div className='md:w-8'>
                <Link to="/">
                    <Logo />
                </Link>
                </div>
                <h1 className={`font-head font-bold md:text-xl`}>ZenBreath</h1>
                <button className={`text-blue bg-white drop-shadow-xl rounded-full md:py-1 md:w-1/2`}>60% OFF</button>
            </div>
            <nav className={`md:h-1/2 flex flex-col items-start justify-center`}>
                <ul className={`w-full h-full flex flex-col justify-between uppercase md:pl-4 md:text-lg lg:text-xl`}>
                    <li className={` w-full h-full flex items-center`}><Link to="/" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faHouseChimney} /> Home</Link></li>
                    <li className={` w-full h-full flex items-center`}><Link to="/meditation" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faFan} /> Meditation</Link></li>
                    <li className={` w-full h-full flex items-center`}><Link to="/Music" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faMusic} /> Music</Link></li>
                    <li className={` w-full h-full flex items-center`}><Link to="/breath" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faWind} /> Breathe</Link></li>
                    <li className={` w-full h-full flex items-center`}><Link to="/profile" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faUser} /> Profile</Link></li>
                    <li className={` w-full h-full flex items-center`}><Link to="/setting" className={`flex items-center md:gap-x-4 hover:text-white`}><FontAwesomeIcon icon={faGear} /> Setting</Link></li>
                </ul>
            </nav>
            <footer className={`md:h-1/4 flex flex-col items-center justify-center text-footer md:gap-y-4 `}>
                    <div className='flex md:gap-x-4 md:text-xl'>
                        <FontAwesomeIcon icon={faAndroid} />
                        <FontAwesomeIcon icon={faApple} />
                    </div>
                    <p>Mobile App</p>
            </footer>
        </header>
    );
};

export default Header;
