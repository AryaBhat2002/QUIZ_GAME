/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Quiz Game</Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/leaderboard" className="hover:text-yellow-500">Leaderboard</Link>
          <Link to="/admin" className="hover:text-yellow-500">Admin</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
