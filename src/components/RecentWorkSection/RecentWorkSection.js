import React from 'react';

const RecentWorkSection = () => {
  return (
    <div id="recent-work" className="text-center p-12 bg-white max-w-sm mx-auto rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Trabajo reciente</h2>
      <p className="text-gray-600 text-lg mb-6">Diseños premiados y nada menos.</p>
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
        Ver trabajo reciente
      </button>
    </div>
  );
};

export default RecentWorkSection;
