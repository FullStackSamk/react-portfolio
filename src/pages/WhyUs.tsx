import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import whyImg from "../images/why-us.png";

const reasons: string[] = [
  "Tailor-made solutions that scale with your business",
  "Proven success delivering training to global teams",
  "Full spectrum knowledge from UI to cloud infrastructure",
  "Canadian roots with an international reach",
];

const WhyUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <img
        src={whyImg}
        alt="Why Choose Us"
        className="w-full rounded-lg shadow-lg order-last md:order-first"
      />
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h1>
        <ul className="space-y-4">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start">
              <FaCheckCircle className="text-blue-500 w-5 h-5 mt-1 mr-3" />
              <span className="text-gray-700">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default WhyUs;
