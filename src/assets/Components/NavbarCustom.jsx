import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { styled } from 'styled-components';
import {LinkContainer} from 'react-router-bootstrap'


function NavbarCustom() {
 return (
    <>
  <NavbarStyle>
      <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
             <NavDropdown title="Marcas" id="collasible-nav-dropdown">
             <LinkContainer to="/ABB">
              <NavDropdown.Item>ABB</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">ALTECH</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CONTRINEX</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">DANFOSS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">OPTEX</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">WAGO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#hola">Nuestras Promociones</Nav.Link>
            <Nav.Link href="#hola">Contactanos</Nav.Link>
            <Nav.Link href="#hola">Servicios</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </NavbarStyle>
    </>
  )
}

export default NavbarCustom

const NavbarStyle=styled.nav`

.navbar{
  background-color: #1e73be;
  color: #fdfdfd;
  padding: 0;
  min-height: 6rem;

}

.nav-link{
  font-size: 1.6rem;
  color: white;
  padding: 20px !important;
}
.navbar-nav 
.nav-link.active{
  color: white;
}
.dropdown-menu{
  background-color: #1e73be;
  font-size: 1.6rem;
}
`;