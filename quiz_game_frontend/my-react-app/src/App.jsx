/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './components/AdminDashboard';
import LeaderboardPage from './pages/LeaderboardPage';
import UserPage from './pages/UserPage';
import AddQuestionPage from './pages/AddQuestionPage';
import ViewQuestionPage from './pages/ViewQuestionPage';
import ViewUserPage from './pages/ViewUserPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/leaderboard" element={<LeaderboardPage />} />
          <Route path="/user" element={<UserPage />} />

          {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/questions/add" element={<AddQuestionPage />} />
        <Route path="/admin/questions/view" element={<ViewQuestionPage />} />
        <Route path="/admin/users" element={<ViewUserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;