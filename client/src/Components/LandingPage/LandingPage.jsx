import React, { useEffect } from 'react';
import './landingPage.css'
import Navbar from './NavBar/NavBar'
import MainLandingView from './MainLandingView/MainLandingView';
import SecondLandingView from './SecondLandingView/SecondLandingView';
import Pricing from './Princing/Pricing';
import FlitrrVCSS from './FlitrrVCSS/FlitrrVCSS';
import FlitrrVCRM from './FlitrrVCRM/FlitrrVCRM';
import Argument from './Argument/Argument'
import DemoComponent from './DemoComponent/DemoComponent';
import Footer from './Footer/Footer';
import Navbar2 from './v2/Navbar/Navbar';


const LandingPage = () => {

  useEffect(() => {
    if (window.location.href.includes('#pricing')) {
      document.getElementById('pricing').scrollIntoView();
    }
  }, [])

  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <MainLandingView/>
      <SecondLandingView/>
      <Argument/>
      <FlitrrVCSS/>
      <FlitrrVCRM/>
      <Pricing/>
      <DemoComponent/>
      <Footer/>
    </div>
  )
}

export default LandingPage
