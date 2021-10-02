import React, { Fragment } from "react";
import "././../../App.css";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CartWidget from "./CartWidget";
import {useCartContext} from "../../cartContext/cartContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = (props) => {
  const { count } = props
  const {iconCart} = useCartContext()
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">MusicLand</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/category/electric">
                <a className="nav-warning--color">Electric</a>
              </Link>
              <Link to="/category/acoustic">
                <a className="nav-warning--color">Acoustic</a>
              </Link>
            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-3"
                  aria-label="Search"
                />
                <Button variant="outline-warning" className="nav-spacing">
                  Search
                </Button>
              </Form>
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
