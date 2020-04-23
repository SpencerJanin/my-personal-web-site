import React, { Component } from "react";
import NavBar from "./components/navbar";
import LoginScreen from "./components/login";
import Footer from "./components/footer";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LoginScreen Style={{ minHeight: "100vh" }} />
      </div>
    );
  }
}

export default LoginPage;
