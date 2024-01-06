import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
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
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';


import image1 from './assets/images/carousel1.jpg';
import image2 from './assets/images/carousel2.jpg';
import image3 from './assets/images/carousel3.jpg';
import image4 from './assets/images/carousel4.jpg';
import image5 from './assets/images/carousel5.jpg';


function App() {
  const images = [image1, image2, image3, image4, image5];
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Router>
        <header className="flex justify-between items-center py-6">
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <>
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
                <Footer/>
                
              </>
             } />
             <Route path="/login" element={<LoginPage />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path='/register' element={<Register />}  />
           </Routes>
         </main>
       </Router>
     </div>
   );
 }
 
 export default App;