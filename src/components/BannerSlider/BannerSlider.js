import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

import logoEmpresa1 from '../../assets/logos/figma.png';
import logoEmpresa2 from '../../assets/logos/ChatGPT.png';
import logoEmpresa3 from '../../assets/logos/openia.png';
import logoEmpresa4 from '../../assets/logos/supabase.png';

const BannerSlider = () => {
  const settings = {
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

export default BannerSlider;
