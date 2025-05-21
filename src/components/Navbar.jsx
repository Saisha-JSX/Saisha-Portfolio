import React, { useEffect, useState } from 'react';
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.navbar',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      '.nav-links li',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.5,
      }
    );
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar bg-white py-4 px-6 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-normal text-pink-600 flex items-center space-x-2">
          <FaHeart className="text-pink-600" />
          <span>Saisha Karki</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-pink-600 text-xl font-normal focus:outline-none"
          >
            {isOpen ? <FaTimes className="transition-all duration-200" /> : <FaBars className="transition-all duration-200" />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="nav-links hidden md:flex space-x-8 text-gray-700 font-normal">
          <li><a href="#about" className="hover:text-pink-500">About</a></li>
          <li><a href="#education" className="hover:text-pink-500">Education</a></li>
          <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-pink-500">Skills</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6">
          <ul className="flex flex-col space-y-4 text-gray-700 font-normal nav-links">
            <li><a href="#about" className="hover:text-pink-500" onClick={toggleMenu}>About</a></li>
            <li><a href="#education" className="hover:text-pink-500" onClick={toggleMenu}>Education</a></li>
            <li><a href="#projects" className="hover:text-pink-500" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#skills" className="hover:text-pink-500" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#contact" className="hover:text-pink-500" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
