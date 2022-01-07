import React from "react";
import "./Style.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  const history = useNavigate();

  function Logout() {
    localStorage.clear();
    history.push("/product-add");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Ecomm</Navbar.Brand>
        <Nav className="me-auto  my-2 my-lg-0 nav_bar_wrapper">
          <Link to="/product-add"> Add</Link>
          <Link to="/product-list">List</Link>
          <Link to="/product-edit">Edit</Link>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/restaurant">Restaurant</Link>
        </Nav>
        <Nav>
          <NavDropdown title={user && user.name}>
            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
