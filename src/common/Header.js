import React, { Component } from 'react';
import './Header.css';
import logo from '../assets/img/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header>
                    <div className="container">
                        <div className="Header-top">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 logo-container">
                                    <img src={logo} alt="Milijonas Roziu" />
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/delivery.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Delivery</h6>
                                        <p>Completely free within the city</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/lotus.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Ideal Gift</h6>
                                        <p>Bouquets and gifts</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 Media">
                                    <div>
                                        <img src={require('../assets/img/operator.png')} alt="" />
                                    </div>
                                    <div className="Media-text">
                                        <h6>Order by phone</h6>
                                        <p>+994(50)680 08 00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="Header-bottom">
                        <div className="left-nav">
                            <div className="container">
                                <ul>
                                    <li><a href="#">Main page</a></li>
                                    <li><a href="#">Catalog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Gift Wrapping</a></li>
                                    <li><a href="#" className="dropdown-toggle">Catalog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-nav">
                            <div className="container">
                                <div className="Language">
                                    <a href="#">En</a>
                                    <ul className="Dropdown-language">
                                        <li><a href="#">Az</a></li>
                                        <li><a href="#">Ru</a></li>
                                    </ul>
                                </div>
                                <div className="Search">
                                    <img src={require('../assets/img/search.png')} alt=""/>
                                </div>
                                <div className="User">
                                    <img src={require('../assets/img/user.png')} alt=""/>
                                </div>
                                <div className="Basket">
                                    <img src={require('../assets/img/bag.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;