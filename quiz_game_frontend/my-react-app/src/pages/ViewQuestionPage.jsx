import { useState, useEffect } from 'react';
import api from '../services/api';  // Import the API utility

const ViewQuestionPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await api.get('/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions', error);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white border rounded-md shadow-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6">View Questions</h1>
      <div className="space-y-4">
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index} className="p-4 border rounded-md shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold">{question.question}</h3>
              <ul className="list-disc pl-5 mt-2">
                {Object.values(question.options).map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
              <p className="mt-2 font-bold">Correct Answer: {question.correctAnswer}</p>
            </div>
          ))
        ) : (
          <p>No questions available</p>
        )}
      </div>
    </div>
  );
};

export default ViewQuestionPage;