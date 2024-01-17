import React from 'react';

const FunkyScribblesSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">Funky Scribbles</h1>
        <p className="text-xl">A collection of funky vectorized scribbles to spice up your design projects.</p>
        <button className="bg-black text-white px-6 py-2 rounded-md">Check it out</button>
      </div>
      <div className="flex space-x-4 mt-12">
        <span className="text-sm font-semibold">Google</span>
        <span className="text-sm font-semibold">invision</span>
        <span className="text-sm font-semibold">legalzoom</span>
        <span className="text-sm font-semibold">verizon</span>
        <span className="text-sm font-semibold">J.P.Morgan</span>
        <span className="text-sm font-semibold">Freelancer</span>
      </div>
    </div>
  );
};

export default FunkyScribblesSection;
