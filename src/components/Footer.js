import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 logo-footer">
                            <h2>Lux <b>Rental</b></h2>
                            <ul>
                                <li><a href="#Link">Home</a></li>
                                <li><a href="#Link">About</a></li>
                                <li><a href="#Link">Products</a></li>
                                <li><a href="#Link">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <div className="contact">
                                <h2>Contact</h2>
                                <p>601-555-5555</p>
                                <p>support@luxrental.com</p>
                                <label>Subscribe to our news letter</label>
                                <form className="news-letter-form">
                                    <input type="text" placeholder="Email" />
                                    <a href="#Link"><i className="fas fa-envelope search-form-button"></i></a>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-3 social">
                            <h2>Social</h2>
                            <ul>
                                <li><a href="#Link"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="#Link"><i className="fab fa-twitter-square"></i></a></li>
                                <li><a href="#Link"><i className="fab fa-linkedin"></i> </a></li>
                            </ul>
                            <img className="img-responsive" src="./img/map.png" alt=""/>
                        </div>
                        <div className="col-sm-3 testimonial">
                            <h2>Testimonial</h2>
                            <ul>
                                <li>
                                    <img src="../img/profile.png" alt="" className="img-responsive" width="50px" />
                                    <div className="speech-bubble">
                                        <p>This product changed my life</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/profile.png" alt="" className="img-responsive" width="50px" />
                                    <div className="speech-bubble">
                                        <p>This product changed my life</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/profile.png" alt="" className="img-responsive" width="50px" />
                                    <div className="speech-bubble">
                                        <p>This product changed my life</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="../img/profile.png" alt="" className="img-responsive" width="50px" />
                                    <div className="speech-bubble">
                                        <p>This product changed my life</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer