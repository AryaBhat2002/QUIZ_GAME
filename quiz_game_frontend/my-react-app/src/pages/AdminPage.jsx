import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white border rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link to="/admin/questions" className="block py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">Manage Questions</Link>
        <Link to="/admin/leaderboard" className="block py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600">View Leaderboard</Link>
      </div>
    </div>
  );
};

export default AdminPage;