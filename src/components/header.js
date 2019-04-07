import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" className="navbar-dark" expand="lg">
                <Navbar.Brand href="#home">Questioner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Meetups</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;