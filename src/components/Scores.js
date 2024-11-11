import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Scores = () => {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.scores) {
      setScores(user.scores);
    }
  }, []);

  const resetScores = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.scores = [];
    localStorage.setItem('user', JSON.stringify(user));
    setScores([]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md text-center">
      <div className='text-end'>
        <button className="text-md mb-4 border rounded-full px-2 py-1 border-transparent text-green-700 hover:border-green-700"
        onClick={()=>(navigate('/menu'))}
        >Go Back</button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-green-700">Top Scores</h2>
        {scores.length > 0 ? (
          <ul className='text-green-600'>
            {scores.map((score, index) => (
              <li key={index} className="text-lg">{score}</li>
            ))}
          </ul>
        ) : (
          <p className='text-green-600'>No scores yet</p>
        )}
        <button
          onClick={resetScores}
          className="mt-4 w-full p-2 bg-red-500 text-white rounded-lg hover:rounded-tl-full hover:rounded-br-full hover:bg-red-600"
        >
          Reset Scores
        </button>
      </div>
    </div>
  );
};

export default Scores;
