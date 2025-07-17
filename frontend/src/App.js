import React, { useEffect, useState } from 'react';
import QuizForm from './components/QuizForm';
import ResultDisplay from './components/ResultDisplay';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedResult = localStorage.getItem('personality');
    const storedTheme = localStorage.getItem('darkMode');

    if (storedResult) setResult(storedResult);


    if (storedTheme === null) {
      setDarkMode(true);
      localStorage.setItem('darkMode', 'true');
    } else {
      setDarkMode(storedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 font-sans">
      <div className="max-w-3xl mx-auto px-4 py-12">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-300 dark:to-blue-400">
            🔐 Personality Lock
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:scale-105 transition-transform"
            aria-label="Toggle Theme"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </motion.div>


        <div className="bg-white/70 dark:bg-gray-700/60 shadow-2xl backdrop-blur-md p-6 rounded-3xl transition-all duration-500">
          <AnimatePresence mode="wait">
            {result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <ResultDisplay result={result} />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <QuizForm setResult={setResult} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
