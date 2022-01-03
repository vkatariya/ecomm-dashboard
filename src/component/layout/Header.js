import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Ecomm</Navbar.Brand>
        <Nav className="me-auto  my-2 my-lg-0 nav_bar_wrapper">
          <Link to="/">Home</Link>
          <Link to="/product-add"> Add</Link>
          <Link to="/product-list">List</Link>
          <Link to="/product-edit">Edit</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>

          {/* <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/product-add"> Add</Nav.Link>
          <Nav.Link to="/product-list">List</Nav.Link>
          <Nav.Link to="/product-edit">Edit</Nav.Link>
          <Nav.Link to="/login">Login</Nav.Link>
          <Nav.Link to="/register">Register</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
