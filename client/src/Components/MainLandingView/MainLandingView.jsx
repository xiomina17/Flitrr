import React from 'react';
import './MainLanding.css';
import Button from 'react-bootstrap/Button';
import Wrapper from '../Wrapper/Wrapper';


const MainLandingView = () => {
  return (
    <div className='main-container'>

        <div className='main-wrapper'>

       

        <div className='main-text'>
        <h1 className='tittle-text'>Human AI processing for faster product improvement</h1>
        <h3 className='p-text'>We work with all of your customer service data.</h3>
        <Button size='lg' className='main-button'>Try Now!</Button>
        </div>

        <div className='main-bird'>
            <img id="main-bird-img" src="Assets/bird.png" alt="bird" width="600px" />
        </div>

        </div>
      <Wrapper/>
    </div>
  )
}

export default MainLandingView