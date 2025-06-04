import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animateMenu = isMenuOpen ? 'open' : '';

  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Website Logo */}
            <a href="#" className="flex items-center py-4 px-2">
              <span className="font-semibold text-white text-lg hover:text-red-500">CANTECH IT SERVICES.</span>
            </a>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none mobile-menu-button">
              <div className={`hamburger ${animateMenu}`}>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
