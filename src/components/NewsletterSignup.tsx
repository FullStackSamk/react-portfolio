import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the newsletter sign up logic here
    // For example, you could send the email to your server or a third-party email service provider
    console.log('Submitted email:', email);

    // Reset the email field after submission
    setEmail('');
  };

  return (
    <div className="bg-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Subscribe to get updates on our latest products and offers!
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            className="w-full md:w-auto px-4 py-2 mr-2 rounded border border-gray-300 focus:outline-none focus:border-green-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
