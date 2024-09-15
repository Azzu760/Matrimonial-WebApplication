import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Reviews />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default HomePage;
