import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetDifficulty = () => {
  const [difficulty, setDifficulty] = useState(4);
  const navigate = useNavigate();

  const handleDifficultyChange = (e) => {
    setDifficulty(parseInt(e.target.value));
  };

  const saveDifficulty = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.length = difficulty;
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/menu')
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md text-center">
      <div className='text-end'>
        <button className="text-md mb-4 border rounded-full px-2 py-1 border-transparent text-green-700 hover:border-green-700"
        onClick={()=>(navigate('/menu'))}
        >Go Back</button>
        </div>
       
        <h2 className="text-2xl text-green-700 font-bold mb-4">Set Difficulty</h2>
        <select
          value={difficulty}
          onChange={handleDifficultyChange}
          className="w-full p-2 mb-4 border-2 text-gray-600 border-gray-300 rounded focus:border-green-700 outline-none"
        >
          {[...Array(7).keys()].map(i => (
            <option key={i} value={i + 4}
            className='max-w-screen-sm hover:bg-green-500 hover:pointer'
            >{i + 4} Digits</option>
          ))}
        </select>
        <button
          onClick={saveDifficulty}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:rounded-tr-full hover:rounded-bl-full hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SetDifficulty;
