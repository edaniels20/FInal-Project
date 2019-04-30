import React from 'react'

function Home() {
    return (
        <>
        <div className="hero-main">
            <div className="slider-main">
                <div className="hero">
                    <img src="../img/hero03.jpg" alt=""/>
                </div>
                <div className="hero">
                    <img src="../img/hero-2.jpg" alt=""/>
                </div>
            </div>
            <div className="search-menu-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-">
                            <div className="search-top">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                                <h2>Search For <b>Best Cars</b></h2>
                            </div>
                            <div className="search-form">
                                <form action="#">
                                    <div className="col-sm-3">
                                        <label>Type</label>
                                        <select name="Make">
                                            <option value="Lamborghini">
                                                Coupé
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Make</label>
                                        <select name="Make">
                                            <option value="Lamborghini">
                                                Lamborghini
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <label>Model</label>
                                        <select name="Model">
                                            <option value="Hurrican">
                                                Hurrican
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="submit" className="button-primary" value="SEARCH NOW" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 content-row-1">
                    <span className="intro-bottom">9 Brands 120+ Cars At Your Desposal</span>
                    <h2>Lux <b>Rentals</b></h2>
                    <h3>LR</h3>
                </div>
            </div>
            <div className="row">
                <a href="#Link">
                    <div className="col-sm-4">
                        <div className="small-widget">
                            <div className="icon">
                                <img src="../img/customer-support.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
                <a href="#Link">
                    <div className="col-sm-4">
                        <div className="small-widget">
                            <div className="icon">
                                <img src="../img/calendar.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
                <a href="#Link">
                    <div className="col-sm-4">
                        <div className="small-widget">
                            <div className="icon">
                                <img src="../img/location.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="white-background">
            <div className="container">
                <div className="row about-wrapper">
                    <div className="col-sm-6 col-md-6">
                        <img src="../img/ferrari-model.png" alt="" className="img-responsive" />
                    </div>
                    <div className="col-sm-6 col-md-6 about">
                        <h2>Know more about us!</h2>
                        <h3>What Is Lux<b>Rentals</b>?</h3>
                        <p>We are a rental company that specializes in luxury vehicles. We own all of our vehicles to cut out the middle man to make it even more affordable.</p>
                        <ul>
                            <li><i className="fas fa-check-circle"></i> <span> We have 1000s of clients nation wide.</span></li>
                            <li><i className="fas fa-check-circle"></i> <span> We deal with several fortune 500 companies.</span></li>
                            <li><i className="fas fa-check-circle"></i> <span> We guarantee the lowest possible price!</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home