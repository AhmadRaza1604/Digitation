import React, { useEffect, useState } from 'react';
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

  useEffect (()=>{
    const user=localStorage.getItem('user')
    if(user){
      navigate('/menu')
    }
  },[navigate])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <div className="p-10 max-w-sm w-full bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-4 text-green-700">Welcome to Digitation</h2>
        <h2 className="text-2xl text-center text-green-500 font-bold mb-4">Enter Details to Start</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg focus:border-green-700 outline-none"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="userName"
          placeholder="Username"
          className="w-full p-2 mb-4 border-2 border-gray-300 rounded-lg focus:border-green-700 outline-none"
          value={userInfo.userName}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-700 hover:rounded-tr-full hover:rounded-bl-full"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default GetInfo;
