import React from 'react';
import './landingPage.css'
import Navbar from '../NavBar/NavBar'
import MainLandingView from '../MainLandingView/MainLandingView';
import SecondLandingView from '../SecondLandingView/SecondLandingView';
import Pricing from '../Princing/Pricing';
import DemoComponent from '../DemoComponent/DemoComponent';


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <MainLandingView/>
      <SecondLandingView/>
      <Pricing/>
      <DemoComponent/>
    </div>
  )
}

export default LandingPage