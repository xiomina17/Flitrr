import React from 'react';
import './SecondLandingView.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Wrapper from '../Wrapper/Wrapper';


const SecondLandingView = () => {
  return (
    <div className='sec-container'>

      <h1 className="title-text">How does Flitrr work?</h1>

      <div className="card-wrapper">


      
      <Card className='second-card' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="./Assets/createAccount.png" />
        <Card.Body >
          <Card.Title className='card-tittle3'>1.Create an account with us</Card.Title>
          <Card.Text className='c-text'>
          With a Team onboarding account, you can create your own company structure and 
          securely manage your issues from a single dashboard.
          </Card.Text>
        </Card.Body>
      </Card>
    


      <Card  className='second-card' style={{ width: '22rem' }}>
        <Card.Img className='second-imgs' variant="top" src="./Assets/data.png" />
        <Card.Body className='s-text'>
          <Card.Title  className='card-tittle1' >2. Integrate your costumer service information </Card.Title>
          <Card.Text className='c-text'>
            Integration of your salesforce, hubspot, internal CRMs and Zendesk.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='second-card' style={{ width: '22rem' }}>
        <Card.Img className='second-imgs' variant="top" src="./Assets/solutions.png" />
        <Card.Body className='s2-text'>
          <Card.Title className='card-tittle2'>3. Flitrr sources recurring problems from your customer service site and solutions.</Card.Title>
          <Card.Text className='c-text'>
          The most pressing product priorities on the table. Shortlist, assign and resolve issues with a dedicated product backlog tool.
          </Card.Text>
        </Card.Body>
      </Card>

      </div>

      <Wrapper/>
    </div>
  )
}

export default SecondLandingView