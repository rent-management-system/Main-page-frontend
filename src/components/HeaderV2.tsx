import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderV2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-8 w-auto" src="nova.svg" alt="Nova Logo" />
            <img className="h-8 w-auto" src="tire.svg" alt="Tire Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/vehicles" className="text-gray-700 hover:text-blue-600 font-medium">
            Vehicles
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
            About
          </Link>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
            Testimonials
          </a>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Action Buttons/Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300">
            Sign Up
          </button>
          <i className="fa-regular fa-circle-user text-2xl text-gray-700"></i>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isNavOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/vehicles" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              Vehicles
            </Link>
            <Link to="/about" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              About
            </Link>
            <a href="#testimonials" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              Testimonials
            </a>
            <Link to="/contact" className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 border-2 border-gray-800 text-gray-800 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderV2;
