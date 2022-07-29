import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const dataAbout = {
    name : "Vivek Girish Modi",
    image : "./images/pic.png"
  }
  return <HeroSection {...dataAbout}/>
};

export default About;
 