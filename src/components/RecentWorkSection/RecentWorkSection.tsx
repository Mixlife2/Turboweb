import React from 'react';

const RecentWorkSection: React.FC = () => {
  return (
    <div id="recent-work" className="text-center p-12 bg-white max-w-sm mx-auto rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Recent work</h2>
      <p className="text-gray-600 text-lg mb-6">Award-winning designs and nothing less.</p>
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
      View recent work
      </button>
    </div>
  );
};

export default RecentWorkSection;
