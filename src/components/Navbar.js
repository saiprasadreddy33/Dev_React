import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Login.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/login" className="text-white text-lg font-semibold">Login Page</Link>
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {isMenuOpen && (
            <div className="navbar-dropdown">
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Go - Home
              </Link>
              <Link
                to="/posts"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Posts - List
              </Link>
              <Link
                to="/create-post"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Post
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart Items
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
