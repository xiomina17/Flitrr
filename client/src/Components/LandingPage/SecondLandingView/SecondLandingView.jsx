import React from 'react';
import '../section.css'
import './SecondLandingView.css';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Wrapper from '../Wrapper/Wrapper';


const SecondLandingView = () => {
  return (
    <div className="section section-how-does">
      <Container>
        <h3>How does Flitrr work?</h3>
        <Row>
          <Col sm="12" lg="4">
            <div className="step-card">
              <div className="img-wrap">
                <img width="300px" src="./Assets/createAccount.png"></img>
              </div>
              <h4>1. Create an account with us</h4>
              <p>
                With a team onboarding account, you can create your own company structure and securely manage your issues from a single dashboard.
              </p>
            </div>
          </Col>
          <Col sm="12" lg="4">
            <div className="step-card">
              <div className="img-wrap">
                <img width="300px" src="./Assets/data.png"></img>
              </div>
              <h4>2. Integrate your costumer service information.</h4>
              <p>
                Integration of your salesforce, hubspot, internal CRMs and Zendesk.
              </p>
            </div>
          </Col>
          <Col sm="12" lg="4">
            <div className="step-card">
              <div className="img-wrap">
                <img width="300px" src="./Assets/solutions.png"></img>
              </div>
              <h4>3. Flitrr sources recurring problems from your customer service data, and suggests solutions.</h4>
              <p>The most pressing product priorities on the table. Shortlist, assign and resolve issues with a dedicated product backlog tool.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    // <div className='sec-container'>

    //   <h1 className="title-text">How does Flitrr work?</h1>

    //   <div className="card-wrapper">


      
    //   <Card className='second-card' style={{ width: '22rem' }}>
    //     <Card.Img variant="top" src="./Assets/createAccount.png" />
    //     <Card.Body >
    //       <Card.Title className='card-tittle3'> 1. Create an account with us</Card.Title>
    //       <Card.Text className='c-text'>
    //       With a Team onboarding account, you can create your own company structure and 
    //       securely manage your issues from a single dashboard.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    


    //   <Card  className='second-card' style={{ width: '22rem' }}>
    //     <Card.Img className='second-imgs' variant="top" src="./Assets/data.png" />
    //     <Card.Body className='s-text'>
    //       <Card.Title  className='card-tittle1' >2. Integrate your costumer service information </Card.Title>
    //       <Card.Text className='c-text'>
    //         Integration of your salesforce, hubspot, internal CRMs and Zendesk.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>


    //   <Card className='second-card' style={{ width: '22rem' }}>
    //     <Card.Img className='second-imgs' variant="top" src="./Assets/solutions.png" />
    //     <Card.Body className='s2-text'>
    //       <Card.Title className='card-tittle2'>3. Flitrr sources recurring problems from your customer service data, and suggests solutions.</Card.Title>
    //       <Card.Text className='c-text'>
    //       The most pressing product priorities on the table. Shortlist, assign and resolve issues with a dedicated product backlog tool.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    //   </div>

    //   <Wrapper/>
    // </div>
  )
}

export default SecondLandingView
