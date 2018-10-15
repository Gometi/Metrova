import React, { Component } from 'react';
import "../css/hamburgers.css";
import "../css/Hamburger.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showCart } from "../redux/actions";

const mapStateToProps = state => {
    return { cart: state.cart }
};
const mapDispatchToProps = dispatch => {
    return {
        showCart: value => dispatch(showCart(value))
    };
};

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = { isActive: false }
        this.openNavigation = this.openNavigation.bind(this);
        this.displayCart = this.displayCart.bind(this);
    }

    openNavigation() {
        this.setState({ isActive: !this.state.isActive })
    }


    displayCart() {
        this.props.showCart(true);
    }


    render() {
        return (
            <div>
                <div className="navigation1">
                    <div>
                    <span className="title1 float-right">Metrova</span>
                    <button className={this.state.isActive ? "hamburger  hamburger--spin is-active" : "hamburger hamburger--spin"} onClick={this.openNavigation} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    </div>
                    <ul className="nav-links" style={this.state.isActive ? { transform: 'none' } : {}}>
                        <div className="home1"><Link to="/" >Home</Link></div>
                        <hr/>
                        <li className=" ">Analog
                    <div className="brand-name"><Link to="/brand/jaeger-alpha-analog" className=" ">Jaeger Alpha</Link></div>
                            <div className="brand-name"><Link to="/brand/mille-deluxe-analog" className=" ">Mille Deluxe</Link></div>
                        </li>
                        <hr/>
                        <li className="digital " >Digital
                    <div className="brand-name"><Link to="/brand/jaeger-alpha-digital" className=" ">Jaeger Alpha</Link></div>
                            <div className="brand-name"><Link to="/brand/mille-deluxe-digital" className=" ">Mille Deluxe</Link></div>
                        </li>
                        <hr/>
                        <li className="about1" ><Link to="/about">About</Link></li>
                        <hr/>
                        <li className="contact1"><Link to="/contact">Contact</Link></li>
                        <hr/>
                        <li className="cart-icon " onClick={this.displayCart}><img src={require('../images/shopping-cart-icon.png')} style={{ width: 40, height: 40 }} alt="cart-icon" />Cart <span className={this.props.cart.items.length > 0 ? "item-count" : ""}>{this.props.cart.items.length > 0 ? this.props.cart.items.length : ""}</span></li>

                    </ul>
                </div>
            </div>
        )
    }
}

const Hamburger = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Hamburger;