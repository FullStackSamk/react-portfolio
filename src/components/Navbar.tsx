import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path
      ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
      : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";
  };

  const getMobileNavLinkClass = (path: string) => {
    return location.pathname === path
      ? "block py-2 px-4 text-sm bg-green-500 text-white"
      : "block py-2 px-4 text-sm hover:bg-green-500 transition duration-300";
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-white text-lg hover:text-red-500">
                CANTECH IT SERVICES.
              </span>
            </Link>
          </div>
          
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={getNavLinkClass("/")}>
              Home
            </Link>
            <Link to="/services" className={getNavLinkClass("/services")}>
              Services
            </Link>
            <Link to="/why-us" className={getNavLinkClass("/why-us")}>
              About
            </Link>
            <Link to="/sam" className={getNavLinkClass("/sam")}>
              SAM
            </Link>
            <Link to="/contact" className={getNavLinkClass("/contact")}>
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none mobile-menu-button"
            >
              <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
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
        <Link to="/" className={getMobileNavLinkClass("/")}>
          Home
        </Link>
        <Link to="/services" className={getMobileNavLinkClass("/services")}>
          Services
        </Link>
        <Link to="/why-us" className={getMobileNavLinkClass("/why-us")}>
          About
        </Link>
        <Link to="/sam" className={getMobileNavLinkClass("/sam")}>
          SAM
        </Link>
        <Link to="/contact" className={getMobileNavLinkClass("/contact")}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;