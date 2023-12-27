import React from 'react';

const FeaturedLogos = () => {
  return (
    <div className="bg-gray-200 py-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm mb-2 font-semibold">Diseños comúnmente presentados por</p>
        <div className="flex space-x-4 items-center">
          <img src="https://placehold.co/100x30" alt="Placeholder image for Dribbble logo" className="h-6" />
          <img src="https://placehold.co/100x30" alt="Placeholder image for Lapa logo" className="h-6" />
          <img src="https://placehold.co/100x30" alt="Placeholder image for Awwwards logo" className="h-6" />
          <img src="https://placehold.co/100x30" alt="Placeholder image for Product Hunt logo" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedLogos;
