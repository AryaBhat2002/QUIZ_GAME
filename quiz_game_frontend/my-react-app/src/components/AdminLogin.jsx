/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for login (add your API call here)
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;