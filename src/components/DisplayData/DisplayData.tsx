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
    <div>
      <h2>Submitted Data</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};
