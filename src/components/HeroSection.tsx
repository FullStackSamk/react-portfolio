import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);
  const [reverse, setReverse] = useState<boolean>(false);
  const [blink, setBlink] = useState<boolean>(true);
  const words: string[] = [
  'React',
  'Angular',
  'Vue.js',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Redux',
  'Node.js',
  'Express.js',
  'NestJS',
  'GraphQL',
  'REST APIs',
  'Python',
  'Django',
  'Flask',
  'Java',
  'Spring Boot',
  'C#',
  '.NET Core',
  'Ruby on Rails',
  'PHP',
  'Laravel',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'GCP'
];


  // Typing effect
  useEffect(() => {
    if (subIndex === words[wordIndex].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    },
    Math.max(
      reverse ? 75 : subIndex === words[wordIndex].length ? 1000 : 150,
      Math.floor(Math.random() * 350)
    ));

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, wordIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Empowering Your IT Journey
            </span>
            <br />
            <span className="text-3xl md:text-5xl mt-2 block text-white">
              with Expert Consulting and Training
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            Elevate your team's capabilities with industry-leading guidance and specialized training solutions.
          </p>

          {/* Typing animation container */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-6 py-4 border border-gray-700">
            <p className="text-gray-300 mb-2">Master the latest technologies and frameworks:</p>
            <span className="text-2xl font-mono text-emerald-400 inline-block min-h-[2rem]">
              {`${words[wordIndex].substring(0, subIndex)}${blink ? '|' : ' '}`}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 bg-transparent border-2 border-gray-500 text-gray-300 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default HeroSection;
