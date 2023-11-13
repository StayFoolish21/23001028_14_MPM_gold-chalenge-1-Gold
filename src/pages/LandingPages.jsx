import React from "react";
import Header from "../components/Header";
import OurService from "../components/Our Services";
import WhyUs from "../components/Whyus";
import CardHero2 from "../components/Hero 2";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <OurService />
      <WhyUs />
      <CardHero2 />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
