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
          <div className='relative flex justify-between h-lvh overflow-hidden'>
            <div id="gradient" className='-z-10 absolute w-3/4 h-full -top-52 -left-20'></div>
            <div id="gradient" className='-z-10 absolute w-3/4 h-full -top-24 -right-96'></div>
            <div id="gradient" className='-z-10 absolute w-3/4 h-full top-80 left-64'></div>

            <div className='md:w-2/12 h-lvh'>
              <Header />
            </div>
            <div className='md:w-10/12 h-lvh'>
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
