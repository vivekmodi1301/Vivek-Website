import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name : "Vivek Girish Modi",
    image : "./images/pic.png"
  }
  return <HeroSection {...data}/>
};

export default About;
