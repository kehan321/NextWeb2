// components/FeedbackForm.tsx
"use client";
import React, { useState } from 'react';
import { supabase } from '@/app/supabase/page';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const feedbackData = { name, email, message };

    try {
      const { data, error } = await supabase
        .from('form')  // Make sure the table name is correct
        .insert([feedbackData]);

      if (error) {
        throw new Error(error.message);
      }

      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {/* <h2 className="text-xl font-bold mb-4">Feedback Form</h2> */}
      {submitted && <p className="text-green-500 mb-4">Thank you for your feedback!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
