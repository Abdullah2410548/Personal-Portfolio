"use client";

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [submittedMessage, setSubmittedMessage] = useState<FormData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      console.error("All fields are required!");
      return;
    }
    setSubmittedMessage(formData);
    console.log(`New message received:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold">Contact Me</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-center">
          Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="flex justify-center px-8 md:px-24 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-400 to-purple-600 rounded-md shadow-lg text-white font-bold text-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Display Submitted Message */}
      {submittedMessage && (
        <section className="px-8 md:px-24 py-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Submitted Message</h2>
            <p><strong>Name:</strong> {submittedMessage.name}</p>
            <p><strong>Email:</strong> {submittedMessage.email}</p>
            <p><strong>Message:</strong> {submittedMessage.message}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Contact;



