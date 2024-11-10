import React, { useState } from 'react';

const SetDifficulty = () => {
  const [difficulty, setDifficulty] = useState(4);

  const handleDifficultyChange = (e) => {
    setDifficulty(parseInt(e.target.value));
  };

  const saveDifficulty = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.length = difficulty;
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Set Difficulty</h2>
        <select
          value={difficulty}
          onChange={handleDifficultyChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          {[...Array(7).keys()].map(i => (
            <option key={i} value={i + 4}>{i + 4} Digits</option>
          ))}
        </select>
        <button
          onClick={saveDifficulty}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SetDifficulty;
