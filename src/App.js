// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Meditation from './pages/MeditationPage';
import Music from './pages/MusicPage';
import Breath from './pages/BreathPage';
import Setting from './pages/Settings';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meditation" element={<Meditation />} />
              <Route path="/music" element={<Music />} />
              <Route path="/breath" element={<Breath />} />
              <Route element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
        </Router>
    );
};

export default App;
