import React from 'react'
import {Component} from "react"
import { MultiHook } from 'tapable';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            pass: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        if (event.target.name === "user") {
            this.setState({user: event.target.value})
        } else if (event.target.name === "pass"){
            this.setState({pass: event.target.value})
        }
    }
    handleSubmit() {
        console.log("ran")
        if(this.state.pass === "" || this.state.user === "") {
            return
        } else {
            var data = {
                uName: this.state.user,
                pwd: this.state.pass
            }
            fetch("http://localhost:4000/api/luxWheels/user/login", {
                method: "post",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data)

            })
            .then(response => response.json())
            .then(data => {
                if(data.message === "Auth successful") {
                    this.setCookie(data)
                    window.location.replace("http://localhost:3000/")
                } else {
                    return data
                }
            })
            .catch(err => console.log(err))
        }
    }
    setCookie(data) {
        let d = new Date()
        d.setTime(d.getTime() + 1 * 3600 * 1000)
        let expires = "expires="+ d.toUTCString()
        document.cookie = "token=" + JSON.stringify(data)+ ";" + expires + ";path=/"
    }
    render() {
        return(
            <>
            <div className="signup-page-wrapper">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <div className="signup-form-wrapper">
                            <h2>Login</h2>
                            <input name="user" type="text" placeholder="Username" value={this.state.user} onChange={this.handleChange}/>
                            <input name="pass" type="password" placeholder="Password" value={this.state.pass} onChange={this.handleChange}/>
                            <input className="button-primary button-signup" type="submit" onClick={this.handleSubmit}/>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Login