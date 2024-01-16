import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple,faAndroid} from "@fortawesome/free-brands-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "../styles/header.scss"
import Home from '../pages/HomePage'
import Meditation from '../pages/MeditationPage'
import Music from '../pages/MusicPage'
import Breath from '../pages/BreathPage'
import Settings from '../pages/Settings'



const Header = () => {
    return(
        <BrowserRouter>
            <header>
                <h1>
                    <img src='' alt="Zen-Breath Logo"/>
                    <button className='discountBtn'>60% OFF</button>
                </h1>
                <nav>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                    </NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/meditation'>
                    <FontAwesomeIcon icon={faHouse} />
                    Meditation
                    </NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/music'>
                    <FontAwesomeIcon icon={faHouse} />
                    Music
                    </NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/breath'>
                    <FontAwesomeIcon icon={faHouse} />
                    Breath
                    </NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/breath'>
                    <FontAwesomeIcon icon={faHouse} />
                    Profile
                    </NavLink>
                    <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/settings'>
                    <FontAwesomeIcon icon={faHouse} />
                    Settings
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faAndroid} />
                        <FontAwesomeIcon icon={faApple} />
                    </li>
                    <li>Mobile App</li>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/music" element={<Music />} />
                <Route path="/breath" element={<Breath />} />
                {/* <Route  /> */}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Header