// import { Link, NavLink } from 'react-router-dom'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from '../../pages/Home/HomePage'
import Meditation from '../../pages/Meditation/MeditationPage'
import Music from '../../pages/Music/MusicPage'
import Breath from '../../pages/Breath/BreathPage'
import Settings from '../../pages/Settings/Settings'



const Header = () => {
    return(
        <BrowserRouter>
            <header>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
                Start
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/meditation'>
                Meditation
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/music'>
                Music
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/breath'>
                Breath
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/settings'>
                Settings
                </NavLink>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/music" element={<Music />} />
                <Route path="/breath" element={<Breath />} />
                {/* <Route element={<Profile />} /> */}
                <Route path="/setting" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Header