import React from "react";
import Slider from "../components/Home/Slider/Slider";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import Welcome from "../components/Home/Welcome/Welcome";
import Services from "../components/Home/Services/Services";
import Menu from "../components/Home/Menu/Menu";

const Home = () => {
  return (
    <div className="home-page">
      <Slider />
      <Welcome />
      <Testimonials />
      <Services />
      <Menu />
    </div>
  );
};

export default Home;
