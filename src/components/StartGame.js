import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const StartGame = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [name, setName] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const guessesContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const length = user?.length || 4;
    setDifficulty(user?.length || 4);
    setName(user?.userName || 'Player');
    const randomNum = Math.floor(Math.random() * Math.pow(10, length))
      .toString()
      .padStart(length, '0');
    setGeneratedNumber(randomNum);

  }, []);
  useEffect(()=>{
        // Start the timer
    const interval = setInterval(() => {
      if(!isGameOver){
      setSeconds((prevSeconds) => prevSeconds + 1);
      if (seconds === 59) {
        setMinutes((prevMinutes) => prevMinutes + 1);
        setSeconds(0);
      }}
    }, 1000);

    return () => clearInterval(interval);

  },[isGameOver,seconds])

  useEffect(() => {
    if (guessesContainerRef.current) {
      guessesContainerRef.current.scrollTop = guessesContainerRef.current.scrollHeight;
    }
  }, [guesses]);

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
    console.log(generatedNumber);
    
    const generatedDigits = generatedNumber.split('');
    const guessDigits = currentGuess.split('');

    // Check for digits in the correct place
    for (let i = 0; i < currentGuess.length; i++) {
      if (guessDigits[i] === generatedDigits[i]) {
        correctPlace++;
        generatedDigits[i] = null;
      }
    }

    // Check for remaining correct digits in the wrong place
    for (let i = 0; i < currentGuess.length; i++) {
      const digit = guessDigits[i];
      const index = generatedDigits.indexOf(digit);
      if (index !== -1) {
        correctDigits++;
        generatedDigits[index] = null;
      }
    }

    setGuesses([...guesses, { guess: currentGuess, correctPlace, correctDigits }]);
    setAttempts(attempts + 1);
    setCurrentGuess('');

    if (correctPlace === generatedNumber.length) {
      const user = JSON.parse(localStorage.getItem('user'));
      const score = calculateScore(user.length, attempts + 1, minutes * 60 + seconds);
      if (user.scores.length < 5 || score > Math.min(...user.scores)) {
        user.scores = [...user.scores, score].sort((a, b) => b - a).slice(0, 5);
        localStorage.setItem('user', JSON.stringify(user));
      }
              Swal.fire({
          title: "You Won",
          html:`You Have Guessed the number Correctly! <br/> Correct Number: ${generatedNumber} <br/> Score: ${score} <br/> Attempts: ${attempts} <br/> Time: ${`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}`,
          heightAuto:true,
          allowOutsideClick:false,
          padding: "0",
          color: "white",
          background: "rgba(150, 150, 150, 0.850)",
          confirmButtonText:'Continue',
          confirmButtonColor:"green",
          backdrop: `
          rgba(128,128,128, 0.35)
          `
        }).then(()=>{
          navigate('/menu'); // Redirect to login if no token is found
        })
      setIsGameOver(true);
    } else {
      setFeedback(`${correctPlace} digits in the correct place, ${correctDigits} in the wrong place.`);
    }
  };

  const calculateScore = (difficulty, attempts, time) => {
    return Math.max(2500 * difficulty - (attempts * 100 + time*(11-difficulty)), 0);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-lg">
        <div className='text-end'>
          <button className="text-md mb-4 border rounded-full px-2 py-1 border-transparent text-green-700 hover:border-green-700"
            onClick={() => (navigate('/menu'))}
          >Go Back</button>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center text-green-700 font-mono">Digitation</h2>
        <h2 className="text-md mb-2 text-center text-green-700 flex justify-between">
          <span>Player: {name}</span>
          <span>Difficulty: {difficulty} Digits</span>
          <span>Time: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
        </h2>
        <div className='max-h-60 mb-2 overflow-y-scroll bg-gray-50 rounded-3xl scrollbar-hide' ref={guessesContainerRef}>
          {guesses.map((g, index) => (
            <p key={index}
              className='flex justify-center text-gray-500 items-center mb-1 space-x-3'>
              Attempt {index + 1}: <span className=' mx-1 rounded-lg px-2 border border-gray-400'>{g.guess}</span> <span className='flex items-center'>{g.correctPlace}<FaCheck className='text-green-600' /></span><span className='flex items-center'>{g.correctDigits}<FaX className='text-red-600' /></span>
            </p>
          ))}
        </div>
        <input
          type="text"
          value={currentGuess}
          onChange={handleChange}
          className="w-full p-2 mb-4 border-2 focus:border-green-500 outline-none border-gray-300 rounded-lg"
          maxLength={generatedNumber.length}
          placeholder={`Enter ${difficulty} Digits`}
        />
        <button
          onClick={checkGuess}
          className="w-full p-2 bg-green-500 text-white rounded-lg hover:rounded-tl-full hover:rounded-br-full hover:bg-green-600"
        >
          Check Guess
        </button>
        <p className="mt-4 text-center text-green-700">{feedback}</p>
        {isGameOver && (
          <p className="mt-4 text-center text-green-700">
            Your score: {calculateScore(difficulty, attempts, minutes * 60 + seconds)}
          </p>
        )}
      </div>
    </div>
  );
};

export default StartGame;