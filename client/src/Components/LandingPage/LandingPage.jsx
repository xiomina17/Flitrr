import React from 'react';
import './landingPage.css'
import Navbar from '../NavBar/NavBar'
import MainLandingView from '../MainLandingView/MainLandingView';
import SecondLandingView from '../SecondLandingView/SecondLandingView';
import Pricing from '../Princing/Pricing';
import DemoComponent from '../DemoComponent/DemoComponent';
import Footer from '../Footer/Footer';


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <MainLandingView/>
      <SecondLandingView/>
      <Pricing/>
      <DemoComponent/>
      <Footer/>
    </div>
  )
}

export default LandingPage