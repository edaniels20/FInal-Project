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

            }).then(response => console.log(response.json())).catch(err => console.log(err))
        }
    }
    render() {
        return(
            <>
                <input name="user" type="text" placeholder="Username" value={this.state.user} onChange={this.handleChange} style={{marginTop: "100px"}}/>
                <input name="pass" type="password" placeholder="Password" value={this.state.pass} onChange={this.handleChange}/>
                <input type="submit" onClick={this.handleSubmit}/>
            </>
        )
    }
}

export default Login