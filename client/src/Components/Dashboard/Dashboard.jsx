import {Button, Container, Nav, Navbar as BNavbar, NavDropdown, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import './dashboard.css'
import Board from '../Board/Board';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		
		<BNavbar collapseOnSelect expand="lg" className='nav-container2'>
      <Container>
      <div className='logo2'>Flitrr</div>
      <BNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BNavbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto' style={{paddingLeft: '16px'}}>
            <NavDropdown className="item" title="Your work">
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Assigned to me</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Recent</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/product">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Boards</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Projects">
              <NavDropdown.Item href="/product">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Recent</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>View all projects</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Create project</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Filters">
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>View all filters</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Advance issue search</p>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="item" title="Dashboards">
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>View all dashboards</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Create dashboards</p>
              </NavDropdown.Item>
            </NavDropdown>
			<NavDropdown className="item" title="People">
			<NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Invite Teanmates</p>
              </NavDropdown.Item>
			  <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Flitrr - Development</p>
              </NavDropdown.Item>
			  <NavDropdown.Item href="">
                <p className="title2" style={{fontSize:"15px", fontWeight:"lighter"}}>Start a team</p>
              </NavDropdown.Item>
				</NavDropdown>
				<Button>Create</Button>
          </Nav>

		<Nav className='navbar-nav2'>
		  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

		  <Icon.BellFill width="20px" height="20px"></Icon.BellFill>
		  <Icon.QuestionCircleFill width="20px" height="20px"></Icon.QuestionCircleFill>
		  <Icon.GearFill width="20px" height="20px"></Icon.GearFill>
		  <Icon.Circle></Icon.Circle>

		</Nav>

        </BNavbar.Collapse>
      </Container>
    </BNavbar>

		<div className='body-wrapper'>
			<div className='column-nav'>

				<div className='header-nav'>
					<h2>Project</h2>
					<p>Development</p>
				</div>
	
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Summary</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> List</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Board</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Calendar</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Timeline</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Forms</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Pages</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Issues</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/> Reports</span>
			</div>

			
			<div className='board'>
			<Board/>
			</div>

		</div>



	</>

  
	);
};

export default Main;

