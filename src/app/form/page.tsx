'use client';

import { DisplayData, Form } from '@/components';
import React, { useState } from 'react';

const FormPage: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const handleSubmit = (formData: { name: string; email: string }) => {
    setSubmittedData(formData);
  };

  return (
    <div className=" flex w-full flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-bold md:text-2xl">User Info Form</h1>
      <Form onSubmit={handleSubmit} />
      {submittedData && <DisplayData formData={submittedData} />}
    </div>
  );
};

export default FormPage;
