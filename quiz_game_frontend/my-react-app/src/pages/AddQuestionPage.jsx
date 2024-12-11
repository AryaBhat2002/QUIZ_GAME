import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';  // Import the API utility

const AddQuestionPage = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ optionA: '', optionB: '', optionC: '', optionD: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');
  const navigate = useNavigate(); // For navigation after successful form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newQuestion = {
        question,
        options,
        correctAnswer,
      };
      await api.post('/admin/questions', newQuestion);  // Make the API call to add the question
      navigate('/admin/questions/view'); // Redirect to View Questions page after successful submission
    } catch (error) {
      console.error('Error adding question', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white border rounded-md shadow-lg mt-10">
      <h1 className="text-3xl font-semibold mb-6">Add New Question</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Question</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block font-medium text-gray-700">Options</label>
          {['A', 'B', 'C', 'D'].map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${option}`}
              className="w-full p-2 border border-gray-300 rounded-md"
              value={options[`option${option}`]}
              onChange={(e) => setOptions({ ...options, [`option${option}`]: e.target.value })}
            />
          ))}
        </div>
        <div>
          <label className="block font-medium text-gray-700">Correct Answer</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          >
            <option value="">Select Correct Answer</option>
            {['A', 'B', 'C', 'D'].map((option) => (
              <option key={option} value={option}>
                Option {option}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default AddQuestionPage;