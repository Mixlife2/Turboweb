import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] p-5 space-y-6">
      <div className="flex items-center space-x-2 mb-5">
        <i className="fas fa-bars text-gray-400"></i>
        <span className="font-bold text-xl">Dashdark X</span>
      </div>
      <div className="mb-5">
        <input type="text" placeholder="Search for..." className="w-full p-2 bg-[#1F2937] text-gray-300 rounded-md" />
      </div>
      <nav className="flex flex-col space-y-2">
      <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-clone"></i>
          <span>Demo Pages</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-star"></i>
          <span>Features</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-users"></i>
          <span>Users</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-dollar-sign"></i>
          <span>Pricing</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-puzzle-piece"></i>
          <span>Integrations</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-cubes"></i>
          <span>Component Library</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-cog"></i>
          <span>Settings</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-file"></i>
          <span>Template pages</span>
        </button>
      </nav>
      <div className="mt-auto">
        <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-md flex items-center space-x-2 w-full">
          <i className="fas fa-download"></i>
          <span>Get template</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;