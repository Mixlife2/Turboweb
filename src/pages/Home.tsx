import React from 'react';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import BannerSlider from '../components/BannerSlider/BannerSlider';
import AnimatedIcons from '../components/AnimatedIcons/AnimatedIcons';
import TestimonialCard from '../components/TestimonialCards/TestimonialCards';
import FeatureSection from '../components/FeatureSection/FeatureSection';
import BenefitsSection from '../components/BenefitsSection/BenefitsSection';
import RecentWorkSection from '../components/RecentWorkSection/RecentWorkSection';
import SecondCarousel from '../components/SecondCarousel/SecondCarousel';
import FunkyScribblesSection from '../components/FunkyScribblesSection/FunkyScribblesSection';
import ApplicationsSection from '../components/ApplicationSection/ApplicationSection';
import MembershipLevels from '../components/MembershipLevels/MembershipLevels';
import PricingSection from '../components/PricingSection/PricingSection';
import FAQsSection from '../components/FAQsSection/FAQsSection';
import WebflowSection from '../components/WebFlowSection/WebFlowSection';
import Carousel from '../components/Carousel/Carousel';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const image1 = require('../assets/images/carousel1.jpg');
const image2 = require('../assets/images/carousel2.jpg');
const image3 = require('../assets/images/carousel3.jpg');
const image4 = require('../assets/images/carousel4.jpg');
const image5 = require('../assets/images/carousel5.jpg');


const Home: React.FC = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div>
      <Navbar />
      <HeaderSection
        mainTitle="WeHook"
        subTitle="A design and development agency, with a special touch."
        buttonText="See plans"
        buttonLink="/plans"
      />
      <div className="carousel-wrapper">
        <Carousel images={images} />
      </div>
      <BannerSlider />
      <AnimatedIcons />
      <TestimonialCard />
      <FeatureSection />
      <BenefitsSection />
      <RecentWorkSection />
      <SecondCarousel />
      <FunkyScribblesSection />
      <ApplicationsSection />
      <MembershipLevels />
      <PricingSection />
      <WebflowSection />
      <FAQsSection />
      <Footer/>
    </div>
  );
};

export default Home;
