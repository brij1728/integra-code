'use client';

import React, { useState } from 'react';

import { LinkedList } from '@/lib';

export const LinkedListComponent: React.FC = () => {
  const [list, setList] = useState(new LinkedList());
  const [input, setInput] = useState('');
  const [key, setKey] = useState(0);

  const handleInsert = () => {
    console.log('Before insert:', list.getElements()); // Log before inserting
    if (input.trim() !== '' && !isNaN(Number(input))) {
      list.insert(parseInt(input));
      setInput('');
      setList(list.clone());
    }
    console.log('After insert:', list.getElements()); // Log after inserting
  };

  const handleDelete = () => {
    if (input.trim() !== '' && !isNaN(Number(input))) {
      const deletedData = parseInt(input);
      console.log('Attempting to delete:', deletedData);
      list.delete(deletedData);
      console.log('After delete:', list.getElements());
      setInput(''); // Reset input after deletion
      setList(list.clone()); // Update list state after deletion
      setKey((prevKey) => prevKey + 1); // Force re-render
    } else {
      console.log('Invalid input for deletion.');
    }
  };

  const handleReverse = () => {
    console.log('Before reverse:', list.getElements());
    list.reverse();
    setList(list.clone());
    console.log('After reverse:', list.getElements());
  };

  const handleFindMiddle = () => {
    const middle = list.findMiddle();
    console.log('Middle element:', middle ? middle.data : 'None');
    alert(`Middle element is ${middle ? middle.data : 'None'}`);
  };

  return (
    <div key={key} className="p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
        className="mr-2 rounded border p-2"
      />
      <button
        onClick={handleInsert}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Insert
      </button>
      <button
        onClick={handleDelete}
        className="ml-2 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Delete
      </button>
      <button
        onClick={handleReverse}
        className="ml-2 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
      >
        Reverse
      </button>
      <button
        onClick={handleFindMiddle}
        className="ml-2 rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-700"
      >
        Find Middle
      </button>
      <div>
        <h3>List Contents:</h3>
        <ul>
          {list.getElements().map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
