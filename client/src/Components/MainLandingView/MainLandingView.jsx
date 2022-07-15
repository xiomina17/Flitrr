import React from 'react';
import '../section.css'
import './MainLanding.css';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Wrapper from '../Wrapper/Wrapper';


const MainLandingView = () => {
  return (
    <div className="section">
      <Container style={{maxWidth: "960px"}}>
        <Row className="justify-content-center align-items-center">
          <Col lg="7" sm="12" style={{alignSelf: "center"}}>
            <div className="section-content-wrap main-landing-section">
              <h1>Human AI processing for faster product improvement</h1>
              <p style={{paddingBottom: '30px'}}>We work with all of your customer service data.</p>
              <Button>
                <a href='https://calendly.com/jacob_flitrr/scheduled'>
                 Free Trial
                </a>
              </Button>
            </div>
          </Col>
          <Col lg="5" sm="6">
            <div className='main-bird'>
              <img id="main-bird-img" src="Assets/bird.png" alt="bird" width="600px" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    // <div className='main-container'>

    //     <div className='main-wrapper'>

       

    //     <div className='main-text'>
    //     <h1 className='tittle-text'>Human AI processing for faster product improvement</h1>
    //     <h3 className='p-text'>We work with all of your customer service data.</h3>
    //     <Button size='lg' className='main-button'>
    //       <a href='https://calendly.com/jacob_flitrr/scheduled'>
    //       Free Trial
    //       </a>
    //     </Button>
    //     </div>

    //     <div className='main-bird'>
    //         <img id="main-bird-img" src="Assets/bird.png" alt="bird" width="600px" />
    //     </div>

    //     </div>
    //   <Wrapper/>
    // </div>
  )
}

export default MainLandingView