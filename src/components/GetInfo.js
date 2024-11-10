import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetInfo = () => {
  const [userInfo, setUserInfo] = useState({ email: '', userName: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ ...userInfo, scores: [], length: 4 }));
    navigate('/menu');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Enter your Info</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={userInfo.userName}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default GetInfo;
