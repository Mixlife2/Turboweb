import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings: SliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '350px',
    slidesToShow: 3,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '200px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

interface SliderSettings {
  className: string;
  centerMode: boolean;
  infinite: boolean;
  centerPadding: string;
  slidesToShow: number;
  speed: number;
  autoplay: boolean;
  autoplaySpeed: number;
  responsive: ResponsiveSettings[];
}

interface ResponsiveSettings {
  breakpoint: number;
  settings: {
    arrows: boolean;
    centerMode: boolean;
    centerPadding: string;
    slidesToShow: number;
  };
}

export default Carousel;
