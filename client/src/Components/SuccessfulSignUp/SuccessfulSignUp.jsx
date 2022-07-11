import './successfulSignUp.css';
import * as Icon from 'react-bootstrap-icons';
import React from 'react';
import{Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const SuccessfulSignUp = () => {
  return (
    <div className='suc-wrapper'>
        <div className='box-content'>
        <p>Yor account has been created successfully!</p>

        <Link to='/Dashboard'><Button size='lg' id='suc-button'>Go to dashboard <Icon.ArrowRight/></Button></Link>
        </div>
    </div>
  )
}

export default SuccessfulSignUp