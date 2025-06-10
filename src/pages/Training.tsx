import React from "react";
import { IconType } from "react-icons";
import { FaLaptopCode, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import trainingImg from "../images/corporate-training.png";

interface Module {
  icon: IconType;
  title: string;
}

const modules: Module[] = [
  { icon: FaLaptopCode, title: "Modern Web Stacks" },
  { icon: FaChalkboardTeacher, title: "Live Workshops" },
  { icon: FaUsers, title: "Team Mentorship" },
];

const Training = () => (
  <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-teal-50 py-16">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Corporate Training</h1>
        <p className="text-gray-700 mb-6">
          Upskill your developers with programs designed and delivered by seasoned professionals.
        </p>
        <ul className="space-y-4">
          {modules.map(({ icon: Icon, title }) => (
            <li key={title} className="flex items-center">
              <Icon className="text-emerald-500 w-6 h-6 mr-3" />
              <span className="text-gray-800 font-medium">{title}</span>
            </li>
          ))}
        </ul>
      </div>
      <img src={trainingImg} alt="Corporate Training" className="w-full rounded-lg shadow-lg" />
    </div>
  </div>
);

export default Training;
