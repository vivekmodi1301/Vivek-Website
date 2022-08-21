import React , {useEffect} from "react";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import {useGlobalContext} from "./Context";
import Services from "./Services";


const Home = () => {

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> {
    updateHomePage();
  }, []);

  return (
    <>
      <HeroSection/>
      <Services/>
      <Contact/>
    </>
  ) // spread operator : Spread operator lets you expand an iterable like an object, string, or array into its elements 
};

export default Home;
