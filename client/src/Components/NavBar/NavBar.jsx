import React from 'react';
import { Navigate, Link} from 'react-router-dom';
import './Navbar.css'
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  return (
    
    <div className='nav-container'>
        <div className='loguito'>Flitrr</div>
        <div>
        <Link to="/signup"><Button size="lg" className='nav-button'>Get Started</Button></Link>
        <Link to="/login"><Button size="lg" className='nav-button'>Log in</Button></Link>
        </div>
    </div>
    
  )
}

export default Navbar