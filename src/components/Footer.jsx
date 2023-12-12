import React from 'react';
// You can import your social media icons from a package like react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <a href="/" className="text-xl font-bold">REACT PORTFOLIO</a>
          <p className="text-gray-400 text-sm mt-2">© {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          {/* Add your social media links below replacing '#' with your URLs */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaFacebookF className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
