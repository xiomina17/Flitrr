import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import {Button, Container, Nav, Navbar as BNavbar, NavDropdown} from 'react-bootstrap';


const Navbar = () => {
  return (
    
    <BNavbar collapseOnSelect expand="lg" className='nav-container'>
      <Container>
      <div className='logo'>Flitrr</div>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' style={{paddingLeft: '16px'}}>
            <NavDropdown className="item" title="Product">
              <NavDropdown.Item href="/product">
                <p className="title">Product</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Self-Service</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Artificial Intelligence</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Industries">
              <NavDropdown.Item href="/product">
                <p className="title">Retail and eCommerce</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Financial Services</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Marketplace</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Higher Education</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Government</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Resources">
              <NavDropdown.Item href="/product">
                <p className="title">Library</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Blog</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Events</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Help Center</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Community</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Company">
              <NavDropdown.Item href="/product">
                <p className="title">Careers</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Media</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title">Contact</p>
              </NavDropdown.Item>
            </NavDropdown>
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