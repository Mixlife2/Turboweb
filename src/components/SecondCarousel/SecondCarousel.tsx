import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecondCarousel: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="text-center p-12 bg-white">
      <h2 className="text-4xl font-bold mb-4">Second Carrusel</h2>
      <Slider {...settings}>
        <div>
          <img src="https://placehold.it/561x400" alt="Image1" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image2" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image3" />
        </div>
        <div>
          <img src="https://placehold.it/561x400" alt="Image4" />
        </div>
        
      </Slider>
    </div>
  );
};

export default SecondCarousel;

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}
