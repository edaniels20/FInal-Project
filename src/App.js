import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import Login from "./components/Login"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router >
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductPage} />
          <Route path="/login" component={Login}/>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
