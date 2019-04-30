import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ProductPage from "./components/ProductPage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Create from "./components/Create"
import getCookie from "./js/scripts"

class App extends Component {
  constructor() {
    super()
    this.user = getCookie()
    this.session = this.isLoggedIn(this.user)
  }
  isLoggedIn(user) {
    console.log(user)
    if (user === false) {
      return false
    } else {
      return true
    }
  }
  render() {
    if (this.session) {
      return (
        <>
          <Header />
          <Router >
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductPage} />
            <Route path="/login" component={Login}/>
            <Route path="/create" component={Create}/>
          </Router>
          <Footer />
        </>
      )
    } else {
      return (
        <>
          <Header />
          <Router >
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductPage} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
          </Router>
          <Footer />
        </>
      );
    }
  }
}

export default App;
