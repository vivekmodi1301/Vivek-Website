import React from "react";
import HeroSection from "./components/HeroSection";


const Home = () => {
  const data = {
    name : "Vivek Modi",
    image : "./images/hero_banner.svg"
  }
  return <HeroSection {...data}/>
};

export default Home;
