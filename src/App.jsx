import React from "react";
import LandingPage from "./pages/LandingPages";
// import "./App.css";
// import OurService from "./components/Our Services";
// import WhyUs from "./components/Whyus";
// import Hero2 from "./components/Hero 2";
// import Faq from "./components/Faq";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCar from "./pages/SearchCar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<SearchCar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
