'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-md rounded-md bg-white p-6 shadow-md"
    >
      <div className="mb-6">
        <label
          htmlFor="name"
          className="mb-2 block font-semibold text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-rose-300 px-4 py-2 focus:border-rose-500 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="mb-2 block font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-rose-300 px-4 py-2 focus:border-rose-500 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="hover:bg-primary-dark focus:bg-primary-dark w-full rounded-md bg-btn px-4 py-2 text-white focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};
