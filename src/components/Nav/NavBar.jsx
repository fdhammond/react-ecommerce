import React, {Fragment} from 'react';

import '././../../App.css'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Fragment>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">MusicLand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><a className='nav-warning--color'>Features</a></Nav.Link>
      <Nav.Link href="#pricing"><a className='nav-warning--color'>Pricing</a></Nav.Link>
    </Nav>
    <Nav>
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-3"
        aria-label="Search"
      />
      <Button variant="outline-warning" className="nav-spacing">Search</Button>
    </Form>
    <Nav.Link className="nav-spacing">
     <CartWidget />
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  </Fragment>
    );
};

export default NavBar;
