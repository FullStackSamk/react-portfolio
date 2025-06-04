import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dataAnalyticsImage from "../images/data.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const techStack = ["React", "Node.js", "Airflow", "AWS Glue", "Kubernetes"];

const chartData = [
  { day: "Mon", visitors: 1200, conversions: 300 },
  { day: "Tue", visitors: 1400, conversions: 350 },
  { day: "Wed", visitors: 1000, conversions: 280 },
  { day: "Thu", visitors: 1600, conversions: 400 },
  { day: "Fri", visitors: 1700, conversions: 450 },
];

const DataAnalyticsSection = () => {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Trigger transition after 3 seconds
    const timer = setTimeout(() => {
      setStartTransition(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* Left Side: Text */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            Data Analytics That Drive Results
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At <strong>CanTech IT Services Inc.</strong>, we empower IT teams
            with centralized analytics solutions. From real-time dashboards to
            KPI tracking and team upskilling, we specialize in delivering
            insights with React, Node.js, Airflow, and AWS-native tools.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="bg-white hover:shadow-lg transition duration-300 shadow-sm border rounded-lg px-4 py-2 text-center text-gray-800 font-medium text-sm"
              >
                {tech}
              </div>
            ))}
          </div>

          <a
            href="mailto:sampath@cantech.io"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Let’s Talk
          </a>
        </div>

        {/* Right Side: Slide Transition */}
        <div
          className="relative w-full h-[300px] md:h-[360px] overflow-hidden"
          data-aos="fade-left"
        >
          {/* Chart container */}
          <div
            className={`absolute inset-0 transition-transform duration-1000 ${
              startTransition ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="bg-white p-4 rounded-lg shadow-lg h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f9fafb",
                      borderRadius: "8px",
                      borderColor: "#e5e7eb",
                    }}
                    labelStyle={{ fontWeight: "bold" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#6366f1"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    name="Website Visitors"
                  />
                  <Line
                    type="monotone"
                    dataKey="conversions"
                    stroke="#10b981"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                    name="Conversions"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Image container */}
          <div
            className={`absolute inset-0 transition-transform duration-1000 ${
              startTransition ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={dataAnalyticsImage}
              alt="Data Analytics Dashboard"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;
