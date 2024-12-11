/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onRegisterSuccess }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { name, rollNumber });
      onRegisterSuccess(response.data.user);
      setName('');
      setRollNumber('');
    } catch (err) {
      setError(err.response.data.message || 'Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={rollNumber}
          placeholder="Enter roll number"
          onChange={(e) => setRollNumber(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default UserForm;