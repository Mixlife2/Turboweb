import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

const logoEmpresa1 = require('../../assets/logos/figma.png');
const logoEmpresa2 = require('../../assets/logos/ChatGPT.png');
const logoEmpresa3 = require('../../assets/logos/openia.png');
const logoEmpresa4 = require('../../assets/logos/supabase.png');


const BannerSlider: React.FC = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const brands = [logoEmpresa1, logoEmpresa2, logoEmpresa3, logoEmpresa4];

  return (
    <div className="banner-slider-container">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={brand} alt={`Marca ${index + 1}`} className="max-w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

export default BannerSlider;