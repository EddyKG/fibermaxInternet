import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-xl py-4' : 'bg-gray-900 py-4'}`}>
      <div className="container flex items-center justify-around">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary md:hidden">Fibermax Internet</span>
          <img src="FiberMax-logo.png" alt="FiberMax Internet Logo" className="hidden md:block text-2xl font-bold text-primary" />
        </Link>
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-lg">
          <Link to="/" className="font-medium hover:text-primary transition-colors mr-4">
            Home
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors mr-4">
            About
          </Link>
          <Link to="/plans" className="font-medium hover:text-primary transition-colors mr-4">
            Plans
          </Link>
          <Link to="/coverage" className="font-medium hover:text-primary transition-colors mr-4">
            Coverage
          </Link>
          <Link to="/contact" className="font-medium hover:text-primary transition-colors ">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          {/* <a href="tel:+254796592673" className="flex items-center mr-4 text-primary font-medium text-white border border-white p-3 rounded hover:text-emarald-700">
            <FaPhoneAlt className="mr-2 text-white" />
            +254 796 592 673
          </a> */}
          <Link to="/contact" className="btn-primary rounded p-4 hover:bg-red-600 dark:hover:bg-red-600">
            Get Connected
          </Link>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {isDarkMode ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-600 hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 shadow-lg`}>
        <div className="container py-6 space-y-4 m-4">
          <Link to="/" 
            className="block font-medium hover:text-primary transition-colors text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <hr />
          <Link to="/about" 
            className="block font-medium hover:text-primary transition-colors text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <hr />
          <Link to="/plans" 
            className="block font-medium hover:text-primary transition-colors text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Plans
          </Link>
          <hr />
          <Link to="/coverage" 
            className="block font-medium hover:text-primary transition-colors text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Coverage
          </Link>
          <hr />
          <Link to="/contact" 
            className="block font-medium hover:text-primary transition-colors text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <hr />
          <a href="tel:+254700000000" className="flex items-center text-primary font-medium text-black dark:text-white">
            <FaPhoneAlt className="mr-2" />
            +254796592673
          </a>
          <Link to="/contact" 
            className="btn-primary w-full flex justify-center p-2 rounded text-black dark:text-white "
            onClick={() => setIsOpen(false)}
          >
            Get Connected
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;