import React from 'react';

const WebflowSection: React.FC = () => {
  return (
    <div className="bg-black text-white p-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
          ADD
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-4">Web flow development</h1>
        <p className="mb-6">
        Get a better website faster with Webflow development. Requires a design subscription.
        </p>
        <div className="text-4xl font-bold">
          $999/month
        </div>
      </div>
    </div>
  );
};

export default WebflowSection;
