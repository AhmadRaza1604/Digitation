import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <p className="mb-4">
          Your task is to guess the randomly generated number. You will get feedback on
          how many digits are in the correct place and how many are correct but in the
          wrong place.
        </p>
        <p className="mb-4">
          The game ends when you guess the correct number. Try to get the highest score!
        </p>
      </div>
    </div>
  );
};

export default Help;
