import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl mr-4">&uarr;</div>
          <div className="text-xs">&copy; 2024 All systems normal.</div>
        </div>
        <nav className="flex flex-wrap">
          <a href="#" className="text-xs mx-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-xs mx-2 hover:text-gray-300">
            Documentation
          </a>
          {/* Agrega otros enlaces aquí */}
        </nav>
        <div className="flex items-center">
          <div className="text-xs mx-2">Command Menu</div>
          <i className="fas fa-search mx-2"></i>
          <i className="fas fa-cog mx-2"></i>
          <i className="fas fa-th mx-2"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
