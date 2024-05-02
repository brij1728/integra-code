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
    <div>
      <h1>Simple Form</h1>
      <Form onSubmit={handleSubmit} />
      {submittedData && <DisplayData formData={submittedData} />}
    </div>
  );
};

export default FormPage;
