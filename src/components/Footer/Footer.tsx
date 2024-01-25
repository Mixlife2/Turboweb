import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-2xl mr-6">&uarr;</div>
          <div className="text-xs">&copy; 2024 All systems normal.</div>
        </div>
        <nav className="flex">
          <a href="#" className="text-xs mx-2">
            Home
          </a>
          <a href="#" className="text-xs mx-2">
            Documentation
          </a>
          <a href="#" className="text-xs mx-2">
            Guides
          </a>
          <a href="#" className="text-xs mx-2">
            Help
          </a>
          <a href="#" className="text-xs mx-2">
            Contact Sales
          </a>
          <a href="#" className="text-xs mx-2">
            Blog
          </a>
          <a href="#" className="text-xs mx-2">
            Changelog
          </a>
          <a href="#" className="text-xs mx-2">
            Pricing
          </a>
          <a href="#" className="text-xs mx-2">
            Enterprise
          </a>
          <a href="#" className="text-xs mx-2">
            Legal
          </a>
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
