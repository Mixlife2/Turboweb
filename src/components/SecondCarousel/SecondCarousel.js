// SecondCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecondCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="text-center p-12 bg-white">
      <h2 className="text-4xl font-bold mb-4">Segundo Carrusel</h2>
      <Slider {...settings}>
        <div>
          <img src="https://placehold.it/561x400" alt="Image 1" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image 2" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image 3" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image 4" />
        </div>
        
        {/* Agrega más imágenes según sea necesario */}
      </Slider>
    </div>
  );
};

export default SecondCarousel;
