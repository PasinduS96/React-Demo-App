import React from 'react';
//import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
export default function Header(props) {
	const { branding } = props;

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">{branding}</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/register">Register</Nav.Link>
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/Contacts">Contacts</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="/">Link 1</NavDropdown.Item>
						<NavDropdown.Item href="/">Another action</NavDropdown.Item>
						<NavDropdown.Item href="/">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="/">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-light">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}
