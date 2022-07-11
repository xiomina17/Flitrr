import './demoComponent.css'
import {Button} from 'react-bootstrap'

import React from 'react'

const DemoComponent = () => {
  return (
   <>
   
   <div className='demo-wrapper'>

    <div className='rectangle'>
        <h1 id="tittle">Try out Flitrr!</h1>

        <Button href="https://calendly.com/jacob_flitrr/scheduled?month=2022-07" className="rec-button" size="lg">Schedule Demo</Button>

    </div>


   </div>
   
   
   
   
   
   </>
  )
}

export default DemoComponent