import React, { Component } from "react";
import NavBar from "./components/navbar";
import LoginScreen from "./components/login";
import Footer from "./components/footer";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <LoginScreen />
      </div>
    );
  }
}

export default LoginPage;
