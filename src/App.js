import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetInfo from './components/GetInfo';
import MainMenu from './components/MainMenu';
import Scores from './components/Scores';
import Help from './components/Help';
import SetDifficulty from './components/SetDifficulty';
import StartGame from './components/StartGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetInfo />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/help" element={<Help />} />
        <Route path="/set-difficulty" element={<SetDifficulty />} />
        <Route path="/start" element={<StartGame />} />
      </Routes>
    </Router>
  );
}

export default App;
