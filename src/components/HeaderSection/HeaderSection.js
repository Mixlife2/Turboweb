import React from 'react';

const HeaderSection = ({ mainTitle, subTitle, buttonText, buttonLink }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-6">
        <div className="flex-1"></div>
        <h1 className="text-4xl font-bold">{mainTitle}</h1>
        <div className="flex-1"></div>
      </header>
      <section className="text-center py-20">
        <h2 className="text-6xl font-bold mb-6">{subTitle}</h2>
        <p className="text-xl mb-6">{buttonText}</p>
        <button className="bg-black text-white px-10 py-4 rounded-md hover:shadow-md transform hover:translate-y-1 transition-all duration-1000 ease-out" style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 2)" }}>
  {buttonText}
</button>






        <p className="text-sm mt-4">Designs you'll <span className="text-red-500">❤️</span>, guaranteed</p>
      </section>
    </div>
  );
};

export default HeaderSection;
