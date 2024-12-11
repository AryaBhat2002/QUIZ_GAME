import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    rollNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for user registration (add your API call here)
    navigate('/questions');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={userDetails.rollNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
          <button type="submit" className="w-full py-2 mt-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Register</button>
      </form>
    </div>
  );
};

export default UserPage;