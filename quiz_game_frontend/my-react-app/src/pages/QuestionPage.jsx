import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch the questions from the API (replace with actual API call)
    setQuestions([
      {
        _id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctOption: 'Paris',
      },
      // Add more questions here
    ]);
  }, []);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white border rounded-md shadow-lg">
      <h1 className="text-3xl font-semibold mb-6">Questions</h1>
      {questions.map((q) => (
        <div key={q._id} className="mb-4">
          <p className="font-medium">{q.question}</p>
          <div className="space-y-2">
            {q.options.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  name={`question-${q._id}`}
                  value={option}
                  className="mr-2"
                />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Link to="/leaderboard" className="block mt-6 text-center text-yellow-500 hover:underline">Go to Leaderboard</Link>
    </div>
  );
};

export default QuestionsPage;