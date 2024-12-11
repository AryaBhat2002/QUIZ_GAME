import { useState } from 'react';
import axios from 'axios';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin/login', { username, password });
      localStorage.setItem('admin', JSON.stringify(response.data)); // Store admin session
      window.location.href = '/admin'; // Redirect to admin dashboard
    } catch (error) {
      setError('Invalid credentials');
      console.log('Error logging in:', error);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          placeholder="Admin username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AdminLoginPage;