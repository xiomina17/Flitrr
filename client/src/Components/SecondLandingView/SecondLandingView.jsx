import React from 'react';
import './SecondLandingView.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SecondLandingView = () => {
  return (
    <div className='sec-container'>

      <h1 className="title-text">How to integrate Flitrr?</h1>

      <div className="card-wrapper">

      <Card className='second-card' style={{ width: '22rem' }}>
        <Card.Img variant="top" src="./Assets/createAccount.png" />
        <Card.Body>
          <Card.Title>1.Create an account with us</Card.Title>
          <Card.Text className='c-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card  className='second-card' style={{ width: '22rem' }}>
        <Card.Img className='second-imgs' variant="top" src="./Assets/data.png" />
        <Card.Body>
          <Card.Title  className='card-tittle1' >2. Integrate your costumer service information </Card.Title>
          <Card.Text className='c-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='second-card' style={{ width: '22rem' }}>
        <Card.Img className='second-imgs' variant="top" src="./Assets/solutions.png" />
        <Card.Body>
          <Card.Title className='card-tittle2'>3. Flitrr sources recurring problems from your customer service site and solutions.</Card.Title>
          <Card.Text className='c-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      </div>

    </div>
  )
}

export default SecondLandingView