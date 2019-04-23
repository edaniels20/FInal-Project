import React from 'react'

function Home() {
    return (
        <>
        <div class="hero-main">
            <div class="slider-main">
                <div class="hero">
                    <img src="../img/hero03.jpg" alt=""/>
                </div>
                <div class="hero">
                    <img src="../img/hero-2.jpg" alt=""/>
                </div>
            </div>
            <div class="search-menu-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="search-top">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                                <h2>Search For <b>Best Cars</b></h2>
                            </div>
                            <div class="search-form">
                                <form action="#">
                                    <div class="col-sm-3">
                                        <label>Type</label>
                                        <select name="Make">
                                            <option value="Lamborghini">
                                                Coupé
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <label>Make</label>
                                        <select name="Make">
                                            <option value="Lamborghini">
                                                Lamborghini
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <label>Model</label>
                                        <select name="Model">
                                            <option value="Hurrican">
                                                Hurrican
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-sm-3">
                                        <input type="submit" class="button-primary" value="SEARCH NOW" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 content-row-1">
                    <span class="intro-bottom">9 Brands 120+ Cars At Your Desposal</span>
                    <h2>Lux <b>Rentals</b></h2>
                    <h3>LR</h3>
                </div>
            </div>
            <div class="row">
                <a href="#Link">
                    <div class="col-sm-4">
                        <div class="small-widget">
                            <div class="icon">
                                <img src="../img/customer-support.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
                <a href="#Link">
                    <div class="col-sm-4">
                        <div class="small-widget">
                            <div class="icon">
                                <img src="../img/calendar.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
                <a href="#Link">
                    <div class="col-sm-4">
                        <div class="small-widget">
                            <div class="icon">
                                <img src="../img/location.png" alt="" />
                            </div>
                            <h3>24/7 Customer Support Anywhere</h3>
                            <span>Call us any time for inquiries</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="white-background">
            <div class="container">
                <div class="row about-wrapper">
                    <div class="col-sm-6 col-md-6">
                        <img src="../img/ferrari-model.png" alt="" class="img-responsive" />
                    </div>
                    <div class="col-sm-6 col-md-6 about">
                        <h2>Know more about us!</h2>
                        <h3>What Is Lux<b>Rentals</b>?</h3>
                        <p>We are a rental company that specializes in luxury vehicles. We own all of our vehicles to cut out the middle man to make it even more affordable.</p>
                        <ul>
                            <li><i class="fas fa-check-circle"></i> <span> We have 1000s of clients nation wide.</span></li>
                            <li><i class="fas fa-check-circle"></i> <span> We deal with several fortune 500 companies.</span></li>
                            <li><i class="fas fa-check-circle"></i> <span> We guarantee the lowest possible price!</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home