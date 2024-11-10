import React, { useState, useEffect } from 'react';

const Scores = () => {
  const [scores, setScores] = useState([]);

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
        <h2 className="text-2xl font-bold mb-4">Top Scores</h2>
        {scores.length > 0 ? (
          <ul>
            {scores.map((score, index) => (
              <li key={index} className="text-lg">{score}</li>
            ))}
          </ul>
        ) : (
          <p>No scores yet</p>
        )}
        <button
          onClick={resetScores}
          className="mt-4 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Scores
        </button>
      </div>
    </div>
  );
};

export default Scores;
