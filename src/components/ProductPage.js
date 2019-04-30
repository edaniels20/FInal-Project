import React from 'react'
import {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Products from "./Products"

class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:4000/api/luxWheels/products")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                })
                console.log(this.state)
            })
    }
    render() {
        const products = this.state.products.map((item, idx) => <Products data={item} key={idx} />)
        return(
            <>
                <div className="main-content">
                    <div className="hero">
                        <div className="hero-cover">
                            <h1 className="products-hero-content">Lux <b>Rental</b></h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <form className="search-form">
                                    <div className="col-sm-4 col-md-4">
                                        <label>Body</label>
                                        <select name="Coupe">
                                            <option value="Coupe">Coupe</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <label>Make</label>
                                        <select name="make">
                                            <option value="Lamborghini">Lamborghini</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <label>Model</label>
                                        <select name="model">
                                            <option value="Hurrican">Hurrican</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row products">
                            {products}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <img className="img-responsive" src="./img/map.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPage