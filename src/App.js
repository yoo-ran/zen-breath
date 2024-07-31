// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Header from './components/Header';
import Meditation from './pages/MeditationPage';
import Music from './pages/MusicPage';
import Breath from './pages/BreathPage';
import Setting from './pages/Settings';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
          <div className='relative flex md:justify-between overflow-hidden'>
            <div id="gradient" className='-z-10 absolute blur w-[48rem] md:w-[64rem] lg:w-full lg:h-full h-1/2  -top-32 -left-32  md:-top-54 md:-left-32 lg:-top-64 lg:-left-64'></div>
            <div id="gradient" className='-z-10 absolute blur w-[48rem] md:w-[64rem] lg:w-full lg:h-full h-1/2  top-1/4 -left-48 md:bottom-24 md:left-1/2 '></div>
            <div id="gradient" className='-z-10 absolute blur w-[48rem] md:w-[64rem] lg:w-full lg:h-full  h-1/2 -bottom-40 md:-bottom-18 md:-left-10 lg:-bottom-64'></div>

            <div className=' md:w-2/12 '>
              <Header />
            </div>
            <div className='w-full md:w-10/12 '>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/music" element={<Music />} />
                <Route path="/breath" element={<Breath />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </div>
          </div>

        </Router>
    );
};

export default App;
