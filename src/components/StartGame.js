import React, { useState, useEffect } from 'react';

const StartGame = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const length = user?.length || 4;
    const randomNum = Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');
    setGeneratedNumber(randomNum);
  }, []);

  const handleChange = (e) => {
    setCurrentGuess(e.target.value);
  };

  const checkGuess = () => {
    if (currentGuess.length !== generatedNumber.length) {
      setFeedback('Your guess must have the correct number of digits!');
      return;
    }

    let correctPlace = 0;
    let correctDigits = 0;

    // Count correct places
    for (let i = 0; i < currentGuess.length; i++) {
      if (currentGuess[i] === generatedNumber[i]) {
        correctPlace++;
      } else if (generatedNumber.includes(currentGuess[i])) {
        correctDigits++;
      }
    }

    setGuesses([...guesses, { guess: currentGuess, correctPlace, correctDigits }]);
    setAttempts(attempts + 1);
    setCurrentGuess('');

    if (correctPlace === generatedNumber.length) {
      const user = JSON.parse(localStorage.getItem('user'));
      const score = calculateScore(user.length, attempts + 1);
      if (user.scores.length < 5 || score > Math.min(...user.scores)) {
        user.scores = [...user.scores, score].sort((a, b) => b - a).slice(0, 5);
        localStorage.setItem('user', JSON.stringify(user));
        alert('New high score!');
      }
      setFeedback('You guessed the number! Returning to the main menu.');
      setTimeout(() => {
        window.location.href = '/menu';
      }, 3000);
    } else {
      setFeedback(`${correctPlace} digits in the correct place, ${correctDigits} in the wrong place.`);
    }
  };

  const calculateScore = (difficulty, attempts) => {
    return Math.max(10000 - attempts * 100 - difficulty * 500, 0);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Start Game</h2>
        {guesses.map((g, index) => (
          <p key={index}>
            Guess {index + 1}: {g.guess} - {g.correctPlace} correct, {g.correctDigits} wrong place
          </p>
        ))}
        <input
          type="text"
          value={currentGuess}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          maxLength={generatedNumber.length}
          placeholder="Enter your guess"
        />
        <button
          onClick={checkGuess}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Check Guess
        </button>
        <p className="mt-4">{feedback}</p>
      </div>
    </div>
  );
};

export default StartGame;
