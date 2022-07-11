import {Navbar, Container, Nav} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './dashboard.css'

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<>
		
		<Navbar bg="light" variant="light">
		<Container>
		<Navbar.Brand href="">Flitrr</Navbar.Brand>
		<Nav className="me-auto">
		<Nav.Link href="">Your work</Nav.Link>
		<Nav.Link href="">Projects</Nav.Link>
		<Nav.Link href="">People</Nav.Link>
		<Nav.Link href="">Create</Nav.Link>
		</Nav>
		</Container>
		</Navbar>

		<div className='body-wrapper'>
			<div className='column-nav'>

				<div className='header-nav'>
					<h2>Project</h2>
					<p>Development</p>
				</div>
	
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Summary</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>List</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Board</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Calendar</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Timeline</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Forms</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Pages</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Issues</span>
				<span><Icon.CaretRightFill style={{ color: 'white' }}/>Reports</span>

			</div>



			<div className='board'>

			<h1>BOARD</h1>






			</div>

		</div>



	</>

  
	);
};

export default Main;

