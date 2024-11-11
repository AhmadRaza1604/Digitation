import React from 'react';
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
        <p className="mb-4 text-justify">
          Your task is to guess the randomly generated number. You will get feedback on
          how many digits are in the correct place and how many are correct but in the
          wrong place.
        </p>
        <p className="mb-4 text-justify">
          The game ends when you guess the correct number. Try to get the highest score!
        </p>
      </div>
    </div>
  );
};

export default Help;
