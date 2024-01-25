import React from 'react';
import TestimonialCard from '../TestimonialCards/TestimonialCards';

const FeatureSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold">
        Is better "<span className="text-red-600">you will never go back</span>"
        </h1>
        <p className="mt-6 text-lg">
        WeHook replaces unreliable freelancers and expensive agencies for a flat monthly fee, with designs delivered so fast they'll blow you away.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12">
        <TestimonialCard />
        <div className="mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Fully asynchronous</h2>
          <p className="mb-6">
          Don't you like meetings? Us neither; So much so that we have banned them completely.
          </p>
          <h2 className="text-3xl font-bold mb-4">Manage with Trello</h2>
          <p className="mb-6">
          Manage your design board using Trello. View active, queued, and completed tasks with ease.
          </p>
          <h2 className="text-3xl font-bold mb-4">Invite unlimited team members</h2>
          <p>
          Invite your entire team so anyone can submit requests and track their progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
