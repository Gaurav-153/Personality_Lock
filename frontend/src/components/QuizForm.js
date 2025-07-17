import React, { useState } from 'react';
import API from '../utils/api';

const QuizForm = ({ setResult }) => {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    favoriteColor: '',
    luckyNumber: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/generate-id', form);
      const userId = data.userId;
      localStorage.setItem('userId', userId);

      try {
        const res = await API.get(`/result?userId=${userId}`);
        localStorage.setItem('personality', res.data.personality);
        setResult(res.data.personality);
      } catch {
        const res = await API.post('/result', { userId, ...form });
        localStorage.setItem('personality', res.data.personality);
        setResult(res.data.personality);
      }
    } catch (err) {
      alert('Something went wrong!');
      console.error(err);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700 min-h-[80vh] flex items-center justify-center rounded-xl shadow-xl p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-xl shadow-xl space-y-5 text-white dark:text-white"
      >
        <h2 className="text-2xl font-bold text-center">🧠 Take the Quiz</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-white/30 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-white/80"
        />
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-white/30 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white text-white"
        />
        <input
          type="text"
          name="favoriteColor"
          placeholder="Favorite Color"
          value={form.favoriteColor}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-white/30 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-white/80"
        />
        <input
          type="number"
          name="luckyNumber"
          placeholder="Lucky Number"
          value={form.luckyNumber}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-white/30 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder:text-white/80"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold rounded shadow-md hover:shadow-lg transform hover:scale-[1.02]"
        >
          🔓 Unlock Personality
        </button>
      </form>
    </div>
  );
};

export default QuizForm;
