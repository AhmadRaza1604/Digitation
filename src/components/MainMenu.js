import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6">Main Menu</h1>
        <button
          onClick={() => navigate('/start')}
          className="w-full p-2 bg-green-500 text-white rounded mb-4 hover:bg-green-600"
        >
          Start Game
        </button>
        <button
          onClick={() => navigate('/set-difficulty')}
          className="w-full p-2 bg-yellow-500 text-white rounded mb-4 hover:bg-yellow-600"
        >
          Set Difficulty
        </button>
        <button
          onClick={() => navigate('/help')}
          className="w-full p-2 bg-blue-500 text-white rounded mb-4 hover:bg-blue-600"
        >
          Help
        </button>
        <button
          onClick={() => navigate('/scores')}
          className="w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Scores
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
