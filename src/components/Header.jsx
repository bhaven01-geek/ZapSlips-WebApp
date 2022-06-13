import React from 'react'
import './Homepage.css'
import SlipLayerImg from '../Assets/tempatesoverlays.png';
import LadyImg from '../Assets/ladylaptop.png';
import Vector1Img from '../Assets/layout.svg';
import Vector2Img from '../Assets/layout2.svg';
const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                    <a className="navbar-brand" href="#">
                        <h1>ZapSlips</h1>
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5 pl-lg-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <ul id="request-head" className="navbar-nav mr-0 mt-2 mt-lg-0">
                            <li className="nav-item d-none d-md-block">
                                <button id="login-btn" type="button" className="btn btn-lg text-white font-weight-bold ">Login</button>
                            </li>

                            <li className="nav-item d-none d-md-block">
                                <button id="try-free-btn" type="button" className="btn btn-lg text-black  font-weight-bold ">Try For Free</button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
            {/* <!-- Header Ends --> */}
            {/* <!-- Intro Starts --> */}
            <div id="intro" className="d-flex flex-direction-column flex-direction-md-row flex-wrap flex-wrap-md-nowrap">
                <div className="container-fluid-md  w-md-50 order-md-3 overflow-hidden">
                    <div id="intro-img-holder" className="col-12 row justify-content-center m-0 p-0">
                        <img id="intro-img" className="img-fluid" src={SlipLayerImg} alt="intro img" />
                       
                    </div>

                </div>
                <div className="container-md w-md-50 d-md-flex justify-content-center align-items-center flex-column">
                    <div className="col-md-10 offset-md-1 col-xl-10 offset-xl-0 double-gutter-left-padding ">
                        <h2 id="business-tagline" className="text-center text-md-left">Reward your Employees in Just <span className="business-tag" >one click</span></h2>
                        <p className="text-center  text-md-left color-grayish-blue">The world has changed with digitization and automation.
                            And so are your HR working strategies.Redefine your payroll system that automates and helps you save time.
                            Manage leave and salary instantly.</p>
                        <div class="box-container">
                            <button id="try-slip-btn" type="button" class="btn btn-lg rounded-pill">Try ZapSlips</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Features --> */}
            <div id="choose-easybank" class="d-flex container-md mt-5 pt-5 mt-md-custom-easybank flex-direction-column flex-direction-md-row flex-wrap flex-wrap-md-nowrap">

                <div id="cards" class="d-sm-flex justify-content-sm-center align-items-sm-start col-md-10 offset-md-1 flex-sm-wrap">
                    <h2 class="text-center text-md-left w-100 gutter-md-left-padding">Easily Customize Your Payroll</h2>
                    {/* <p class="text-center text-md-left  w-100 gutter-md-left-padding">Overcome the complexities and risks associated with sourcing, managing with and delivering payroll services with standardisation and accuracy.</p> */}
                    <div class="row" id="feature-cards">
                        <div id="Card-Feat-1" class="card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                            <img src={Vector1Img} alt="Accurate and Simple" class="img-fluid" />
                            <h4>Accurate and Simple</h4>
                            <p> Overcome the complexities and risks associated with sourcing,
                                managing with and delivering payroll services with standardisation and accuracy</p>
                        </div>
                        <div id="Card-Feat-2" class="card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                            <img src={Vector2Img} alt="Best Customisable payroll system" class="img-fluid" />
                            <h4>Best Customisable payroll system</h4>
                            <p>Self configurable and highly customizable software that meets your
                                end-to-end payroll needs.</p>
                        </div>
                    </div>
                    <div class="row" id="feature-cards">
                        <div id="Card-Feat-3" class="card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                            <img src={Vector2Img} alt="Payroll services tailored to match the needs. " class="img-fluid" />
                            <h4>Payroll services tailored to match the needs. </h4>
                            <p>Whatever your number of employees,
                                just reward them in a single click.</p>
                        </div>
                        <div id="Card-Feat-4" class="card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                            <img src={Vector1Img} alt="Simple statutory compliance" class="img-fluid" />
                            <h4>Simple statutory compliance</h4>
                            <p>Keep your company out of trouble with the law. We handle all of your statutory compliance (PF, PT, ESI, LWF, and IT)
                                and make tax reporting simple with tax reports. </p>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Features --> */}

            <div id="intro" className="d-flex flex-direction-column flex-direction-md-row flex-wrap flex-wrap-md-nowrap">
                <section class="section">

                    <div class="section-container">
                        <div class="text-container">
                            <h2 class="text-center text-md-left w-100 gutter-md">Explore ZapSlips</h2>
                            <p>
                                Spend less time on managing payroll for your employees and more time on building your company with ZapSlip flexible features.
                            </p>
                            <div id="explore-cards" class="d-sm-flex justify-content-sm-start align-items-sm-start row-md-5  flex-sm-wrap">

                                <div className='explore-card-1' class="explore-card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                                    <h4>Smart Collaboration</h4>
                                </div>

                                <div className='explore-card-1' class="explore-card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                                    <h4>Effortless Processing</h4>
                                </div>
                                <div className='explore-card-1' class="explore-card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                                    <h4>Automated gratuity settlement</h4>
                                </div>
                                <div className='explore-card-1' class="explore-card col-sm-6 col-lg-3 row justify-content-center align-items-center  flex-direction-column">
                                    <h4>Faster employee on-boarding</h4>
                                </div>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src={LadyImg}
                                alt="lady with laptop" />
                        </div>
                    </div>
                </section>
            </div>


            {/* footer */}
            <div id="" className="">
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <div class="widget1">
                                    <div class="logo">
                                        <h1>ZAPSLIPS</h1>
                                    </div>
                                    <p></p>
                                    <ul class="company-footer-contact-list">
                                        <li>
                                            {/* <i class="fa fa-phone">  </i>   */}
                                            +1 (7635) 547-12-97</li>
                                        <li>
                                            {/* <i class="fa fa-clock"></i> */}
                                            Info@zapone.io</li>
                                    </ul>
                                    <div class="socialLinks">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-twitter "></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-lg-2">
                                <div class="widget3">
                                    <h5> Quick Links</h5>
                                    <ul> <li><a href="#">
                                        Product Demo</a>
                                    </li>
                                        <li><a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Templates
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-2">
                                <div class="widget4">
                                    <h5>
                                        Other Links
                                    </h5>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Terms Of Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Legal Policies
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="widget2">
                                    <h5>
                                        Subscribe to Our Emails.
                                    </h5>
                                    <div class="footer-newsletter">
                                        {/* <p>Sign Up to Our Newsletter to Get Latest Updates & Services</p> */}
                                        <form class="news-letter-form">
                                            <input type="email" name="news-email" id="news-email" placeholder="Your email address" />
                                            <input type="submit" value="Send" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="copyRightArea">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <p>&copy; Copyright 2020-2022 ZapOne Solutions Private Limited</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )

}

export default Header;
