import React from 'react';
import './landingPage.css'
import Navbar from '../NavBar/NavBar'
import MainLandingView from '../MainLandingView/MainLandingView';
import SecondLandingView from '../SecondLandingView/SecondLandingView';


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <MainLandingView/>
      <SecondLandingView/>
    </div>
  )
}

export default LandingPage