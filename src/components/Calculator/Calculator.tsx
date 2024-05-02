'use client';

import { useState } from 'react';

export const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/[^0-9+\-*/.]/g, '');
      setResult(eval(sanitizedInput).toString());
    } catch (error) {
      setResult('Invalid input');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-96 rounded-md border border-blue-300 p-2 text-black"
      />
      <button
        onClick={handleCalculate}
        className="ml-2 rounded-md bg-blue-500 p-2 text-white"
      >
        Calculate
      </button>
      <div className="mt-2">Result: {result}</div>
    </div>
  );
};
