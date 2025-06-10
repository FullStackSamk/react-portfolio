import React from "react";

import { FaCheckCircle } from "react-icons/fa";
import servicesImg from "../images/services-we-offer.png";

interface Offering {
  title: string;
  description: string;
}

const offerings: Offering[] = [
  {
    title: "Web Development",
    description: "Modern responsive applications built with the latest frameworks.",
  },
  {
    title: "Cloud & DevOps",
    description: "CI/CD pipelines, container orchestration and infrastructure guidance.",
  },
  {
    title: "UI/UX Consulting",
    description: "Design systems and accessibility reviews for delightful experiences.",
  },
  {
    title: "Technical Training",
    description: "Hands-on workshops tailored for your engineering teams.",
  },
];

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-50 py-16">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-gray-700 mb-6">
          With over a decade of frontend expertise, we craft performant applications and provide strategic guidance.
        </p>
        <ul className="space-y-4">
          {offerings.map((service) => (
            <li key={service.title} className="flex items-start">
              <FaCheckCircle className="text-emerald-500 w-5 h-5 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img src={servicesImg} alt="Services" className="w-full rounded-lg shadow-lg" />
    </div>
  </div>
);

export default Services;
