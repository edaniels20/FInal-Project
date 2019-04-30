import React from 'react'
import {Component} from 'react'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            userInfo: {}
        }
    }
    render() {
        return (
            <>
                <div className="header">
                    <div className="nav-bar" id="navbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="logo-wrapper">
                                        <img src="../img/logo-white.png" alt="Logo" />
                                        <div className="logo-text">
                                            <h1>Lux <span>Rental</span></h1>
                                            <span>Luxury Affordability</span>
                                        </div>
                                    </div>
                                    <div className="navbar-menus">
                                        <ul>
                                            <li>
                                                <a href="./login">
                                                    <img src="../img/lock.png" alt="" className="nav-icons" />
                                                    <span>Login</span>
                                                </a>
                                            </li>
                                            <li className="search-icon">
                                                <a href="#Link" className="border-right">
                                                    <img src="../img/search.png" alt="" className="nav-icons" />
                                                    <span>Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <ul className="navigation">
                                        <li><a href="./">Home</a></li>
                                        <li><a href="#Link">About</a></li>
                                        <li><a href="./products">Products</a></li>
                                        <li><a href="#Link">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } 
}

export default Header