import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button, Container, Nav, Navbar as BNavbar, NavDropdown} from 'react-bootstrap';


const Navbar = () => {
  return (
    
    <BNavbar collapseOnSelect expand="lg" className='nav-container'>
      <Container>
      <div className='loguito'>Flitrr</div>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' style={{paddingLeft: '16px'}}>
            <NavDropdown className="item" title="Product">

            </NavDropdown>
            <Link to="/product">
              
            </Link>
            <NavDropdown className="item" title="Industries">

            </NavDropdown>
            <Link to="/product" className="item">
              
            </Link>
            <NavDropdown className="item" title="Resources">

            </NavDropdown>
            <Link to="/product" className="item">
              
            </Link>
            <NavDropdown className="item" title="Company">

            </NavDropdown>
            <Link to="/product" className="item">
              
            </Link>
          </Nav>
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