/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const QuestionForm = () => {
  const [questionData, setQuestionData] = useState({
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctOption: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting question data (API call)
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white border rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Question</label>
          <input
            type="text"
            name="question"
            value={questionData.question}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Option A</label>
          <input
            type="text"
            name="optionA"
            value={questionData.optionA}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Option B</label>
          <input
            type="text"
            name="optionB"
            value={questionData.optionB}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Option C</label>
          <input
            type="text"
            name="optionC"
            value={questionData.optionC}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Option D</label>
          <input
            type="text"
            name="optionD"
            value={questionData.optionD}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Correct Option</label>
          <input
            type="text"
            name="correctOption"
            value={questionData.correctOption}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600">Submit Question</button>
      </form>
    </div>
  );
};

export default QuestionForm;