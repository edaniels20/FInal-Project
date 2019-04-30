import React from 'react'
import {Component} from 'react'

class Create extends Component {
    constructor() {
        super()
        this.state = {
            make: "",
            model: "",
            mpg: "",
            image: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let key = event.target.name
        console.log(key)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        let request = {
            make: this.state.make,
            model: this.state.model,
            mpg: Number(this.state.mpg),
            image: this.state.image,
            description: this.state.description
        }
        fetch("http://localhost:4000/api/luxwheels/products/create", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(request)
        }).then(response => console.log(response))
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-6">
                            <div className="signup-form-wrapper">
                                <h2>Add Product</h2>
                                <input name="make" type="text" placeholder="Make" value={this.state.make} onChange={this.handleChange}/>
                                <input name="model" type="text" placeholder="Model" value={this.state.model} onChange={this.handleChange}/>
                                <input name="mpg" type="text" placeholder="MPG" value={this.state.mpg} onChange={this.handleChange}/>
                                <input name="image" type="text" placeholder="Image Link" value={this.state.image} onChange={this.handleChange}/>
                                <input name="description" type="text" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
                                <input className="button-primary button-signup" type="submit" onClick={this.handleSubmit}/>

                                <h3>Image Preview</h3>
                                <img src={this.state.image} alt="Image Not Found"/>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Create