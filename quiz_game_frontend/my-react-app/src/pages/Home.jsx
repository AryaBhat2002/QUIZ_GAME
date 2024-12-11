import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-green-400">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to Quiz Game</h1>
        <div className="space-y-4">
          <Link to="/admin/login" className="block py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Admin Login</Link>
          <Link to="/user" className="block py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">User Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;