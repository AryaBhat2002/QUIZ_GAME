/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AdminDashboard = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white border rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        {/* Link to Add Question page */}
        <Link to="/admin/questions/add">
          <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Add Question
          </button>
        </Link>

        {/* Link to View Questions page */}
        <Link to="/admin/questions/view">
          <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            View Questions
          </button>
        </Link>

        {/* Link to View Users page */}
        <Link to="/admin/users">
          <button className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            View Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;