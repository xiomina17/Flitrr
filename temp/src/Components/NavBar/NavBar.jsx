import React from 'react'
import './Navbar.css'
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  return (
    
    <div className='nav-container'>
        <div className='loguito'>Flitrr</div>
        <div>
        <Button size="lg" className='nav-button'>Get Started</Button>
        <Button size="lg" className='nav-button'>Log in</Button>
        </div>
    </div>
    
  )
}

export default Navbar