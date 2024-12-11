import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard from API
    setLeaderboard([
      { name: 'John Doe', score: 100 },
      { name: 'Jane Smith', score: 90 },
      { name: 'Sam Johnson', score: 80 },
    ]);
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white border rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">Leaderboard</h1>
      <ul className="space-y-4">
        {leaderboard.map((entry, index) => (
          <li key={index} className="flex justify-between text-lg">
            <span>{entry.name}</span>
            <span>{entry.score}</span>
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <Link to="/home" className="text-yellow-500 hover:underline">Back to Home</Link>
      </div>
      <div className="text-center mt-4">
        <Link to="/" className="text-yellow-500 hover:underline">Question Page</Link>
      </div>
    </div>
  );
};

export default LeaderboardPage;