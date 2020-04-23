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
class Footer extends Component {
  state = {};
  render() {
    const style = {
      position: "relative",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100%",
      backgroundColor: "#f5f5f5",
    };
    return (
      <div>
        <Navbar style={style}>
          <Navbar.Brand href="#home">Footer</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
