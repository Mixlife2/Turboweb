import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './NavBar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const navClass = isScrolled ? 'shadow-md' : '';
  const visibilityClass = isVisible ? 'opacity-100 transition-opacity duration-500' : 'opacity-0';

  return (
    <div className={`fixed inset-x-0 bottom-0 mb-4 z-50 ${navClass} ${visibilityClass}`}>
      <div className="flex justify-center">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-950 rounded-full mx-auto w-max">
          <div onClick={() => scroll.scrollToTop()} className="text-gray-400 hover:text-white cursor-pointer">
            <i className="fas fa-home"></i>
          </div>

          <div className="flex space-x-4 ml-4">
            <ScrollLink to="benefits" smooth={true} duration={500} className="text-gray-300 hover:text-white">Benefits</ScrollLink>
            <ScrollLink to="recent-work" smooth={true} duration={500} className="text-gray-300 hover:text-white">Recent work</ScrollLink>
            <ScrollLink to="scope-of-work" smooth={true} duration={500} className="text-gray-300 hover:text-white">Scope of work</ScrollLink>
            <ScrollLink to="pricing" smooth={true} duration={500} className="text-gray-300 hover:text-white">Pricing</ScrollLink>
            <ScrollLink to="faqs-section" smooth={true} duration={500} className="text-gray-300 hover:text-white">FAQs</ScrollLink>
          </div>

          <div className="ml-4">
            <Link to="/login" className="text-gray-400 hover:text-white border border-gray-400 px-3 py-1 rounded">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;