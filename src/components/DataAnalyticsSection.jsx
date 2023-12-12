import React from 'react';
// Import your own image file below
import dataAnalyticsImage from '../images/data.png';

const DataAnalyticsSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img
            src={dataAnalyticsImage} // Replace with your image import
            alt="Data Analytics Dashboard"
            className="mx-auto"
          />
        </div>

        {/* Text content on the right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Manage Data Analytics Centrally
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Voluptatum molestiae
            delectus culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed
            odit perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
          </p>
          <a
            href="#"
            className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;
