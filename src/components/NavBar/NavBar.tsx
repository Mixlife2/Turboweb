import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './NavBar.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState(/* Obtener información del usuario de tu sistema de autenticación */);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    setIsAuthenticated(user !== null);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [user, isAuthenticated, isScrolled, isVisible]);

  const navClass = isScrolled ? 'shadow-md' : '';
  const visibilityClass = isVisible && isAuthenticated ? 'opacity-100 transition-opacity duration-500' : 'opacity-0';

  const isHome = location.pathname === '/';

  return (
    
    <div className={`fixed inset-x-0 bottom-0 mb-4 z-50 ${navClass} ${visibilityClass} ${isHome ? 'transition-opacity' : ''}`}>
      <div className="flex justify-center">
        <div className={`flex items-center justify-between px-4 py-2 bg-gray-950 rounded-full mx-auto w-max ${isHome ? 'transition-bg' : ''}`}>
          {isHome ? (
            <div onClick={() => scroll.scrollToTop()} className="text-gray-400 hover:text-white cursor-pointer hover-item">
              <i className="fas fa-home"></i>
            </div>
          ) : (
            <Link to="/" className="text-gray-400 hover:text-white cursor-pointer hover-item">
              <i className="fas fa-home"></i>
            </Link>
          )}

          <div className="flex space-x-4 ml-4">
            {isHome ? (
              <ScrollLink to="benefits" smooth={true} duration={500} className="text-gray-300 hover:text-white hover-item">Benefits</ScrollLink>
            ) : (
              <Link to="/#benefits" className="text-gray-300 hover:text-white cursor-pointer hover-item">Benefits</Link>
            )}

            {isHome ? (
              <ScrollLink to="recent-work" smooth={true} duration={500} className="text-gray-300 hover:text-white hover-item">Recent work</ScrollLink>
            ) : (
              <Link to="/#recent-work" className="text-gray-300 hover:text-white cursor-pointer hover-item">Recent work</Link>
            )}

            {isHome ? (
              <ScrollLink to="scope-of-work" smooth={true} duration={500} className="text-gray-300 hover:text-white hover-item">Scope of work</ScrollLink>
            ) : (
              <Link to="/#scope-of-work" className="text-gray-300 hover:text-white cursor-pointer hover-item">Scope of work</Link>
            )}

            {isHome ? (
              <ScrollLink to="pricing" smooth={true} duration={500} className="text-gray-300 hover:text-white hover-item">Pricing</ScrollLink>
            ) : (
              <Link to="/#pricing" className="text-gray-300 hover:text-white cursor-pointer hover-item">Pricing</Link>
            )}

            {isHome ? (
              <ScrollLink to="faqs-section" smooth={true} duration={500} className="text-gray-300 hover:text-white hover-item">FAQs</ScrollLink>
            ) : (
              <Link to="/#faqs-section" className="text-gray-300 hover:text-white cursor-pointer hover-item">FAQs</Link>
            )}
          </div>

          <div className="ml-4">
            <Link to="/login" className="text-gray-400 hover:text-white border border-gray-400 px-3 py-1 rounded hover-item">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
