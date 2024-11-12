import React from 'react';
import { FaCheck, FaX } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md">
        <div className='text-end'>
        <button className="text-md mb-4 border rounded-full px-2 py-1 border-transparent text-green-700 hover:border-green-700"
        onClick={()=>(navigate('/menu'))}
        >Go Back</button>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">How to Play</h2>
        <div className='overflow-y-scroll scrollbar-hide bg-gray-50 p-2 rounded-3xl max-h-80'>
        <p className="mb-4 text-justify ">
          <li>A random number is generated of the length from range 4-10.</li>
          <li>Player Task is to guess the correct number in as less attempts as possible and as early as possible.</li>
          <li>After each attempt a feedback is given of how many digits in the guessed number are placed correctly and how many are part of the number but are placed incorrectly:
            <ul className='flex justify-start items-center '><FaCheck className='text-green-600 mr-1'/> means digits placed corectly.</ul>
            <ul className='flex justify-start items-center overflow-x-hidden' ><FaX className='text-red-600 mr-1'/> means digits placed incorectly but are   
            </ul><ul>part of the number.</ul>
          </li>
          <li>Use The feedback to guess the correct number.</li>
          <li>Player can set the difficulty from main menu. 4 means easiest as it contains less digits, 10 means hardest, as it contains more digits.</li>
          <li>The score calculated is based on number of attempts, difficulty and time taken, High difficulty and low attempts and less time means high scores, and vice versa.</li>
        </p>
        <p className="mb-4 text-justify">
          The game ends when you guess the correct number. Try to get the highest score!
        </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
