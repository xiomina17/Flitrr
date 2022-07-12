import React, { useEffect } from 'react';
import './landingPage.css'
import Navbar from '../NavBar/NavBar'
import MainLandingView from '../MainLandingView/MainLandingView';
import SecondLandingView from '../SecondLandingView/SecondLandingView';
import Pricing from '../Princing/Pricing';
import DemoComponent from '../DemoComponent/DemoComponent';
import Footer from '../Footer/Footer';


const LandingPage = () => {

  useEffect(() => {
    if (window.location.href.includes('#pricing')) {
      document.getElementById('pricing').scrollIntoView();
    }
  }, [])

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