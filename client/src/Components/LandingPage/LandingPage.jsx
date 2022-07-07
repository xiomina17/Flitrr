import React from 'react';
import './landingPage.css'
import Navbar from '../NavBar/NavBar'
import MainLandingView from '../MainLandingView/MainLandingView';
import SecondLandingView from '../SecondLandingView/SecondLandingView';
import Pricing from '../Princing/Pricing';


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <MainLandingView/>
      <SecondLandingView/>
      <Pricing/>
    
    </div>
  )
}

export default LandingPage