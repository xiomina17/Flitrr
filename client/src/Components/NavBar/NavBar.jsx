import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button, Container, Nav, Navbar as BNavbar} from 'react-bootstrap';


const Navbar = () => {
  return (
    
    <BNavbar collapseOnSelect expand="lg" className='nav-container'>
      <Container>
      <div className='loguito'>Flitrr</div>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BNavbar.Collapse id="responsive-navbar-nav">
        <Nav className='me-auto'></Nav>
        <Nav>
          <Link to="/signup"><Button size="lg" className='nav-button'>Get Started</Button></Link>
          <Link to="/login"><Button size="lg" className='nav-button'>Log in</Button></Link>
        </Nav>
      </BNavbar.Collapse>
      </Container>
    </BNavbar>
  )
}

export default Navbar