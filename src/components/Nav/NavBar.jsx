import React, { Fragment } from "react";
import "././../../App.css";
import Navbar from "react-bootstrap/NavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import {
  Link
} from "react-router-dom";

const NavBar = (props) => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
          <Navbar.Brand>
            <a className="nav-warning--color" style={{ color: '#ffc107' }}>MusicLand</a>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ color: 'red'}}>
            <NavDropdown title="Guitar">
              <NavDropdown.Item className="button-color-nav-guitar">
              <Link to="/category/electric" className="d-flex m-3">
                <a className="nav-warning--color">Electric</a>
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="button-color-nav-guitar">
              <Link to="/category/acoustic" className="d-flex m-3">
                <a className="nav-warning--color">Acoustic</a>
              </Link>
              </NavDropdown.Item>
              </NavDropdown>
              <Link to="/category/bass" className="d-flex m-2">
                  <a className="nav-warning--color">Bass</a>
              </Link>
            </Nav>
            <Nav>
            </Nav>
            <Nav>
              <Link className="nav-spacing" to="/cart">
                <CartWidget />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
