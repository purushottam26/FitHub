import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fithublogo from '/assets/fithub_logo.jpeg';

const Navbar = ({ bgColor }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${bgColor}  ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'
  }`;

  return (
    <div className={navbarClasses}>
      <div className="flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={fithublogo}
              alt="FitHub"
              className="w-24 h-20 rounded-2xl object-cover"
            />
          </Link>
          <h1 className="text-xl font-bold">FitHub</h1>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-md font-medium">
          <Link
            to="/"
            className="relative hover:text-red-500 transition duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300"
          >
            Home
          </Link>
          <Link
            to="/workouts"
            className="relative hover:text-red-500 transition duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-red-600 after:transition-all after:duration-300"
          >
            Workouts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
