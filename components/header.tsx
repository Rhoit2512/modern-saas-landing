import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 animate-fade-in">
      <nav className="container mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-black tracking-tighter">
          <a href="#">
            <span className="text-brand-accent">ADMY</span>
            <span className="text-white">BRAND</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <a href="#prices" className="text-gray-300 hover:text-white transition-colors duration-300">Prices</a>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a>
        </div>
        <a href="#signup" className="hidden md:inline-block bg-brand-primary text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-brand-primary-hover transition-all duration-300 transform hover:scale-105">
          Sign Up
        </a>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
