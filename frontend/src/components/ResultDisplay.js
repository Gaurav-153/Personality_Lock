import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <div
        className="relative w-full max-w-xl p-8 bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/40 dark:border-white/20
                   text-center text-gray-900 dark:text-white animate-fade-in-up transition-all duration-500"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent dark:from-white/10 pointer-events-none" />

        <h2 className="text-4xl font-extrabold tracking-tight mb-6">
          🎯 Your Personality Type
        </h2>

        <div className="text-2xl font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-teal-400 dark:to-indigo-400
                        text-white px-6 py-4 rounded-full shadow-lg inline-block animate-bounce">
          {result}
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
