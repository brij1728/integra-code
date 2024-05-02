'use client';

import { useEffect, useState } from 'react';

import { MdDelete } from 'react-icons/md';

interface HistoryItem {
  expression: string;
  result: string;
}

export const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const loadedHistory = localStorage.getItem('calcHistory');
    if (loadedHistory) {
      setHistory(JSON.parse(loadedHistory));
    }
  }, []);

  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/[^0-9+\-*/().]/g, '');
      const evalResult = eval(sanitizedInput).toString();
      setResult(evalResult);
      const newHistory = [
        ...history,
        { expression: input, result: evalResult },
      ];
      setHistory(newHistory);
      localStorage.setItem('calcHistory', JSON.stringify(newHistory));
    } catch (error) {
      setResult('Invalid input. Please enter a valid mathematical expression.');
    }
  };

  const handleRemoveHistoryItem = (index: number) => {
    const updatedHistory = history.filter((_, idx) => idx !== index);
    setHistory(updatedHistory);
    localStorage.setItem('calcHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={input}
        placeholder='Enter a math expression e.g. "2+2"'
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
      {history.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg">Calculation History:</h3>
          <ul>
            {history.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-start space-x-4"
              >
                {item.expression} = {item.result}
                <button
                  onClick={() => handleRemoveHistoryItem(index)}
                  className="ml-2 p-1 text-red-500 hover:text-red-700"
                  title="Remove calculation"
                >
                  <MdDelete size="1.5em" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
