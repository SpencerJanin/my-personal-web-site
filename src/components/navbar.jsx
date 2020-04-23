import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Route, Link, BrowserRouter } from "react-router-dom";
import AboutPage from "../aboutpage";
class NavBar extends Component {
  state = {};
  render() {
    const Style = {
      width: "100%",
    };
    return (
      <div>
        <Navbar bg="dark" variant="dark" style={Style}>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>{" "}
            <Nav.Link href="/login">Login</Nav.Link>{" "}
            <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="book_thoughts" eventKey="4.1">
                Thoughts on books
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
