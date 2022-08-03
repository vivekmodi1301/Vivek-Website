import React , {useEffect} from "react";
import HeroSection from "./components/HeroSection";
import {useGlobalContext} from "./Context";


const Home = () => {

  const {updateHomePage} = useGlobalContext();

  useEffect(()=> {
    updateHomePage();
  }, []);

  return <HeroSection/> // spread operator : Spread operator lets you expand an iterable like an object, string, or array into its elements 
};

export default Home;
