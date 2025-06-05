import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const animateMenu = isMenuOpen ? "open" : "";

  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Website Logo */}
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-white text-lg hover:text-red-500">
                CANTECH IT SERVICES.
              </span>
            </Link>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/why-us"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none mobile-menu-button"
            >
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
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/why-us"
          className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-green-500 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
