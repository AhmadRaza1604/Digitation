import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const [name, setName]=useState('');
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    console.log(user);
    
    setName(user.userName);
  },[])

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="p-6 max-w-sm w-full bg-gray-100 rounded-tr-3xl rounded-bl-3xl shadow-lg text-center">
      <div className='text-2xl font-semibold flex space-x-1 mt-3 text-green-600 justify-center'>
          <h1>Hello,</h1>
          
          <h1>{name}</h1>
        </div>

        <h1 className="text-3xl font-mono font-bold mb-6 text-green-800">Main Menu</h1>
        <button
          onClick={() => navigate('/start')}
          className="w-full p-2 bg-green-500 text-white rounded-tr-full rounded-bl-full mb-4 hover:bg-green-600 hover:rounded-full"
        >
          Start Game
        </button>
        <button
          onClick={() => navigate('/set-difficulty')}
          className="w-full p-2 bg-yellow-500 text-white rounded-tl-full rounded-br-full mb-4 hover:bg-yellow-600 hover:rounded-full"
        >
          Set Difficulty
        </button>
        <button
          onClick={() => navigate('/help')}
          className="w-full p-2 bg-blue-500 text-white rounded-tr-full rounded-bl-full mb-4 hover:bg-blue-600 hover:rounded-full"
        >
          Help
        </button>
        <button
          onClick={() => navigate('/scores')}
          className="w-full p-2 bg-purple-500 text-white rounded-tl-full rounded-br-full hover:bg-purple-600 hover:rounded-full"
        >
          Scores
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
