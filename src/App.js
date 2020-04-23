import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./aboutpage";
import BookThoughts from "./bookthoughts";
import LoginPage from "./loginpage";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/about" component={AboutPage} />
        <Route path="/book_thoughts" component={BookThoughts} />
        <Route path="/login" component={LoginPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
