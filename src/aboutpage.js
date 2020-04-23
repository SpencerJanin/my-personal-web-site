import React, { Component } from "react";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Footer from "./components/footer";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <AboutMe style={{ minHeight: "100vh" }} />
      </div>
    );
  }
}

export default AboutPage;
