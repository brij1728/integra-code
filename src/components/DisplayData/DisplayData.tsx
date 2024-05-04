import React from 'react';

interface FormData {
  name: string;
  email: string;
}

interface DisplayDataProps {
  formData: FormData;
}

export const DisplayData: React.FC<DisplayDataProps> = ({ formData }) => {
  return (
    <div className=" flex w-full max-w-md flex-col rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">Submitted Data</h2>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row">
        <p className="text-sm font-semibold text-gray-700 sm:text-base">
          Name:
        </p>
        <p className="text-sm text-gray-800 sm:text-base">{formData.name}</p>
      </div>
      <div className="flex flex-col gap-1 sm:flex-row">
        <p className="text-sm font-semibold text-gray-700 sm:text-base">
          Email:
        </p>
        <p className="text-sm text-gray-800 sm:text-base">{formData.email}</p>
      </div>
    </div>
  );
};
