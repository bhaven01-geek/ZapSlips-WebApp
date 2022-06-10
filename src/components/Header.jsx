import React from 'react'
import './Homepage.css'
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
            <div className="d-flex flex-direction-column flex-direction-md-row flex-wrap flex-wrap-md-nowrap">
                <div id="introduction" className="container-fluid-md  w-md-50 order-md-3 overflow-hidden">
                    <div id="intro-img-holder" className="col-12 row justify-content-center m-0 p-0">
                        {/* <img id="intro-img" className="img-fluid" src="" alt="intro img" /> */}
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
        </>
    )
}

export default Header;
