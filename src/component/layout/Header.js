import React from "react";
import "./Style.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

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
        <Navbar.Brand>
          <NavLink className="nav-link" to="/">
            My Projects
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto  my-2 my-lg-0 nav_bar_wrapper">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/crud">
            Crud
          </NavLink>
          {/* <NavLink className="nav-link" to="/product-add">
            Product Add
          </NavLink>
          <NavLink className="nav-link" to="/product-list">
            Product List
          </NavLink>
          <NavLink className="nav-link" to="/product-edit">
            Edit
          </NavLink> */}

          <NavLink className="nav-link" to="/restaurant">
            Restaurant
          </NavLink>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          <Nav>
            <NavDropdown title="Product">
              <NavDropdown.Item>
                <NavLink to="/product-list"> List</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavLink to="/product-add"> Add</NavLink>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <NavLink to="/product-edit"> Edit</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink className="nav-link" to="/color">
            Favoriate
          </NavLink>
          <NavLink className="nav-link" to="/counter">
            Counter
          </NavLink>
          <NavLink className="nav-link" to="/woocomerce">
            Woocom
          </NavLink>
        </Nav>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>

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
