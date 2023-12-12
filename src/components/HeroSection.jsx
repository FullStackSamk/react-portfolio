import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  const words = ['BTB', 'BTC', 'SASS'];

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
    }, Math.max(reverse ? 75 : subIndex === words[wordIndex].length ? 1000 : 150, parseInt(Math.random() * 350)));

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
    <div className="text-center p-20 bg-pink-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Transform Your Data into Actionable Insights.</h1>
      <p className="text-xl mb-8">Empowering Your Business with Advanced Data Analytics Solutions</p>
      <p className="mb-12">
        Monitor your data analytics to increase revenue for{' '}
        <span className="inline-block">
          {`${words[wordIndex].substring(0, subIndex)}${blink ? '|' : ' '}`}
        </span>{' '}
        platforms.
      </p>
      <button className="bg-green-500 px-6 py-2 rounded text-white font-bold hover:bg-green-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
