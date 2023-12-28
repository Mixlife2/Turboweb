import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Navbar from './components/NavBar/NavBar';
import HeaderSection from './components/HeaderSection/HeaderSection';
import BannerSlider from './components/BannerSlider/BannerSlider';
import AnimatedIcons from './components/AnimatedIcons/AnimatedIcons';
import TestimonialCard from './components/TestimonialCards/TestimonialCards';
import FeatureSection from './components/FeatureSection/FeatureSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import RecentWorkSection from './components/RecentWorkSection/RecentWorkSection';
import SecondCarousel from './components/SecondCarousel/SecondCarousel';
import FunkyScribblesSection from './components/FunkyScribblesSection/FunkyScribblesSection';
import ApplicationsSection from './components/ApplicationSection/ApplicationSection';
import PricingSection from './components/PricingSection/PricingSection';
import WebflowSection from './components/WebFlowSection/WebFlowSection';
import MembershipLevels from './components/MembershipLevels/MembershipLevels';
import Carousel from './components/Carousel/Carousel';
import FAQsSection from './components/FAQsSection/FAQsSection';
import LoginPage from './pages/LoginPage';


import image1 from './assets/images/carousel1.jpg';
import image2 from './assets/images/carousel2.jpg';
import image3 from './assets/images/carousel3.jpg';
import image4 from './assets/images/carousel4.jpg';
import image5 from './assets/images/carousel5.jpg';


function App() {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="">
      <Router>
        <header className="flex justify-between items-center py-6">
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeaderSection
                  mainTitle="TurboWeb"
                  subTitle="A design and development agency, with a special touch."
                  buttonText="See plans"
                  buttonLink="/plans"
                />
                <div className="carousel-wrapper">
                  <Carousel images={images} />
                </div>
                <BannerSlider />
                <AnimatedIcons />
                <TestimonialCard/>
                <FeatureSection/>
                <BenefitsSection/>
                <RecentWorkSection/>
                <SecondCarousel/>
                <FunkyScribblesSection/>
                <ApplicationsSection/>
                <MembershipLevels/>
                <PricingSection/>
                <FAQsSection/>
                <WebflowSection/>
              </>
            } />

            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
