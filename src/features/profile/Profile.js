// src/components/Profile.js
import React from 'react';
import {useNavigate } from 'react-router-dom';

const Profile = ({ loggedIn }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav('/')
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">{loggedIn ? 'Successfully logged in' : '404 - Not Found'}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Profile;
