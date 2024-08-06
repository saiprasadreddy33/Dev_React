import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-full h-full bg-opacity-50 bg-black"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Discover Amazing Features <br className="hidden md:block"/> for the Assignment
          </h1>
          <p className="text-lg md:text-xl mb-8">Seamlessly integrate and scale with  top solutions.</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Go to Login
          </button>
        </div>
        <svg className="absolute bottom-0 left-0 w-full h-32 text-white fill-current" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0,160L1440,320L1440,0L0,0Z"></path>
        </svg>
      </div>

      <div className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 19H19V5H5V19Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-gray-700">Comprehensive feature description to highlight the benefits and functionality.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 16.5L6.5 12L11 7.5V16.5ZM13 16.5V7.5L17.5 12L13 16.5Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-700">Detailed description of another feature to entice and inform users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 16.5L17.5 12L13 7.5V16.5ZM11 7.5V16.5L6.5 12L11 7.5Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-700">Another feature with a concise explanation of what it does and how it helps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
