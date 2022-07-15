import './demoComponent.css'
import '../section.css'
import { Button, Container, Row, Col } from 'react-bootstrap'

import React from 'react'

const DemoComponent = () => {
  return (
    <div className="section-demo">
      <Container>
        <Row>
          <Col md="12">
            <div id="demo-content-wrap">
              <h3>Try out Flitrr!</h3>
              <Button href="https://calendly.com/jacob_flitrr/scheduled?month=2022-07" className="rec-button" size="lg">Schedule Demo</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  //  <>  
  //  <div className='demo-wrapper'>
  //   <div className='rectangle'>
  //       <h1 id="tittle">Try out Flitrr!</h1>
  //       <Button href="https://calendly.com/jacob_flitrr/scheduled?month=2022-07" className="rec-button" size="lg">Schedule Demo</Button>
  //   </div>
  //  </div>
  //  </>
  )
}

export default DemoComponent