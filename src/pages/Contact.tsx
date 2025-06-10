import React, { Suspense } from 'react';

const SpaceScene = React.lazy(() => import('../components/SpaceScene'));

const Contact: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
        <SpaceScene />
      </Suspense>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <form className="pointer-events-auto bg-black/60 backdrop-blur-md p-6 rounded-lg space-y-4 max-w-sm w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none"
            required
          />
          <textarea
            placeholder="Message"
            className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
