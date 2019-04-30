import React from 'react'
import {Component} from 'react'

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fName: "",
            lName: "",
            email: "",
            uName: "",
            location: "",
            pwd: "",
            gender: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event.target.name === "gender") {
            this.setState({
                gender: event.target.value
            })
        } else {
            let key = event.target.name
            console.log(key)
            this.setState({
                [event.target.name]: event.target.value
            })
            console.log(event.target.value)
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let request = {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            uName: this.state.uName,
            pwd: this.state.pwd,
            location: this.state.location,
            gender_id: this.state.gender
        }
        fetch("http://localhost:4000/api/luxWheels/user/register", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(request)
        }).then(response => console.log(response))
        
    }

    render() {
        return (
        <>
        <div className="signup-page-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-6">
                        <div className="signup-form-wrapper">
                            <h2>Signup</h2>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="First Name" name="fName" onChange={this.handleChange} value={this.state.fName}/>
                                <input type="text" placeholder="Last Name" name="lName" onChange={this.handleChange} value={this.state.lName}/>
                                <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>
                                <input type="text" placeholder="User Name" name="uName" onChange={this.handleChange} value={this.state.uName}/>
                                <input type="password" placeholder="Password" name="pwd" onChange={this.handleChange} value={this.state.pwd}/>
                                <input type="text" placeholder="City/State" name="location" onChange={this.handleChange} value={this.state.location}/>
                                <div className="gender-wrapper">
                                    <label>
                                        <input type="radio" name="gender" value="1" onChange={this.handleChange}/>Male
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="2" onChange={this.handleChange}/>Female
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" value="3" onChange={this.handleChange}/>N/B
                                    </label>
                                </div>
                                <button className="button-primary button-signup">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
}

export default Signup